import alberto from "../../assets/UUV/members_uuv/alberto.png";
import antonio from "../../assets/UUV/members_uuv/antonio.png";
import iian from "../../assets/UUV/members_uuv/ian.png";
import mariana from "../../assets/UUV/members_uuv/mariana.png";
import montemayor from "../../assets/UUV/members_uuv/montemayor.png";
import nahomi from "../../assets/UUV/members_uuv/nahomi.png";
import pao from "../../assets/UUV/members_uuv/pao.png";
import sara from "../../assets/UUV/members_uuv/sara.png";
import veronica from "../../assets/UUV/members_uuv/veronica.png";
import yeina from "../../assets/UUV/members_uuv/yeina.png";
import noPerson from "../../assets/icons/noPerson.png";


const rawMembers = [
  {
    name: "Alberto Eugenio Serrano Córdova",
    role: "Project Team Leader",
    linkedin: "https://www.linkedin.com/in/albertoesc04/?locale=en",
  },
  {
    name: "Denia Paola López Monroy",
    role: "Project Team Leader",
    linkedin: "https://www.linkedin.com/in/denia-paola-lopez-monroy-b28",
  },
  {
    name: "Diego Montemayor Lopez",
    role: "Mechanics Team Leader",
    linkedin: "https://www.linkedin.com/in/diegomontemayorlopez/",
  },
  {
    name: "Antonio González Rivera",
    role: "Software Team Leader",
    linkedin: "https://www.linkedin.com/in/antonio-gonzalez-rivera-835b7223b/",
  },
  {
    name: "Angélica Nahomi Velazquez",
    role: "Electronics Team Leader",
    linkedin: "https://www.linkedin.com/in/angvelazquez/?locale=en",
  },
  {
    name: "Sara Sofía Muñiz García",
    role: "Software Team Member",
    linkedin: "https://www.linkedin.com/in/sara-sof%C3%ADa-mu%C3%B1iz-garc%C3%ADa/",
  },
  {
    name: "Mariana Díaz Sánchez",
    role: "Software Team Member",
    linkedin: "https://www.linkedin.com/in/mariana-d%C3%ADaz-sanchez-960642364/",
  },
  {
    name: "Verónica Paola Zapata Sánchez",
    role: "Software Team Member",
    linkedin: "https://www.linkedin.com/in/ver%C3%B3nica-zapata-5062ab389/",
  },
  {
    name: "Ilan David Narváez Martínez",
    role: "Software Team Member",
    linkedin: "https://www.linkedin.com/in/ilan-narv%C3%A1ez-mart%C3%ADnez-993014364/",
  },
  {
    name: "Carlos David Padrón Hernández",
    role: "Software Team Member",
    linkedin: "https://www.linkedin.com/in/carlos-david-padr%C3%B3n-hern%C3%A1ndez-8823b6387/",
  },
  {
    name: "Yeina Izel González Prado",
    role: "Software Team Member",
    linkedin: "https://www.linkedin.com/in/yeina-izel-gonzalez-prado-745617314/",
  },
];

// Explicit name → image map — no heuristics, no accidental substring matches.
// Bug that was here: "Verónica Paola" matched key "pao" before "veronica" was reached.
// "Ilan" never matched key "iian". Explicit map fixes both.
const imgByName = {
  "Alberto Eugenio Serrano Córdova":  alberto,
  "Denia Paola López Monroy":         pao,
  "Diego Montemayor Lopez":           montemayor,
  "Antonio González Rivera":          antonio,
  "Angélica Nahomi Velazquez":        nahomi,
  "Sara Sofía Muñiz García":          sara,
  "Mariana Díaz Sánchez":             mariana,
  "Verónica Paola Zapata Sánchez":    veronica,
  "Ilan David Narváez Martínez":      iian,
  "Carlos David Padrón Hernández":    null,
  "Carlos David Padrón Hernández":    noPerson,
  "Yeina Izel González Prado":        yeina,
};

const members = rawMembers.map((m) => ({ ...m, img: imgByName[m.name] ?? null }));

// Row distribution for desktop layout — 2 leaders, 3 leaders, 3 members, 3 members
const row1 = members.slice(0, 2);
const row2 = members.slice(2, 5);
const row3 = members.slice(5, 8);
const row4 = members.slice(8, 11);

const MemberCard = ({ name, role, linkedin, img }) => (
  <div className="flex items-end">

    {/* Vertical text block — desktop only */}
    <div
      className="hidden md:flex flex-col justify-end pb-10 mr-1 shrink-0"
      style={{ writingMode: "vertical-lr" }}
    >
      <span className="text-white font-quicksand font-bold text-sm whitespace-nowrap">
        {name}
      </span>
      <span className="text-[#49C1D2]/70 font-quicksand text-xs whitespace-nowrap mt-1">
        {role}
      </span>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F0900D] font-quicksand text-xs mt-2 hover:text-[#EFA232] transition-colors duration-200 whitespace-nowrap"
        aria-label={`LinkedIn profile of ${name}`}
      >
        LinkedIn
      </a>
    </div>

    {/* Photo */}
    <div className="relative overflow-hidden w-88 h-52 sm:w-88 sm:h-60 md:w-60 md:h-64 lg:w-72 lg:h-72 shrink-0">
      {img ? (
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-top grayscale"
        />
      ) : (
        <div className="w-full h-full bg-[#0491AD]/20 flex items-center justify-center">
          <span className="font-quicksand text-[#49C1D2]/30 text-xs uppercase tracking-widest text-center px-4">
            Photo<br />coming soon
          </span>
        </div>
        // TODO: replace null img with imported photo for {name}
      )}
    </div>

  </div>
);

