function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg border-2 border-slate-200 dark:border-slate-700 border-l-8 border-l-blue-600 transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
        Про себе
      </h2>
      <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
        Навчаюся у Львівській політехніці за спеціальністю «Кібербезпека».
        Цікавлюся захистом інформації, мережевою безпекою та вебтехнологіями.
        Прагну здобути практичний досвід у сфері інформаційної безпеки та розробки.
      </p>
    </section>
  );
}

export default About;
