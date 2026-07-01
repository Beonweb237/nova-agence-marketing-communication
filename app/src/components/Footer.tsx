import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Campagnes', href: '/campaigns' },
  { label: 'Clients', href: '/clients' },
  { label: '\u00C9quipe', href: '/team' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  'Strat\u00E9gie de marque',
  'Social Media',
  'SEO & SEA',
  'Content Marketing',
  'Branding & Design',
  'RP & Influence',
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="font-display text-[1.5rem] font-bold text-white">
              NOVA
            </Link>
            <p className="mt-4 font-body text-[0.875rem] leading-relaxed text-[#6B7280]">
              Agence marketing et communication ind\u00E9pendante. Nous concevons des strat\u00E9gies cr\u00E9atives qui transforment les marques et g\u00E9n\u00E8rent des r\u00E9sultats mesurables.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-display text-[0.875rem] font-bold uppercase tracking-[0.05em] text-white">
              Navigation
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-display text-[0.875rem] font-bold text-white transition-colors hover:text-[#FF006E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-display text-[0.875rem] font-bold uppercase tracking-[0.05em] text-white">
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="font-body text-[0.875rem] text-[#6B7280] transition-colors hover:text-[#FF006E]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social + Newsletter */}
          <div>
            <h4 className="font-display text-[0.875rem] font-bold uppercase tracking-[0.05em] text-white">
              Suivez-nous
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] transition-colors hover:text-[#FF006E]"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] transition-colors hover:text-[#FF006E]"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] transition-colors hover:text-[#FF006E]"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
            </div>

            <h4 className="mt-8 font-display text-[0.875rem] font-bold uppercase tracking-[0.05em] text-white">
              Newsletter
            </h4>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 rounded-sm border border-[#374151] bg-[#111] px-3 py-2 font-body text-[0.875rem] text-white placeholder-[#6B7280] outline-none focus:border-[#FF006E]"
              />
              <button className="rounded-sm bg-[#FF006E] px-4 py-2 font-display text-[0.75rem] font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-white hover:text-[#FF006E]">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#222] pt-8 sm:flex-row">
          <p className="font-body text-[0.75rem] text-[#6B7280]">
            &copy; {new Date().getFullYear()} NOVA Agence. Tous droits r\u00E9serv\u00E9s.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="font-body text-[0.75rem] text-[#6B7280] transition-colors hover:text-[#FF006E]">
              Mentions l\u00E9gales
            </Link>
            <Link to="#" className="font-body text-[0.75rem] text-[#6B7280] transition-colors hover:text-[#FF006E]">
              Politique de confidentialit\u00E9
            </Link>
            <a
              href="https://www.beonweb.cm/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[0.75rem] text-[#6B7280] transition-colors hover:text-[#FF006E]"
            >
              Con\u00E7u par Beonweb
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
