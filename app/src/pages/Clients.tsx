import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import type { Testimonial } from '../components/TestimonialCard';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const clientNames = [
  'LUMIERE',
  'TECHFLOW',
  'MAISON EDOUARD',
  'VERTIGO SPORT',
  'BANQUE PRIVEE',
  'ECOCO',
  'STARTER WARE',
  'ALIMENTERRA',
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'NOVA a transforme notre approche digitale en 6 mois. Leur creativite et leur rigueur sont exceptionnelles.',
    author: 'Marie L.',
    role: 'DG',
    company: 'LUMIERE',
    metric: '+340% ROI',
    avatarColor: '#FF006E',
  },
  {
    id: 2,
    quote:
      'Une equipe a l ecoute, des idees fraiches et des resultats qui parlent d eux-memes.',
    author: 'Pierre D.',
    role: 'CMO',
    company: 'TECHFLOW',
    metric: '+156% leads',
    avatarColor: '#3A86FF',
  },
  {
    id: 3,
    quote:
      'Le partenariat avec NOVA a depasse toutes nos attentes. Professionnalisme et innovation.',
    author: 'Sophie B.',
    role: 'Directrice',
    company: 'MAISON EDOUARD',
    metric: '47 articles presse',
    avatarColor: '#FFBE0B',
  },
];

const caseStudies = [
  {
    client: 'LUMIERE',
    sector: 'Luxe',
    campaign: 'Renaissance Digitale',
    result: '+340% ROI, +2.1M impressions',
  },
  {
    client: 'TECHFLOW',
    sector: 'Tech',
    campaign: 'Lead Generation Machine',
    result: '+156% leads qualifies',
  },
  {
    client: 'MAISON EDOUARD',
    sector: 'Luxe',
    campaign: 'Lancement Luxe',
    result: '47 articles presse, 23M impressions',
  },
  {
    client: 'VERTIGO SPORT',
    sector: 'Sport',
    campaign: 'Soldes Hiver Record',
    result: '+520% ROAS, 1.8M EUR CA',
  },
];

