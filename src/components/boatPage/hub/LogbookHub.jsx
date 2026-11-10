import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BoatMark, EventBlock, ReportLink } from "./HubParts";
import { eras, timeline } from "./hubData";

// Direction B: one instrument panel, one year at a time. The section keeps the
// same height for every year, and takes about one screen instead of many.

const SWIPE_MIN_PX = 44;

const eraOf = (year) => eras.find(({ entries }) => entries.some((e) => e.year === year));

// Fills whatever height a quiet season has left over, without adding any.
const SeasonPhoto = ({ year }) => {
  const { photo, alt } = eraOf(year);
  return (
    <figure className="log-photo">
      <img src={`/boat/hub/${photo}-640.webp`} width="640" height="480" loading="lazy" decoding="async" alt={alt} />
    </figure>
  );
};

const Contours = () => (
  <svg className="log-contours" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M520 60c120-30 250 30 270 130s-70 190-190 200-240-50-250-150 50-155 170-180z" />
      <path d="M535 105c85-22 180 20 195 92s-50 135-135 142-170-35-178-106 34-110 118-128z" />
      <path d="M548 150c52-14 110 12 120 56s-31 83-83 87-104-21-109-65 21-67 72-78z" />
      <path d="M-40 380c70-50 200-60 280-10s90 150 10 190-240 30-300-30-50-110 10-150z" />
      <path d="M-5 420c45-32 128-38 180-6s58 96 6 122-154 19-192-19-32-71 6-97z" />
    </g>
  </svg>
);

const LogbookHub = () => {
  const count = timeline.length;
  const [index, setIndex] = useState(count - 1);
  const tabRefs = useRef([]);
  const touch = useRef(null);

  const select = (next, moveFocus = false) => {
    const bounded = Math.min(count - 1, Math.max(0, next));
    setIndex(bounded);
    if (moveFocus) tabRefs.current[bounded]?.focus();
  };

  const onTabKey = (event) => {
    const moves = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: count - 1 };
    if (!(event.key in moves)) return;
    event.preventDefault();
    select(moves[event.key], true);
  };

  const onTouchStart = ({ touches }) => {
    touch.current = { x: touches[0].clientX, y: touches[0].clientY };
  };
  const onTouchEnd = ({ changedTouches }) => {
    if (!touch.current) return;
    const dx = changedTouches[0].clientX - touch.current.x;
    const dy = changedTouches[0].clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > SWIPE_MIN_PX && Math.abs(dx) > Math.abs(dy) * 1.5) {
      select(index + (dx < 0 ? 1 : -1));
    }
  };

  const positionOf = (i) => {
    if (i === index) return "active";
    return i < index ? "before" : "after";
  };

  return (
    <div className="log" style={{ "--i": index, "--n": count }} data-reveal>
      <div className="log-ruler" role="tablist" aria-label="Season" onKeyDown={onTabKey}>
        <span className="log-track" aria-hidden="true"><span className="log-track-fill" /></span>
        <span className="log-marker" aria-hidden="true"><BoatMark className="log-marker-boat" /></span>
        {timeline.map(({ year }, i) => (
          <button
            key={year}
            ref={(el) => { tabRefs.current[i] = el; }}
            type="button"
            role="tab"
            id={`log-tab-${year}`}
            aria-controls={`log-panel-${year}`}
            aria-selected={i === index}
            aria-label={String(year)}
            tabIndex={i === index ? 0 : -1}
            className="log-tab"
            onClick={() => select(i)}
          >
            <span className="log-tab-short" aria-hidden="true">’{String(year).slice(2)}</span>
            <span className="log-tab-full" aria-hidden="true">{year}</span>
          </button>
        ))}
      </div>

      <div className="log-card" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <Contours />
        {/* All panels share one grid cell, so the tallest one sets the height. */}
        <div className="log-panels">
          {timeline.map(({ year, vehicle, report, events }, i) => (
            <section
              key={year}
              id={`log-panel-${year}`}
              role="tabpanel"
              aria-labelledby={`log-tab-${year}`}
              className="log-panel"
              data-state={positionOf(i)}
            >
              <div className="log-id">
                <h3 className="log-year">{year}</h3>
                <p className="log-vehicle">{vehicle}</p>
              </div>
              <div className="log-body">
                {events.length > 0
                  ? events.map((event) => <EventBlock key={event.title} {...event} />)
                  : <p className="log-empty">This season is documented in the technical report.</p>}
                <div className="log-report"><ReportLink report={report} /></div>
                {events.length === 0 && <SeasonPhoto year={year} />}
              </div>
            </section>
          ))}
        </div>

        <div className="log-controls">
          <span className="log-count" aria-hidden="true">{String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
          <div className="log-arrows">
            <button type="button" className="log-arrow" onClick={() => select(index - 1)} disabled={index === 0} aria-label="Previous season">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" className="log-arrow" onClick={() => select(index + 1)} disabled={index === count - 1} aria-label="Next season">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogbookHub;
