function Education() {
  return (
    <section
      id="education"
      className="h-full bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg border-2 border-slate-200 dark:border-slate-700 border-t-4 border-t-sky-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
        Освіта
      </h2>
      <article className="bg-slate-50 dark:bg-slate-900/70 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
        <span className="inline-block px-3 py-1 text-xs font-mono font-medium bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 rounded-full">
          2025 — теперішній час
        </span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-1">
          Національний університет «Львівська політехніка»
        </h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Інститут ІКТА, спеціальність «Кібербезпека», освітній ступінь — бакалаврат
        </p>
      </article>
    </section>
  );
}

export default Education;
