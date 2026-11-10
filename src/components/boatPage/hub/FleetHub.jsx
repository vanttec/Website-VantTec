import { useRef } from "react";
import { EventBlock, ReportLink } from "./HubParts";
import { eras } from "./hubData";
import { clamp, useScrollFrame } from "./useHubMotion";

// Direction C: one sticky card per vehicle generation, each sliding over the last.

const NAV_CLEARANCE = 96; // fixed navbar height plus breathing room
const PEEK = 14; // how much of the previous card stays visible
const VIEWPORT_MARGIN = 16;
const RECEDE_SCALE = 0.05;

const FleetHub = () => {
  const listRef = useRef(null);
  const slotRefs = useRef([]);
  const cardRefs = useRef([]);
  const dimRefs = useRef([]);
  const state = useRef({ vh: 0, items: [], last: [] });

  useScrollFrame(listRef, {
    measure(top, vh) {
      let natural = top;
      state.current.vh = vh;
      state.current.items = slotRefs.current.map((slot, i) => {
        const height = slot.offsetHeight;
        const gap = parseFloat(getComputedStyle(slot).marginBottom) || 0;

        // Taller than the screen? Stick by the bottom edge instead of the top,
        // so the whole card can be read before the next one arrives.
        const stick = Math.min(NAV_CLEARANCE + i * PEEK, vh - height - VIEWPORT_MARGIN);
        slot.style.top = `${stick}px`;
        cardRefs.current[i].style.transformOrigin = stick < 0 ? "50% 100%" : "50% 0%";

        const item = { height, natural, stick };
        natural += height + gap;
        return item;
      });
      state.current.last = [];
    },
    frame(scrollY) {
      const { vh, items, last } = state.current;
      // Back to front, because a card must vanish once the one covering it fades.
      let coverOpacity = 1;
      for (let i = items.length - 2; i >= 0; i -= 1) {
        const item = items[i];
        const next = items[i + 1];
        const travelled = clamp((vh - (next.natural - scrollY)) / (vh - next.stick));

        // A card taller than the next one would poke out below it, so it fades.
        const ownFade = item.height > next.height ? 1 - clamp((travelled - 0.6) / 0.4) : 1;
        const opacity = ownFade * clamp((coverOpacity - 0.85) / 0.15);
        coverOpacity = opacity;

        const key = `${travelled}:${opacity}`;
        if (key !== last[i]) {
          last[i] = key;
          const card = cardRefs.current[i];
          card.style.transform = `scale(${(1 - RECEDE_SCALE * travelled).toFixed(4)})`;
          card.style.opacity = opacity.toFixed(3);
          // Written to the overlay itself: an inherited CSS variable set on the
          // card would restyle every element inside it on every frame.
          dimRefs.current[i].style.opacity = (travelled * 0.55).toFixed(3);
        }
      }
      return false;
    },
  });

  return (
    <ol ref={listRef} role="list" className="fleet">
      {eras.map(({ id, name, span, summary, photo, alt, entries }, i) => (
        <li key={id} ref={(el) => { slotRefs.current[i] = el; }} className="fleet-slot">
          <div ref={(el) => { cardRefs.current[i] = el; }} className={`fleet-card fleet-card-${id}`}>
            <figure className="fleet-photo">
              <img
                src={`/boat/hub/${photo}-1120.webp`}
                srcSet={`/boat/hub/${photo}-640.webp 640w, /boat/hub/${photo}-1120.webp 1120w`}
                sizes="(min-width: 1152px) 480px, (min-width: 1024px) 42vw, 100vw"
                width="1120"
                height="840"
                loading="lazy"
                decoding="async"
                alt={alt}
              />
            </figure>
            <div className="fleet-intro">
              <p className="fleet-span">{span}</p>
              <h3 className="fleet-name">{name}</h3>
              <p className="fleet-summary">{summary}</p>
            </div>
            <div className="fleet-log">
              <ul role="list" className="fleet-years">
                {entries.map(({ year, vehicle, report, events }) => (
                  <li key={year} className="fleet-year">
                    <div className="fleet-year-id">
                      <h4 className="fleet-year-num">{year}</h4>
                      <p className="fleet-year-vehicle">{vehicle}</p>
                    </div>
                    <div className="fleet-year-body">
                      {events.map((event) => <EventBlock key={event.title} {...event} />)}
                      <ReportLink report={report} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <span ref={(el) => { dimRefs.current[i] = el; }} className="fleet-dim" aria-hidden="true" />
          </div>
        </li>
      ))}
    </ol>
  );
};

export default FleetHub;
