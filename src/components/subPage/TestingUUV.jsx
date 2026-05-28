/* ══════════════════════════════════════════════════════════════════
   Local copies of the diagonal-band visual rhythm components.
   Source reference: src/components/boatPage/TeamUSV.jsx
   Colors adjusted to UUV palette — #0491AD accent, #062a35 fill,
   #041820 separators.
   ══════════════════════════════════════════════════════════════════ */

const DiagonalBand = ({ color, opacity }) => (
  <div
    className="absolute -left-32 -right-32 top-0 bottom-0"
    style={{ backgroundColor: color, opacity, transform: "skewY(-3deg)" }}
  />
);

const DarkSeparator = ({ position }) => (
  <div
    className={`absolute -left-32 -right-32 z-20 h-7 ${
      position === "top" ? "-top-3" : "-bottom-3"
    }`}
    style={{ backgroundColor: "#041820", transform: "skewY(-3deg)" }}
  />
);

/* BlockLabel — matches SubsystemsUUV.jsx */
const BlockLabel = ({ children }) => (
  <p className="font-raleway text-[#F0900D] text-xs uppercase tracking-widest mb-3">
    {children}
  </p>
);

/* ══════════════════════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════════════════════ */

const procedures = [
  {
    title: "Vacuum Test",
    description:
      "Before every water session, all enclosures were sealed and a partial vacuum applied. " +
      "Pressure was held and monitored to confirm no air could enter. The UUV was then " +
      "submerged for 30 seconds as secondary confirmation.",
    steps: [
      "Seal all enclosures completely",
      "Apply partial vacuum to each enclosure",
      "Monitor pressure — no increase must be observed",
      "Submerge UUV for 30-second confirmation",
    ],
  },
  {
    title: "Motor Mapping",
    description:
      "Before every free-water session, each thruster's direction and thrust allocator " +
      "index was verified and corrected. Motors may be connected in unintended order " +
      "during assembly, so this step was mandatory.",
    steps: [
      "Power on thruster system",
      "Activate each of the 6 thrusters individually",
      "Verify thrust direction matches expected output",
      "Map each thruster's index in the allocator software",
      "Confirm all 6 thrusters operational before entering water",
    ],
  },
];

const sessions = [
  {
    number: 1,
    title: "Teleoperation Baseline",
    objective:
      "Validate manual teleoperation and confirm all 6 thrusters respond correctly " +
      "to remote commands under real water conditions.",
    results: [
      "Manual control confirmed across all axes",
      "Thruster response validated in open water",
      "Arduino UNO to Jetson Nano communication stable",
    ],
    learned: "Established a working baseline for all future sessions.",
    outcome: "success",
  },
  {
    number: 2,
    title: "Location Matrix Validation",
    objective:
      "Test the thrust allocation matrix and confirm force commands produced the " +
      "expected vehicle motion in all six degrees of freedom.",
    results: [
      "Surge, sway, and heave responses confirmed",
      "Roll, pitch, and yaw control validated",
      "Minor calibration adjustments made to the allocator matrix",
    ],
    learned:
      "Allocator matrix required fine-tuning to match physical thruster layout " +
      "after initial deployment.",
    outcome: "success",
  },
  {
    number: 3,
    title: "Mechanics & Electronics Integration",
    objective:
      "Verify all mechanical and electrical subsystems function correctly as an " +
      "integrated system under water pressure.",
    results: [
      "All penetrators and epoxy seals held under pressure",
      "Kill switch operation verified from outside the vehicle",
      "Cable routing confirmed clear of all moving parts",
    ],
    learned:
      "Physical clearance adjustments were needed to the internal cable harness " +
      "routing inside the frame.",
    outcome: "success",
  },
  {
    number: 4,
    title: "Enclosure Breach Diagnosis & Recovery",
    objective:
      "After water ingress was detected in the electronics enclosure, identify the " +
      "failure point and implement a corrective solution before resuming testing.",
    results: [
      "SOS leak sensor triggered and correctly alerted the system",
      "Failure point identified: an unsealed penetrator connection",
      "Enclosure fully disassembled, dried, and resealed with epoxy",
      "Vacuum test re-run and passed before re-entering water",
    ],
    learned:
      "The leak detection system performed exactly as designed. The incident validated " +
      "the recovery procedure and led to a more rigorous pre-test epoxy inspection checklist.",
    outcome: "failure",
  },
  {
    number: 5,
    title: "Autonomy Testing",
    objective:
      "Test the ROS 2 FSM mission logic in open water — validate the Search, " +
      "Navigation, and Action phases without manual intervention.",
    results: [
      "Search phase rotation and YOLO detection confirmed in water",
      "Visual servoing navigation toward target validated",
      "FSM state transitions behaved as expected",
    ],
    learned:
      "Detection range and lighting conditions underwater affected YOLO confidence. " +
      "Model parameters were adjusted after this session.",
    outcome: "success",
  },
  {
    number: 6,
    title: "Full System Integration",
    objective:
      "Run a complete end-to-end autonomous mission sequence with all subsystems " +
      "active — mechanics, electronics, and software together.",
    results: [
      "Full autonomous sequence executed without manual intervention",
      "EKF localization stable throughout the run",
      "ASMC controller maintained heading under current disturbances",
      "All pre-competition procedures validated",
    ],
    learned:
      "Controller tuning parameters confirmed for competition conditions. Minor yaw " +
      "drift noted under lateral current — logged for future iteration.",
    outcome: "success",
  },
];

