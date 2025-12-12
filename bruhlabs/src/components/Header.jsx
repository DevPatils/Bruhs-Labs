import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';

const navItems = [
  { to: '#home', label: 'Home' },
  { to: '#services', label: 'Our Services' },
  { to: '#about', label: 'About' },
  { to: '#contact', label: 'Contact' },
];

const Header = () => {
  const navRef = useRef(null);
  const itemRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // place indicator under active section
    const idx = Math.max(0, navItems.findIndex((i) => i.to === `#${activeSection}`));
    placeIndicator(idx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  useEffect(() => {
    // initial placement
    const raf = requestAnimationFrame(() => placeIndicator(0));
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // observe which section is in view
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -66%',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  function placeIndicator(index) {
    const navEl = navRef.current;
    const el = itemRefs.current[index];
    if (!navEl || !el) {
      setIndicator((s) => ({ ...s, visible: false }));
      return;
    }
    const navRect = navEl.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const extra = index === 0 ? 44 : 12;
    const width = Math.max(24, rect.width - 12 + extra);
    const left = rect.left - navRect.left + 6 - Math.round(extra / 2);
    setIndicator({ left, width, visible: true });
  }

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        {/* Logo - left */}
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="absolute left-4 sm:left-8 flex items-center cursor-pointer">
          <Logo />
        </a>

        {/* Mobile menu button (visible on small screens) */}
        <button
          className="absolute right-4 sm:hidden p-2 rounded-md text-white z-40 border border-white/10 bg-black/30"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((s) => !s)}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        {/* Navigation - centered (desktop) */}
        <nav ref={navRef} className="hidden md:flex relative items-center bg-black/60 rounded-full px-3 py-2 border border-neutral-700/50 backdrop-blur-sm">
          {/* indicator: moves under active nav item */}
            <span
              aria-hidden
              className="absolute rounded-full pointer-events-none transition-all duration-300"
              style={{
                left: indicator.left,
                top: 3,
                bottom: 3,
                width: indicator.width,
                opacity: indicator.visible ? 1 : 0,
                background: 'linear-gradient(90deg, #FED408 0%, #D09A4A 45%, rgba(0,0,0,0) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)'
              }}
            />

          <div className="relative z-10 flex items-center space-x-6 md:space-x-12">
            {navItems.map((item, i) => (
              <a
                key={item.to}
                href={item.to}
                ref={(el) => (itemRefs.current[i] = el)}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.to);
                  placeIndicator(i);
                }}
                className={`px-6 py-2.5 rounded-full text-white font-medium transition-colors cursor-pointer`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile nav overlay */}
        {/* Mobile menu panel: always rendered but animated via transform/opacity for drawer effect */}
        <div
          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 md:hidden z-50 transition-all duration-300 ease-out ${
            mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="w-[92vw] max-w-sm mx-auto bg-black/70 backdrop-blur-md rounded-2xl border border-white/6 p-3 shadow-lg">
            <nav className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <a
                  key={item.to}
                  href={item.to}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.to);
                    placeIndicator(i);
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-white font-medium hover:bg-white/5 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
