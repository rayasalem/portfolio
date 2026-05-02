import { motion } from "motion/react";
import { portfolioData } from "../data";
import { useLanguage } from "../context/LanguageContext";

import { motion } from "motion/react";
import { portfolioData } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  return (
    <section id="projects" className="py-20">
      <h2 className="text-primary text-sm uppercase tracking-widest font-semibold mb-8">{data.projectsLabel}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.projects.map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }} 
            className="bg-surface p-8 rounded-3xl border border-border/50 shadow-lg hover:shadow-primary/10 transition-all flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-3 text-white">
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">{p.title} ↗</a>
              ) : (
                p.title
              )}
            </h3>
            <p className="text-text-muted mb-6 flex-grow">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map(t => <span key={t} className="text-xs bg-bg text-primary px-3 py-1.5 rounded-full border border-primary/20">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

