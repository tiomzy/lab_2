function Experience() {
  const items = [
    'Налаштування віртуальної лабораторії на Linux для вивчення основ адміністрування та мережевої безпеки.',
    'Аналіз мережевого трафіку за допомогою Wireshark в межах навчальних завдань.',
    'Створення вебсторінок на HTML та React, ведення проєктів у Git.',
  ];

  return (
    <section id="experience">
      <h2>Досвід</h2>
      <article>
        <h3>Навчальні та особисті проєкти</h3>
        <p>2025 — теперішній час</p>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Experience;
