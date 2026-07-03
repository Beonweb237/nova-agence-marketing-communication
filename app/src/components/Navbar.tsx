import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Campagnes', href: '/campaigns' },
  { label: 'Clients', href: '/clients' },
  { label: 'Équipe', href: '/team' },
  { label: 'Insights', href: '/insights' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          height: '72px',
          backgroundColor: scrolled ? '#FFFFFF' : 'transparent',
        }}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6">
          <Link
            to="/"
            className="font-display text-[1.25rem] font-bold tracking-tight"
            style={{ color: scrolled ? '#000000' : '#FFFFFF' }}
          >
            NOVA
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="nav-link-underline relative font-display text-[0.875rem] font-bold uppercase tracking-[0.02em] transition-colors duration-300 hover:text-[#FF006E]"
                style={{ color: scrolled ? '#000000' : '#FFFFFF' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-[#FF006E] px-6 py-3 font-display text-[0.875rem] font-bold uppercase tracking-[0.05em] text-white transition-all duration-200 hover:scale-[1.02] hover:bg-black active:scale-[0.98]"
            >
              Parlons de votre projet
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ color: scrolled ? '#000000' : '#FFFFFF' }}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute right-0 top-0 flex h-full w-[280px] flex-col gap-6 bg-white p-6 pt-20"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-[1rem] font-bold uppercase tracking-[0.02em] text-black transition-colors hover:text-[#FF006E]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-[#FF006E] px-6 py-3 text-center font-display text-[0.875rem] font-bold uppercase tracking-[0.05em] text-white"
            >
              Parlons de votre projet
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #FF006E;
          transition: width 0.3s ease;
        }
        .nav-link-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
