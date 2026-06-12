import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CampaignCard from '../components/CampaignCard';
import type { Campaign } from '../components/CampaignCard';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const campaigns: Campaign[] = [
  {
    id: 1,
    image: '/img-campaign-1.jpg',
    title: 'Renaissance Digitale',
    client: 'LUMIERE Cosmetiques',
    type: 'Social Media',
    sector: 'Luxe',
    year: 2024,
    stats: ['+340% engagement', '+2.1M impressions', '+18% conversion'],
  },
  {
    id: 2,
    image: '/img-campaign-2.jpg',
    title: 'Lead Generation Machine',
    client: 'TECHFLOW B2B',
    type: 'Digital',
    sector: 'Tech',
    year: 2024,
    stats: ['+280% trafic organique', '+156% leads qualifies'],
  },
  {
    id: 3,
    image: '/img-campaign-3.jpg',
    title: 'Lancement Luxe',
    client: 'MAISON EDOUARD',
    type: 'RP',
    sector: 'Luxe',
    year: 2023,
    stats: ['47 articles presse', '23M impressions', '450K EUR EMV'],
  },
  {
    id: 4,
    image: '/img-campaign-4.jpg',
    title: 'Soldes Hiver Record',
    client: 'VERTIGO SPORT',
    type: 'Digital',
    sector: 'Sport',
    year: 2024,
    stats: ['+520% ROAS', '-35% CPA', '1.8M EUR CA'],
  },
  {
    id: 5,
    image: '/img-campaign-5.jpg',
    title: 'Content Leadership',
    client: 'BANQUE PRIVEE',
    type: 'Digital',
    sector: 'Finance',
    year: 2024,
    stats: ['+180% trafic blog', '+95% temps de lecture'],
  },
  {
    id: 6,
    image: '/img-campaign-6.jpg',
    title: 'Marque Engagee',
    client: 'ALIMENTERRA',
    type: 'Branding',
    sector: 'Food',
    year: 2023,
    stats: ['+890K communaute', '+125% notoriete', '3 prix'],
  },
];

