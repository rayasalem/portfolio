import { portfolioData } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
    const { lang } = useLanguage();
    const data = portfolioData[lang];
    return (
      <section id="contact" className="py-20 border-t border-border">
        <h2 className="text-text-muted text-sm uppercase tracking-widest font-semibold mb-6">{data.contactLabel}</h2>
        <div className="bg-surface p-8 rounded-2xl border border-border text-center">
            <p className="text-xl font-bold mb-4">{data.contactLabel}</p>
            <a href={`mailto:${data.contactEmail}`} className="text-primary underline">{data.contactEmail}</a>
        </div>
      </section>
    );
  }
