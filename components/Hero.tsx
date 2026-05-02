import { motion } from "motion/react";
import { portfolioData } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <motion.p 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-accent font-medium tracking-wider uppercase mb-6"
      >
        {data.role}
      </motion.p>
      <motion.h1 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1 }} 
        className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
      >
        {data.heroTitle}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2 }} 
        className="text-text-muted text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed"
      >
        {data.heroDesc}
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3 }} 
        className="flex gap-6"
      >
        <a 
          href="#contact" 
          className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
        >
          {data.contactLabel}
        </a>
        <a 
          href="#projects" 
          className="px-8 py-4 bg-surface text-white rounded-full font-semibold text-lg border border-border hover:bg-slate-700 transition"
        >
          View Work
        </a>
      </motion.div>
    </section>
  );
}
