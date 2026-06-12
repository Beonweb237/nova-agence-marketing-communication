import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Linkedin,
  Instagram,
  Twitter,
  ChevronDown,
  CheckCircle,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */
interface FormData {
  prenom: string;
  nom: string;
  email: string;
  entreprise: string;
  typeDeBesoin: string;
  budget: string;
  message: string;
}

interface FormErrors {
  prenom?: string;
  nom?: string;
  email?: string;
  typeDeBesoin?: string;
  message?: string;
}

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */
const faqItems = [
  {
    question: 'Quel est votre d\u00E9lai de r\u00E9ponse ?',
    answer: 'Nous recontactons toutes les demandes sous 24h ouvr\u00E9es.',
  },
  {
    question: 'Proposez-vous un audit gratuit ?',
    answer: 'Oui, nous offrons un audit strat\u00E9gique de 30 min pour tout nouveau projet.',
  },
  {
    question: 'Quels types de clients accompagnez-vous ?',
    answer: 'PME, ETI et grandes entreprises, principalement B2B et consumer.',
  },
  {
    question: 'Travaillez-vous en remote ?',
    answer: 'Nous sommes bas\u00E9s \u00E0 Paris mais collaborons avec des clients partout en France et en Europe.',
  },
  {
    question: 'Comment se d\u00E9roule un projet type ?',
    answer: '\u00C9tude \u2192 Strat\u00E9gie \u2192 Cr\u00E9ation \u2192 Livraison. En moyenne 6 \u00E0 12 semaines.',
  },
];

const budgetOptions = [
  '< 10K\u20AC',
  '10-30K\u20AC',
  '30-50K\u20AC',
  '50-100K\u20AC',
  '> 100K\u20AC',
];

const besoinOptions = [
  'Strat\u00E9gie de marque',
  'Social Media',
  'SEO & SEA',
  'Content Marketing',
  'Branding & Design',
  'RP & Influence',
  'Autre',
];

/* ------------------------------------------------------------------ */
/*  FAQ Accordion Item (local — avoids mixing with FAQAccordion comp)  */
/* ------------------------------------------------------------------ */
function FAQItem({ item, index }: { item: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: easeOutExpo }}
      className="border-b border-[#E5E5E5]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left group"
      >
        <span className="font-display text-[1.125rem] font-bold text-black transition-colors duration-200 group-hover:text-[#FF006E]">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: easeOutExpo }}
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
              height: { duration: 0.4, ease: easeOutExpo },
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