const typeFilters = ['Tous', 'Branding', 'Digital', 'Social Media', 'RP'];

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function Campaigns() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  /* ---- Hero entrance animation ---- */
  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  /* ---- Filter logic ---- */
  const filteredCampaigns =
    activeFilter === 'Tous'
      ? campaigns
      : campaigns.filter((c) => c.type === activeFilter);

  /* ---- Scroll-triggered section reveals ---- */
  useScrollReveal();

  return (
    <div>
      {/* ============================================================ */}
      {/* SECTION 1 — HERO                                              */}
      {/* ============================================================ */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center bg-black"
        style={{ minHeight: '60vh', paddingTop: '72px' }}
      >
        <div className="mx-auto max-w-[900px] px-6 py-24 text-center">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
            className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FFBE0B]"
          >
            PORTFOLIO
          </motion.span>

          {/* Headline */}
          <div className="mt-4 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: '120%' }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
              className="font-display text-[7vw] font-bold leading-[0.95] tracking-tight text-white lg:text-[100px]"
            >
              Nos Campagnes
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8, ease: easeOutExpo }}
            className="mx-auto mt-6 max-w-[600px] font-body text-[1.25rem] leading-relaxed text-white/80"
          >
            Des strategies creatives, des resultats mesurables. Decouvrez nos
            campagnes les plus marquantes.
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — FILTER BAR                                        */}
      {/* ============================================================ */}
      <section
        className="sticky z-40 border-b border-[#E5E5E5] bg-white"
        style={{ top: '72px' }}
      >
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-4 px-6 py-4">
          <span className="mr-2 font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#6B7280]">
            TYPE
          </span>
          {typeFilters.map((filter) => (
            <motion.button
              key={filter}
              layout
              onClick={() => setActiveFilter(filter)}
              className="rounded-full px-5 py-2 font-display text-[0.875rem] font-bold transition-colors duration-200"
              style={{
                backgroundColor:
                  activeFilter === filter ? '#FF006E' : '#F5F5F5',
                color: activeFilter === filter ? '#FFFFFF' : '#374151',
              }}
              whileHover={
                activeFilter !== filter
                  ? { backgroundColor: '#FF006E', color: '#FFFFFF' }
                  : {}
              }
              whileTap={{ scale: 0.98 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — CAMPAIGN GRID                                     */}
      {/* ============================================================ */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredCampaigns.map((campaign, index) => (
                <CampaignCard
                  key={campaign.id}
                  campaign={campaign}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCampaigns.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center font-body text-[1.125rem] text-[#6B7280]"
            >
              Aucune campagne ne correspond a ce filtre.
            </motion.p>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — CASE STUDY DEEP DIVE                              */}
      {/* ============================================================ */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FFBE0B]">
              ETUDE DE CAS
            </span>
            <h2 className="mt-3 font-display text-[3vw] font-bold leading-tight tracking-tight text-white lg:text-[42px]">
              Renaissance Digitale &mdash; LUMIERE Cosmetiques
            </h2>
          </div>

          {/* Two-column content */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left — Image */}
            <div className="reveal-left">
              <img
                src="/img-campaign-1.jpg"
                alt="Renaissance Digitale"
                className="w-full rounded-2xl object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>

            {/* Right — Content */}
            <div className="flex flex-col justify-center space-y-8 lg:pl-12">
              {/* The Brief */}
              <div className="reveal-up">
                <span className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FF006E]">
                  LE BRIEF
                </span>
                <p className="mt-2 font-body text-[1rem] leading-relaxed text-white/80">
                  LUMIERE Cosmetiques, maison de beaute francaise premium,
                  souhaitait moderniser son image digitale tout en preservant
                  son heritage luxe. L&apos;objectif : capter une audience plus
                  jeune (25-35 ans) sans aliener la clientele existante.
                </p>
              </div>

              {/* The Strategy */}
              <div className="reveal-up">
                <span className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FF006E]">
                  LA STRATEGIE
                </span>
                <p className="mt-2 font-body text-[1rem] leading-relaxed text-white/80">
                  Plateforme creative &ldquo;Renaissance Digitale&rdquo; &mdash;
                  fusion du patrimoine et de la modernite. Campagne cross-canal :
                  contenu brand hero, activation Instagram/TikTok avec 15
                  influenceurs lifestyle, pop-up immersive a Paris, et programme
                  CRM cible.
                </p>
              </div>

              {/* The Results */}
              <div className="reveal-up">
                <span className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FF006E]">
                  LES RESULTATS
                </span>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {[
                    { value: '+340%', label: 'ROI' },
                    { value: '+2.1M', label: 'impressions' },
                    { value: '+18%', label: 'conversion' },
                    { value: '+340%', label: 'engagement' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-[#111] p-4"
                    >
                      <p className="font-display text-[1.5rem] font-bold text-[#FFBE0B]">
                        {stat.value}
                      </p>
                      <p className="mt-1 font-mono text-[0.75rem] font-bold uppercase tracking-[0.05em] text-white/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — CTA                                               */}
      {/* ============================================================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <div className="reveal-up">
            <h2 className="font-display text-[3vw] font-bold leading-tight tracking-tight text-black lg:text-[42px]">
              Une idee de campagne ?
            </h2>
          </div>
          <div className="reveal-up">
            <p className="mt-4 font-body text-[1.125rem] leading-relaxed text-[#6B7280]">
              Racontez-nous votre projet. Nous construirons la strategie qui
              fera la difference.
            </p>
          </div>
          <div className="reveal-up mt-8">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-[#FF006E] px-10 py-4 font-display text-[1rem] font-bold uppercase tracking-[0.05em] text-white transition-all duration-200 hover:scale-[1.02] hover:bg-black active:scale-[0.98]"
            >
              Demarrer un projet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HOOK — Scroll reveal for section elements                         */
/* ------------------------------------------------------------------ */

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    const revealEls = document.querySelectorAll('.reveal-up, .reveal-left');
    revealEls.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      if (htmlEl.classList.contains('reveal-left')) {
        htmlEl.style.transform = 'translateX(-40px)';
      } else {
        htmlEl.style.transform = 'translateY(40px)';
      }
      htmlEl.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(htmlEl);
    });

    return () => observer.disconnect();
  }, []);
}
