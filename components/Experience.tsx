import { portfolioData } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
    const { lang } = useLanguage();
    const data = portfolioData[lang];
    return (
      <section id="experience" className="py-20 border-t border-border">
        <h2 className="text-text-muted text-sm uppercase tracking-widest font-semibold mb-6">{data.experienceLabel}</h2>
        <div className="space-y-6">
          {data.experience.map((e, i) => (
              <div key={i} className="bg-surface p-6 rounded-2xl border border-border">
                <h3 className="text-xl font-bold">{e.title}</h3>
                <p className="text-text-muted pt-2 text-sm italic">{e.period}</p>
                <p className="text-text-muted pt-2">{e.desc}</p>
              </div>
          ))}
        </div>
      </section>
    );
  }
