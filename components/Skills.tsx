import { portfolioData } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
    const { lang } = useLanguage();
    const data = portfolioData[lang];
    const skills = ["JavaScript", "TypeScript", "React", "Node.js", "Tailwind CSS", "Git"];
    return (
      <section id="skills" className="py-20 border-t border-border">
        <h2 className="text-text-muted text-sm uppercase tracking-widest font-semibold mb-6">{data.skillsLabel}</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(s => <span key={s} className="px-4 py-2 bg-surface border border-border rounded-full">{s}</span>)}
        </div>
      </section>
    );
  }