const stats = [
  { value: '45+', label: 'clients actifs' },
  { value: '87%', label: 'de recommandation' },
  { value: '4.8/5', label: 'satisfaction' },
  { value: '12', label: 'pays' },
];

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function Clients() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useScrollReveal();

  return (
    <div>
      {/* ============================================================ */}
      {/* SECTION 1 — HERO                                              */}
      {/* ============================================================ */}
      <section
        className="relative flex items-center justify-center bg-[#3A86FF]"
        style={{ minHeight: '50vh', paddingTop: '72px' }}
      >
        <div className="mx-auto max-w-[900px] px-6 py-24 text-center">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
            className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FFBE0B]"
          >
            NOS CLIENTS
          </motion.span>

          {/* Headline */}
          <div className="mt-4 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: '120%' }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
              className="font-display text-[7vw] font-bold leading-[0.95] tracking-tight text-white lg:text-[100px]"
            >
              Ils nous font confiance
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8, ease: easeOutExpo }}
            className="mx-auto mt-6 max-w-[600px] font-body text-[1.25rem] leading-relaxed text-white/90"
          >
            Des marques leaders et des pionniers qui partagent notre ambition de
            creer l&apos;impact.
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — CLIENT LOGO GRID                                  */}
      {/* ============================================================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FF006E]">
              PARTENAIRES
            </span>
            <h2 className="mt-3 font-display text-[3vw] font-bold leading-tight tracking-tight text-black lg:text-[42px]">
              +80 marques accompagnees
            </h2>
          </div>

          {/* Logo grid — text-based monospace logos */}
          <div className="grid grid-cols-2 items-center justify-items-center gap-12 sm:grid-cols-3 lg:grid-cols-4">
            {clientNames.map((name, index) => (
              <LogoItem key={name} name={name} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — TESTIMONIALS                                      */}
      {/* ============================================================ */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FF006E]">
              TEMOIGNAGES
            </span>
            <h2 className="mt-3 font-display text-[4vw] font-bold leading-tight tracking-tight text-black">
              Ce qu&apos;ils disent de nous
            </h2>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: easeOutExpo,
                }}
              >
                <TestimonialCard testimonial={t} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS ROW (between testimonials and case studies)             */}
      {/* ============================================================ */}
      <section className="border-y border-[#E5E5E5] bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: easeOutExpo,
                }}
                className="text-center"
              >
                <p className="font-display text-[2.5rem] font-bold text-[#FF006E]">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#6B7280]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — CASE STUDIES BY CLIENT                            */}
      {/* ============================================================ */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FFBE0B]">
              ETUDES DE CAS
            </span>
            <h2 className="mt-3 font-display text-[4vw] font-bold leading-tight tracking-tight text-white">
              Resultats prouves
            </h2>
          </div>

          {/* Case study cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {caseStudies.map((cs, index) => (
              <CaseStudyCard key={cs.client} caseStudy={cs} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — PARTNER CTA                                       */}
      {/* ============================================================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <div className="reveal-up">
            <h2 className="font-display text-[3vw] font-bold leading-tight tracking-tight text-black lg:text-[42px]">
              Rejoignez nos clients satisfaits
            </h2>
          </div>
          <div className="reveal-up">
            <p className="mt-4 font-body text-[1.125rem] leading-relaxed text-[#6B7280]">
              Vous aussi, confiez-nous votre communication. Ensemble, creons des
              campagnes qui marquent les esprits.
            </p>
          </div>
          <div className="reveal-up mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-[#FF006E] px-10 py-4 font-display text-[1rem] font-bold uppercase tracking-[0.05em] text-white transition-all duration-200 hover:scale-[1.02] hover:bg-black active:scale-[0.98]"
            >
              Devenir client
            </Link>
            <Link
              to="/campaigns"
              className="inline-block rounded-full border-2 border-black bg-transparent px-10 py-4 font-display text-[1rem] font-bold uppercase tracking-[0.05em] text-black transition-all duration-200 hover:border-[#FF006E] hover:bg-[#FF006E] hover:text-white active:scale-[0.98]"
            >
              Voir nos campagnes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SUB-COMPONENT: Logo Item                                         */
/* ------------------------------------------------------------------ */

function LogoItem({ name, index }: { name: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className="flex h-20 w-full max-w-[200px] items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
        opacity: isHovered ? 1 : 0.5,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'filter 0.3s ease-out, opacity 0.3s ease-out, transform 0.3s ease-out',
      }}
    >
      <span className="whitespace-nowrap font-mono text-[1.25rem] font-bold uppercase tracking-[0.05em] text-black">
        {name}
      </span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  SUB-COMPONENT: Case Study Card                                   */
/* ------------------------------------------------------------------ */

function CaseStudyCard({
  caseStudy,
  index,
}: {
  caseStudy: (typeof caseStudies)[number];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className="rounded-2xl border border-[#222] bg-[#111111] p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? '#FF006E' : '#222222',
        boxShadow: isHovered
          ? '0 8px 32px rgba(255,0,110,0.12)'
          : 'none',
        transition: 'border-color 0.25s ease-out, box-shadow 0.25s ease-out',
      }}
    >
      {/* Client name */}
      <h3 className="font-display text-[1.5rem] font-bold text-white">
        {caseStudy.client}
      </h3>

      {/* Sector tag */}
      <span className="mt-2 inline-block rounded-sm bg-[#3A86FF] px-2.5 py-1 font-mono text-[0.625rem] font-bold uppercase tracking-[0.1em] text-white">
        {caseStudy.sector}
      </span>

      {/* Campaign */}
      <p className="mt-4 font-body text-[1.125rem] text-[#FFBE0B]">
        {caseStudy.campaign}
      </p>

      {/* Result */}
      <p className="mt-3 font-mono text-[1.25rem] font-bold text-[#FF006E]">
        {caseStudy.result}
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  HOOK — Scroll reveal                                             */
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

    const revealEls = document.querySelectorAll('.reveal-up');
    revealEls.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(40px)';
      htmlEl.style.transition =
        'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(htmlEl);
    });

    return () => observer.disconnect();
  }, []);
}
