import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Linkedin, ArrowRight } from 'lucide-react';

/* ─── Animation helpers ─── */
const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOutExpo },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

/* ─── Data ─── */
const teamMembers = [
  {
    photo: '/img-team-1.jpg',
    name: 'Lucas Martin',
    role: 'Directeur Cr\u00E9atif',
    specialty: 'Direction artistique, storytelling',
    quote: "La meilleure id\u00E9e est celle qu'on n'a pas encore eue.",
  },
  {
    photo: '/img-team-2.jpg',
    name: 'Camille Rousseau',
    role: 'Strat\u00E8ge Senior',
    specialty: 'Brand strategy, consumer insights',
    quote: "Comprendre l'humain avant le pixel.",
  },
  {
    photo: '/img-team-3.jpg',
    name: 'Hugo Bernard',
    role: 'Account Director',
    specialty: 'Gestion de projet, relation client',
    quote: "L'excellence op\u00E9rationnelle, c'est notre signature.",
  },
  {
    photo: '/img-team-4.jpg',
    name: 'Emma Petit',
    role: 'Social Media Lead',
    specialty: 'Content strategy, community',
    quote: 'Chaque post est une opportunit\u00E9 de cr\u00E9er du lien.',
  },
  {
    photo: '/img-team-1.jpg',
    name: 'Nathan Moreau',
    role: 'Head of Digital',
    specialty: 'SEO/SEA, performance marketing',
    quote: 'Les donn\u00E9es racontent les meilleures histoires.',
  },
  {
    photo: '/img-team-2.jpg',
    name: 'L\u00E9a Fontaine',
    role: 'Influence Manager',
    specialty: 'Casting, partenariats, RP',
    quote: 'Le bon influenceur, c\u2019est celui qui partage vos valeurs.',
  },
  {
    photo: '/img-team-3.jpg',
    name: 'Maxime Girard',
    role: 'Motion Designer',
    specialty: 'Motion, vid\u00E9o, post-production',
    quote: 'Le mouvement donne vie aux id\u00E9es.',
  },
  {
    photo: '/img-team-4.jpg',
    name: 'Sarah Blanc',
    role: 'Data Analyst',
    specialty: 'Analytics, reporting, attribution',
    quote: 'Chaque d\u00E9cision m\u00E9rite ses chiffres.',
  },
];

const openPositions = [
  'Strat\u00E8ge Senior (H/F) \u2014 CDI \u2014 Paris',
  'Motion Designer (H/F) \u2014 CDI \u2014 Paris',
  'Account Manager (H/F) \u2014 CDI \u2014 Lyon',
  'Social Media Manager (H/F) \u2014 Stage \u2014 Paris',
];

