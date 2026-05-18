import {
  soni,
  ignacio,
  denia,
  mj,
  fer,
  pedroUSV,
  miaw,
  caro,
} from "../../assets";

const row1 = [
  {
    name: "David Alejandro Soni Cuevas",
    role: "Project Leader",
    img: soni,
  },
  {
    name: "Ignacio Lobeira Guajardo",
    role: "Software Team Member",
    img: ignacio,
  },
];

const row2 = [
  {
    name: "Denia Paola López Monroy",
    role: "Electronics Team Member",
    img: denia,
  },
  {
    name: "Marcela Josefina Flores Cantú",
    role: "Mechanical Team Leader",
    img: mj,
  },
  {
    name: "Fernando Gutiérrez Karam",
    role: "Electronics Team Member",
    img: fer,
  },
];

const row3 = [
  {
    name: "Pedro Librado Uribe Reyes",
    role: "Software Team Member",
    img: pedroUSV,
  },
  {
    name: "Mauricio Caballero",
    role: "Software Team Member",
    img: miaw,
  },
  {
    name: "Carolina Guadalupe Loera Castro",
    role: "Project Manager &\nSoftware Team Member",
    img: caro,
  },
];

const MemberCard = ({ name, role, img }) => (
  <div className="flex items-end">
    {/* Vertical text */}
    <div
      className="hidden md:flex flex-col justify-end pb-10 mr-1 shrink-0"
      style={{ writingMode: "vertical-lr" }}
    >
      <span className="text-white font-quicksand font-bold text-sm whitespace-nowrap">
        {name}
      </span>
      <span className="text-gray-300 font-quicksand text-xs whitespace-pre-line mt-1">
        {role}
      </span>
    </div>
    {/* Photo */}
    <div className="relative overflow-hidden w-88 h-52 sm:w-88 sm:h-60 md:w-60 md:h-64 lg:w-72 lg:h-72 shrink-0">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover object-top grayscale"
      />
    </div>
  </div>
);

const MobileCard = ({ name, role, img }) => (
  <div className="flex flex-col items-center">
    <div className="relative overflow-hidden w-36 h-48 sm:w-44 sm:h-56 rounded-sm">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover object-top grayscale"
      />
    </div>
    <div className="mt-2 text-center">
      <p className="text-white font-quicksand font-bold text-xs leading-tight">
        {name}
      </p>
      <p className="text-gray-300 font-quicksand text-[10px]">{role}</p>
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

const DarkSeparator = ({ position }) => (
  <div
    className={`absolute -left-32 -right-32 z-20 h-7 ${
      position === "top" ? "-top-3" : "-bottom-3"
    }`}
    style={{
      backgroundColor: "#102a30",
      transform: "skewY(-3deg)",
    }}
  />
);

const TeamUSV = () => (
  <section className="bg-[#1a1a1a] w-full py-16 md:py-24 overflow-hidden">
    {/* === Desktop Layout (md+) === */}
    <div className="hidden md:block px-8 md:-px-16">
      {/* Row 1: Title + 2 members */}
      <div className="relative z-30">
        <DiagonalBand color="#427175" opacity={0.6} />
        <DarkSeparator position="top" />
        <div className="relative z-10 flex items-end justify-between" style={{ transform: "skewY(-3deg)" }}>
          {/* Title block — acts as the "first column" so members align with rows below */}
          <div className="shrink-0 py-8 md:py-14 md:px-2">
            <h2 className="font-quicksand text-white text-4xl md:text-3xl lg:text-6xl font-bold leading-tight">
              The minds behind the boat.
            </h2>
            <h2 className="font-quicksand text-white text-4xl lg:text-6xl font-bold mt-2">
              2026.
            </h2>
          </div>
          {row1.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
        <DarkSeparator position="bottom" />
      </div>

      {/* Row 2: 3 members */}
      <div className="relative z-20">
        <DiagonalBand color="#64827d" opacity={0.5} />
        <DarkSeparator position="top" />
        <div className="relative z-10 flex items-end justify-between" style={{ transform: "skewY(-3deg)" }}>
          {row2.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
        <DarkSeparator position="bottom" />
      </div>

      {/* Row 3: 3 members */}
      <div className="relative z-10">
        <DiagonalBand color="#427175" opacity={0.4} />
        <DarkSeparator position="top" />
        <div className="relative z-10 flex items-end justify-between" style={{ transform: "skewY(-3deg)" }}>
          {row3.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
        <DarkSeparator position="bottom" />
      </div>
    </div>

    {/* === Mobile Layout (< md) === */}
    <div className="md:hidden px-6">
      <div className="mb-10">
        <h2 className="font-quicksand text-white text-3xl font-bold leading-tight">
          The minds behind the boat.
        </h2>
        <h2 className="font-quicksand text-white text-3xl font-bold mt-1">
          2026.
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[...row1, ...row2, ...row3].map((m) => (
          <MobileCard key={m.name} {...m} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamUSV;
