import { useState } from "react";

/* ══════════════════════════════════════════════════════════════════
   Diagonal visual rhythm — replicates the skewY(-3deg) pattern
   used in src/components/boatPage/TeamUSV.jsx
   ══════════════════════════════════════════════════════════════════ */

const DiagonalBand = () => (
  <div
    className="absolute -left-32 -right-32 top-0 bottom-0"
    style={{ backgroundColor: "#062a35", opacity: 0.9, transform: "skewY(-3deg)" }}
  />
);

const BandSeparator = ({ position }) => (
  <div
    className={`absolute -left-32 -right-32 z-20 h-7 ${
      position === "top" ? "-top-3" : "-bottom-3"
    }`}
    style={{ backgroundColor: "#041820", transform: "skewY(-3deg)" }}
  />
);

/* ══════════════════════════════════════════════════════════════════
   Shared atoms
   ══════════════════════════════════════════════════════════════════ */

const BlockLabel = ({ children }) => (
  <p className="font-quicksand text-[#F0900D] text-xs uppercase tracking-widest mb-3">
    {children}
  </p>
);

// w-64 on mobile (fixed width for horizontal scroll), md:w-full fills grid cell
const ImageCard = ({ caption }) => (
  <div className="bg-[#062a35] rounded-xl border border-[#49C1D2]/10 overflow-hidden w-64 md:w-full flex-shrink-0">
    <div className="w-full h-48 bg-[#0491AD]/20 flex items-center justify-center">
      {/* TODO: replace this div with <img src={ASSET} alt={caption} className="w-full h-full object-cover" /> */}
      <span className="font-quicksand text-[#49C1D2]/30 text-xs uppercase tracking-wide text-center px-4">
        {caption}
      </span>
    </div>
    <div className="px-4 py-3">
      <p className="font-quicksand text-white/40 text-xs uppercase tracking-wide">{caption}</p>
    </div>
  </div>
);

const SpecCard = ({ label, value }) => (
  <div className="bg-[#062a35] border border-[#49C1D2]/15 rounded-xl p-4">
    <p className="font-quicksand text-white/40 text-xs uppercase tracking-wide">{label}</p>
    <p className="font-quicksand text-white text-sm font-bold mt-1">{value}</p>
  </div>
);

