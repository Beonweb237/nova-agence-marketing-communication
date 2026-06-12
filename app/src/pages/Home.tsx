import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lightbulb,
  Monitor,
  Share2,
  Users,
  PenTool,
  BarChart3,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────── Data ──────────────────────────── */

const services = [
  {
    icon: Lightbulb,
    title: 'Strat\u00E9gie de Marque',
    desc: 'Positionnement, architecture de marque, plateforme cr\u00E9ative, identit\u00E9 visuelle et verbale',
  },
  {
    icon: Monitor,
    title: 'Digital Marketing',
    desc: 'SEO/SEA, social ads, display, programmatic, analytics et optimisation de la conversion',
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: 'Community management, cr\u00E9ation de contenu, social listening, strat\u00E9gie cross-plateformes',
  },
  {
    icon: Users,
    title: 'Influence & PR',
    desc: 'Relations presse, partenariats influenceurs, brand advocacy, gestion de crise',
  },
  {
    icon: PenTool,
    title: 'Cr\u00E9ation & Design',
    desc: 'Direction artistique, design graphique, motion design, production vid\u00E9o et photo',
  },
  {
    icon: BarChart3,
    title: 'Performance & Data',
    desc: 'Tableaux de bord personnalis\u00E9s, attribution, reporting, recommandations data-driven',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery',
    desc: "Immersion dans votre marque, votre march\u00E9 et vos objectifs. Analyse concurrentielle, audits digitaux, et ateliers de co-cr\u00E9ation pour poser les bases strat\u00E9giques.",
  },
  {
    num: '02',
    title: 'Strat\u00E9gie',
    desc: "Construction de la plateforme de marque, d\u00E9finition des personas, planification m\u00E9dia et cr\u00E9ative. Chaque d\u00E9cision est data-informed.",
  },
  {
    num: '03',
    title: 'Cr\u00E9ation',
    desc: "Direction artistique, r\u00E9daction, design, production vid\u00E9o et photo. Notre \u00E9quipe cr\u00E9ative donne vie \u00E0 la strat\u00E9gie avec des id\u00E9es percutantes.",
  },
  {
    num: '04',
    title: 'Activation',
    desc: "D\u00E9ploiement cross-canal : social media, influence, digital, RP. Gestion de campagnes et optimisation en temps r\u00E9el.",
  },
  {
    num: '05',
    title: 'Mesure',
    desc: "Reporting avanc\u00E9, analyse des KPIs, recommandations d'optimisation. La boucle de feedback continue pour maximiser le ROI.",
  },
];

const campaigns = [
  {
    image: '/img-campaign-1.jpg',
    title: "L'Essence du Luxe",
    client: 'Maison V\u00E9ronne',
    stat1: '+340% ROI',
    stat2: '12M vues',
  },
  {
    image: '/img-campaign-2.jpg',
    title: 'Move Your Limits',
    client: 'FitPulse App',
    stat1: '+250% installs',
    stat2: '2M clics',
  },
  {
    image: '/img-campaign-3.jpg',
    title: 'Future is Green',
    client: '\u00C9coMode',
    stat1: '+180% engagement',
    stat2: '800K reach',
  },
];

const stats = [
  { num: 150, suffix: '+', label: 'Campagnes livr\u00E9es' },
  { num: 98, suffix: '%', label: 'Clients satisfaits' },
  { num: 3.2, suffix: 'B+', label: 'Impressions g\u00E9n\u00E9r\u00E9es', isDecimal: true },
  { num: 12, suffix: '', label: "Ann\u00E9es d'expertise" },
];

const clientLogos = [
  'LUMI\u00C8RE',
  'TECHFLOW',
  "MAISON \u00C9DOUARD",
  'VERTIGO SPORT',
  'BANQUE PRIVEE',
  'ECOCO',
  'STARTER WARE',
  'ALIMENTERRA',
];

const marqueeRow1 = 'STRATEGIE \u2014 CREATION \u2014 DIGITAL \u2014 INFLUENCE \u2014 BRANDING \u2014 SOCIAL MEDIA \u2014 PERFORMANCE \u2014 ';
const marqueeRow2 = 'AGENCE NOVA \u2014 PARIS \u2014 LYON \u2014 MARSEILLE \u2014 BORDEAUX \u2014 LILLE \u2014 ';

/* ──────────────────────────── Home Page ──────────────────────────── */

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MarqueeSection />
      <MissionSection />
      <ServicesSection />
      <ProcessSection />
      <CampaignsSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}

