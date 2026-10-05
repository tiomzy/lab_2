function Skills() {
  const skills = [
    'Основи кібербезпеки та мережевих технологій',
    'Linux, командний рядок',
    'HTML, основи React, Git',
    'Python (базовий рівень)',
    'Мови: українська — рідна, англійська — технічна',
  ];

  return (
    <section id="skills">
      <h2>Навички</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
