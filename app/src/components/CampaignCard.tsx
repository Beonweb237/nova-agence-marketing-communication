import { motion } from 'framer-motion';
import { useState } from 'react';

export interface Campaign {
  id: number;
  image: string;
  title: string;
  client: string;
  type: string;
  sector: string;
  year: number;
  stats: string[];
}

interface CampaignCardProps {
  campaign: Campaign;
  index: number;
}

const typeColorMap: Record<string, string> = {
  Branding: '#FFBE0B',
  Digital: '#3A86FF',
  'Social Media': '#FF006E',
  RP: '#374151',
  Influence: '#FFBE0B',
};

export default function CampaignCard({ campaign, index }: CampaignCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const typeColor = typeColorMap[campaign.type] || '#FFBE0B';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        layout: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        delay: index * 0.08,
      }}
      className="group cursor-pointer overflow-hidden rounded-lg border border-[#E5E5E5] bg-white"
      style={{
        boxShadow: isHovered ? '0 12px 40px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.04)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'box-shadow 0.3s ease-out, transform 0.3s ease-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="h-full w-full object-cover transition-transform duration-300 ease-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 px-4 pt-3">
        <span
          className="rounded-sm px-2.5 py-1 font-mono text-[0.625rem] font-bold uppercase tracking-[0.1em]"
          style={{ backgroundColor: typeColor, color: campaign.type === 'Branding' || campaign.type === 'Influence' ? '#000000' : '#FFFFFF' }}
        >
          {campaign.type}
        </span>
        <span className="rounded-sm bg-[#3A86FF] px-2.5 py-1 font-mono text-[0.625rem] font-bold uppercase tracking-[0.1em] text-white">
          {campaign.sector}
        </span>
        <span className="rounded-sm bg-[#F5F5F5] px-2.5 py-1 font-mono text-[0.625rem] font-bold uppercase tracking-[0.1em] text-[#6B7280]">
          {campaign.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-[1.25rem] font-bold leading-tight tracking-tight text-black">
          {campaign.title}
        </h3>
        <p className="mt-1 font-body text-[0.875rem] text-[#6B7280]">
          {campaign.client}
        </p>

        {/* Stats Row */}
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          {campaign.stats.map((stat, i) => (
            <span key={i} className="font-mono text-[0.875rem] font-bold text-[#FF006E]">
              {stat}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
