function Experience() {
  const items = [
    'Налаштування віртуальної лабораторії на Linux для вивчення основ адміністрування та мережевої безпеки.',
    'Аналіз мережевого трафіку за допомогою Wireshark в межах навчальних завдань.',
    'Створення вебсторінок на HTML та React, ведення проєктів у Git.',
  ];

  return (
    <section
      id="experience"
      className="h-full bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg border-2 border-slate-200 dark:border-slate-700 border-t-4 border-t-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
        Досвід
      </h2>
      <article className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Навчальні та особисті проєкти
          </h3>
          <span className="inline-block px-3 py-1 text-xs font-mono font-medium bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-blue-800 rounded-full">
            2025 — теперішній час
          </span>
        </div>
        <ul className="space-y-2.5 pt-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600 dark:bg-sky-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Experience;
