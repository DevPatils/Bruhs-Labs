import React from 'react';

const ProjectCTA = ({ onClick }) => {
  return (
    <div className="relative w-60 h-16 md:w-[261px] md:h-[81px] mx-auto">
      {/* blurred decorative cluster behind button (hidden on small screens) */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{ position: 'absolute', left: 40, top: -60, width: 220.85, height: 480.47, filter: 'blur(83.68px)', opacity: 0.85 }} aria-hidden>
          <div style={{ position: 'absolute', width: 102.17, height: 194.13, left: 22, top: 174, background: '#AD0B07', borderRadius: 9999 }} />
          <div style={{ position: 'absolute', width: 102.17, height: 194.13, left: 26, top: -110, background: '#FDDE48', borderRadius: 9999, transform: 'rotate(-30deg)' }} />
          <div style={{ position: 'absolute', width: 194.13, height: 299.4, left: 0, top: -80, background: '#C43E3B', borderRadius: 9999 }} />
          <div style={{ position: 'absolute', width: 102.17, height: 194.13, left: 48, top: -90, background: '#FED408', borderRadius: 9999, transform: 'rotate(24deg)' }} />
          <div style={{ position: 'absolute', width: 102.17, height: 194.13, left: 68, top: 96, background: '#FDDE48', borderRadius: 9999 }} />
        </div>
      </div>

      {/* pill link to Typeform */}
      <a
        href="https://form.typeform.com/to/MsbFnO5O"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        aria-label="Start Your Project"
        className="relative z-10 flex items-center justify-center font-semibold text-sm md:text-lg px-6 w-full h-full transition-all duration-300 ease-out hover:scale-105"
        style={{
          borderRadius: 3733.11,
          background: 'linear-gradient(90deg, rgba(12,10,9,0.85) 0%, #FED408 45%, #C43E3B 100%)',
          color: '#fff',
          letterSpacing: '0.2px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.6), inset 0 6px 18px rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.08)',
          isolation: 'isolate'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 15px 50px rgba(254, 212, 8, 0.4), 0 10px 30px rgba(196, 62, 59, 0.3), inset 0 6px 18px rgba(255,255,255,0.1)';
          e.currentTarget.style.filter = 'brightness(1.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6), inset 0 6px 18px rgba(255,255,255,0.06)';
          e.currentTarget.style.filter = 'brightness(1)';
        }}
      >
        {/* persistent outline (keeps hover border visible) */}
        <span style={{ position: 'absolute', inset: 0, borderRadius: 3733.11, border: '2px solid rgba(255,255,255,0.95)', boxShadow: '0 0 0 4px rgba(0,0,0,0.45)', pointerEvents: 'none', zIndex: 1 }} />

        {/* subtle glossy highlight */}
        <span style={{ position: 'absolute', inset: 0, borderRadius: 3733.11, background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0) 60%)', pointerEvents: 'none', zIndex: 2 }} />

        <span style={{ position: 'relative', zIndex: 3 }}>Start Your Project</span>
      </a>
    </div>
  );
};

export default ProjectCTA;
