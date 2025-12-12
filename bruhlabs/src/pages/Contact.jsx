import Header from '../components/Header';
import ProjectCTA from '../components/ProjectCTA';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* background glows (visible on mobile with smaller size) */}
      <div className="absolute -left-20 top-6 w-[300px] h-[300px] rounded-full pointer-events-none sm:w-[520px] sm:h-[520px]" style={{ background: 'radial-gradient(circle at 30% 40%, #FDDE48 0%, rgba(253,222,72,0.45) 18%, rgba(253,222,72,0.12) 30%, rgba(0,0,0,0) 60%)', filter: 'blur(80px)', opacity: 0.95 }} />
      <div className="absolute -right-12 bottom-8 w-[300px] h-[300px] rounded-full pointer-events-none sm:w-[540px] sm:h-[540px]" style={{ background: 'radial-gradient(circle at 70% 60%, #C74643 0%, rgba(199,70,67,0.45) 18%, rgba(199,70,67,0.12) 30%, rgba(0,0,0,0) 65%)', filter: 'blur(80px)', opacity: 0.9 }} />

      <main className="relative z-10 pt-28 pb-24 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">Whether you’re preparing to launch a new project, expand your ecosystem, or explore strategic collaborations, our team is ready to support you every step of the way.</p>

          <p className="text-lg text-gray-300 mb-10">Reach out through the contact form or email us directly, and we’ll get back to you shortly.</p>

          <div className="mb-8">
            <div className="text-sm text-gray-400 mb-2">Get in touch:</div>
            <div className="text-base text-white font-medium">Typeform: [Contact Form Button]</div>
            <div className="text-base text-white font-medium">Email: hello@bruhslabs.com</div>
          </div>

          <div className="flex justify-center">
            <ProjectCTA />
          </div>
        </div>
      </main>

      {/* centered rounded footer */}
      <footer className="relative z-10 mt-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="w-full rounded-[40px] bg-[rgba(207,139,139,0.3)] backdrop-blur-sm border border-white/5 py-6 px-6 flex items-center justify-between">
            <div className="text-sm text-gray-100">© 2025 Bruhs Labs — Crafted with ♥ in Web3.</div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/5 rounded-md flex items-center justify-center">X</div>
              <div className="w-9 h-9 bg-white/5 rounded-md flex items-center justify-center">in</div>
              <div className="w-9 h-9 bg-white/5 rounded-md flex items-center justify-center">dr</div>
              <div className="w-9 h-9 bg-white/5 rounded-md flex items-center justify-center">Be</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
