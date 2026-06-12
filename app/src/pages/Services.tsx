import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Target,
  BarChart3,
  Share2,
  Megaphone,
  Palette,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

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
    transition: { staggerChildren: 0.08 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

/* ─── Data ─── */
const serviceTypes = [
  {
    icon: Target,
    color: '#FF006E',
    title: 'Strat\u00E9gie de Marque',
    description:
      'Positionnement, architecture de marque, plateforme cr\u00E9ative, identit\u00E9 visuelle et verbale. Nous construisons les fondations de votre communication.',
    deliverables: [
      'Audit de marque',
      'Plateforme strat\u00E9gique',
      'Naming',
      'Architecture de marque',
    ],
  },
  {
    icon: BarChart3,
    color: '#3A86FF',
    title: 'Digital Marketing',
    description:
      'SEO/SEA, social ads, display, programmatic. Une approche data-driven pour maximiser chaque euro investi.',
    deliverables: [
      'Campagnes paid media',
      'Optimisation SEO',
      'Analytics',
      'A/B testing',
    ],
  },
  {
    icon: Share2,
    color: '#FFBE0B',
    title: 'Social Media',
    description:
      'Community management, cr\u00E9ation de contenu, social listening. Des communaut\u00E9s engag\u00E9es et un brand love durable.',
    deliverables: [
      'Strat\u00E9gie social',
      'Calendrier \u00E9ditorial',
      'Cr\u00E9ation de contenu',
      'Community management',
    ],
  },
  {
    icon: Megaphone,
    color: '#FF006E',
    title: 'Influence & PR',
    description:
      'Relations presse, partenariats influenceurs, brand advocacy. Le bon message, au bon interlocuteur, au bon moment.',
    deliverables: [
      'Strat\u00E9gie influence',
      'Casting influenceurs',
      'Relations presse',
      'Gestion de crise',
    ],
  },
  {
    icon: Palette,
    color: '#3A86FF',
    title: 'Cr\u00E9ation & Design',
    description:
      "Direction artistique, design graphique, motion design, production vid\u00E9o. Des id\u00E9es qui se voient et s'entendent.",
    deliverables: [
      'Direction artistique',
      'Design system',
      'Motion design',
      'Production vid\u00E9o/photo',
    ],
  },
  {
    icon: TrendingUp,
    color: '#FFBE0B',
    title: 'Performance & Data',
    description:
      'Tableaux de bord, attribution, reporting. Des d\u00E9cisions \u00E9clair\u00E9es par les donn\u00E9es.',
    deliverables: [
      'Dashboards custom',
      'Attribution modeling',
      'Reporting',
      'Recommandations',
    ],
  },
];

const channels = [
  {
    name: 'SEO/SEA',
    services: [
      'Audit technique',
      'Content SEO',
      'Campagnes Google Ads',
      'Shopping',
      'Remarketing',
    ],
  },
  {
    name: 'Social Ads',
    services: [
      'Meta Ads',
      'TikTok Ads',
      'LinkedIn Ads',
      'Pinterest Ads',
      'Snapchat Ads',
    ],
  },
  {
    name: 'Email & SMS',
    services: [
      'Strat\u00E9gie CRM',
      'Templates',
      'Automation',
      'Segmentation',
      'Scoring',
    ],
  },
  {
    name: 'TV & Radio',
    services: [
      'Spots publicitaires',
      'Media planning',
      "Achat d'espace",
      "Mesure d'impact",
    ],
  },
  {
    name: 'Print & Display',
    services: [
      'Affichage',
      'Presse',
      'Packaging',
      'PLV',
      'Out-of-home digital',
    ],
  },
  {
    name: 'Digital',
    services: [
      'Sites web',
      'Apps',
      'E-commerce',
      'UX/UI',
      'D\u00E9veloppement sur mesure',
    ],
  },
];

const sectors = [
  { number: '01', name: 'Luxe & Mode', expertise: 'Strat\u00E9gie premium, exp\u00E9rience client, storytelling patrimonial, influence' },
  { number: '02', name: 'Tech & SaaS', expertise: 'Growth marketing, product marketing, content technique, lead generation' },
  { number: '03', name: 'Retail & E-commerce', expertise: 'Acquisition, conversion, fid\u00E9lisation, marketplaces' },
  { number: '04', name: 'Food & Beverage', expertise: 'Branding sensoriel, social food, influence culinaire, \u00E9v\u00E9nementiel' },
  { number: '05', name: 'Sport & Lifestyle', expertise: 'Communaut\u00E9, activation, partenariats, content lifestyle' },
  { number: '06', name: 'Automobile & Mobilit\u00E9', expertise: 'Lancement produit, exp\u00E9rience digitale, r\u00E9seaux sociaux, RP' },
];

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'Immersion, audit, ateliers' },
  { num: '02', title: 'Strat\u00E9gie', desc: "Plan d'action data-informed" },
  { num: '03', title: 'Cr\u00E9ation', desc: 'Direction artistique & production' },
  { num: '04', title: 'Activation', desc: 'D\u00E9ploiement cross-canal' },
  { num: '05', title: 'Mesure', desc: 'Reporting & optimisation' },
];