/* ══════════════════════════════════════════════════════════════════
   Sub-components
   ══════════════════════════════════════════════════════════════════ */

const ProcedureCard = ({ title, description, steps }) => (
  <div className="bg-[#062a35] border border-[#49C1D2]/15 rounded-xl p-6">

    <h3 className="font-raleway text-white font-bold text-xl md:text-2xl mb-4 uppercase">
      {title}
    </h3>

    <p className="font-raleway text-white text-sm leading-relaxed mb-6">
      {description}
    </p>

    <div className="flex flex-col gap-3">
      {steps.map((step, i) => (
        <div key={step} className="flex gap-4 items-start">
          <span className="font-raleway text-[#49C1D2] font-bold text-sm w-5 flex-shrink-0 mt-0.5">
            {i + 1}
          </span>
          <span className="font-raleway text-[#49C1D2] text-sm leading-snug">
            {step}
          </span>
        </div>
      ))}
    </div>

  </div>
);

const SessionCard = ({ number, title, objective, results,
                       learned, outcome }) => (
  <div
    className={`bg-[#062a35] rounded-xl overflow-hidden border-l-4 ${
      outcome === "success"
        ? "border-l-[#49C1D2]"
        : "border-l-[#F0900D]"
    }`}
  >
    {/* MOBILE — stacked (default) */}
    <div className="md:hidden">
      <div className="px-6 pt-5 pb-3 flex items-center gap-3">
        <span className="font-raleway text-[#49C1D2]/50 text-sm font-bold flex-shrink-0">
          {String(number).padStart(2, "0")}
        </span>
        <div className="w-px h-4 bg-[#49C1D2]/20 flex-shrink-0" />
        <h3 className="font-raleway text-white font-bold text-lg uppercase">
          {title}
        </h3>
      </div>
      <div className="h-px bg-[#49C1D2]/10 mx-6" />
      <div className="px-6 py-4 space-y-4">
        <div>
          <p className="font-raleway text-[#F0900D] text-xs uppercase tracking-widest mb-2">Objective</p>
          <p className="font-raleway text-white text-sm leading-relaxed">
            {objective}
          </p>
        </div>
        <div>
          <p className="font-raleway text-[#F0900D] text-xs uppercase tracking-widest mb-2">Results</p>
          <div className="flex flex-col gap-1.5">
            {results.map((r) => (
              <div key={r} className="flex gap-2.5 items-start">
                <span className="text-[#49C1D2] text-xs flex-shrink-0 mt-0.5">→</span>
                <span className="font-raleway text-[#49C1D2] text-sm leading-snug">
                  {r}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-[#49C1D2]/10 pt-4">
          <p className="font-raleway text-[#EFA232] text-xs uppercase tracking-widest mb-2">Key Takeaway</p>
          <p className="font-raleway text-white/60 text-sm leading-relaxed italic">
            {learned}
          </p>
        </div>
      </div>
    </div>

    {/* DESKTOP — horizontal split (hidden on mobile) */}
    <div className="hidden md:flex flex-row min-h-[180px]">

      {/* LEFT — session ID + title */}
      <div className="w-80 lg:w-[30rem] flex-shrink-0 flex flex-col justify-center px-8 lg:px-10 py-8 bg-gradient-to-br from-[#0491AD]/18 via-[#0491AD]/8 to-transparent border-r border-[#49C1D2]/20">
        <span className="font-raleway text-[#49C1D2]/75 text-sm tracking-[0.22em] uppercase mb-3 font-semibold">
          {`Session ${String(number).padStart(2, "0")}`}
        </span>
        <h3 className="font-raleway text-white font-normal text-3xl lg:text-4xl leading-tight uppercase">
          {title}
        </h3>
      </div>

      {/* RIGHT — all content */}
      <div className="flex-1 px-8 py-8 flex flex-col gap-5">

        <div>
          <p className="font-raleway text-[#F0900D] text-[10px] uppercase tracking-[0.2em] mb-2">
            Objective
          </p>
          <p className="font-raleway text-white text-sm leading-relaxed">
            {objective}
          </p>
        </div>

        <div>
          <p className="font-raleway text-[#F0900D] text-[10px] uppercase tracking-[0.2em] mb-2">
            Results
          </p>
          <div className="flex flex-col gap-1.5">
            {results.map((r) => (
              <div key={r} className="flex gap-2.5 items-start">
                <span className="text-[#49C1D2] text-xs flex-shrink-0 mt-0.5">
                  →
                </span>
                <span className="font-raleway text-[#49C1D2] text-sm leading-snug">
                  {r}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#49C1D2]/10 pt-4">
          <p className="font-raleway text-[#EFA232] text-[10px] uppercase tracking-[0.2em] mb-2">
            Key Takeaway
          </p>
          <p className="font-raleway text-white/60 text-sm leading-relaxed italic">
            {learned}
          </p>
        </div>

      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════
   Main component
   ══════════════════════════════════════════════════════════════════ */

const TestingUUV = () => (
  <section className="bg-[#041820] w-full py-16 md:py-24 overflow-hidden">

    {/* ── HEADING ──────────────────────────────────────────────── */}

    {/* Mobile heading — md:hidden */}
    <div className="relative md:hidden overflow-hidden">
      <DiagonalBand color="#062a35" opacity={0.95} />
      <DiagonalBand color="#0491AD" opacity={0.07} />
      <DarkSeparator position="top" />
      <div
        className="relative z-10 px-6 py-10"
        style={{ transform: "skewY(-3deg)" }}
      >
        <h2 className="font-raleway text-white text-7xl font-extrabold leading-[0.9] uppercase">
          Testing &amp;
        </h2>
        <h2 className="font-raleway text-[#49C1D2] text-7xl font-extrabold mt-1 leading-[0.9] uppercase">
          Validation.
        </h2>
      </div>
    </div>

    {/* Desktop heading — hidden md:block */}
    <div className="relative hidden md:block overflow-hidden">
      <DiagonalBand color="#062a35" opacity={0.95} />
      <DiagonalBand color="#0491AD" opacity={0.07} />
      <DarkSeparator position="top" />
      <div
        className="relative z-10 px-16 py-16"
        style={{ transform: "skewY(-3deg)" }}
      >
        <h2 className="font-raleway text-white text-7xl lg:text-[9rem] font-extrabold leading-[0.85] uppercase">
          Testing &amp;
        </h2>
        <h2 className="font-raleway text-[#49C1D2] text-7xl lg:text-[9rem] font-extrabold mt-2 leading-[0.85] uppercase">
          Validation.
        </h2>
      </div>
    </div>

    {/* ── BLOCK 1: Pre-Test Procedures ─────────────────────────── */}
    <div className="px-6 md:px-16 mt-12">
      <BlockLabel>Pre-Test Procedures</BlockLabel>
      <p className="font-raleway text-white/50 text-sm mb-6">
        Executed before every water session without exception.
      </p>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-4">
        {procedures.map((p) => (
          <ProcedureCard key={p.title} {...p} />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-2 gap-6">
        {procedures.map((p) => (
          <ProcedureCard key={p.title} {...p} />
        ))}
      </div>
    </div>

    {/* ── BLOCK 2: Water Test Sessions ─────────────────────────── */}
    <div className="px-6 md:px-16 mt-16">
      <BlockLabel>Water Test Sessions</BlockLabel>
      <p className="font-raleway text-white/50 text-sm mb-8">
        6 sessions completed. Each session informed the next iteration.
      </p>

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-6">
        {sessions.map((s) => (
          <SessionCard key={s.number} {...s} />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-4">
        {sessions.map((s) => (
          <SessionCard key={s.number} {...s} />
        ))}
      </div>
    </div>

  </section>
);

export default TestingUUV;
