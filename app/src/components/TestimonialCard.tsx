import { useState } from 'react';
import { Quote } from 'lucide-react';

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  avatarColor?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const bgColor = testimonial.avatarColor || '#FF006E';

  // Get initials from author name
  const initials = testimonial.author
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div
      className="relative rounded-2xl bg-white p-8"
      style={{
        boxShadow: isHovered ? '0 8px 32px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.04)',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'box-shadow 0.2s ease-out, transform 0.2s ease-out',
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Metric badge */}
      <span
        className="absolute right-6 top-6 rounded-sm px-3 py-1.5 font-mono text-[0.75rem] font-bold uppercase tracking-[0.05em] text-white"
        style={{ backgroundColor: '#FF006E' }}
      >
        {testimonial.metric}
      </span>

      {/* Quote icon */}
      <Quote className="text-[#FF006E] opacity-30" size={24} />

      {/* Quote text */}
      <p className="mt-3 font-display text-[1.25rem] font-bold italic leading-relaxed tracking-tight text-black">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="my-5 h-px bg-[#E5E5E5]" />

      {/* Author row */}
      <div className="flex items-center gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full font-display text-[0.875rem] font-bold text-white"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
        <div>
          <p className="font-body text-[1rem] font-medium text-black">
            {testimonial.author}
          </p>
          <p className="font-body text-[0.875rem] text-[#6B7280]">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
