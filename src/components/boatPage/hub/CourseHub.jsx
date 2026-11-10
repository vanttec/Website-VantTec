import { useRef } from "react";
import { BoatMark, EventBlock, ReportLink } from "./HubParts";
import { timeline } from "./hubData";
import { clamp, useScrollFrame } from "./useHubMotion";

// Direction A: the boat sails a wake line through one buoy gate per year.

const WAVE_AMPLITUDE = 5;
const WAVE_LENGTH = 120; // matches the height of the wave tile in hub.css
const GATE_OFFSET = 20; // vertical centre of each year heading
const ANCHOR = 0.62; // the boat sits at 62% of the viewport height
const EASE_MS = 85; // lower feels tighter, higher feels floatier
const TAU = Math.PI * 2;

const waveX = (y) => WAVE_AMPLITUDE * Math.sin((TAU * y) / WAVE_LENGTH);
const waveYaw = (y) =>
  -Math.atan(((WAVE_AMPLITUDE * TAU) / WAVE_LENGTH) * Math.cos((TAU * y) / WAVE_LENGTH)) * (180 / Math.PI);

const digitOffset = (digit) => `translate3d(0, ${digit * -10}%, 0)`;
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const pad = (n) => String(n).padStart(2, "0");

const DigitColumn = ({ columnRef, digit }) => (
  <span className="odo-window">
    <span ref={columnRef} className="odo-column" style={{ transform: digitOffset(digit) }}>
      {DIGITS.map((d) => <span key={d} className="odo-digit">{d}</span>)}
    </span>
  </span>
);

const CourseHub = () => {
  const listRef = useRef(null);
  const railRef = useRef(null);
  const coverRef = useRef(null);
  const boatRef = useRef(null);
  const tensRef = useRef(null);
  const onesRef = useRef(null);
  const vehicleRef = useRef(null);
  const countRef = useRef(null);
  const stopRefs = useRef([]);
  const state = useRef({ top: 0, vh: 0, gates: [], end: 0, position: null, active: -1 });

  // React renders the list once. Scroll updates go straight to the DOM, and
  // only when the current year actually changes, so React never re-renders.
  const setActive = (index) => {
    const s = state.current;
    if (index === s.active) return;
    s.active = index;

    stopRefs.current.forEach((el, i) => {
      el.dataset.state = i < index ? "passed" : i === index ? "current" : "ahead";
    });

    const { year, vehicle } = timeline[Math.max(index, 0)];
    tensRef.current.style.transform = digitOffset(Math.floor(year / 10) % 10);
    onesRef.current.style.transform = digitOffset(year % 10);
    countRef.current.textContent = `${pad(Math.max(index, 0) + 1)} / ${pad(timeline.length)}`;

    if (vehicleRef.current.textContent !== vehicle) {
      vehicleRef.current.textContent = vehicle;
      vehicleRef.current.animate(
        [{ opacity: 0, transform: "translateY(0.4em)" }, { opacity: 1, transform: "none" }],
        { duration: 320, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
      );
    }
  };

  useScrollFrame(listRef, {
    measure(top, vh) {
      const s = state.current;
      s.top = top;
      s.vh = vh;
      s.gates = stopRefs.current.map((el) => el.offsetTop + GATE_OFFSET);
      s.end = s.gates[s.gates.length - 1];
      railRef.current.style.height = `${s.end}px`;
      stopRefs.current.forEach((el, i) => {
        el.style.setProperty("--gate-x", `${waveX(s.gates[i]).toFixed(2)}px`);
      });
    },
    frame(scrollY, dt) {
      const s = state.current;
      const target = clamp(scrollY + s.vh * ANCHOR - s.top, 0, s.end);
      if (s.position === null) s.position = target;

      // Exponential smoothing: feels identical at 60Hz and 120Hz.
      s.position += (target - s.position) * (1 - Math.exp(-dt / EASE_MS));
      if (Math.abs(target - s.position) < 0.25) s.position = target;
      const y = s.position;

      // The bright line never changes. An opaque cover slides off it instead,
      // which reveals a curve with a single transform and no repainting.
      coverRef.current.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      boatRef.current.style.transform =
        `translate3d(${waveX(y).toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${waveYaw(y).toFixed(2)}deg)`;

      let index = -1;
      while (index + 1 < s.gates.length && s.gates[index + 1] <= y + 1) index += 1;
      setActive(index);

      return s.position !== target;
    },
  });

  const first = timeline[0];

  return (
    <div className="course">
      <aside className="course-aside" aria-hidden="true">
        <div className="course-instrument">
          <p className="course-label">Passing gate</p>
          <p className="odo">
            <span className="odo-digit odo-static">2</span>
            <span className="odo-digit odo-static">0</span>
            <DigitColumn columnRef={tensRef} digit={Math.floor(first.year / 10) % 10} />
            <DigitColumn columnRef={onesRef} digit={first.year % 10} />
          </p>
          <p ref={vehicleRef} className="course-vehicle">{first.vehicle}</p>
          <p ref={countRef} className="course-count">{`01 / ${pad(timeline.length)}`}</p>
        </div>
      </aside>

      <ol ref={listRef} role="list" className="course-list">
        <li className="course-rail-holder" aria-hidden="true">
          <div ref={railRef} className="course-rail">
            <div ref={coverRef} className="course-rail-cover" />
          </div>
          <div ref={boatRef} className="course-boat">
            <span className="course-boat-halo" />
            <BoatMark className="course-boat-mark" />
          </div>
        </li>

        {timeline.map(({ year, vehicle, report, events }, i) => (
          <li
            key={year}
            ref={(el) => { stopRefs.current[i] = el; }}
            className="course-stop"
            data-state="ahead"
          >
            <span className="course-gate" aria-hidden="true">
              <i className="course-buoy course-buoy-port" />
              <i className="course-buoy course-buoy-star" />
            </span>
            <div data-reveal>
              <h3 className="course-year">
                {year}
                <span className="course-year-vehicle">{vehicle}</span>
              </h3>
              {events.map((event) => <EventBlock key={event.title} {...event} />)}
              <ReportLink report={report} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CourseHub;
