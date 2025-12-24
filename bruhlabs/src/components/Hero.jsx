import React, { useState, useEffect } from 'react';
import ProjectCTA from './ProjectCTA';
import squareImg from '../assets/squre.png';
import triangleImg from '../assets/triangle\'.png';
import './Hero.css';

const Hero = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Trigger the reveal animation after component mounts
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Gradient Effects (left yellow and right red glows) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(253, 222, 72, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 70%, rgba(199, 70, 67, 0.15) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(253, 222, 72, 0.1) 0px, transparent 50%)
          `,
          animation: 'mesh-shift 20s ease-in-out infinite',
          opacity: 0.6,
        }}
      />
      <div
        className="absolute -left-20 top-6 w-[320px] h-[320px] rounded-full pointer-events-none sm:w-[520px] sm:h-[520px]"
        style={{
          background: 'radial-gradient(circle at 30% 40%, #FDDE48 0%, rgba(253,222,72,0.45) 18%, rgba(253,222,72,0.12) 30%, rgba(0,0,0,0) 60%)',
          filter: 'blur(80px)',
          opacity: 0.95,
          animation: 'float-glow-left 8s ease-in-out infinite',
        }}
      />

      <div
        className="absolute -right-12 bottom-12 w-[320px] h-[320px] rounded-full pointer-events-none sm:w-[540px] sm:h-[540px]"
        style={{
          background: 'radial-gradient(circle at 70% 60%, #C74643 0%, rgba(199,70,67,0.45) 18%, rgba(199,70,67,0.12) 30%, rgba(0,0,0,0) 65%)',
          filter: 'blur(80px)',
          opacity: 0.9,
          animation: 'float-glow-right 10s ease-in-out infinite',
        }}
      />

      {/* Floating particles */}
      <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-yellow-400/40 rounded-full" style={{ animation: 'float-particle-1 6s ease-in-out infinite' }} />
      <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-red-400/30 rounded-full" style={{ animation: 'float-particle-2 8s ease-in-out infinite' }} />
      <div className="absolute top-[60%] left-[20%] w-4 h-4 bg-yellow-400/30 rounded-full" style={{ animation: 'float-particle-3 7s ease-in-out infinite' }} />
      <div className="absolute top-[40%] right-[25%] w-3 h-3 bg-red-400/40 rounded-full" style={{ animation: 'float-particle-4 9s ease-in-out infinite' }} />
      <div className="absolute top-[70%] right-[35%] w-2 h-2 bg-yellow-400/35 rounded-full" style={{ animation: 'float-particle-5 5s ease-in-out infinite' }} />
      <div className="absolute top-[35%] left-[30%] w-3 h-3 bg-red-400/25 rounded-full" style={{ animation: 'float-particle-6 10s ease-in-out infinite' }} />
      <div className="absolute top-[80%] left-[40%] w-2 h-2 bg-yellow-400/40 rounded-full" style={{ animation: 'float-particle-1 7s ease-in-out infinite 1s' }} />
      <div className="absolute top-[20%] left-[50%] w-4 h-4 bg-red-400/30 rounded-full" style={{ animation: 'float-particle-2 6s ease-in-out infinite 2s' }} />

      {/* Decorative shape images positioned as per Figma */}
      {/* Yellow/Gold Square - Bottom Left within frame */}
      <div className="hidden md:block absolute left-[16.3%] bottom-[-15%] w-[604px] h-[604px] opacity-95" style={{ animation: 'float-shape-1 12s ease-in-out infinite' }}>
        <img src={squareImg} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Pink/Red Triangle - Bottom Right within frame */}
      <div className="hidden md:block absolute right-[16%] bottom-[-10%] w-[532px] h-[532px] opacity-90" style={{ animation: 'float-shape-2 14s ease-in-out infinite' }}>
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
          {['Full-spectrum', 'Web3', 'services', '&', 'solutions'].map((word, index) => (
            <span
              key={index}
              className="inline-block overflow-hidden"
              style={{
                clipPath: isRevealed ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                transition: `clip-path 2s cubic-bezier(0.65, 0, 0.35, 1) ${index * 0.5}s`,
              }}
            >
              <span className="inline-block px-1">
                {word}
                {index === 1 && <br />}
              </span>
            </span>
          ))}
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
