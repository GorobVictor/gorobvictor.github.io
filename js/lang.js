const translations = {
    en: {
        headerTitle: "Viktor Horobchuk - Backend Developer",
        aboutText: `
  <h1>.NET Developer | Backend Architect | Cloud & API Integration Expert</h1>
  <p>
    I am a .NET Developer with over 6 years of experience in building reliable, scalable, and high-performance backend systems. I have a deep passion for leveraging modern technologies to solve complex problems and create impactful solutions for users.
  </p>
  <p>
    My core expertise includes:
  </p>
  <ul>
    <li><strong>Core Technologies:</strong> C#, ASP.NET Core, Web API, Entity Framework</li>
    <li><strong>Database Management:</strong> PostgreSQL, MSSQL, MySQL, Redis</li>
    <li><strong>Cloud Solutions:</strong> AWS (SES, SNS, S3, CloudWatch), Azure</li>
    <li><strong>Payment Systems Integration:</strong> PayPal, CardConnect, Apple Pay API, Google Pay API, RevenueCat</li>
    <li><strong>Real-Time Communication:</strong> SignalR, AWS SNS, SES</li>
    <li><strong>Media Processing:</strong> FFmpeg, Mux</li>
    <li><strong>Google & Social APIs:</strong> Google Drive, Google Photos, YouTube, TikTok API</li>
    <li><strong>AI Integration:</strong> OpenAI</li>
    <li><strong>Frontend Experience:</strong> WPF, Razor Pages, Flutter</li>
    <li><strong>Best Practices:</strong> Unit testing, code quality, continuous integration</li>
  </ul>
  <p>
    I have successfully delivered projects that integrate complex APIs, scale cloud infrastructure, and enhance user experiences. My goal is to always deliver reliable, scalable, and user-friendly software solutions. I am committed to continuous learning and keeping up-to-date with the latest technologies to deliver the best solutions possible.
  </p>
  <p>
    Feel free to reach out if you’re looking for a dedicated and experienced developer to help bring your next project to life!
  </p>
`,
        projectsTitle: "Projects",
        contactTitle: "Contact",
        projects: [
            {
                image: "images/inkfusion.jpg",
                title: "InkFusion",
                description: "InkFusion is a mobile app for generating tattoo ideas using artificial intelligence. Users can choose a style, placement, and keywords to generate unique tattoo designs that inspire creative ink concepts.\n",
                contribTitle: "My contributions included:",
                contribList: [
                    "Designed and implemented server architecture with .NET Core;",
                    "Developed RESTful APIs for the mobile client;",
                    "Integrated AI-based image generation;",
                    "Managed the PostgreSQL database: storing profiles, generation history, and subscriptions;",
                    "Integrated payment systems for subscriptions;",
                    "Handled deployment and infrastructure;",
                    "Ensured system scalability and security.",
                ],
                note: '',
                link: 'https://play.google.com/store/apps/details?id=com.app.inkfusion',
                icon: 'google-play.svg',
                linkTitle: 'Google Play'
            },
            {
                image: "images/smpl.jpg",
                title: "SMPL – No Swipe Dating",
                description:
                    "SMPL is a next-gen dating app designed to move away from the randomness of endless swiping. It offers users a limited number of daily matches, encouraging more thoughtful connections. The app also features video meetups and a robust moderation system.",
                contribTitle: "My contributions included:",
                contribList: [
                    "Developed and maintained the backend architecture using .NET Core;",
                    "Built APIs for seamless integration with mobile apps (Android/iOS);",
                    "Implemented key features like matching logic, chat functionality, video calls, and notifications;",
                    "Focused on scalability and security of the server-side infrastructure."
                ],
                note: '',
                link: 'https://play.google.com/store/apps/details?id=com.smpldate.io',
                icon: 'google-play.svg',
                linkTitle: 'Google Play'
            }, {
                image: "images/pitch59.jpg",
                title: "Pitch59",
                description:
                    "Pitch59 is a platform for creating interactive video business cards that help professionals and businesses present themselves more effectively. Users can upload videos, add contact information, receive reviews, and share their \"pitch\" via unique links or QR codes.",
                contribTitle: "My contributions included:",
                contribList: [
                    "Developing and maintaining backend logic using .NET Core;",
                    "Building RESTful APIs for seamless communication between frontend and database;",
                    "Integrating third-party services for video processing and email delivery;",
                    "Optimizing performance and enhancing the security of the application."
                ],
                note: "The platform is publicly available, user-friendly, and widely used by professionals across different industries.",
                link: 'https://pitch59.com',
                icon: 'web.svg',
                linkTitle: 'pitch59.com'
            }
        ]
    },
    ua: {
        headerTitle: "Viktor Horobchuk - Backend Developer",
        aboutText: `
  <h1>.NET розробник | Бекенд архітектор | Експерт з хмарних рішень та інтеграції API</h1>
  <p>
    Я — .NET розробник з понад 6 роками досвіду у створенні надійних, масштабованих та високопродуктивних бекенд-систем. Я захоплююся використанням сучасних технологій для вирішення складних задач і створення ефективних рішень.
  </p>
  <p>
    Моя основна експертиза включає:
  </p>
  <ul>
    <li><strong>Основні технології:</strong> C#, ASP.NET Core, Web API, Entity Framework</li>
    <li><strong>Управління базами даних:</strong> PostgreSQL, MSSQL, MySQL, Redis</li>
    <li><strong>Хмарні рішення:</strong> AWS (SES, SNS, S3, CloudWatch), Azure</li>
    <li><strong>Інтеграція платіжних систем:</strong> PayPal, CardConnect, Apple Pay API, Google Pay API, RevenueCat</li>
    <li><strong>Комунікація в реальному часі:</strong> SignalR, AWS SNS, SES</li>
    <li><strong>Обробка медіа:</strong> FFmpeg, Mux</li>
    <li><strong>Google та соціальні API:</strong> Google Drive, Google Photos, YouTube, TikTok API</li>
    <li><strong>Інтеграція з AI:</strong> OpenAI</li>
    <li><strong>Фронтенд досвід:</strong> WPF, Razor Pages, Flutter</li>
    <li><strong>Найкращі практики:</strong> Unit-тестування, якість коду, безперервна інтеграція</li>
  </ul>
  <p>
    Я успішно реалізував проекти, що включають інтеграцію складних API, масштабування хмарної інфраструктури та покращення користувацького досвіду через інноваційні рішення. Моя мета — завжди надавати надійне, масштабоване і зручне програмне забезпечення. Я також прагну до постійного навчання і слідкую за останніми технологічними тенденціями, щоб забезпечити найкращі рішення.
  </p>
  <p>
    Зв’яжіться зі мною, якщо ви шукаєте відданого та досвідченого розробника, який допоможе втілити ваш наступний проект!
  </p>
`,
        projectsTitle: "Мої проєкти",
        contactTitle: "Контакти",
        projects: [
            {
                image: "images/inkfusion.jpg",
                title: "InkFusion",
                description: "InkFusion — це мобільний додаток для генерації ідей татуювань за допомогою штучного інтелекту. Користувачі можуть обирати стиль, розташування, ключові слова, а потім отримувати згенеровані зображення татуювань, які надихають на створення унікального дизайну.",
                contribTitle: "Мій вклад:",
                contribList: [
                    "Побудова серверної архітектури на .NET Core;",
                    "Розробка REST API для мобільного клієнта;",
                    "Генерація зображень на основі AI;",
                    "Робота з базою даних (PostgreSQL): зберігання профілів, історії генерацій, підписок;",
                    "Інтеграція платіжних систем для підписок;",
                    "Розгортання;",
                    "Забезпечення масштабованості та безпеки системи.",
                ],
                note: '',
                link: 'https://play.google.com/store/apps/details?id=com.app.inkfusion',
                icon: 'google-play.svg',
                linkTitle: 'Google Play'
            },
            {
                image: "images/smpl.jpg",
                title: "SMPL – Знайомства без свайпів",
                description: "SMPL — це мобільний додаток для знайомств нового покоління, який усуває випадковість свайпів і фокусується на змістовних зв’язках. Користувачі отримують обмежену кількість потенційних пар, що стимулює більш уважне ставлення до вибору. Додаток також підтримує відеозустрічі та сучасну систему модерації.",
                contribTitle: "Мій вклад:",
                contribList: [
                    "Розробка та підтримка бекенд-архітектури на .NET Core;",
                    "Створення API для мобільного клієнта (Android/iOS);",
                    "Реалізація логіки матчінгу, чатів, відеодзвінків та сповіщень;",
                    "Забезпечення масштабованості й безпеки серверної частини."
                ],
                note: '',
                link: 'https://play.google.com/store/apps/details?id=com.smpldate.io',
                icon: 'google-play.svg',
                linkTitle: 'Google Play'
            },
            {
                image: "images/pitch59.jpg",
                title: "Pitch59",
                description: "Pitch59 — це платформа для створення інтерактивних відеовізиток, яка допомагає підприємцям і професіоналам ефективніше презентувати себе чи свою компанію. Сайт дозволяє завантажувати відео, додавати контактну інформацію, отримувати відгуки, та ділитися своїм «пітчем» через унікальні лінки або QR-коди.",
                contribTitle: "Мій вклад:",
                contribList: [
                    "Реалізація та підтримка бекенд-логіки за допомогою .NET Core;",
                    "Створення REST API для взаємодії фронтенду з базою даних;",
                    "Інтеграція з відео- та email-сервісами;",
                    "Оптимізація продуктивності та безпеки додатку."
                ],
                note: "Проєкт активно використовується користувачами по всьому світу, має зручну реєстрацію та простий інтерфейс для запису та перегляду відео-презентацій.",
                link: 'https://pitch59.com',
                icon: 'web.svg',
                linkTitle: 'pitch59.com'
            }
        ]
    }
};