// Each AccordionBlock owns its own openIndex — state resets when tab switches
const AccordionBlock = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div>
      {items.map(({ title, body }, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={title} className="border border-[#49C1D2]/15 rounded-xl mb-3 overflow-hidden">
            <button
              role="button"
              aria-expanded={isOpen}
              aria-label={title}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full bg-[#062a35] px-6 py-4 flex justify-between items-center cursor-pointer"
            >
              <span className="font-quicksand text-white text-sm md:text-base font-bold text-left">
                {title}
              </span>
              <span className="text-[#F0900D] text-xl ml-4 flex-shrink-0">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="bg-[#041820] px-6 py-4 border-t border-[#49C1D2]/10">
                <p className="font-quicksand text-white/60 text-sm leading-relaxed">{body}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════
   MECHANICS — data
   ══════════════════════════════════════════════════════════════════ */

// TODO: import images when assets are ready:
//   import uuvFullCAD      from "../../assets/...";
//   import uuvFEMAnalysis  from "../../assets/...";
//   import uuvExplodedView from "../../assets/...";

const mechGallery = [
  "Full Vehicle CAD Render",
  "FEM Stress Analysis",
  "Exploded Assembly View",
];

const mechAccordion = [
  {
    title: "Rib Cage Chassis",
    body: "The rib cage design shields internal components from external impacts. Nylamid was chosen for its strength, machinability, and ease of modification — critical for a first-competition vehicle requiring frequent adjustments.",
  },
  {
    title: "Modular Rail System",
    body: "Four flat metal rails along the frame corners provide long mounting surfaces. Components can be added or repositioned without redesigning the entire structure, supporting rapid iteration during competition preparation.",
  },
  {
    title: "Floating System",
    body: "To counteract enclosure offset imbalance, the top uses polyurethane and air-filled balloons (specific density: 0.22) while batteries and ballast occupy the lower side (specific density: 2.57), passively eliminating pitch and roll.",
  },
  {
    title: "Electronics Enclosure Access",
    body: "Designed for rapid removal from the frame to minimize preparation time between tests. A compact rack of two circular plates on linear shafts keeps components organized and accessible during maintenance.",
  },
];

const mechSpecs = [
  { label: "Material",       value: "Nylamid ribs + metal rails"  },
  { label: "Frame",          value: "Rib cage — 30% more rigid"   },
  { label: "Top density",    value: "0.22 — polyurethane + air"   },
  { label: "Bottom density", value: "2.57 — batteries + ballast"  },
  { label: "Assembly",       value: "Tool-accessible enclosure"   },
  { label: "Design base",    value: "VantTec 2019 submarine"      },
];

/* ══════════════════════════════════════════════════════════════════
   SOFTWARE — data
   ══════════════════════════════════════════════════════════════════ */

// TODO: import images when assets are ready:
//   import uuvROSdiagram      from "../../assets/...";
//   import uuvYOLOsim         from "../../assets/...";
//   import uuvGazebo          from "../../assets/...";
//   import uuvSimulink        from "../../assets/...";
//   import uuvConfusionMatrix from "../../assets/...";

const swGallery = [
  "ROS 2 Node Architecture",
  "YOLO Detection in Simulation",
  "Gazebo Environment",
  "Simulink ASMC Model",
  "YOLO Confusion Matrix",
];

const swAccordion = [
  {
    title: "Modular ROS 2 Architecture",
    body: "Each subsystem is an independent ROS 2 node: perception handles camera data, navigation generates trajectories, control converts targets to thrust commands, and the mission handler coordinates them all through ROS 2 topics and services.",
  },
  {
    title: "Finite State Machine Mission Logic",
    body: "Mission execution follows a Finite State Machine with three phases: Search (rotate and scan using YOLO models), Navigation (visual servoing toward the obstacle), and Action (execute task using obstacle-specific behavior nodes).",
  },
  {
    title: "YOLO Perception Pipeline",
    body: "Obstacle detection uses custom-trained YOLO models split into two stages: a general navigation model for obstacle identification and specialized models for obstacle-specific feature detection used during task execution.",
  },
  {
    title: "ASMC Controller",
    body: "Upgraded from PID to Adaptive Sliding Mode Controller (ASMC). Handles nonlinearities and parameter uncertainty common in underwater environments. The adaptive component dynamically compensates for disturbances in operation.",
  },
  {
    title: "Line of Sight Navigation",
    body: "The LOS node receives a target position and generates a feasible path using linear segments or Bézier curves, continuously calculating intermediate waypoints and sending them to the ASMC for smooth trajectory tracking.",
  },
  {
    title: "Extended Kalman Filter",
    body: "Global position estimated from IMU data processed through an Extended Kalman Filter (EKF), reducing sensor noise and drift for stable state estimation without requiring external positioning systems.",
  },
];

const swSpecs = [
  { label: "Framework",     value: "ROS 2 Humble"             },
  { label: "Mission logic", value: "Finite State Machine"     },
  { label: "Perception",    value: "YOLO — custom trained"    },
  { label: "Controller",    value: "Adaptive Sliding Mode"    },
  { label: "Localization",  value: "Extended Kalman Filter"   },
  { label: "Navigation",    value: "LOS + Bézier curves"      },
  { label: "Interface",     value: "Arduino UNO → ESC → T200" },
  { label: "Simulation",    value: "Gazebo + Simulink"        },
];

/* ══════════════════════════════════════════════════════════════════
   ELECTRONICS — data
   ══════════════════════════════════════════════════════════════════ */

// TODO: import images when assets are ready:
//   import uuvWiringDiagram from "../../assets/...";
//   import uuvPCB          from "../../assets/...";
//   import uuvThrusters    from "../../assets/...";
//   import uuvRack         from "../../assets/...";

const elGallery = [
  "Full Wiring Diagram",
  "Power Distribution PCB",
  "T200 Thruster Config",
  "Electronics Rack",
];

const elAccordion = [
  {
    title: "Dual-Battery Parallel Config",
    body: "Two batteries in parallel double available current while maintaining voltage, extending mission duration to one hour — twice what a series configuration provides without requiring larger individual batteries.",
  },
  {
    title: "Custom Power Distribution PCB",
    body: "A custom PCB serves as the central power hub, connecting batteries to ESCs and voltage regulators through cut-off relays and overcurrent fuses. TX30 connectors on battery cables ensure secure high-current connections.",
  },
  {
    title: "6× Blue Robotics T200 Thrusters",
    body: "Six T200 thrusters provide full 6-DoF control. Each connects to its own ESC, controlled by Arduino UNO via PWM signals. Bullet-type connectors allow quick, error-free identification and assembly.",
  },
  {
    title: "SOS Leak Detection",
    body: "A Blue Robotics SOS leak sensor connects to the Arduino UNO. On water detection, a UART signal to the Jetson Nano triggers the automated recovery procedure — adding a software safety layer beyond physical waterproofing.",
  },
  {
    title: "Waterproofing Strategy",
    body: "All cable penetrators entering enclosures are reinforced with two-component epoxy, covering thruster cables, battery cables, and the ethernet cable on the electronics lid.",
  },
  {
    title: "Kill Switch",
    body: "Integrated directly into the PCB with a rotating cap mechanism that disables the thruster circuit from outside the vehicle, satisfying competition safety requirements while remaining operable in wet conditions.",
  },
];

const elSpecs = [
  { label: "Compute",        value: "NVIDIA Jetson Nano"       },
  { label: "Control",        value: "Arduino UNO — PWM"        },
  { label: "Battery",        value: "Dual parallel config"     },
  { label: "Mission time",   value: "1 hour active"            },
  { label: "Thrusters",      value: "6× Blue Robotics T200"    },
  { label: "Safety",         value: "SOS sensor + kill switch" },
  { label: "Waterproofing",  value: "Epoxy penetrators"        },
  { label: "Connectors",     value: "TX30 + bullet-type"       },
];

/* ══════════════════════════════════════════════════════════════════
   Subsystem content sections
   ══════════════════════════════════════════════════════════════════ */

const MechanicsContent = () => (
  <div className="space-y-12">
    <div>
      <BlockLabel>Mechanical Subsystem</BlockLabel>
      <p className="font-quicksand text-white/70 text-sm md:text-base leading-relaxed max-w-3xl">
        The UUV&apos;s mechanical design builds on VantTec&apos;s 2019 submarine experience.
        The signature rib cage chassis, manufactured from nylamid, provides a frame
        that is 30% more rigid than previous designs while remaining easy to machine
        and modify. Four flat metal rails run along the frame corners create modular
        mounting surfaces for flotation, supports, and mission-specific hardware.
      </p>
    </div>

    <div>
      <BlockLabel>Gallery</BlockLabel>
      {/* Mobile — md:hidden */}
      <div className="flex flex-nowrap overflow-x-auto gap-4 pb-2 md:hidden">
        {mechGallery.map((cap) => <ImageCard key={cap} caption={cap} />)}
      </div>
      {/* Desktop — hidden md:grid */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {mechGallery.map((cap) => <ImageCard key={cap} caption={cap} />)}
      </div>
    </div>

    <div>
      <BlockLabel>Design Decisions</BlockLabel>
      <AccordionBlock items={mechAccordion} />
    </div>

    <div>
      <BlockLabel>Key Specifications</BlockLabel>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {mechSpecs.map((s) => <SpecCard key={s.label} {...s} />)}
      </div>
    </div>
  </div>
);

const SoftwareContent = () => (
  <div className="space-y-12">
    <div>
      <BlockLabel>Software Subsystem</BlockLabel>
      <p className="font-quicksand text-white/70 text-sm md:text-base leading-relaxed max-w-3xl">
        The UUV software stack is built on ROS 2 Humble, organized around a modular
        node architecture where each subsystem — perception, navigation, control, and
        mission execution — operates independently. The mission handler coordinates
        all subsystems through ROS 2 topics and services.
      </p>
    </div>

    <div>
      <BlockLabel>Gallery</BlockLabel>
      {/* Mobile — md:hidden */}
      <div className="flex flex-nowrap overflow-x-auto gap-4 pb-2 md:hidden">
        {swGallery.map((cap) => <ImageCard key={cap} caption={cap} />)}
      </div>
      {/* Desktop — hidden md:block (first 3 in grid, last 2 centered) */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-4">
          {swGallery.slice(0, 3).map((cap) => <ImageCard key={cap} caption={cap} />)}
        </div>
        <div className="flex justify-center gap-4 mt-4">
          {swGallery.slice(3).map((cap) => (
            <div key={cap} className="w-1/3">
              <ImageCard caption={cap} />
            </div>
          ))}
        </div>
      </div>
    </div>

    <div>
      <BlockLabel>Design Decisions</BlockLabel>
      <AccordionBlock items={swAccordion} />
    </div>

    <div>
      <BlockLabel>Key Specifications</BlockLabel>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {swSpecs.map((s) => <SpecCard key={s.label} {...s} />)}
      </div>
    </div>
  </div>
);

const ElectronicsContent = () => (
  <div className="space-y-12">
    <div>
      <BlockLabel>Electronics Subsystem</BlockLabel>
      <p className="font-quicksand text-white/70 text-sm md:text-base leading-relaxed max-w-3xl">
        The electrical architecture prioritizes safety, reliability, and maintainability.
        A dual-battery parallel configuration doubles mission duration to one hour. Power
        flows through a custom PCB handling distribution and relay control. The Jetson Nano
        serves as primary compute, communicating with an Arduino UNO that interfaces with
        the propulsion and sensor systems.
      </p>
    </div>

    <div>
      <BlockLabel>Gallery</BlockLabel>
      {/* Mobile — md:hidden */}
      <div className="flex flex-nowrap overflow-x-auto gap-4 pb-2 md:hidden">
        {elGallery.map((cap) => <ImageCard key={cap} caption={cap} />)}
      </div>
      {/* Desktop — hidden md:grid */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {elGallery.map((cap) => <ImageCard key={cap} caption={cap} />)}
      </div>
    </div>

    <div>
      <BlockLabel>Design Decisions</BlockLabel>
      <AccordionBlock items={elAccordion} />
    </div>

    <div>
      <BlockLabel>Key Specifications</BlockLabel>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {elSpecs.map((s) => <SpecCard key={s.label} {...s} />)}
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════
   Main component
   ══════════════════════════════════════════════════════════════════ */

const TABS = [
  { id: "mechanics",   label: "Mechanics"   },
  { id: "software",    label: "Software"    },
  { id: "electronics", label: "Electronics" },
];

const SubsystemsUUV = () => {
  const [activeTab, setActiveTab] = useState("mechanics");

  const content = {
    mechanics:   <MechanicsContent />,
    software:    <SoftwareContent />,
    electronics: <ElectronicsContent />,
  };

  return (
    <section className="bg-[#041820] w-full py-16 md:py-24 overflow-hidden">

      {/* ── HEADING ────────────────────────────────────────────── */}

      {/* Mobile heading — md:hidden */}
      <div className="relative md:hidden overflow-hidden mb-10">
        <DiagonalBand />
        <BandSeparator position="top" />
        <div className="relative z-10 px-6 py-8" style={{ transform: "skewY(-3deg)" }}>
          <h2 className="font-quicksand text-white text-4xl font-bold leading-tight">
            The engineering behind the submarine.
          </h2>
          <h2 className="font-quicksand text-[#49C1D2] text-4xl font-bold mt-2">
            Mechanics. Software. Electronics.
          </h2>
        </div>
        <BandSeparator position="bottom" />
      </div>

      {/* Desktop heading — hidden md:block */}
      <div className="relative hidden md:block overflow-hidden mb-10">
        <DiagonalBand />
        <BandSeparator position="top" />
        <div className="relative z-10 px-16 py-14" style={{ transform: "skewY(-3deg)" }}>
          <h2 className="font-quicksand text-white text-4xl md:text-3xl lg:text-6xl font-bold leading-tight">
            The engineering behind the submarine.
          </h2>
          <h2 className="font-quicksand text-[#49C1D2] text-4xl md:text-3xl lg:text-6xl font-bold mt-2">
            Mechanics. Software. Electronics.
          </h2>
        </div>
        <BandSeparator position="bottom" />
      </div>

      {/* ── TAB BAR ────────────────────────────────────────────── */}

      {/* Mobile tab bar — md:hidden */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex whitespace-nowrap border-b border-[#49C1D2]/20 bg-[#062a35] min-w-full">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              aria-label={label}
              onClick={() => setActiveTab(id)}
              className={[
                "flex-1 py-4 font-quicksand text-sm uppercase tracking-widest transition-all duration-200",
                activeTab === id
                  ? "text-[#E4D321] border-b-2 border-[#E4D321] bg-[#49C1D2]/5"
                  : "text-white/40 hover:text-white/70",
              ].join(" ")}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop tab bar — hidden md:flex */}
      <div className="hidden md:flex w-full border-b border-[#49C1D2]/20 bg-[#062a35]">
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            aria-selected={activeTab === id}
            aria-label={label}
            onClick={() => setActiveTab(id)}
            className={[
              "flex-1 py-4 font-quicksand text-sm uppercase tracking-widest transition-all duration-200",
              activeTab === id
                ? "text-[#E4D321] border-b-2 border-[#E4D321] bg-[#49C1D2]/5"
                : "text-white/40 hover:text-white/70",
            ].join(" ")}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── TAB CONTENT ────────────────────────────────────────── */}
      <div className="bg-[#041820] px-6 md:px-16 py-10">
        {content[activeTab]}
      </div>

    </section>
  );
};

export default SubsystemsUUV;
