import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArticleCard, articles, categories } from '@/components/ArticleCard';
import type { ArticleData } from '@/components/ArticleCard';

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ------------------------------------------------------------------ */
/*  Section 1: Hero                                                   */
/* ------------------------------------------------------------------ */
function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '50vh', backgroundColor: '#000000' }}
    >
      <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center px-6 text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
          className="mb-6 inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FFBE0B]"
        >
          THOUGHT LEADERSHIP
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
          className="font-display font-bold leading-[0.95] tracking-tight text-white"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 100px)' }}
        >
          Insights
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: easeOutExpo }}
          className="mt-6 max-w-[650px] font-body text-[1.25rem] leading-relaxed text-white/80"
        >
          Tendances marketing, analyses sectorielles, et inspirations cr&eacute;atives &mdash; la veille de l&apos;agence NOVA.
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2: Featured Article                                       */
/* ------------------------------------------------------------------ */
function FeaturedSection() {
  const featured: ArticleData = {
    id: 1,
    image: '/img-insight-1.jpg',
    category: 'TENDANCES',
    categoryColor: '#FF006E',
    title: 'Les 5 tendances marketing qui red\u00E9finiront 2025',
    excerpt:
      "De l'IA g\u00E9n\u00E9rative au social commerce, d\u00E9couvrez les forces qui transformeront le paysage marketing cette ann\u00E9e. Notre analyse compl\u00E8te pour anticiper et performer.",
    readTime: '8 min',
    date: '15 janv. 2025',
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <ArticleCard article={featured} isFeatured />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3: Category Pills                                         */
/* ------------------------------------------------------------------ */
function CategoryPills({
  active,
  onChange,
}: {
  active: string;
  onChange: (cat: string) => void;
}) {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-3 px-6">
        {categories.map((cat, i) => {
          const isActive = active === cat;
          return (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: i * 0.03,
                ease: easeOutExpo,
              }}
              onClick={() => onChange(cat)}
              className="rounded-full px-6 py-2.5 font-display text-[0.875rem] font-bold transition-all duration-200"
              style={{
                backgroundColor: isActive ? '#FF006E' : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#374151',
                border: isActive ? '1px solid #FF006E' : '1px solid #E5E5E5',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = '#FF006E';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#FF006E';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#374151';
                  e.currentTarget.style.borderColor = '#E5E5E5';
                }
              }}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4: Article Grid                                           */
/* ------------------------------------------------------------------ */
function ArticleGrid({ activeCategory }: { activeCategory: string }) {
  const filtered =
    activeCategory === 'Tous'
      ? articles.filter((a) => a.id !== 1)
      : articles.filter(
          (a) =>
            a.id !== 1 &&
            a.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const displayed = filtered.length > 0 ? filtered : articles.filter((a) => a.id !== 1);

  return (
    <section className="bg-[#F5F5F5] py-8 pb-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {displayed.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={index}
              layoutId={`article-${article.id}`}
            />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 text-center font-body text-[1rem] text-[#6B7280]"
        >
          Aucun article dans cette cat&eacute;gorie pour le moment.
        </motion.p>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5: Newsletter CTA                                         */
/* ------------------------------------------------------------------ */
function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-black py-24">
      <div className="mx-auto flex max-w-[700px] flex-col items-center px-6 text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          className="mb-4 inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FFBE0B]"
        >
          NEWSLETTER
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="font-display text-[clamp(1.5rem,3vw,42px)] font-bold text-white"
        >
          Restez inspir&eacute;
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOutExpo }}
          className="mt-4 font-body text-[1.125rem] leading-relaxed text-white/80"
        >
          Recevez nos analyses tendances et inspirations cr&eacute;atives, directement dans votre bo&icirc;te mail.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2, ease: easeOutExpo }}
          onSubmit={handleSubmit}
          className="mt-8 flex w-full max-w-[500px] flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            required
            className="flex-1 rounded-full border border-[#333333] bg-[#111111] px-5 py-3.5 font-body text-[0.875rem] text-white outline-none transition-colors duration-200 placeholder:text-[#6B7280] focus:border-[#FF006E]"
          />
          <button
            type="submit"
            className="rounded-full bg-[#FF006E] px-8 py-3.5 font-display text-[0.875rem] font-bold uppercase tracking-[0.05em] text-white transition-all duration-200 hover:scale-[1.02] hover:bg-black active:scale-[0.98]"
          >
            S&apos;inscrire
          </button>
        </motion.form>

        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 font-body text-[0.875rem] text-[#FF006E]"
          >
            Merci pour votre inscription !
          </motion.p>
        )}

        {/* Privacy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-3 font-body text-[0.75rem] text-[#6B7280]"
        >
          Pas de spam, d&eacute;sinscription &agrave; tout moment.
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 6: CTA                                                    */
/* ------------------------------------------------------------------ */
function CTASection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto flex max-w-[700px] flex-col items-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="font-display text-[clamp(1.5rem,3vw,42px)] font-bold text-black"
        >
          Un projet en t&ecirc;te ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOutExpo }}
          className="mt-4 font-body text-[1.125rem] leading-relaxed text-[#6B7280]"
        >
          Nos &eacute;quipes sont pr&ecirc;tes &agrave; transformer vos ambitions en campagnes percutantes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2, ease: easeOutExpo }}
          className="mt-8"
        >
          <Link
            to="/contact"
            className="inline-block rounded-full bg-[#FF006E] px-10 py-4 font-display text-[1rem] font-bold uppercase tracking-[0.05em] text-white transition-all duration-200 hover:scale-[1.02] hover:bg-black active:scale-[0.98]"
          >
            Nous contacter
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                         */
/* ------------------------------------------------------------------ */
export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <CategoryPills active={activeCategory} onChange={setActiveCategory} />
      <ArticleGrid activeCategory={activeCategory} />
      <NewsletterSection />
      <CTASection />
    </div>
  );
}