const MobileCard = ({ name, role, linkedin, img }) => (
  <div className="flex flex-col items-center">

    {/* Photo */}
    <div className="relative overflow-hidden w-36 h-48 sm:w-44 sm:h-56 rounded-sm">
      {img ? (
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-top grayscale"
        />
      ) : (
        <div className="w-full h-full bg-[#0491AD]/20 flex items-center justify-center rounded-sm">
          <span className="font-quicksand text-[#49C1D2]/30 text-[10px] uppercase tracking-widest text-center px-2">
            Photo<br />coming soon
          </span>
        </div>
        // TODO: replace null img with imported photo for {name}
      )}
    </div>

    {/* Text below photo */}
    <div className="mt-3 text-center px-1">
      <p className="text-white font-quicksand font-bold text-xs leading-tight">
        {name}
      </p>
      <p className="text-[#49C1D2]/70 font-quicksand text-[10px] mt-0.5">
        {role}
      </p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[#F0900D] font-quicksand text-[10px] mt-1 hover:text-[#EFA232] transition-colors duration-200"
        aria-label={`LinkedIn profile of ${name}`}
      >
        LinkedIn
      </a>
    </div>

  </div>
);

const DiagonalBand = ({ color, opacity }) => (
  <div
    className="absolute -left-32 -right-32 top-0 bottom-0"
    style={{
      backgroundColor: color,
      opacity,
      transform: "skewY(-3deg)",
    }}
  />
);

const BandSeparator = ({ position }) => (
  <div
    className={`absolute -left-32 -right-32 z-20 h-7 ${
      position === "top" ? "-top-3" : "-bottom-3"
    }`}
    style={{
      backgroundColor: "#041820",
      transform: "skewY(-3deg)",
    }}
  />
);

// ── Main component ─────────────────────────────────────────────────

const TeamUUV = () => (
  <section className="bg-[#1a1a1a] w-full py-16 md:py-24 overflow-hidden">

    {/* === Desktop Layout (md+) === */}
    <div className="hidden md:block px-8 md:-px-16">

      {/* Row 1: Title block + 2 members */}
      <div className="relative z-30 px-4">
        <DiagonalBand color="#0491AD" opacity={0.7} />
        <BandSeparator position="top" />
        <div
          className="relative z-10 flex items-end justify-start gap-8 md:gap-10"
          style={{ transform: "skewY(-3deg)" }}
        >
          {/* Title block — acts as the "first column" so members align with rows below */}
          <div className="shrink-0 py-8 md:py-14 md:px-2 max-w-[44rem]">
            <h2 className="font-quicksand text-white text-4xl md:text-3xl lg:text-6xl font-bold leading-tight">
              The minds behind the submarine.
            </h2>
            <h2 className="font-quicksand text-[#49C1D2] text-4xl lg:text-6xl font-bold mt-2">
              2026.
            </h2>
          </div>
          {row1.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
        <BandSeparator position="bottom" />
      </div>

      {/* Row 2: 3 leaders */}
      <div className="relative z-20 px-4">
        <DiagonalBand color="#062a35" opacity={0.9} />
        <BandSeparator position="top" />
        <div
          className="relative z-10 flex items-end justify-center gap-8 md:gap-10"
          style={{ transform: "skewY(-3deg)" }}
        >
          {row2.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
        <BandSeparator position="bottom" />
      </div>

      {/* Row 3: 3 members */}
      <div className="relative z-10 px-4">
        <DiagonalBand color="#0491AD" opacity={0.5} />
        <BandSeparator position="top" />
        <div
          className="relative z-10 flex items-end justify-center gap-8 md:gap-10"
          style={{ transform: "skewY(-3deg)" }}
        >
          {row3.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
        <BandSeparator position="bottom" />
      </div>

      {/* Row 4: 3 members */}
      <div className="relative z-10 px-4">
        <DiagonalBand color="#062a35" opacity={0.7} />
        <BandSeparator position="top" />
        <div
          className="relative z-10 flex items-end justify-center gap-8 md:gap-10"
          style={{ transform: "skewY(-3deg)" }}
        >
          {row4.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
        <BandSeparator position="bottom" />
      </div>

    </div>

    {/* === Mobile Layout (< md) === */}
    <div className="md:hidden px-6">
      <div className="mb-10">
        <h2 className="font-quicksand text-white text-3xl font-bold leading-tight">
          The minds behind the submarine.
        </h2>
        <h2 className="font-quicksand text-[#49C1D2] text-3xl font-bold mt-1">
          2026.
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {members.map((m) => (
          <MobileCard key={m.name} {...m} />
        ))}
      </div>
    </div>

  </section>
);

export default TeamUUV;
