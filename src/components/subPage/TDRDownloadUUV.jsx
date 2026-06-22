import { useState } from "react";

const PDF_PATH = "/sub/RS26_TDR_Tec_de_Monterrey.pdf";

const OptionsDropdown = ({ onClose }) => (
  <div
    className="absolute right-0 mt-3 top-full z-50 bg-[#062a35] border border-[#49C1D2]/20 rounded-xl overflow-hidden shadow-xl w-56"
    role="menu"
  >
    <a
      href={PDF_PATH}
      target="_blank"
      rel="noopener noreferrer"
      role="menuitem"
      onClick={onClose}
      className="flex items-center gap-3 px-5 py-4 hover:bg-[#0491AD]/30 transition-colors duration-150 border-b border-[#49C1D2]/10 group"
    >
      <span className="text-[#49C1D2] text-base">&#8599;</span>
      <div>
        <p className="font-urbanist text-white text-sm font-bold">View Online</p>
        <p className="font-urbanist text-white/40 text-xs mt-0.5">Opens in a new tab</p>
      </div>
    </a>

    
      <a
        href={PDF_PATH}
        download="TDR_VantTec_UUV_RoboSub2026.pdf"
        role="menuitem"
        onClick={onClose}
        className="flex items-center gap-3 px-5 py-4 hover:bg-[#0491AD]/30 transition-colors duration-150 group"
      >
      <span className="text-[#F0900D] text-base">&#8595;</span>
      <div>
        <p className="font-urbanist text-white text-sm font-bold">Download PDF</p>
        <p className="font-urbanist text-white/40 text-xs mt-0.5">Saves to your device</p>
      </div>
    </a>
  </div>
);

const TDRDownloadUUV = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#0491AD] overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 px-8 md:px-16 max-w-6xl mx-auto">

        {/* MOBILE */}
        <div className="flex flex-col items-center text-center gap-8 md:hidden">
          <div>
            <p className="font-quicksand text-white/60 text-xs uppercase tracking-[0.2em] mb-3">
              Technical Documentation
            </p>
            <h2 className="font-urbanist text-white font-bold text-3xl leading-tight">
              Technical Design Report
            </h2>
            <p className="font-urbanist text-white/60 text-sm mt-3">
              Full vehicle design, testing strategy, and system architecture
            </p>
            <p className="font-urbanist text-white/40 text-xs mt-1">
              RoboSub 2026 — VantTec, Tecnológico de Monterrey
            </p>
          </div>
          <div className="relative flex flex-col items-center">
            <button
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label="Open TDR options"
              className="bg-[#F0900D] hover:bg-[#F86515] text-white font-urbanist font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-full transition-colors duration-200"
            >
              {open ? "Close" : "Access TDR"}
            </button>
            {open && <OptionsDropdown onClose={() => setOpen(false)} />}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex flex-row justify-between items-center gap-16">
          <div>
            <p className="font-quicksand text-white/60 text-xs uppercase tracking-[0.2em] mb-3">
              Technical Documentation
            </p>
            <h2 className="font-urbanist text-white font-bold text-4xl md:text-5xl leading-tight">
              Technical Design Report
            </h2>
            <p className="font-urbanist text-white/60 text-lg mt-3">
              Full vehicle design, testing strategy, and system architecture
            </p>
            <p className="font-urbanist text-white/40 text-sm mt-1">
              RoboSub 2026 — VantTec, Tecnológico de Monterrey
            </p>
          </div>
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label="Open TDR options"
              className="bg-[#F0900D] hover:bg-[#F86515] text-white font-urbanist font-bold text-sm uppercase tracking-widest px-10 py-5 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              {open ? "Close" : "Access TDR"}
            </button>
            {open && <OptionsDropdown onClose={() => setOpen(false)} />}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TDRDownloadUUV;