/* ─── Components ─── */

function SectionHeader({
  label,
  headline,
  labelColor = '#FF006E',
  headlineColor = '#000000',
  centered = false,
}: {
  label: string;
  headline: string;
  labelColor?: string;
  headlineColor?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <span
        className="font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em]"
        style={{ color: labelColor }}
      >
        {label}
      </span>
      <h2
        className="mt-3 font-display text-[4vw] font-bold leading-[1.0] tracking-tight max-md:text-[8vw]"
        style={{ color: headlineColor, maxWidth: centered ? '900px' : undefined, margin: centered ? '12px auto 0' : '12px 0 0' }}
      >
        {headline}
      </h2>
    </div>
  );
}

/* ─── Main Page ─── */
export default function Services() {
  const heroRef = useRef(null);
  const typeRef = useRef(null);
  const channelRef = useRef(null);
  const sectorRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const typeInView = useInView(typeRef, { once: true, amount: 0.2 });
  const channelInView = useInView(channelRef, { once: true, amount: 0.2 });
  const sectorInView = useInView(sectorRef, { once: true, amount: 0.2 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <div>
      {/* ════════════════════════════════════════════
          SECTION 1 — Hero
      ════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex min-h-[50vh] items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#FF006E', paddingTop: '72px' }}
      >
        <div className="relative z-10 mx-auto max-w-[900px] px-6 py-24 text-center">
          <motion.span
            className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em]"
            style={{ color: '#FFBE0B' }}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
          >
            CE QUE NOUS FAISONS
          </motion.span>

          <motion.h1
            className="mt-4 font-display text-[7vw] font-bold leading-[0.95] tracking-tight text-white max-md:text-[12vw]"
            style={{ maxWidth: '100%' }}
            initial={{ opacity: 0, y: 60 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
          >
            Nos Services
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-[650px] font-body text-[1.25rem] leading-relaxed"
            style={{ color: '#FFFFFF', opacity: 0.9 }}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 0.9, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8, ease: easeOutExpo }}
          >
            Strat&eacute;gie, cr&eacute;ation, digital, influence &mdash; une expertise compl&egrave;te pour des campagnes int&eacute;gr&eacute;es et performantes.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — Services by Type
      ════════════════════════════════════════════ */}
      <section ref={typeRef} className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader label="PAR TYPE DE SERVICE" headline="Une expertise &agrave; 360&deg;" />

          <motion.div
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            animate={typeInView ? 'visible' : 'hidden'}
          >
            {serviceTypes.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  variants={staggerItem}
                  className="group relative overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white p-8 transition-all duration-250 hover:-translate-y-0.5"
                  style={{
                    '--accent': s.color,
                  } as React.CSSProperties}
                  whileHover={{
                    borderColor: s.color,
                    boxShadow: `0 8px 32px rgba(0,0,0,0.08)`,
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl"
                    style={{ backgroundColor: s.color }}
                  />

                  <Icon size={40} style={{ color: s.color }} strokeWidth={1.5} />

                  <h3 className="mt-5 font-display text-[1.5rem] font-bold text-black">
                    {s.title}
                  </h3>

                  <p className="mt-3 font-body text-[1rem] leading-[1.6] text-[#6B7280]">
                    {s.description}
                  </p>

                  <div className="mt-4">
                    {s.deliverables.map((d) => (
                      <div key={d} className="mt-1 flex items-center gap-2">
                        <span
                          className="inline-block h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: s.color }}
                        />
                        <span className="font-body text-[0.875rem] text-[#374151]">{d}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3 — Services by Channel
      ════════════════════════════════════════════ */}
      <section ref={channelRef} className="bg-[#F5F5F5] py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader label="PAR CANAL" headline="Tous les canaux, une seule &eacute;quipe" />

          <motion.div
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            animate={channelInView ? 'visible' : 'hidden'}
          >
            {channels.map((c) => (
              <motion.div
                key={c.name}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4, ease: easeOutExpo },
                  },
                }}
                className="group rounded-lg border-l-[3px] border-l-[#FF006E] bg-white p-6 transition-all duration-200 hover:border-l-[6px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              >
                <h3 className="font-display text-[1.25rem] font-bold text-black">
                  {c.name}
                </h3>
                <ul className="mt-3 flex flex-col gap-1">
                  {c.services.map((s) => (
                    <li
                      key={s}
                      className="font-body text-[0.875rem] leading-[1.8] text-[#6B7280]"
                    >
                      &bull; {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4 — Services by Sector
      ════════════════════════════════════════════ */}
      <section ref={sectorRef} className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader label="PAR SECTEUR" headline="Votre secteur, notre expertise" />

          <motion.div
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            animate={sectorInView ? 'visible' : 'hidden'}
          >
            {sectors.map((s) => (
              <motion.div
                key={s.number}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: easeOutExpo },
                  },
                }}
                className="group rounded-2xl border border-[#E5E5E5] bg-white p-8 transition-all duration-200 hover:border-[#FF006E] hover:shadow-[0_8px_32px_rgba(255,0,110,0.08)]"
              >
                <span className="font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FFBE0B]">
                  {s.number}
                </span>
                <h3 className="mt-2 font-display text-[1.5rem] font-bold text-black">
                  {s.name}
                </h3>
                <p className="mt-3 font-body text-[1rem] leading-[1.6] text-[#6B7280]">
                  {s.expertise}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 5 — Process Reminder
      ════════════════════════════════════════════ */}
      <section ref={processRef} className="bg-black py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <motion.span
              className="inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FFBE0B]"
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: easeOutExpo }}
            >
              NOTRE M&Eacute;THODOLOGIE
            </motion.span>

            <motion.h2
              className="mx-auto mt-3 font-display text-[3vw] font-bold leading-[1.0] text-white max-md:text-[8vw]"
              initial={{ opacity: 0, y: 40 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
            >
              Comment nous travaillons
            </motion.h2>
          </div>

          <motion.div
            className="relative mt-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
            variants={staggerContainer}
            initial="hidden"
            animate={processInView ? 'visible' : 'hidden'}
          >
            {/* Connector line (desktop only) */}
            <div className="absolute left-0 right-0 top-[2rem] hidden h-[1px] bg-[#333333] md:block" />

            {processSteps.map((step) => (
              <motion.div
                key={step.num}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: easeOutExpo },
                  },
                }}
                className="relative z-10 flex flex-1 flex-col items-center text-center"
              >
                <span className="font-display text-[2rem] font-bold text-[#FF006E]">
                  {step.num}
                </span>
                <h3 className="mt-3 font-display text-[1.125rem] font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-1 font-body text-[0.875rem] text-[#6B7280]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 6 — CTA
      ════════════════════════════════════════════ */}
      <section ref={ctaRef} className="bg-white py-24">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <motion.h2
            className="font-display text-[3vw] font-bold leading-[1.1] text-black max-md:text-[8vw]"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.625rem)' }}
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            custom={0}
          >
            Besoin d&apos;un accompagnement sur mesure ?
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-[650px] font-body text-[1.125rem] leading-relaxed text-[#6B7280]"
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            custom={0.1}
          >
            Chaque projet est unique. Discutons de vos objectifs et construisons ensemble la strat&eacute;gie adapt&eacute;e.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF006E] px-8 py-4 font-display text-[1rem] font-bold uppercase tracking-[0.05em] text-white transition-all duration-200 hover:scale-[1.02] hover:bg-black active:scale-[0.98]"
            >
              Prendre rendez-vous
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/campaigns"
              className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-transparent px-8 py-4 font-display text-[1rem] font-bold uppercase tracking-[0.05em] text-black transition-all duration-200 hover:border-[#FF006E] hover:bg-[#FF006E] hover:text-white"
            >
              Voir nos campagnes
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
