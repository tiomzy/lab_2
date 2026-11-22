import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState(() => {
    const hours = new Date().getHours();
    return hours >= 7 && hours < 21 ? 'light' : 'dark';
  });

  // Автоматичне визначення теми при початковому завантаженні (07:00–21:00 -> light, інакше -> dark)
  useEffect(() => {
    const timer = setTimeout(() => {
      const hours = new Date().getHours();
      setTheme(hours >= 7 && hours < 21 ? 'light' : 'dark');
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Застосування CSS-класу теми до елемента <body>
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className={`${
        theme === 'dark' ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-800'
      } min-h-screen font-sans py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <Header theme={theme} onToggleTheme={handleToggleTheme} />
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <About />
          </div>
          <Experience />
          <Education />
          <div className="md:col-span-2">
            <Skills />
          </div>
          <div className="md:col-span-2">
            <Reviews />
          </div>
        </main>
        <Footer />
      </div>
      <ContactForm />
    </div>
  );
}

export default App;