/* ═══════════════ Section 1: Hero ═══════════════ */

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    tl.to(heroRef.current, { opacity: 1, duration: 0.4 })
      .fromTo(tagRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.3)
      .fromTo(
        headlineRef.current?.querySelectorAll('.hero-word') || [],
        { y: '120%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.8, stagger: 0.08 },
        0.5
      )
      .fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, 0.9)
      .fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        1.1
      )
      .fromTo(scrollIndRef.current, { opacity: 0 }, { opacity: 0.6, duration: 0.5 }, 1.5);

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
      style={{ opacity: 0 }}
      ref={heroRef}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/video-hero.jpg)' }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.7))' }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[700px] px-[5vw] pt-[72px]">
        <span
          ref={tagRef}
          className="mb-6 inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FFBE0B]"
          style={{ opacity: 0 }}
        >
          AGENCE MARKETING & COMMUNICATION
        </span>

        <h1
          ref={headlineRef}
          className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-white"
          style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
        >
          <span className="block overflow-hidden">
            <span className="hero-word inline-block">NOVA</span>
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-6 max-w-[500px] font-body text-[1.25rem] leading-[1.4] text-white sm:text-[2rem]"
          style={{ opacity: 0 }}
        >
          We craft campaigns that move people.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4" style={{ opacity: 0 }}>
          <Link
            to="/campaigns"
            className="rounded-full bg-[#FF006E] px-8 py-4 font-display text-[1rem] font-bold uppercase tracking-[0.05em] text-white transition-all duration-200 hover:scale-[1.02] hover:bg-black active:scale-[0.98]"
          >
            Voir nos campagnes
          </Link>
          <Link
            to="/services"
            className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-display text-[1rem] font-bold uppercase tracking-[0.05em] text-white transition-all duration-200 hover:scale-[1.02] hover:border-[#FF006E] hover:bg-[#FF006E] active:scale-[0.98]"
          >
            Nos services
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndRef}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        style={{ opacity: 0 }}
      >
        <div className="animate-bounce text-[2rem] text-white">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ Section 2: Marquee ═══════════════ */

