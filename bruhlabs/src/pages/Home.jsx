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
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Services Section */}
      <section id="services" className="relative bg-black text-white">
        <main className="pt-28 pb-20 px-6 sm:px-10">
          <div className="max-w-[1920px] mx-auto">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg text-gray-300 mb-10">We build products, communities and creative content that move brands forward.</p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-12 items-start justify-center">
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

      {/* About Section */}
      <section id="about" className="relative bg-black text-white overflow-hidden mt-[5%]">
        <div className="max-w-[1920px] mx-auto relative h-full">
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
            className="absolute -right-12 bottom-8 w-[300px] h-[300px] rounded-full pointer-events-none sm:w-[540px] sm:h-[540px]"
            style={{
              background: 'radial-gradient(circle at 70% 60%, #C74643 0%, rgba(199,70,67,0.45) 18%, rgba(199,70,67,0.12) 30%, rgba(0,0,0,0) 65%)',
              filter: 'blur(80px)',
              opacity: 0.9,
            }}
          />

          <main className="relative z-10 h-[calc(100vh-88px)] flex flex-col justify-between pt-8 pb-8 px-6 sm:px-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About</h1>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                <span className="text-yellow-400 font-semibold">Bruhs Labs</span> is a full-spectrum <span className="text-yellow-400 font-semibold">Web3</span> agency providing comprehensive blockchain services and solutions for projects across the ecosystem. We help founders, protocols, and brands navigate the decentralized landscape with clear strategies and reliable execution.
              </p>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our expertise covers smart contract development, NFT and token launches, decentralized application design, marketing and community growth, and strategic partnerships. Each engagement is driven by precision, transparency, and a commitment to long-term project success.
              </p>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At Bruhs Labs, we bring together technology, strategy, and creativity to deliver meaningful impact in the evolving world of Web3.
              </p>
            </div>

            {/* Cofounders inline so About fits one viewport */}
            <div className="w-full">
              <div className="max-w-4xl mx-auto px-6 sm:px-0">
                <h2 className="text-2xl font-bold mb-6">Meet the Co-founders</h2>

                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
                  <div className="h-80 bg-transparent rounded-md flex flex-col items-center justify-center gap-4 p-6 text-center">
                        <a href="https://x.com/bruhgypsy" target="_blank" rel="noopener noreferrer" className="block">
                          <div className="w-56 h-56 bg-[#0f0f0f] rounded-md flex items-center justify-center overflow-hidden relative cursor-pointer hover:opacity-90 transition-opacity">
                            <img src={cofounder1} alt="GYPSY" className="max-w-[95%] max-h-[95%] object-contain" />
                          </div>
                        </a>
                        <div className="mt-3">
                          <div className="font-semibold text-xl text-white">GYPSY</div>
                          <a href="https://x.com/bruhgypsy" target="_blank" rel="noopener noreferrer" className="text-sm text-yellow-300 hover:underline">@bruhgypsy</a>
                          <div className="text-sm text-gray-300 mt-2">Design & product specialist.</div>
                        </div>
                      </div>
                      
                  <div className="h-80 bg-transparent rounded-md flex flex-col items-center justify-center gap-4 p-6 text-center">
                    <a href="https://x.com/messi_boii" target="_blank" rel="noopener noreferrer" className="block">
                      <div className="w-56 h-56 bg-[#0f0f0f] rounded-md flex items-center justify-center overflow-hidden relative cursor-pointer hover:opacity-90 transition-opacity">
                        <img src={cofounder2} alt="Messi boi" className="max-w-[95%] max-h-[95%] object-contain" />
                      </div>
                    </a>
                    <div className="mt-3">
                      <div className="font-semibold text-xl text-white">Messi boi</div>
                      <a href="https://x.com/messi_boii" target="_blank" rel="noopener noreferrer" className="text-sm text-yellow-300 hover:underline">@messi_boii</a>
                      <div className="text-sm text-gray-300 mt-2">Growth and community lead.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Contact Section */} 
      <section id="contact" className="relative bg-black text-white overflow-hidden">
        {/* background glows */}
        <div className="absolute -left-20 top-6 w-[300px] h-[300px] rounded-full pointer-events-none sm:w-[520px] sm:h-[520px]" style={{ background: 'radial-gradient(circle at 30% 40%, #FDDE48 0%, rgba(253,222,72,0.45) 18%, rgba(253,222,72,0.12) 30%, rgba(0,0,0,0) 60%)', filter: 'blur(80px)', opacity: 0.95 }} />
        <div className="absolute -right-12 bottom-8 w-[300px] h-[300px] rounded-full pointer-events-none sm:w-[540px] sm:h-[540px]" style={{ background: 'radial-gradient(circle at 70% 60%, #C74643 0%, rgba(199,70,67,0.45) 18%, rgba(199,70,67,0.12) 30%, rgba(0,0,0,0) 65%)', filter: 'blur(80px)', opacity: 0.9 }} />

        <main className="relative z-10 pt-28 pb-24 px-6 sm:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">Whether you're preparing to launch a new project, expand your ecosystem, or explore strategic collaborations, our team is ready to support you every step of the way.</p>

            <p className="text-lg text-gray-300 mb-10">Reach out through the contact form or email us directly, and we'll get back to you shortly.</p>

            <div className="mb-8">
              <div className="text-sm text-gray-400 mb-2">Get in touch:</div>
              
              <div className="text-base text-white font-medium">Email: hello@bruhslabs.com</div>
            </div>

            <div className="flex justify-center">
              <ProjectCTA />
            </div>
          </div>
        </main>

        {/* footer */}
        <footer className="relative z-10 mt-12 bg-[#3d2d2d] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-100">© 2025 Bruhs Labs — Crafted with ♥ in Web3.</div>
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
      </section>
    </div>
  );
};

export default Home;
