import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import CourseHub from "./hub/CourseHub";
import LogbookHub from "./hub/LogbookHub";
import FleetHub from "./hub/FleetHub";
import { HubHeader, ResourceLinks } from "./hub/HubParts";
import { useReveal } from "./hub/useHubMotion";
import "./hub/hub.css";

const DESIGNS = {
  course: { label: "A · Course", Component: CourseHub },
  logbook: { label: "B · Logbook", Component: LogbookHub },
  fleet: { label: "C · Fleet", Component: FleetHub },
};
const DEFAULT_DESIGN = "course";

const DesignPicker = ({ current, onPick }) => (
  <div className="hub-picker">
    <div className="hub-picker-inner" role="group" aria-label="Preview a design direction">
      {Object.entries(DESIGNS).map(([key, { label }]) => (
        <button key={key} type="button" aria-pressed={key === current} onClick={() => onPick(key)}>
          {label}
        </button>
      ))}
    </div>
  </div>
);

// Remounting on design change restarts the reveal for the new layout.
const HubContent = ({ Design }) => {
  const rootRef = useRef(null);
  useReveal(rootRef);
  return (
    <div ref={rootRef} className="hub-wrap">
      <HubHeader />
      <Design />
      <ResourceLinks />
    </div>
  );
};

const DocumentsUSV = () => {
  const [params, setParams] = useSearchParams();
  const requested = import.meta.env.DEV ? params.get("hub") : null;
  const design = DESIGNS[requested] ? requested : DEFAULT_DESIGN;
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    document.getElementById("documents")?.scrollIntoView();
  }, [design]);

  return (
    <section id="documents" className="hub">
      <div className="hub-edge" aria-hidden="true" />
      <HubContent key={design} Design={DESIGNS[design].Component} />
      {import.meta.env.DEV && (
        <DesignPicker
          current={design}
          onPick={(key) => setParams({ hub: key }, { replace: true, preventScrollReset: true })}
        />
      )}
    </section>
  );
};

export default DocumentsUSV;
