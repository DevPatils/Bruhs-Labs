import React from 'react';
import ProjectCTA from './ProjectCTA';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Gradient Effects (left yellow and right red glows) */}
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="absolute -left-40 top-10 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 40%, #FDDE48 0%, rgba(253,222,72,0.45) 18%, rgba(253,222,72,0.12) 30%, rgba(0,0,0,0) 60%)',
          filter: 'blur(80px)',
          opacity: 0.95,
        }}
      />

      <div
        className="absolute -right-36 bottom-16 w-[540px] h-[540px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 60%, #C74643 0%, rgba(199,70,67,0.45) 18%, rgba(199,70,67,0.12) 30%, rgba(0,0,0,0) 65%)',
          filter: 'blur(80px)',
          opacity: 0.9,
        }}
      />

      {/* 3D Shapes */}
      {/* Yellow/Gold Cube Shape - Left */}
      <div className="absolute left-[5%] bottom-[15%] w-64 h-80 opacity-90">
        <div className="relative w-full h-full">
          {/* Front face */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 transform rotate-[-15deg] skew-y-6"></div>
          {/* Side face */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 transform translate-x-8 translate-y-4 rotate-[-15deg] skew-y-6 opacity-80"></div>
          {/* Top face */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 transform -translate-y-8 translate-x-4 rotate-[-15deg] skew-x-12 opacity-70"></div>
        </div>
      </div>

      {/* Pink/Red Pyramid Shape - Right */}
      <div className="absolute right-[8%] bottom-[15%] w-64 h-64 opacity-80">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[130px] border-l-transparent border-r-[130px] border-r-transparent border-b-[220px] border-b-gradient-to-t from-pink-500 via-red-400 to-red-300" 
               style={{
                 borderBottomColor: '#f472b6',
                 filter: 'drop-shadow(0 0 40px rgba(244, 114, 182, 0.3))'
               }}>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Full-spectrum Web3<br />
          services & solutions
        </h1>
        
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
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
