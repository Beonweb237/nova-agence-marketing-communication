import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function AccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className="border-b border-[#E5E5E5]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-200 group"
      >
        <span className="font-display text-[1.125rem] font-bold text-black transition-colors duration-200 group-hover:text-[#FF006E]">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="shrink-0 text-[#6B7280]"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
              opacity: { duration: 0.3 },
            }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              transition={{ duration: 0.3 }}
              className="pb-6 font-body text-[1rem] leading-[1.6] text-[#6B7280]"
            >
              {item.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="mx-auto w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} item={item} index={index} />
      ))}
    </div>
  );
}

export default FAQAccordion;
