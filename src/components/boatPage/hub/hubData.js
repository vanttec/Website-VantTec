// Single source of truth for the USV hub. To log a new event, add an entry to
// that year's `events` array: every design direction renders from this list.
// Event facts are condensed from `accordion_info_boat` in src/constants/index.js.

const base = "https://robonation.org/app/uploads/sites/3";

export const timeline = [
  {
    year: 2017,
    vehicle: "MTM Definity First",
    report: { label: "Download 2017 paper (PDF)", url: `${base}/2019/10/TecMonterrey_RB17_Paper.pdf` },
    events: [
      {
        title: "RoboBoat 2017",
        when: "Jul 20–25",
        place: "Reed Canal Park, Florida",
        detail: "VantTec's first RoboBoat, landing an autonomous drone on the autonomous boat.",
        awards: ["Drone Award · $1,000"],
      },
    ],
  },
  {
    year: 2018,
    vehicle: "MTM Trinity",
    report: { label: "Download 2018 report (PDF)", url: `${base}/2019/10/TecMonterrey_RB18_TDR.pdf` },
    events: [
      {
        title: "RoboBoat 2018",
        when: "Jun 18–24",
        detail: "A new iteration of the vehicle, supported by sponsors including Uber ATG, Google and NVIDIA.",
        awards: ["Engineering Integrity Award · $500"],
      },
    ],
  },
  {
    year: 2019,
    vehicle: "VTec S-III",
    report: { label: "Download 2019 report (PDF)", url: `${base}/2019/10/VantTec_RB19_TDR.pdf` },
    events: [
      {
        title: "RoboBoat 2019",
        when: "Jun 17–23",
        detail: "Competed at RoboNation's annual challenge with VTec S-III.",
        awards: ["5th place · $1,500"],
      },
    ],
  },
  {
    year: 2020,
    vehicle: "VTec S-III",
    report: { label: "Download 2020 report (PDF)", url: `${base}/2020/06/RB_2020_TecMonterrey_TDR.pdf` },
    events: [
      {
        title: "RoboBoat 2020",
        place: "Held online during the COVID-19 pandemic",
        detail: "VantTec took first place competing virtually with its VTec S-III work.",
        awards: ["1st place · $3,000", "Testing on the Horizon · $1,000", "Report, video & website prizes"],
      },
    ],
  },
  {
    year: 2021,
    vehicle: "VTec S-III",
    report: {
      label: "Download 2021 report (PDF)",
      url: `${base}/2021/05/RoboBoat_2021_Monterrey-Inst-of-Tech-VantTec_TDR-min.pdf`,
    },
    events: [
      {
        title: "Rómulo Garza Award 2020",
        when: "Ceremony held in 2021",
        place: "Tec de Monterrey & Xignux",
        detail: "Their highest research recognition, won in the professional students category for six papers on control, 3D vision and obstacle detection.",
        awards: ["Rómulo Garza Award"],
      },
    ],
  },
  {
    year: 2022,
    vehicle: "VTec S-III",
    report: { label: "Download 2022 report (PDF)", url: `${base}/2022/05/RB_2022_Vanttec_TecDeMonterrey_TDR.pdf` },
    events: [],
  },
  {
    year: 2024,
    vehicle: "VTec S-III",
    report: { label: "Download 2024 report (PDF)", url: `${base}/2023/12/TDR_VantTec_RB2024.pdf` },
    events: [
      {
        title: "RoboBoat 2024",
        when: "Feb 5–11",
        place: "Nathan Benderson Park, Sarasota",
        detail: "Reached the finals, and the experience sparked the VTec S-IV project.",
        awards: ["Persistence Award · $250"],
      },
      {
        title: "Xignux Challenge 2024",
        when: "May 7–8",
        detail: "Finalist in a 24-hour challenge with AWAS, an autonomous boat that maps water quality.",
        awards: ["Finalist"],
      },
    ],
  },
  {
    year: 2025,
    vehicle: "VTec S-IV",
    report: { label: "Download 2025 report (PDF)", url: `${base}/2025/02/TDR_VantTec_RB2025.pdf` },
    events: [],
  },
  {
    year: 2026,
    vehicle: "VTec S-IV",
    report: { label: "Download 2026 report (PDF)", url: `${base}/2026/02/TDR_VantTec_2026.pdf` },
    events: [],
  },
];

export const latestEntry = timeline[timeline.length - 1];

const inYears = (from, to) => timeline.filter(({ year }) => year >= from && year <= to);

export const eras = [
  {
    id: "mtm",
    name: "MTM",
    span: "2017 – 2018",
    summary: "The first hulls, and VantTec's first seasons at RoboBoat.",
    photo: "era-mtm",
    alt: "The VantTec team standing around their white boat beside the competition lake in 2018",
    entries: inYears(2017, 2018),
  },
  {
    id: "s3",
    name: "VTec S-III",
    span: "2019 – 2024",
    summary: "The platform behind VantTec's first RoboBoat win, in 2020.",
    photo: "era-s3",
    alt: "The VantTec team holding the Tecnológico de Monterrey and Mexican flags around their boat in 2019",
    entries: inYears(2019, 2024),
  },
  {
    id: "s4",
    name: "VTec S-IV",
    span: "2025 – today",
    summary: "Started after RoboBoat 2024, for future competitions and external applications.",
    photo: "era-s4",
    alt: "The VTec S-IV boat on open water with a city skyline behind it",
    entries: inYears(2025, 2026),
  },
];

export const resources = [
  {
    title: "USV Documentation",
    description: "Technical documentation for the VantTec USV project.",
    label: "Read the USV documentation",
    url: "https://vanttec-documentation.readthedocs.io/en/latest/usv_documentation.html",
    kind: "docs",
  },
  {
    title: "USV Software Repository",
    description: "The software that runs on the boat.",
    label: "View on GitHub",
    url: "https://github.com/vanttec/vanttec_usv",
    kind: "code",
  },
  {
    title: "USV Simulation Repository",
    description: "The boat's simulation environment.",
    label: "View on GitHub",
    url: "https://github.com/vanttec/vanttec_usv_gz",
    kind: "code",
  },
];
