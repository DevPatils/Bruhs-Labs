import Header from '../components/Header';

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

      <main className="relative z-10 pt-28 pb-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">About</h1>

          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            <span className="text-yellow-400 font-semibold">Bruhs Labs</span> is a full-spectrum Web3 agency providing comprehensive blockchain services and solutions for projects across the ecosystem. We help founders, protocols, and brands navigate the decentralized landscape with clear strategies and reliable execution.
          </p>

          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Our expertise covers smart contract development, NFT and token launches, decentralized application design, marketing and community growth, and strategic partnerships. Each engagement is driven by precision, transparency, and a commitment to long-term project success.
          </p>

          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            At Bruhs Labs, we bring together technology, strategy, and creativity to deliver meaningful impact in the evolving world of Web3.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
