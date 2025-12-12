import React from 'react';
import ProjectCTA from './ProjectCTA';
import squareImg from '../assets/squre.png';
import triangleImg from '../assets/triangle\'.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Gradient Effects (left yellow and right red glows) */}
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="absolute -left-20 top-6 w-[320px] h-[320px] rounded-full pointer-events-none sm:w-[520px] sm:h-[520px]"
        style={{
          background: 'radial-gradient(circle at 30% 40%, #FDDE48 0%, rgba(253,222,72,0.45) 18%, rgba(253,222,72,0.12) 30%, rgba(0,0,0,0) 60%)',
          filter: 'blur(80px)',
          opacity: 0.95,
        }}
      />

      <div
        className="absolute -right-12 bottom-12 w-[320px] h-[320px] rounded-full pointer-events-none sm:w-[540px] sm:h-[540px]"
        style={{
          background: 'radial-gradient(circle at 70% 60%, #C74643 0%, rgba(199,70,67,0.45) 18%, rgba(199,70,67,0.12) 30%, rgba(0,0,0,0) 65%)',
          filter: 'blur(80px)',
          opacity: 0.9,
        }}
      />

      {/* Decorative shape images positioned as per Figma */}
      {/* Yellow/Gold Square - Bottom Left within frame */}
      <div className="hidden md:block absolute left-[16.3%] bottom-[-15%] w-[604px] h-[604px] opacity-95 ]">
        <img src={squareImg} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Pink/Red Triangle - Bottom Right within frame */}
      <div className="hidden md:block absolute right-[16%] bottom-[-10%] w-[532px] h-[532px] opacity-90">
        <img src={triangleImg} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Mobile-only decorative shapes - CSS-based old elements */}
      <div className="block md:hidden">
        {/* small rotated square (left) */}
        <div className="absolute left-4 bottom-36 w-24 h-24 rounded-md" style={{ background: 'linear-gradient(180deg, rgba(253,222,72,0.95), rgba(199,70,67,0.85))', transform: 'rotate(-12deg)', filter: 'blur(6px)', opacity: 0.95 }} aria-hidden />

        {/* small triangle (right) */}
        <div className="absolute right-6 bottom-40 w-0 h-0" style={{ borderLeft: '36px solid transparent', borderRight: '36px solid transparent', borderBottom: '64px solid rgba(199,70,67,0.9)', filter: 'blur(4px)', opacity: 0.95 }} aria-hidden />
      </div>

      {/* Mobile top decorative shapes (above text) */}
      <div className="block md:hidden">
        <div className="absolute left-4 top-24 w-20 h-20 rounded-full" style={{ background: 'radial-gradient(circle, rgba(253,222,72,0.95), rgba(253,222,72,0.6))', filter: 'blur(10px)', opacity: 0.9 }} aria-hidden />
        <div className="absolute right-4 top-20 w-16 h-16 rounded-md" style={{ background: 'linear-gradient(180deg, rgba(199,70,67,0.9), rgba(199,70,67,0.6))', transform: 'rotate(12deg)', filter: 'blur(6px)', opacity: 0.9 }} aria-hidden />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
          Full-spectrum Web3<br />
          services & solutions
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
          We help Web3 projects grow from concept to scale with complete blockchain, product, and growth solutions
        </p>

        {/* Work With Us CTA using ProjectCTA component for consistent styling */}
        <div className="flex justify-center">
          <ProjectCTA />
        </div>
      </div>
    </section>
  );
};

export default Hero;
