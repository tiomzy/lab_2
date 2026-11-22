/* ==========================================================================
   Лабораторна робота №4. Частина 1: Робота з JavaScript
   Варіант: 16
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Зберігання даних про ОС та браузер у localStorage і відображення у футері
  initLocalStorageInfo();

  // 2. Отримання та відображення коментарів роботодавців із сервера (Варіант 16)
  fetchEmployerComments(16);

  // 3. Показ модального вікна форми зворотного зв'язку через 1 хвилину (60000 мс)
  initFeedbackModal();

  // 4. Автоматичне та ручне перемикання денної/нічної теми
  initThemeSwitcher();
});

/**
 * 1. Зберігає інформацію про операційну систему та браузер у localStorage
 *    та виводить усі наявні у localStorage дані у футері сайту.
 */
function initLocalStorageInfo() {
  const systemData = {
    osPlatform: navigator.platform || 'Невідомо',
    browserUserAgent: navigator.userAgent || 'Невідомо',
    browserLanguage: navigator.language || 'Невідомо',
    browserVendor: navigator.vendor || 'Стандартний рушій браузера',
    cookiesEnabled: navigator.cookieEnabled ? 'Увімкнено' : 'Вимкнено',
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    onlineStatus: navigator.onLine ? 'Онлайн' : 'Офлайн',
  };

  // Зберігаємо кожну властивість у localStorage
  Object.entries(systemData).forEach(([key, value]) => {
    localStorage.setItem(key, String(value));
  });

  // Зчитуємо всі наявні дані з localStorage та відображаємо у футері
  renderLocalStorageFooter();
}

function renderLocalStorageFooter() {
  const container = document.getElementById('localstorage-info');
  if (!container) return;

  container.innerHTML = '';

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const itemDiv = document.createElement('div');
    itemDiv.className = 'storage-item';

    const keySpan = document.createElement('span');
    keySpan.className = 'storage-key';
    keySpan.textContent = key;

    const valueSpan = document.createElement('span');
    valueSpan.className = 'storage-value';
    valueSpan.textContent = value;

    itemDiv.appendChild(keySpan);
    itemDiv.appendChild(valueSpan);
    container.appendChild(itemDiv);
  }
}

/**
 * 2. Робить асинхронний запит до JSONPlaceholder API для отримання коментарів
 *    відповідно до номера варіанта (16) і рендерить їх у порядку отримання.
 */
async function fetchEmployerComments(variantNumber) {
  const container = document.getElementById('comments-container');
  if (!container) return;

  const url = `https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }

    const comments = await response.json();
    container.innerHTML = '';

    // Відображаємо коментарі у порядку їх отримання
    comments.forEach((comment, index) => {
      const card = document.createElement('article');
      card.className = 'comment-card';

      const header = document.createElement('div');
      header.className = 'comment-header';

      const title = document.createElement('h3');
      title.className = 'comment-name';
      title.textContent = comment.name;

      const badge = document.createElement('span');
      badge.className = 'comment-number';
      badge.textContent = `#${index + 1}`;

      header.appendChild(title);
      header.appendChild(badge);

      const email = document.createElement('p');
      email.className = 'comment-email';
      email.textContent = comment.email;

      const body = document.createElement('p');
      body.className = 'comment-body';
      body.textContent = comment.body;

      card.appendChild(header);
      card.appendChild(email);
      card.appendChild(body);

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Помилка завантаження коментарів:', error);
    container.innerHTML = '<p class="loading-text">Не вдалося завантажити коментарі із сервера.</p>';
  }
}

/**
 * 3. Показує модальне вікно із формою зворотного зв'язку після 1 хвилини (60000 мс)
 *    перебування користувача на сайті.
 */
function initFeedbackModal() {
  const modal = document.getElementById('feedback-modal');
  const closeBtn = document.getElementById('close-modal');
  if (!modal || !closeBtn) return;

  // Таймер на 1 хвилину (60 000 мілісекунд)
  setTimeout(() => {
    modal.classList.remove('hidden');
  }, 60000);

  // Закриття модального вікна по кліку на хрестик
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Закриття при кліку поза межами вікна (на напівпрозорий фон)
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
}

/**
 * 4. Автоматично встановлює денну (07:00–21:00) або нічну тему залежно від часу доби
 *    та дозволяє перемикати тему вручну кнопкою в шапці.
 */
function initThemeSwitcher() {
  const toggleBtn = document.getElementById('theme-toggle');

  function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    if (toggleBtn) {
      toggleBtn.textContent = isDark ? '☀️ Денна тема' : '🌙 Нічна тема';
    }
  }

  // Перевірка поточного часу (Денна тема: від 07:00 до 21:00, інакше — нічна)
  const now = new Date();
  const hours = now.getHours();
  const isDayTime = hours >= 7 && hours < 21;
  applyTheme(!isDayTime);

  // Слухач події для ручного перемикання теми
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = document.body.classList.contains('dark-mode');
      applyTheme(!isCurrentlyDark);
    });
  }
}