const langKey = 'lang';

function switchLanguage(lang) {
    localStorage.setItem(langKey, lang);
    const t = translations[lang];
    document.getElementsByTagName('html').lang = lang;
    document.getElementById('header-title').textContent = t.headerTitle;
    document.getElementById('about-text').innerHTML = t.aboutText;
    document.getElementById('projects-title').textContent = t.projectsTitle;
    const projects = document.getElementById('projects-container');
    projects.innerHTML = '';

    for (const p of t.projects) {
        const div = document.createElement('div');
        div.className = 'project';
        div.innerHTML = `
    <img src="${p.image}" alt="${p.title} screenshot"/>
    <div className="project-header">
        <h3 id="project-title">${p.title}</h3>
        <p className="tags"></p>
    </div>
    <p id="project-description">${p.description}</p>
    <h4 id="project-contrib-title">${p.contribTitle}</h4>
    <ul id="project-contrib-list">${p.contribList.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <p id="project-note">${p.note}</p>
    <div class="social-icons">
        <a href="${p.link}" target="_blank" title="${p.title}">
            <img src="images/${p.icon}" alt="${p.title}">${p.linkTitle}
        </a>
    </div>
        `;
        projects.appendChild(div);
    }

    document.getElementById('contact-title').textContent = t.contactTitle;
}

window.onload = () => switchLanguage(localStorage.getItem(langKey) ?? 'en');

