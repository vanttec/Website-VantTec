// Structure mirrors src/components/boatPage/SponsorsUSV.jsx:
// full-width section → absolute overlay → relative z-10 content block.

const TDRDownloadUUV = () => (
  <section
    className="relative w-full py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-[#0491AD]"
  >
    {/* TODO: add backgroundImage like SponsorsUSV when UUV backdrop asset is available */}

    {/* Dark overlay — bg-black/30 (lighter than sponsors: this is a CTA) */}
    <div className="absolute inset-0 bg-black/30" />

    <div className="relative z-10 px-8 md:px-16 max-w-6xl mx-auto">

      {/* ── Desktop layout — hidden md:flex ── */}
      <div className="hidden md:flex flex-row justify-between items-center gap-16">

        {/* Left: title block */}
        <div>
          <p className="font-quicksand text-white/60 text-xs uppercase tracking-[0.2em] mb-3">
            Technical Documentation
          </p>
          <h2 className="font-quicksand text-white text-4xl md:text-5xl font-bold">
            Technical Design Report
          </h2>
          <p className="font-quicksand text-white/60 text-lg mt-3">
            Full vehicle design, testing strategy, and system architecture
          </p>
          <p className="font-quicksand text-white/40 text-sm mt-1">
            RoboSub 2026 — VantTec, Tecnológico de Monterrey
          </p>
        </div>

        {/* Right: download button */}
        <div className="shrink-0">
          <a
            href="#"
            aria-label="Download Technical Design Report PDF"
          >
            {/* TODO: replace href="#" with actual TDR PDF path when uploaded */}
            <button
              className="bg-[#F0900D] hover:bg-[#F86515] text-white font-quicksand font-bold text-sm uppercase tracking-widest px-10 py-5 rounded-full transition-colors duration-200"
            >
              Download TDR →
            </button>
          </a>
        </div>

      </div>

      {/* ── Mobile layout — md:hidden ── */}
      <div className="md:hidden flex flex-col text-center gap-8">

        {/* Title block */}
        <div>
          <p className="font-quicksand text-white/60 text-xs uppercase tracking-[0.2em] mb-3">
            Technical Documentation
          </p>
          <h2 className="font-quicksand text-white text-4xl font-bold">
            Technical Design Report
          </h2>
          <p className="font-quicksand text-white/60 text-lg mt-3">
            Full vehicle design, testing strategy, and system architecture
          </p>
          <p className="font-quicksand text-white/40 text-sm mt-1">
            RoboSub 2026 — VantTec, Tecnológico de Monterrey
          </p>
        </div>

        {/* Download button — full width on mobile */}
        <a
          href="#"
          aria-label="Download Technical Design Report PDF"
          className="w-full"
        >
          {/* TODO: replace href="#" with actual TDR PDF path when uploaded */}
          <button
            className="w-full bg-[#F0900D] hover:bg-[#F86515] text-white font-quicksand font-bold text-sm uppercase tracking-widest px-10 py-5 rounded-full transition-colors duration-200"
          >
            Download TDR →
          </button>
        </a>

      </div>

    </div>
  </section>
);

export default TDRDownloadUUV;
