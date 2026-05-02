import { portfolioData } from "../data";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  return (
    <section id="about" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary text-sm uppercase tracking-widest font-semibold mb-8"
      >
        {data.aboutLabel}
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-surface p-10 rounded-3xl border border-border/50 shadow-2xl shadow-black/20"
      >
        <p className="text-white text-xl md:text-2xl leading-relaxed font-light mb-6">
          {data.aboutText}
        </p>
        <p className="text-accent font-medium text-lg italic">
          "I love turning ideas into real products."
        </p>
      </motion.div>
    </section>
  );
}

