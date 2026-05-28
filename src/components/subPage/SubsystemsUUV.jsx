import { useState } from "react";
import mechCadRender from "../../assets/UUV/MECANICA/CADrender.png";
import mechBuoyancyDiagram from "../../assets/UUV/MECANICA/Center of mass-buoyancy diagram.png";
import mechFemStress from "../../assets/UUV/MECANICA/FEM stress analysis.png";
import swNodeArchitecture from "../../assets/UUV/SOFTWARE/Node architecture diagram.png";
import swYoloSimulation from "../../assets/UUV/SOFTWARE/YOLO simulation screenshot (Gazebo).jpg";
import swSimulink from "../../assets/UUV/SOFTWARE/Simulink dynamic model diagram.png";
import swDetectionFour from "../../assets/UUV/SOFTWARE/4.png";
import swConfusionMatrix from "../../assets/UUV/SOFTWARE/YOLO confusion matrix.png";
import elWiringDiagram from "../../assets/UUV/ELECTRONICA/Full electrical diagram (wiring schematic).png";
import elExplodedView from "../../assets/UUV/ELECTRONICA/Exploded view assembly diagram.png";
import elConnectorPhoto from "../../assets/UUV/ELECTRONICA/conexionP2.png";
import elPCB from "../../assets/UUV/ELECTRONICA/pcb.png";


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

/* ── ImageSlideshow ──────────────────────────────────────────────────
   Glassmorphism carousel — frame style from Research.jsx.
   One image at a time, fully visible (object-contain).
   Responsive: same component works on mobile and desktop.
   ─────────────────────────────────────────────────────────────────── */
const ImageSlideshow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [failedSet, setFailedSet] = useState(new Set());
  const total = slides.length;

  if (total === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const { caption, src } = slides[current];
  const imgOk = Boolean(src) && !failedSet.has(current);
  const markFailed = (idx) =>
    setFailedSet((prev) => new Set([...prev, idx]));

  return (
    <div className="w-full select-none">

      {/* ── Big translucent frame ── */}
      <div className="relative w-full h-56 md:h-[420px] rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">

        {/* Dark inner layer so images pop regardless of background */}
        <div className="absolute inset-0 bg-[#041820]/75" />

        {/* Image area — padded inset so the glassy border is visible */}
        <div className="absolute inset-4 md:inset-8 z-10 flex items-center justify-center">
          {imgOk ? (
            <img
              key={current}
              src={src}
              alt={caption}
              className="w-full h-full object-contain drop-shadow-lg"
              loading="lazy"
              onError={() => markFailed(current)}
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="w-12 h-12 rounded-full border border-[#49C1D2]/20 flex items-center justify-center">
                <span className="text-[#49C1D2]/30 text-xl">◻</span>
              </div>
              <p className="font-quicksand text-white/25 text-xs uppercase tracking-widest max-w-xs">
                {caption}
              </p>
            </div>
          )}
        </div>

        {/* Slide counter — top right */}
        {total > 1 && (
          <div className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="font-quicksand text-white/50 text-xs tracking-widest">
              {current + 1} / {total}
            </span>
          </div>
        )}

        {/* Prev arrow */}
        {total > 1 && (
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-[#0491AD]/60 text-white/60 hover:text-white text-2xl flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            ‹
          </button>
        )}

        {/* Next arrow */}
        {total > 1 && (
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-[#0491AD]/60 text-white/60 hover:text-white text-2xl flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            ›
          </button>
        )}
      </div>

      {/* Caption + dot indicators */}
      <div className="mt-4 flex flex-col items-center gap-2.5">
        <p className="font-quicksand text-white/40 text-xs uppercase tracking-widest text-center">
          {caption}
        </p>
        {total > 1 && (
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 h-1.5 bg-[#49C1D2]"
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

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
  { caption: "Full Vehicle CAD Render", src: mechCadRender },
  { caption: "Center of Mass and Buoyancy", src: mechBuoyancyDiagram },
  { caption: "FEM Stress Analysis", src: mechFemStress },
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
  { caption: "ROS 2 Node Architecture", src: swNodeArchitecture },
  { caption: "YOLO Simulation Screenshot", src: swYoloSimulation },
  { caption: "Underwater Detection Box 4", src: swDetectionFour },
  { caption: "YOLO Confusion Matrix", src: swConfusionMatrix },
  { caption: "Simulink ASMC Model", src: swSimulink },
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
  { caption: "Full Wiring Diagram", src: elWiringDiagram },
  { caption: "Power Distribution PCB", src: elPCB },
  { caption: "Electronics Rack", src: elConnectorPhoto },
  { caption: "Electronics Enclosure Exploded View", src: elExplodedView },
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
      <ImageSlideshow slides={mechGallery} />
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
      <ImageSlideshow slides={swGallery} />
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
      <ImageSlideshow slides={elGallery} />
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