/* ------------------------------------------------------------------ */
/*  Section 1: Hero                                                   */
/* ------------------------------------------------------------------ */
function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '45vh', backgroundColor: '#FF006E' }}
    >
      <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
          className="mb-6 inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FFBE0B]"
        >
          CONTACT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
          className="font-display font-bold leading-[0.95] tracking-tight text-white"
          style={{ fontSize: 'clamp(2rem, 6vw, 88px)' }}
        >
          Parlons de votre projet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: easeOutExpo }}
          className="mt-6 max-w-[500px] font-body text-[1.25rem] leading-relaxed text-white/90"
        >
          Racontez-nous vos objectifs. Nous vous r&eacute;pondons sous 24h.
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2: Contact Form + Info (two-column)                       */
/* ------------------------------------------------------------------ */
function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    prenom: '',
    nom: '',
    email: '',
    entreprise: '',
    typeDeBesoin: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.prenom.trim()) newErrors.prenom = 'Le pr\u00E9nom est requis';
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email invalide';
    }
    if (!formData.typeDeBesoin) newErrors.typeDeBesoin = 'Veuillez s\u00E9lectionner un type de besoin';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({
        prenom: '',
        nom: '',
        email: '',
        entreprise: '',
        typeDeBesoin: '',
        budget: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Left: Form (3/5) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row 1: Prénom + Nom */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <Label className="mb-2 block font-body text-[0.875rem] text-[#374151]">
                    Pr&eacute;nom <span className="text-[#FF006E]">*</span>
                  </Label>
                  <Input
                    type="text"
                    value={formData.prenom}
                    onChange={(e) => updateField('prenom', e.target.value)}
                    placeholder="Jean"
                    className="h-12 rounded-md border-[#E5E5E5] px-4 font-body text-[0.875rem] text-black transition-all duration-200 placeholder:text-[#9CA3AF] focus:border-[#FF006E] focus:ring-[2px] focus:ring-[rgba(255,0,110,0.1)]"
                  />
                  <AnimatePresence>
                    {errors.prenom && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1 font-body text-[0.75rem] text-red-500"
                      >
                        {errors.prenom}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div>
                  <Label className="mb-2 block font-body text-[0.875rem] text-[#374151]">
                    Nom <span className="text-[#FF006E]">*</span>
                  </Label>
                  <Input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => updateField('nom', e.target.value)}
                    placeholder="Dupont"
                    className="h-12 rounded-md border-[#E5E5E5] px-4 font-body text-[0.875rem] text-black transition-all duration-200 placeholder:text-[#9CA3AF] focus:border-[#FF006E] focus:ring-[2px] focus:ring-[rgba(255,0,110,0.1)]"
                  />
                  <AnimatePresence>
                    {errors.nom && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1 font-body text-[0.75rem] text-red-500"
                      >
                        {errors.nom}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Row 2: Email + Entreprise */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <Label className="mb-2 block font-body text-[0.875rem] text-[#374151]">
                    Email <span className="text-[#FF006E]">*</span>
                  </Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="jean@entreprise.fr"
                    className="h-12 rounded-md border-[#E5E5E5] px-4 font-body text-[0.875rem] text-black transition-all duration-200 placeholder:text-[#9CA3AF] focus:border-[#FF006E] focus:ring-[2px] focus:ring-[rgba(255,0,110,0.1)]"
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1 font-body text-[0.75rem] text-red-500"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div>
                  <Label className="mb-2 block font-body text-[0.875rem] text-[#374151]">
                    Entreprise
                  </Label>
                  <Input
                    type="text"
                    value={formData.entreprise}
                    onChange={(e) => updateField('entreprise', e.target.value)}
                    placeholder="Votre entreprise"
                    className="h-12 rounded-md border-[#E5E5E5] px-4 font-body text-[0.875rem] text-black transition-all duration-200 placeholder:text-[#9CA3AF] focus:border-[#FF006E] focus:ring-[2px] focus:ring-[rgba(255,0,110,0.1)]"
                  />
                </div>
              </div>

              {/* Row 3: Type de besoin */}
              <div>
                <Label className="mb-2 block font-body text-[0.875rem] text-[#374151]">
                  Type de besoin <span className="text-[#FF006E]">*</span>
                </Label>
                <Select
                  value={formData.typeDeBesoin}
                  onValueChange={(value) => updateField('typeDeBesoin', value)}
                >
                  <SelectTrigger className="h-12 rounded-md border-[#E5E5E5] px-4 font-body text-[0.875rem] text-black transition-all duration-200 focus:border-[#FF006E] focus:ring-[2px] focus:ring-[rgba(255,0,110,0.1)] [&>span]:text-[#9CA3AF] data-[state=open]:text-black">
                    <SelectValue placeholder="S\u00E9lectionnez..." />
                  </SelectTrigger>
                  <SelectContent>
                    {besoinOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <AnimatePresence>
                  {errors.typeDeBesoin && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 font-body text-[0.75rem] text-red-500"
                    >
                      {errors.typeDeBesoin}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Row 4: Budget */}
              <div>
                <Label className="mb-2 block font-body text-[0.875rem] text-[#374151]">
                  Budget estim&eacute;
                </Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => updateField('budget', value)}
                >
                  <SelectTrigger className="h-12 rounded-md border-[#E5E5E5] px-4 font-body text-[0.875rem] text-black transition-all duration-200 focus:border-[#FF006E] focus:ring-[2px] focus:ring-[rgba(255,0,110,0.1)] [&>span]:text-[#9CA3AF] data-[state=open]:text-black">
                    <SelectValue placeholder="S\u00E9lectionnez un budget..." />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Row 5: Message */}
              <div>
                <Label className="mb-2 block font-body text-[0.875rem] text-[#374151]">
                  Message <span className="text-[#FF006E]">*</span>
                </Label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="D\u00E9crivez votre projet..."
                  rows={5}
                  className="min-h-[120px] resize-y rounded-md border-[#E5E5E5] px-4 py-3 font-body text-[0.875rem] text-black transition-all duration-200 placeholder:text-[#9CA3AF] focus:border-[#FF006E] focus:ring-[2px] focus:ring-[rgba(255,0,110,0.1)]"
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 font-body text-[0.75rem] text-red-500"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit */}
              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#FF006E] px-12 py-4 font-display text-[1rem] font-bold uppercase tracking-[0.05em] text-white transition-all duration-200 hover:scale-[1.02] hover:bg-black active:scale-[0.98] sm:w-auto"
                >
                  Envoyer ma demande
                </button>
                <p className="mt-3 text-center font-body text-[0.75rem] text-[#6B7280] sm:text-left">
                  En envoyant ce formulaire, vous acceptez notre politique de confidentialit&eacute;.
                </p>
              </div>

              {/* Success */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 rounded-md bg-green-50 p-4"
                  >
                    <CheckCircle size={20} className="text-green-600" />
                    <p className="font-body text-[0.875rem] text-green-700">
                      Merci ! Votre demande a &eacute;t&eacute; envoy&eacute;e avec succ&egrave;s. Nous vous recontacterons sous 24h.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Right: Contact Info (2/5) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
            className="flex flex-col gap-8 lg:col-span-2"
          >
            {/* Agency photo */}
            <div className="overflow-hidden rounded-lg">
              <img
                src="/img-contact.jpg"
                alt="NOVA Agency Office"
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF006E]/10">
                  <MapPin size={18} className="text-[#FF006E]" />
                </div>
                <div>
                  <p className="font-display text-[0.875rem] font-bold text-black">Adresse</p>
                  <p className="mt-1 font-body text-[0.875rem] leading-relaxed text-[#6B7280]">
                    42 Rue du Faubourg Saint-Antoine, 75012 Paris
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF006E]/10">
                  <Mail size={18} className="text-[#FF006E]" />
                </div>
                <div>
                  <p className="font-display text-[0.875rem] font-bold text-black">Email</p>
                  <p className="mt-1 font-body text-[0.875rem] leading-relaxed text-[#6B7280]">
                    hello@nova-agence.fr
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF006E]/10">
                  <Phone size={18} className="text-[#FF006E]" />
                </div>
                <div>
                  <p className="font-display text-[0.875rem] font-bold text-black">T&eacute;l&eacute;phone</p>
                  <p className="mt-1 font-body text-[0.875rem] leading-relaxed text-[#6B7280]">
                    +33 1 42 34 56 78
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF006E]/10">
                  <Clock size={18} className="text-[#FF006E]" />
                </div>
                <div>
                  <p className="font-display text-[0.875rem] font-bold text-black">Horaires</p>
                  <p className="mt-1 font-body text-[0.875rem] leading-relaxed text-[#6B7280]">
                    Lun&ndash;Ven, 9h&ndash;19h
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="font-display text-[0.875rem] font-bold text-black">R&eacute;seaux sociaux</p>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E5] text-[#6B7280] transition-all duration-200 hover:border-[#FF006E] hover:text-[#FF006E]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E5] text-[#6B7280] transition-all duration-200 hover:border-[#FF006E] hover:text-[#FF006E]"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E5] text-[#6B7280] transition-all duration-200 hover:border-[#FF006E] hover:text-[#FF006E]"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3: FAQ                                                    */
/* ------------------------------------------------------------------ */
function FAQSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[800px] px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="mb-4 inline-block font-mono text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FF006E]"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="font-display text-[clamp(1.5rem,3vw,42px)] font-bold text-black"
          >
            Questions fr&eacute;quentes
          </motion.h2>
        </div>

        {/* FAQ Items */}
        {faqItems.map((item, index) => (
          <FAQItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                         */
/* ------------------------------------------------------------------ */
export default function Contact() {
  return (
    <div>
      <HeroSection />
      <ContactFormSection />
      <FAQSection />
    </div>
  );
}
