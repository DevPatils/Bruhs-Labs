import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Our Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const location = useLocation();
  const navRef = useRef(null);
  const itemRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

  useEffect(() => {
    // place indicator under current route
    const idx = Math.max(0, navItems.findIndex((i) => i.to === location.pathname));
    placeIndicator(idx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    // initial placement after mount
    const idx = Math.max(0, navItems.findIndex((i) => i.to === location.pathname));
    const raf = requestAnimationFrame(() => placeIndicator(idx));
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      // make Home slightly wider so the gold band looks balanced on the first item
      const extra = index === 0 ? 44 : 12;
      const width = Math.max(24, rect.width - 12 + extra);
      const left = rect.left - navRect.left + 6 - Math.round(extra / 2);
    setIndicator({ left, width, visible: true });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Logo - positioned absolutely on the left */}
        <Link to="/" className="absolute left-8 flex items-center">
          <Logo />
        </Link>

        {/* Navigation - centered */}
        <nav ref={navRef} className="relative flex items-center bg-black/60 rounded-full px-3 py-2 border border-neutral-700/50 backdrop-blur-sm">
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

          <div className="relative z-10 flex items-center space-x-12">
            {navItems.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                ref={(el) => (itemRefs.current[i] = el)}
                onClick={() => placeIndicator(i)}
                className={`px-6 py-2.5 rounded-full text-white font-medium transition-colors`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
