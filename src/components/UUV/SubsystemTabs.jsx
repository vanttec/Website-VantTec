import { useState } from "react";
import MechanicsSection   from "./subsystems/MechanicsSection";
import SoftwareSection    from "./subsystems/SoftwareSection";
import ElectronicsSection from "./subsystems/ElectronicsSection";

const TABS = [
  { id: "mechanics",   label: "Mechanics"   },
  { id: "software",    label: "Software"    },
  { id: "electronics", label: "Electronics" },
];

const CONTENT = {
  mechanics:   <MechanicsSection />,
  software:    <SoftwareSection />,
  electronics: <ElectronicsSection />,
};

const SubsystemTabs = () => {
  const [activeTab, setActiveTab] = useState("mechanics");

  return (
    <section className="w-full">

      {/* ── Tab bar ── */}
      <div className="w-full bg-uuv-dark border-b border-uuv-cyan/20 overflow-x-auto">
        <div className="flex whitespace-nowrap min-w-full">
          {TABS.map(({ id, label }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={[
                  "flex-1 py-4 font-quicksand text-sm uppercase tracking-widest",
                  "transition-all duration-200",
                  isActive
                    ? "text-uuv-yellow border-b-2 border-uuv-yellow bg-uuv-cyan/5"
                    : "text-white/40 hover:text-white/70",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Tab content ── */}
      <div className="bg-uuv-darker min-h-[400px]">
        {CONTENT[activeTab]}
      </div>

    </section>
  );
};

export default SubsystemTabs;
