import { ArrowUpRight, BookOpen } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { latestEntry, resources } from "./hubData";

const NewTabHint = () => <span className="sr-only">(opens in a new tab)</span>;

export const BoatMark = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 22 30" aria-hidden="true" focusable="false">
    <path d="M3 2h4l1 18-3 8-3-8zM15 2h4l1 18-3 8-3-8z" fill="currentColor" />
    <rect x="6" y="8" width="10" height="8" rx="1.5" fill="currentColor" />
  </svg>
);

export const ReportLink = ({ report }) => (
  <a className="hub-link" href={report.url} target="_blank" rel="noopener noreferrer">
    <span className="hub-link-text">{report.label}</span>
    <ArrowUpRight className="hub-link-arrow" size={16} aria-hidden="true" />
    <NewTabHint />
  </a>
);

export const EventBlock = ({ title, when, place, detail, awards = [] }) => {
  const meta = [when, place].filter(Boolean).join(" · ");
  return (
    <article className="hub-event">
      <h4 className="hub-event-title">{title}</h4>
      {meta && <p className="hub-event-meta">{meta}</p>}
      <p className="hub-event-detail">{detail}</p>
      {awards.length > 0 && (
        <ul className="hub-awards">
          {awards.map((award) => (
            <li key={award} className="hub-award">{award}</li>
          ))}
        </ul>
      )}
    </article>
  );
};

export const HubHeader = () => (
  <header className="hub-header">
    <div data-reveal>
      <p className="hub-eyebrow">Events &amp; technical documentation</p>
      <h2 className="hub-title">The course so far.</h2>
    </div>
    <div data-reveal>
      <ReportLink report={latestEntry.report} />
    </div>
  </header>
);

export const ResourceLinks = () => (
  <div className="hub-resources">
    <h3 className="hub-subtitle" data-reveal>Documentation &amp; source code</h3>
    <ul role="list" className="hub-res-grid">
      {resources.map(({ title, description, label, url, kind }) => (
        <li key={url} data-reveal>
          <a className="hub-res" href={url} target="_blank" rel="noopener noreferrer">
            <span className="hub-res-icon" aria-hidden="true">
              {kind === "code" ? <FontAwesomeIcon icon={faGithub} /> : <BookOpen size={18} />}
            </span>
            <span className="hub-res-title">{title}</span>
            <span className="hub-res-desc">{description}</span>
            <span className="hub-res-cta">
              {label}
              <ArrowUpRight className="hub-link-arrow" size={16} aria-hidden="true" />
              <NewTabHint />
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);