/* ─── Main Page ─── */
export default function Team() {
  const heroRef = useRef(null);
  const cultureRef = useRef(null);
  const teamRef = useRef(null);
  const joinRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const cultureInView = useInView(cultureRef, { once: true, amount: 0.3 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.1 });
  const joinInView = useInView(joinRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <div>
      {/* ════════════════════════════════════════════
          SECTION 1 — Hero
      ════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex min-h-[50vh] items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#FFBE0B', paddingTop: '72px' }}
      >
        <div className="relative z-10 mx-auto max-w-[900px] px-6 py-24 text-center">
          <motion.span
            className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
          >
            L&apos;&Eacute;QUIPE
          </motion.span>

          <motion.h1
            className="mt-4 font-display text-[7vw] font-bold leading-[0.95] tracking-tight text-black max-md:text-[12vw]"
            initial={{ opacity: 0, y: 60 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
          >
            Les talents NOVA
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-[600px] font-body text-[1.25rem] leading-relaxed text-black"
            style={{ opacity: 0.8 }}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 0.8, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8, ease: easeOutExpo }}
          >
            Strat&egrave;ges, cr&eacute;atifs, account managers, media planners &mdash; une &eacute;quipe passionn&eacute;e par l&apos;impact.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — Culture Statement
      ════════════════════════════════════════════ */}
      <section ref={cultureRef} className="bg-white py-24">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <motion.span
            className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FF006E]"
            variants={fadeUp}
            initial="hidden"
            animate={cultureInView ? 'visible' : 'hidden'}
            custom={0}
          >
            NOTRE CULTURE
          </motion.span>

          <motion.h2
            className="mx-auto mt-3 font-display text-[3vw] font-bold leading-[1.1] tracking-tight text-black max-md:text-[8vw]"
            style={{ maxWidth: '700px' }}
            variants={fadeUp}
            initial="hidden"
            animate={cultureInView ? 'visible' : 'hidden'}
            custom={0.05}
          >
            La cr&eacute;ativit&eacute; au service des r&eacute;sultats
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-[650px] font-body text-[1.25rem] leading-[1.6] text-[#374151]"
            variants={fadeUp}
            initial="hidden"
            animate={cultureInView ? 'visible' : 'hidden'}
            custom={0.15}
          >
            Chez NOVA, chaque id&eacute;e doit passer le test des chiffres. Nous croyons que la meilleure cr&eacute;ativit&eacute; est celle qui performe. Notre culture ? Audace, rigueur, et une obsession du d&eacute;tail.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3 — Team Grid
      ════════════════════════════════════════════ */}
      <section ref={teamRef} className="bg-[#F5F5F5] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            animate={teamInView ? 'visible' : 'hidden'}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                className="group overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
              >
                {/* Photo */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-[1.25rem] font-bold text-black">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-body text-[0.875rem] text-[#FF006E]">
                    {member.role}
                  </p>
                  <p className="mt-2 font-body text-[0.875rem] text-[#6B7280]">
                    {member.specialty}
                  </p>

                  <div className="my-4 h-[1px] w-full bg-[#E5E5E5]" />

                  <p className="font-display text-[1rem] italic leading-[1.4] text-[#374151]">
                    &ldquo;{member.quote}&rdquo;
                  </p>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-body text-[0.875rem] text-[#6B7280] transition-colors hover:text-[#FF006E]"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4 — Join the Team
      ════════════════════════════════════════════ */}
      <section ref={joinRef} className="bg-black py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-12 md:flex-row">
            {/* Left Column */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -40 }}
              animate={joinInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: easeOutExpo }}
            >
              <span className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FFBE0B]">
                REJOINDRE L&apos;&Eacute;QUIPE
              </span>
              <h2 className="mt-3 font-display text-[3vw] font-bold leading-[1.1] text-white max-md:text-[8vw]">
                Vous &ecirc;tes cr&eacute;atif et r&eacute;sultats-orient&eacute; ?
              </h2>
              <p className="mt-4 max-w-[480px] font-body text-[1.125rem] leading-relaxed text-white" style={{ opacity: 0.8 }}>
                Nous recrutons toujours des talents passionn&eacute;s. Rejoignez une agence o&ugrave; votre cr&eacute;ativit&eacute; rencontre l&apos;impact.
              </p>
              <Link
                to="#"
                className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 font-display text-[1rem] font-bold uppercase tracking-[0.05em] text-white transition-all duration-200 hover:border-[#FF006E] hover:bg-[#FF006E]"
              >
                Voir nos offres
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Right Column — Open Positions */}
            <motion.div
              className="flex-1 md:pl-12"
              variants={staggerContainer}
              initial="hidden"
              animate={joinInView ? 'visible' : 'hidden'}
            >
              {openPositions.map((position) => (
                <motion.div
                  key={position}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4, ease: easeOutExpo },
                    },
                  }}
                  className="cursor-pointer border-b border-[#222] py-4 font-body text-[1rem] text-white transition-colors duration-200 hover:text-[#FFBE0B]"
                >
                  {position}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 5 — CTA
      ════════════════════════════════════════════ */}
      <section ref={ctaRef} className="bg-white py-24">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <motion.h2
            className="font-display text-[3vw] font-bold leading-[1.1] text-black max-md:text-[8vw]"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.625rem)' }}
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            custom={0}
          >
            Envie de collaborer ?
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-[600px] font-body text-[1.125rem] leading-relaxed text-[#6B7280]"
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            custom={0.1}
          >
            Notre &eacute;quipe est pr&ecirc;te &agrave; relever vos d&eacute;fis cr&eacute;atifs. Prenons contact.
          </motion.p>

          <motion.div
            className="mt-8"
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF006E] px-8 py-4 font-display text-[1rem] font-bold uppercase tracking-[0.05em] text-white transition-all duration-200 hover:scale-[1.02] hover:bg-black active:scale-[0.98]"
            >
              Nous contacter
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
