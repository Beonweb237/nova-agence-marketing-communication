import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export interface ArticleData {
  id: number;
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
}

interface ArticleCardProps {
  article: ArticleData;
  index?: number;
  layoutId?: string;
  isFeatured?: boolean;
}

const categoryColorMap: Record<string, string> = {
  'TENDANCES': '#FFBE0B',
  'SOCIAL MEDIA': '#FF006E',
  'STRAT\u00C9GIE': '#3A86FF',
  'SEO': '#3A86FF',
  'BRANDING': '#FFBE0B',
};

export const articles: ArticleData[] = [
  {
    id: 1,
    image: '/img-insight-1.jpg',
    category: 'TENDANCES',
    categoryColor: '#FFBE0B',
    title: 'Les 5 tendances marketing qui red\u00E9finiront 2025',
    excerpt: "De l'IA g\u00E9n\u00E9rative au social commerce, d\u00E9couvrez ce qui attend les marques.",
    readTime: '8 min',
    date: '15 jan 2025',
  },
  {
    id: 2,
    image: '/img-insight-2.jpg',
    category: 'SOCIAL MEDIA',
    categoryColor: '#FF006E',
    title: 'TikTok en 2025 : algorithmie et strat\u00E9gies gagnantes',
    excerpt: "Ce qui fonctionne vraiment sur la plateforme la plus disruptante.",
    readTime: '6 min',
    date: '3 jan 2025',
  },
  {
    id: 3,
    image: '/img-insight-3.jpg',
    category: 'STRAT\u00C9GIE',
    categoryColor: '#3A86FF',
    title: 'Construire une plateforme de marque durable',
    excerpt: "Le guide complet pour un positionnement qui r\u00E9siste au temps.",
    readTime: '10 min',
    date: '20 d\u00E9c 2024',
  },
  {
    id: 4,
    image: '/img-strategy.jpg',
    category: 'SEO',
    categoryColor: '#3A86FF',
    title: "Core Web Vitals : l'exp\u00E9rience utilisateur comme facteur cl\u00E9",
    excerpt: "Comment l'optimisation technique booste votre r\u00E9f\u00E9rencement.",
    readTime: '7 min',
    date: '12 d\u00E9c 2024',
  },
  {
    id: 5,
    image: '/img-digital.jpg',
    category: 'BRANDING',
    categoryColor: '#FFBE0B',
    title: 'Le brand journalism : quand la marque devient m\u00E9dia',
    excerpt: "Pourquoi les plus grandes marques investissent dans l'\u00E9ditorial.",
    readTime: '9 min',
    date: '5 d\u00E9c 2024',
  },
  {
    id: 6,
    image: '/img-social.jpg',
    category: 'SOCIAL MEDIA',
    categoryColor: '#FF006E',
    title: 'Instagram Reels vs TikTok : o\u00F9 investir en 2025 ?',
    excerpt: "Comparaison strat\u00E9gique bas\u00E9e sur nos donn\u00E9es de campagne.",
    readTime: '8 min',
    date: '28 nov 2024',
  },
];

export const categories = ['Tous', 'Strat\u00E9gie', 'Social Media', 'SEO', 'Branding'];

export function getCategoryFilterColor(category: string): string {
  const upper = category.toUpperCase();
  if (upper === 'TENDANCES' || upper === 'BRANDING') return '#FFBE0B';
  if (upper === 'SOCIAL MEDIA') return '#FF006E';
  if (upper === 'STRAT\u00C9GIE' || upper === 'SEO') return '#3A86FF';
  return '#FF006E';
}

export function ArticleCard({ article, index = 0, layoutId, isFeatured = false }: ArticleCardProps): ReactNode {
  const catColor = categoryColorMap[article.category] || article.categoryColor || '#FF006E';
  const textOnCatColor = article.category === 'TENDANCES' || article.category === 'BRANDING' ? '#000000' : '#FFFFFF';

  if (isFeatured) {
    return (
      <motion.div
        layoutId={layoutId}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="group grid grid-cols-1 gap-12 lg:grid-cols-2"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="overflow-hidden rounded-lg"
        >
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            style={{ aspectRatio: '16/10' }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-col justify-center"
        >
          <span
            className="inline-block self-start rounded-sm px-3 py-1.5 font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em]"
            style={{ backgroundColor: '#FF006E', color: '#FFFFFF' }}
          >
            {article.category}
          </span>

          <h2 className="mt-4 font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-black">
            {article.title}
          </h2>

          <p className="mt-3 font-body text-[1.125rem] leading-relaxed text-[#6B7280]">
            {article.excerpt}
          </p>

          <div className="mt-4 flex items-center gap-4 font-body text-[0.875rem] text-[#6B7280]">
            <span>{article.date}</span>
            <span>{article.readTime} de lecture</span>
          </div>

          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 font-display text-[1rem] font-bold text-[#FF006E] transition-all duration-200 hover:underline"
          >
            Lire l&apos;article
            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </a>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.article
      layout
      layoutId={layoutId}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        layout: { duration: 0.3 },
      }}
      className="group cursor-pointer overflow-hidden rounded-md border border-[#E5E5E5] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
    >
      {/* Image */}
      <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <span
          className="inline-block rounded-sm px-2 py-1 font-mono text-[0.625rem] font-bold uppercase tracking-[0.1em]"
          style={{ backgroundColor: catColor, color: textOnCatColor }}
        >
          {article.category}
        </span>

        <h3 className="mt-2 font-display text-[1.125rem] font-bold leading-[1.2] text-black">
          {article.title}
        </h3>

        <p className="mt-2 line-clamp-2 font-body text-[0.875rem] leading-[1.5] text-[#6B7280]">
          {article.excerpt}
        </p>

        <div className="mt-3 flex items-center gap-3 font-body text-[0.75rem] text-[#6B7280]">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default ArticleCard;
