import { useState, useEffect } from 'react';

function Footer() {
  const [systemInfo, setSystemInfo] = useState(() => ({
    userAgent: localStorage.getItem('react_userAgent') || navigator.userAgent || 'Невідомо',
    platform: localStorage.getItem('react_platform') || navigator.platform || 'Невідомо',
    language: localStorage.getItem('react_language') || navigator.language || 'Невідомо',
  }));

  useEffect(() => {
    // 1. Зчитуємо системну інформацію про браузер та ОС при монтуванні
    const userAgent = navigator.userAgent || 'Невідомо';
    const platform = navigator.platform || 'Невідомо';
    const language = navigator.language || 'Невідомо';

    // 2. Зберігаємо дані в localStorage всередині ефекту
    localStorage.setItem('react_userAgent', userAgent);
    localStorage.setItem('react_platform', platform);
    localStorage.setItem('react_language', language);

    // 3. Отримуємо дані з localStorage для відображення у JSX
    const timer = setTimeout(() => {
      setSystemInfo({
        userAgent: localStorage.getItem('react_userAgent') || '',
        platform: localStorage.getItem('react_platform') || '',
        language: localStorage.getItem('react_language') || '',
      });
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-200 p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-slate-800 text-center transition-colors duration-300">
      <h2 className="text-xl font-bold text-white tracking-wide mb-4">
        Контакти
      </h2>
      <address className="not-italic flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base">
        <p className="flex items-center gap-2">
          <span className="text-slate-400">Email:</span>
          <a
            href="mailto:artem.pereboichuk.kb.2025@lpnu.ua"
            className="text-sky-400 font-medium underline decoration-sky-400/40 underline-offset-4 transition-colors hover:text-sky-300"
          >
            artem.pereboichuk.kb.2025@lpnu.ua
          </a>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-slate-400">GitHub:</span>
          <a
            href="https://github.com/tiomzy"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 rounded-lg bg-slate-800 text-sky-300 font-mono text-sm border border-slate-700 transition-all duration-200 hover:bg-blue-700 hover:text-white hover:border-blue-500 hover:scale-105"
          >
            github.com/tiomzy
          </a>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-slate-400">Місто:</span>
          <span className="font-medium text-white">Львів</span>
        </p>
      </address>

      {/* Системна інформація з localStorage (Лабораторна №4, Частина 2, п. 1) */}
      <div className="mt-6 pt-6 border-t border-slate-800 text-left">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400 text-center mb-3">
          Системна інформація з localStorage
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="bg-slate-800/70 border border-slate-700 rounded-xl p-3">
            <span className="block font-mono text-sky-300 font-semibold mb-1">
              navigator.platform:
            </span>
            <span className="text-slate-200 break-words">
              {systemInfo.platform}
            </span>
          </div>
          <div className="bg-slate-800/70 border border-slate-700 rounded-xl p-3">
            <span className="block font-mono text-sky-300 font-semibold mb-1">
              navigator.language:
            </span>
            <span className="text-slate-200 break-words">
              {systemInfo.language}
            </span>
          </div>
          <div className="bg-slate-800/70 border border-slate-700 rounded-xl p-3 md:col-span-3">
            <span className="block font-mono text-sky-300 font-semibold mb-1">
              navigator.userAgent:
            </span>
            <span className="text-slate-200 break-words">
              {systemInfo.userAgent}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
