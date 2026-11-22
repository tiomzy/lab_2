import { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Запит до JSONPlaceholder для варіанта 16
    fetch('https://jsonplaceholder.typicode.com/posts/16/comments')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Помилка HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Помилка завантаження відгуків:', err);
        setError('Не вдалося завантажити відгуки роботодавців.');
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="reviews"
      className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg border-2 border-slate-200 dark:border-slate-700 border-t-4 border-t-emerald-500 transition-all duration-300 hover:shadow-xl"
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
        Відгуки попередніх роботодавців (Варіант 16)
      </h2>

      {loading && (
        <p className="text-slate-500 dark:text-slate-400 italic">
          Завантаження коментарів із сервера...
        </p>
      )}

      {error && (
        <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {comments.map((comment, index) => (
            <article
              key={comment.id}
              className="bg-slate-50 dark:bg-slate-900/70 p-5 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {comment.name}
                  </h3>
                  <span className="shrink-0 px-2.5 py-0.5 text-xs font-mono font-bold rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                    #{index + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-mono text-blue-600 dark:text-sky-400 mb-2 break-all">
                  {comment.email}
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {comment.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;
