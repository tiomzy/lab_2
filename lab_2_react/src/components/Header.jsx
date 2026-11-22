function Header({ theme, onToggleTheme }) {
  const navLinks = [
    { href: '#about', label: 'Про себе' },
    { href: '#experience', label: 'Досвід' },
    { href: '#education', label: 'Освіта' },
    { href: '#skills', label: 'Навички' },
    { href: '#reviews', label: 'Відгуки' },
  ];

  return (
    <header className="flex flex-col items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-8 rounded-2xl shadow-lg border-2 border-slate-800 text-center">
      <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
        <span className="inline-block px-4 py-1 text-xs font-mono font-semibold tracking-widest uppercase bg-blue-500/20 text-sky-300 border border-sky-400/40 rounded-full">
          Cybersecurity Student
        </span>
        <span className="inline-block px-4 py-1 text-xs font-mono font-semibold tracking-widest uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/45 rounded-full">
          ▲ Deployed on Vercel
        </span>
        <button
          type="button"
          onClick={onToggleTheme}
          className="px-4 py-1 text-xs sm:text-sm font-semibold rounded-full bg-white/10 text-white border border-white/25 hover:bg-sky-500/25 hover:border-sky-400 transition-all duration-200 cursor-pointer"
          aria-label="Перемкнути тему"
        >
          {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
        </button>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-wide mb-2">
        Артем Перебойчук
      </h1>
      <p className="text-lg sm:text-xl text-slate-300 font-serif italic opacity-90 mb-6">
        Студент 2 курсу, спеціальність «Кібербезпека»
      </p>
      <nav aria-label="Головна навігація" className="w-full">
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-block px-5 py-2 rounded-xl bg-blue-600 text-white font-medium tracking-wide shadow-md border border-blue-500 transition-all duration-200 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
