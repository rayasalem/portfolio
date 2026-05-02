/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import { motion } from "motion/react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Education from "./components/Education";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

function AppContent() {
  const { lang, setLang } = useLanguage();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-bg text-text-main min-h-screen"
    >
      <nav className="flex justify-between items-center p-6 max-w-4xl mx-auto">
        <div className="font-bold text-xl">Raya Salem</div>
        <button className="bg-surface border border-border px-4 py-2 rounded-lg" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>
          {lang === 'ar' ? 'EN' : 'AR'}
        </button>
      </nav>
      <div className="max-w-4xl mx-auto px-6">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
        <footer className="text-center py-10 text-text-muted border-t border-border mt-10 text-sm">
          © {new Date().getFullYear()} Raya Al-Islam Salem
        </footer>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
