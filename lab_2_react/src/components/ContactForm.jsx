import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Відкриваємо модальне вікно через 1 хвилину (60 000 мс) перебування на сайті
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-slate-200 dark:border-slate-700">
              <h2
                id="contact-modal-title"
                className="text-xl font-bold text-slate-900 dark:text-white"
              >
                Форма зворотного зв&apos;язку
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
              >
                Закрити
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
              Залиште свої контакти та повідомлення — дані надсилаються через сервіс Formspree.
            </p>

            <form
              action="https://formspree.io/f/mzeekjrp"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="react-name"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1"
                >
                  Ім’я
                </label>
                <input
                  id="react-name"
                  type="text"
                  name="name"
                  placeholder="Введіть ваше ім’я"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="react-email"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1"
                >
                  Email
                </label>
                <input
                  id="react-email"
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="react-phone"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1"
                >
                  Номер телефону
                </label>
                <input
                  id="react-phone"
                  type="tel"
                  name="phone"
                  placeholder="+380 XX XXX XX XX"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="react-message"
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1"
                >
                  Повідомлення
                </label>
                <textarea
                  id="react-message"
                  name="message"
                  rows="4"
                  placeholder="Введіть текст вашого повідомлення..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Закрити
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Надіслати
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
