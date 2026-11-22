function Skills() {
  const skills = [
    'Основи кібербезпеки та мережевих технологій',
    'Linux, командний рядок',
    'HTML, основи React, Git',
    'Python (базовий рівень)',
    'Мови: українська — рідна, англійська — технічна',
  ];

  return (
    <section
      id="skills"
      className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg border-2 border-slate-200 dark:border-slate-700 border-t-4 border-t-indigo-600 transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
        Навички
      </h2>
      <ul className="flex flex-wrap gap-3 pt-1">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-4 py-2.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 font-medium text-sm sm:text-base rounded-xl border border-indigo-200 dark:border-indigo-800 shadow-sm cursor-default transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