function MarqueeSection() {
  return (
    <section className="h-[80px] w-full overflow-hidden bg-[#FFBE0B]">
      <div className="relative flex h-full flex-col justify-center">
        {/* Row 1: left to right */}
        <div className="marquee-row-1 flex whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="mr-0 font-mono text-[2rem] font-bold uppercase tracking-[0.05em] text-black"
            >
              {marqueeRow1.split('').map((char, j) => (
                <span key={j}>{char === '\u2014' ? <span className="mx-3 opacity-40">&#9670;</span> : char}</span>
              ))}
            </span>
          ))}
        </div>
        {/* Row 2: right to left */}
        <div className="marquee-row-2 mt-1 flex whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="mr-0 font-mono text-[2rem] font-bold uppercase tracking-[0.05em] text-black"
            >
              {marqueeRow2.split('').map((char, j) => (
                <span key={j}>{char === '\u2014' ? <span className="mx-3 opacity-40">&#9670;</span> : char}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-row-1 {
          animation: marquee-left 30s linear infinite;
        }
        .marquee-row-2 {
          animation: marquee-right 25s linear infinite;
        }
        .marquee-row-1:hover, .marquee-row-2:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

/* ═══════════════ Section 3: Mission ═══════════════ */

function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: 'expo.out' },
      });
      tl.fromTo(labelRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
        .fromTo(headlineRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.8 }, 0)
        .fromTo(bodyRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6 }, 0.15);
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-32">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <span
          ref={labelRef}
          className="mb-6 inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FF006E]"
        >
          NOTRE MISSION
        </span>
        <h2
          ref={headlineRef}
          className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-[#FF006E]"
          style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
        >
          Make an Impact
        </h2>
        <p
          ref={bodyRef}
          className="mx-auto mt-8 max-w-[700px] font-body text-[1.25rem] leading-[1.5] text-[#374151] sm:text-[1.5rem]"
        >
          NOVA est une agence marketing et communication ind\u00E9pendante. Depuis 2015, nous concevons des strat\u00E9gies cr\u00E9atives qui transforment les marques et g\u00E9n\u00E8rent des r\u00E9sultats mesurables. De la strat\u00E9gie de marque au digital, en passant par l'influence et le content marketing, nous accompagnons nos clients \u00E0 chaque \u00E9tape de leur communication.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════ Section 4: Services ═══════════════ */

function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'expo.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F5F5F5] py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <h2
            className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-black"
            style={{ fontSize: 'clamp(32px, 5vw, 72px)' }}
          >
            Nos Services
          </h2>
          <Link
            to="/services"
            className="flex items-center gap-1 font-display text-[1rem] font-bold text-[#FF006E] transition-all hover:underline"
          >
            Tous nos services <ChevronRight size={18} />
          </Link>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-lg bg-white p-8 transition-all duration-200 hover:border-2 hover:border-[#FF006E] hover:shadow-[0_4px_24px_rgba(255,0,110,0.08)]"
              >
                <Icon
                  size={48}
                  className="text-[#FF006E] transition-transform duration-200 group-hover:scale-110"
                />
                <h3 className="mt-4 font-display text-[1.5rem] font-bold text-black">
                  {s.title}
                </h3>
                <p className="mt-2 font-body text-[1rem] leading-[1.6] text-[#6B7280]">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ Section 5: Process Accordion ═══════════════ */

function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 lg:flex-row">
        {/* Left column - sticky */}
        <div ref={leftRef} className="lg:sticky lg:top-[120px] lg:w-[40%] lg:self-start">
          <span className="mb-4 inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FF006E]">
            NOTRE PROCESS
          </span>
          <h2
            className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-black"
            style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
          >
            De l'id\u00E9e \u00E0 l'impact
          </h2>
          <p className="mt-4 max-w-[400px] font-body text-[1.125rem] leading-[1.6] text-[#6B7280]">
            Une m\u00E9thodologie \u00E9prouv\u00E9e pour des r\u00E9sultats garantis.
          </p>
        </div>

        {/* Right column - accordion */}
        <div className="lg:w-[60%]">
          {processSteps.map((step, i) => (
            <div key={step.num} className="border-b border-[#E5E5E5]">
              <button
                className="flex w-full items-center justify-between py-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[1rem] font-bold text-[#FFBE0B]">
                    {step.num}
                  </span>
                  <span className="font-display text-[1.5rem] font-bold text-black">
                    {step.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-[#6B7280]" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      exit={{ y: 10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="pb-6 font-body text-[1rem] leading-[1.6] text-[#6B7280]"
                    >
                      {step.desc}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ Section 6: Campaigns ═══════════════ */

function CampaignsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'expo.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <h2
            className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-white"
            style={{ fontSize: 'clamp(32px, 5vw, 72px)' }}
          >
            Campagnes R\u00E9centes
          </h2>
          <Link
            to="/campaigns"
            className="flex items-center gap-1 font-display text-[1rem] font-bold text-[#FF006E] transition-all hover:underline"
          >
            Voir tout le portfolio <ChevronRight size={18} />
          </Link>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {campaigns.map((c) => (
            <Link
              to="/campaigns"
              key={c.title}
              className="group block overflow-hidden rounded-md border border-[#222] bg-[#111] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(255,0,110,0.15)]"
            >
              <div className="overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-[1.5rem] font-bold text-white">
                  {c.title}
                </h3>
                <p className="mt-1 font-body text-[0.875rem] text-[#6B7280]">{c.client}</p>
                <div className="mt-3 flex gap-4 font-mono text-[0.875rem] font-bold text-[#FF006E]">
                  <span>{c.stat1}</span>
                  <span>{c.stat2}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ Section 7: Stats & Client Logos ═══════════════ */

function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate numbers counting up
      const statEls = statsRef.current?.querySelectorAll('.stat-number') || [];
      statEls.forEach((el) => {
        const target = parseFloat(el.getAttribute('data-target') || '0');
        const isDecimal = el.getAttribute('data-decimal') === 'true';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            once: true,
          },
          onUpdate() {
            if (isDecimal) {
              el.textContent = obj.val.toFixed(1);
            } else {
              el.textContent = Math.round(obj.val).toString();
            }
          },
        });
      });

      // Fade in labels
      gsap.fromTo(
        statsRef.current?.querySelectorAll('.stat-label') || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 80%', once: true },
        }
      );

      // Fade in logos
      gsap.fromTo(
        logosRef.current?.querySelectorAll('.logo-item') || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'expo.out',
          scrollTrigger: { trigger: logosRef.current, start: 'top 85%', once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="flex items-center justify-center gap-0">
                <span
                  className="stat-number font-display font-bold leading-[1.0] text-[#FF006E]"
                  style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
                  data-target={s.num}
                  data-decimal={s.isDecimal ? 'true' : 'false'}
                >
                  0
                </span>
                <span
                  className="font-display font-bold leading-[1.0] text-[#FF006E]"
                  style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
                >
                  {s.suffix}
                </span>
              </div>
              <p className="stat-label mt-2 font-body text-[1rem] text-[#6B7280]">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div ref={logosRef} className="mt-16">
          <p className="text-center font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#6B7280]">
            ILS NOUS FONT CONFIANCE
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="logo-item flex h-16 items-center justify-center grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              >
                <span className="font-display text-[1.25rem] font-bold tracking-[0.05em] text-black">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ Section 8: CTA ═══════════════ */

function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = contentRef.current?.children || [];
      gsap.fromTo(
        els,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FF006E] py-24">
      <div ref={contentRef} className="mx-auto max-w-[800px] px-6 text-center">
        <h2
          className="font-display font-bold leading-[1.0] tracking-[-0.02em] text-white"
          style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
        >
          Pr\u00EAt \u00E0 cr\u00E9er l'impact ?
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] font-body text-[1.125rem] leading-[1.6] text-white opacity-90 sm:text-[1.25rem]">
          Discutons de votre prochaine campagne. Notre \u00E9quipe est pr\u00EAte \u00E0 transformer vos objectifs en r\u00E9sultats.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-full border-2 border-white bg-transparent px-8 py-4 font-display text-[1rem] font-bold uppercase tracking-[0.05em] text-white transition-all duration-200 hover:scale-[1.02] hover:bg-white hover:text-[#FF006E] active:scale-[0.98]"
        >
          Nous contacter
        </Link>
      </div>
    </section>
  );
}
