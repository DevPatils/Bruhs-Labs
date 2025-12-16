import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCTA from '../components/ProjectCTA';

import artIcon from '../assets/artndesign.png';
import animationsIcon from '../assets/animations.png';
import productVideosIcon from '../assets/videoproducts.png';
import collabIcon from '../assets/collabmanagement.png';
import marketingIcon from '../assets/marketing.png';
import socialIcon from '../assets/socialmedia.png';
import communityIcon from '../assets/communitymanagement.png';
import productMgmtIcon from '../assets/productmanagement.png';
import advisoryIcon from '../assets/advisory.png';
import devsupportIcon from '../assets/devsupport.png';
import cofounder1 from '../assets/cofounder1.png';
import cofounder2 from '../assets/cofounder2.png';

const services = [
  { title: 'Art & Design', icon: artIcon },
  { title: 'Animations', icon: animationsIcon },
  { title: 'Product Videos', icon: productVideosIcon },
  { title: 'Collab Management', icon: collabIcon },
  { title: 'Marketing', icon: marketingIcon },
  { title: 'Social Media Management', icon: socialIcon },
  { title: 'Community Management', icon: communityIcon },
  { title: 'Product Management', icon: productMgmtIcon },
  { title: 'Advisory', icon: advisoryIcon },
  { title: 'Dev support', icon: devsupportIcon }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section - Full viewport */}
      <section id="home" className="h-screen">
        <Hero />
      </section>

      {/* Services Section - Full viewport */}
      <section id="services" className="relative bg-black text-white h-screen flex items-center overflow-hidden">
        <main className="w-full px-[3vw] py-[2vh]">
          <div className="max-w-[1920px] mx-auto h-full flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
              <h1 className="font-bold mb-[2vh]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                Our Services
              </h1>
              <p className="text-gray-300 mb-[3vh]" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
                We build products, communities and creative content that move brands forward.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[2vw] items-start justify-center">
                {services.map((s) => (
                  <div key={s.title} className="flex justify-center">
                    <ServiceCard title={s.title} icon={s.icon} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* About Section - Full viewport */}
      <section id="about" className="relative bg-black text-white overflow-hidden h-screen flex items-center">
        <div className="max-w-[1920px] mx-auto relative w-full h-full">
          {/* Left yellow glow */}
          <div
            className="absolute -left-20 top-6 w-[300px] h-[300px] rounded-full pointer-events-none sm:w-[520px] sm:h-[520px]"
            style={{
              background: 'radial-gradient(circle at 30% 40%, #FDDE48 0%, rgba(253,222,72,0.45) 18%, rgba(253,222,72,0.12) 30%, rgba(0,0,0,0) 60%)',
              filter: 'blur(80px)',
              opacity: 0.95,
            }}
          />

          {/* Right red glow */}
          <div
            className="absolute -right-12 bottom-8 w-[300px] h-[300px] rounded-full pointer-events-none sm:w-[520px] sm:h-[520px]"
            style={{
              background: 'radial-gradient(circle at 70% 60%, #C74643 0%, rgba(199,70,67,0.45) 18%, rgba(199,70,67,0.12) 30%, rgba(0,0,0,0) 65%)',
              filter: 'blur(80px)',
              opacity: 0.9,
            }}
          />

          <main className="relative z-10 px-[3vw] h-full flex flex-col justify-center py-[4vh]">
            <div className="max-w-4xl mx-auto w-full">
              <h1 className="font-bold mb-[1.5vh]" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
                About
              </h1>

              <div className="space-y-[1vh]" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)' }}>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-yellow-400 font-semibold">Bruhs Labs</span> is a full-spectrum <span className="text-yellow-400 font-semibold">Web3</span> agency providing comprehensive blockchain services and solutions for projects across the ecosystem. We help founders, protocols, and brands navigate the decentralized landscape with clear strategies and reliable execution.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Our expertise covers smart contract development, NFT and token launches, decentralized application design, marketing and community growth, and strategic partnerships. Each engagement is driven by precision, transparency, and a commitment to long-term project success.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  At Bruhs Labs, we bring together technology, strategy, and creativity to deliver meaningful impact in the evolving world of Web3.
                </p>
              </div>
            </div>

            {/* Cofounders Section */}
            <div className="max-w-4xl mx-auto mt-[3vh] w-full">
              <h2 className="font-bold mb-[2vh] text-center" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>
                Meet the Co-founders
              </h2>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-[4vw]">
                {/* GYPSY Card */}
                <div className="flex flex-col items-center text-center">
                  <a href="https://x.com/bruhgypsy" target="_blank" rel="noopener noreferrer" className="block mb-[1vh]">
                    <div 
                      className="bg-[#0f0f0f] rounded-md flex items-center justify-center overflow-hidden relative cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ 
                        width: 'clamp(10rem, 15vw, 12rem)', 
                        height: 'clamp(10rem, 15vw, 12rem)' 
                      }}
                    >
                      <img src={cofounder1} alt="GYPSY" className="max-w-[95%] max-h-[95%] object-contain" />
                    </div>
                  </a>
                  <div className="space-y-[0.5vh]">
                    <div className="font-bold text-white" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
                      GYPSY
                    </div>
                    <a 
                      href="https://x.com/bruhgypsy" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-yellow-400 hover:text-yellow-300 hover:underline transition-colors"
                      style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)' }}
                    >
                      @bruhgypsy
                    </a>

                  </div>
                </div>
                      
                {/* Messi boi Card */}
                <div className="flex flex-col items-center text-center">
                  <a href="https://x.com/messi_boii" target="_blank" rel="noopener noreferrer" className="block mb-[1vh]">
                    <div 
                      className="bg-[#0f0f0f] rounded-md flex items-center justify-center overflow-hidden relative cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ 
                        width: 'clamp(10rem, 15vw, 12rem)', 
                        height: 'clamp(10rem, 15vw, 12rem)' 
                      }}
                    >
                      <img src={cofounder2} alt="Messi boi" className="max-w-[95%] max-h-[95%] object-contain" />
                    </div>
                  </a>
                  <div className="space-y-[0.5vh]">
                    <div className="font-bold text-white" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
                      Messi boi
                    </div>
                    <a 
                      href="https://x.com/messi_boii" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-yellow-400 hover:text-yellow-300 hover:underline transition-colors"
                      style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)' }}
                    >
                      @messi_boii
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Contact Section - Full viewport */}
      <section id="contact" className="relative bg-black text-white overflow-hidden h-screen flex items-center">
        {/* background glows */}
        <div className="absolute -left-20 top-6 w-[300px] h-[300px] rounded-full pointer-events-none sm:w-[520px] sm:h-[520px]" style={{ background: 'radial-gradient(circle at 30% 40%, #FDDE48 0%, rgba(253,222,72,0.45) 18%, rgba(253,222,72,0.12) 30%, rgba(0,0,0,0) 60%)', filter: 'blur(80px)', opacity: 0.95 }} />
        <div className="absolute -right-12 bottom-8 w-[300px] h-[300px] rounded-full pointer-events-none sm:w-[520px] sm:h-[520px]" style={{ background: 'radial-gradient(circle at 70% 60%, #C74643 0%, rgba(199,70,67,0.45) 18%, rgba(199,70,67,0.12) 30%, rgba(0,0,0,0) 65%)', filter: 'blur(80px)', opacity: 0.9 }} />

        <main className="relative z-10 w-full px-[3vw] h-full flex flex-col justify-center">
          <div className="max-w-3xl mx-auto text-center flex-1 flex flex-col justify-center">
            <p 
              className="text-gray-200 mb-[2vh] leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
            >
              Whether you're preparing to launch a new project, expand your ecosystem, or explore strategic collaborations, our team is ready to support you every step of the way.
            </p>

            <p 
              className="text-gray-300 mb-[3vh]"
              style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
            >
              Reach out through the contact form or email us directly, and we'll get back to you shortly.
            </p>

            <div className="mb-[3vh]">
              <div 
                className="text-gray-400 mb-[1vh]"
                style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)' }}
              >
                Get in touch:
              </div>
              
              <div 
                className="text-white font-medium"
                style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
              >
                Email: hello@bruhslabs.com
              </div>
            </div>

            <div className="flex justify-center mb-[4vh]">
              <ProjectCTA />
            </div>
          </div>

          {/* footer */}
          <footer className="border-t border-white/10 pt-[2vh] bg-[#3d2d2d] -mx-[3vw] px-[3vw] pb-[2vh] mt-[3vh]">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-[2vh]">
              <div 
                className="text-gray-100"
                style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}
              >
                © 2025 Bruhs Labs — Crafted with ♥ in Web3.
              </div>
              <div className="flex items-center gap-3">
                <a href="https://x.com/bruhslabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <span className="text-white font-bold text-sm">X</span>
                </a>
                <a href="#" className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <span className="text-white font-bold text-sm">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-[#EA4C89] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <span className="text-white font-bold text-sm">dr</span>
                </a>
                <a href="#" className="w-10 h-10 bg-[#1769FF] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <span className="text-white font-bold text-sm">Be</span>
                </a>
              </div>
            </div>
          </footer>
        </main>
      </section>
    </div>
  );
};

export default Home;