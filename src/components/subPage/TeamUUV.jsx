/*
  TODO: Add UUV team member photos.
  1. Create the folder: src/assets/members_uuv/
  2. Place each member's photo (PNG recommended) inside that folder.
  3. Import them in src/assets/index.js following the same pattern as the USV team:
        import memberName from "./members_uuv/memberName.png";
     and add them to the export list.
  4. Import the exported names here and replace the placeholder `img` values below.
*/

const PLACEHOLDER_IMG = null;

const row1 = [
  { name: "TODO: Project Leader Name", role: "Project Leader",           img: PLACEHOLDER_IMG },
  { name: "TODO: Member Name",         role: "Software Team Member",     img: PLACEHOLDER_IMG },
];

const row2 = [
  { name: "TODO: Member Name", role: "Electronics Team Member",  img: PLACEHOLDER_IMG },
  { name: "TODO: Member Name", role: "Mechanical Team Leader",   img: PLACEHOLDER_IMG },
  { name: "TODO: Member Name", role: "Electronics Team Member",  img: PLACEHOLDER_IMG },
];

const row3 = [
  { name: "TODO: Member Name", role: "Software Team Member", img: PLACEHOLDER_IMG },
  { name: "TODO: Member Name", role: "Software Team Member", img: PLACEHOLDER_IMG },
  { name: "TODO: Member Name", role: "Project Manager",      img: PLACEHOLDER_IMG },
];

const MemberCard = ({ name, role, img }) => (
  <div className="flex items-end">
    <div
      className="hidden md:flex flex-col justify-end pb-10 mr-1 shrink-0"
      style={{ writingMode: "vertical-lr" }}
    >
      <span className="text-white font-quicksand font-bold text-sm whitespace-nowrap">{name}</span>
      <span className="text-gray-300 font-quicksand text-xs whitespace-pre-line mt-1">{role}</span>
    </div>
    <div className="relative overflow-hidden w-88 h-52 sm:w-88 sm:h-60 md:w-60 md:h-64 lg:w-72 lg:h-72 shrink-0 bg-gray-700">
      {img ? (
        <img src={img} alt={name} className="w-full h-full object-cover object-top grayscale" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-gray-500 text-xs text-center px-2">Photo coming soon</span>
        </div>
      )}
    </div>
  </div>
);

const MobileCard = ({ name, role, img }) => (
  <div className="flex flex-col items-center">
    <div className="relative overflow-hidden w-36 h-48 sm:w-44 sm:h-56 rounded-sm bg-gray-700">
      {img ? (
        <img src={img} alt={name} className="w-full h-full object-cover object-top grayscale" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-gray-500 text-[10px] text-center px-1">Photo coming soon</span>
        </div>
      )}
    </div>
    <div className="mt-2 text-center">
      <p className="text-white font-quicksand font-bold text-xs leading-tight">{name}</p>
      <p className="text-gray-300 font-quicksand text-[10px]">{role}</p>
    </div>
  </div>
);

const DiagonalBand = ({ color, opacity }) => (
  <div
    className="absolute -left-32 -right-32 top-0 bottom-0"
    style={{ backgroundColor: color, opacity, transform: "skewY(-3deg)" }}
  />
);

const DarkSeparator = ({ position }) => (
  <div
    className={`absolute -left-32 -right-32 z-20 h-7 ${position === "top" ? "-top-3" : "-bottom-3"}`}
    style={{ backgroundColor: "#102a30", transform: "skewY(-3deg)" }}
  />
);

const TeamUUV = () => (
  <section className="bg-[#1a1a1a] w-full py-16 md:py-24 overflow-hidden">
    {/* Desktop */}
    <div className="hidden md:block px-8">
      <div className="relative z-30">
        <DiagonalBand color="#1a3a5c" opacity={0.6} />
        <DarkSeparator position="top" />
        <div className="relative z-10 flex items-end justify-between" style={{ transform: "skewY(-3deg)" }}>
          <div className="shrink-0 py-8 md:py-14 md:px-2">
            <h2 className="font-quicksand text-white text-4xl md:text-3xl lg:text-6xl font-bold leading-tight">
              The minds behind the sub.
            </h2>
            <h2 className="font-quicksand text-white text-4xl lg:text-6xl font-bold mt-2">2026.</h2>
          </div>
          {row1.map((m) => <MemberCard key={m.name} {...m} />)}
        </div>
        <DarkSeparator position="bottom" />
      </div>

      <div className="relative z-20">
        <DiagonalBand color="#1e4a6e" opacity={0.5} />
        <DarkSeparator position="top" />
        <div className="relative z-10 flex items-end justify-between" style={{ transform: "skewY(-3deg)" }}>
          {row2.map((m) => <MemberCard key={m.name} {...m} />)}
        </div>
        <DarkSeparator position="bottom" />
      </div>

      <div className="relative z-10">
        <DiagonalBand color="#1a3a5c" opacity={0.4} />
        <DarkSeparator position="top" />
        <div className="relative z-10 flex items-end justify-between" style={{ transform: "skewY(-3deg)" }}>
          {row3.map((m) => <MemberCard key={m.name} {...m} />)}
        </div>
        <DarkSeparator position="bottom" />
      </div>
    </div>

    {/* Mobile */}
    <div className="md:hidden px-6">
      <div className="mb-10">
        <h2 className="font-quicksand text-white text-3xl font-bold leading-tight">The minds behind the sub.</h2>
        <h2 className="font-quicksand text-white text-3xl font-bold mt-1">2026.</h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[...row1, ...row2, ...row3].map((m) => <MobileCard key={m.name} {...m} />)}
      </div>
    </div>
  </section>
);

export default TeamUUV;
