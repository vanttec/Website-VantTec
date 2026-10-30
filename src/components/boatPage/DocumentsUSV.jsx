import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const reports = [
  {
    year: 2026,
    vehicle: "VTec S-IV",
    label: "Download 2026 report (PDF)",
    url: "https://robonation.org/app/uploads/sites/3/2026/02/TDR_VantTec_2026.pdf",
  },
  {
    year: 2025,
    vehicle: "VTec S-IV",
    label: "Download 2025 report (PDF)",
    url: "https://robonation.org/app/uploads/sites/3/2025/02/TDR_VantTec_RB2025.pdf",
  },
  {
    year: 2024,
    vehicle: "VTec S-III",
    label: "Download 2024 report (PDF)",
    url: "https://robonation.org/app/uploads/sites/3/2023/12/TDR_VantTec_RB2024.pdf",
  },
  {
    year: 2022,
    vehicle: "VTec S-III",
    label: "Download 2022 report (PDF)",
    url: "https://robonation.org/app/uploads/sites/3/2022/05/RB_2022_Vanttec_TecDeMonterrey_TDR.pdf",
  },
  {
    year: 2021,
    vehicle: "VTec S-III",
    label: "Download 2021 report (PDF)",
    url: "https://robonation.org/app/uploads/sites/3/2021/05/RoboBoat_2021_Monterrey-Inst-of-Tech-VantTec_TDR-min.pdf",
  },
  {
    year: 2020,
    vehicle: "VTec S-III",
    label: "Download 2020 report (PDF)",
    url: "https://robonation.org/app/uploads/sites/3/2020/06/RB_2020_TecMonterrey_TDR.pdf",
  },
  {
    year: 2019,
    vehicle: "",
    label: "Download 2019 report (PDF)",
    url: "https://robonation.org/app/uploads/sites/3/2019/10/VantTec_RB19_TDR.pdf",
  },
  {
    year: 2018,
    vehicle: "MTM Trinity",
    label: "Download 2018 report (PDF)",
    url: "https://robonation.org/app/uploads/sites/3/2019/10/TecMonterrey_RB18_TDR.pdf",
  },
  {
    year: 2017,
    vehicle: "",
    label: "Download 2017 paper (PDF)",
    url: "https://robonation.org/app/uploads/sites/3/2019/10/TecMonterrey_RB17_Paper.pdf",
  },
];

const resources = [
  {
    title: "USV Documentation",
    description: "Technical documentation for the VantTec USV project.",
    label: "Read the USV documentation",
    url: "https://vanttec-documentation.readthedocs.io/en/latest/usv_documentation.html",
    icon: null,
  },
  {
    title: "USV Software Repository",
    description: "",
    label: "View on GitHub",
    url: "https://github.com/vanttec/vanttec_usv",
    icon: faGithub,
  },
  {
    title: "USV Simulation Repository",
    description: "",
    label: "View on GitHub",
    url: "https://github.com/vanttec/vanttec_usv_gz",
    icon: faGithub,
  },
];

const cardClass =
  "rounded-xl border border-white-100/10 bg-black-100 p-6 text-center md:text-left";

const linkClass =
  "inline-flex items-center gap-2 rounded-full border border-white-100/40 px-4 py-2.5 font-urbanist text-sm xl:text-base font-bold text-white-100 transition-colors duration-300 hover:bg-white-100 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white-100 focus-visible:ring-offset-2 focus-visible:ring-offset-black-100";

const hasText = (value) => typeof value === "string" && value.trim() !== "";

const renderLink = (url, label) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className={linkClass}>
    {label}
    <span aria-hidden="true">&#8599;</span>
    <span className="sr-only">(opens in a new tab)</span>
  </a>
);

const DocumentsUSV = () => (
  <section id="documents" className="relative w-full overflow-x-hidden bg-primary py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-6 md:px-16">
      {/* Heading */}
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <p className="font-quicksand text-secondary text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
          Technical Documentation
        </p>
        <h2 className="font-quicksand text-white-100 text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.1em] uppercase">
          Documents
        </h2>
      </div>

      {/* RoboBoat reports */}
      <h3 className="font-quicksand text-white-100 text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
        RoboBoat Technical Reports
      </h3>
      <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
        {reports.map(({ year, vehicle, label, url }) => (
          <li key={year} className={`${cardClass} flex flex-col items-center md:items-start`}>
            <h4 className="font-quicksand text-white-100 text-3xl md:text-4xl font-bold">{year}</h4>
            <div className="min-h-5 md:min-h-6 mt-1 mb-6">
              {hasText(vehicle) && (
                <p className="font-urbanist text-secondary text-sm md:text-base leading-5 md:leading-6">{vehicle}</p>
              )}
            </div>
            {renderLink(url, label)}
          </li>
        ))}
      </ul>

      {/* Documentation and code */}
      <h3 className="font-quicksand text-white-100 text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
        Documentation &amp; Source Code
      </h3>
      <ul role="list" className="flex flex-col gap-4 md:gap-6">
        {resources.map(({ title, description, label, url, icon }) => (
          <li
            key={url}
            className={`${cardClass} flex flex-col md:flex-row items-center md:justify-between gap-6`}
          >
            <div className="flex flex-col items-center md:items-start">
              <h4 className="flex items-center gap-3 font-quicksand text-white-100 text-lg md:text-xl font-bold">
                {icon && <FontAwesomeIcon icon={icon} aria-hidden="true" />}
                {title}
              </h4>
              {hasText(description) && (
                <p className="font-urbanist text-secondary text-sm md:text-base mt-2">{description}</p>
              )}
            </div>
            <div className="shrink-0">
              {renderLink(url, label)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default DocumentsUSV;
