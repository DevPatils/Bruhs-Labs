import Header from '../components/Header';
import cofounder1 from '../assets/cofounder1.png';
import cofounder2 from '../assets/cofounder2.png';

const cofounders = [
  { name: 'GYPSY', role: 'Co-founder', img: cofounder1, bio: 'Design & product specialist.', link: 'https://x.com/bruhgypsy' },
  { name: 'Messi boi', role: 'Co-founder', img: cofounder2, bio: 'Growth and community lead.', link: 'https://x.com/messi_boii' },
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Header />

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

      <main className="relative z-10 h-[calc(100vh-88px)] mt-[5%] flex flex-col justify-between px-6 sm:px-10 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">About</h1>

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
            <h2 className="text-3xl font-bold mb-6">Meet the Cofounders</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cofounders.map((c) => (
                <div key={c.name} className="h-72 bg-transparent rounded-md flex flex-col items-center justify-center gap-4 p-6 text-center">
                  {/* square panel behind image */}
                  <div className="w-48 h-48 bg-[#0f0f0f] rounded-md flex items-center justify-center overflow-hidden relative">
                    <img src={c.img} alt={c.name} className="max-w-[72%] max-h-[72%] object-contain" />
                    <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center py-1">
                      <div className="font-semibold text-sm">{c.name}</div>
                      <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-xs text-yellow-300 inline-block">{c.link.replace('https://x.com/','@')}</a>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="font-semibold text-xl text-white">{c.name}</div>
                    <div className="text-sm text-yellow-300">{c.link.replace('https://x.com/','@')}</div>
                    <div className="text-sm text-gray-300 mt-2">{c.bio}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
