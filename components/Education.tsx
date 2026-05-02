import { portfolioData } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Education() {
  const { lang } = useLanguage();
  const data = portfolioData[lang];
  return (
    <section id="education" className="py-20 border-t border-border">
      <h2 className="text-text-muted text-sm uppercase tracking-widest font-semibold mb-6">{data.educationLabel}</h2>
      <div className="bg-surface p-6 rounded-2xl border border-border">
        <h3 className="text-xl font-bold">{data.education.title}</h3>
        <p className="font-semibold text-primary pt-1">{data.education.university}</p>
        <p className="text-text-muted pt-2 text-sm italic">{data.education.period}</p>
      </div>
    </section>
  );
}
