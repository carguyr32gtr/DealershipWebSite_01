const translations = {
    uk: {
        title_main: "Головна сторінка",
        nav_home: "Головна",
        nav_catalog: "Каталог",
        nav_contacts: "Зв'язок з нами",
        car_types_title: "Класи автомобілів",
        type_sport: "Спорткари",
        type_super: "Суперкари",
        type_hyper: "Гіперкари",
        type_suv: "Позашляховики (SUV)",
        footer_about_title: "Про нас",
        footer_about_text: "Ми пропонуємо найкращі автомобілі для ваших незабутніх поїздок. Надійність та якість — наш пріоритет.",
        footer_contacts_title: "Контакти",
        footer_address: "м. Київ, вул. Автомобільна, 1",
        footer_social_title: "Соцмережі",
        footer_rights: "Всі права захищені."
    },
    en: {
        title_main: "Home Page",
        nav_home: "Home",
        nav_catalog: "Catalog",
        nav_contacts: "Contact us",
        car_types_title: "Car Classes",
        type_sport: "Sports Cars",
        type_super: "Supercars",
        type_hyper: "Hypercars",
        type_suv: "SUVs",
        footer_about_title: "About Us",
        footer_about_text: "We offer the best cars for your unforgettable trips. Reliability and quality are our priority.",
        footer_contacts_title: "Contacts",
        footer_address: "Kyiv, Avtomobilna str., 1",
        footer_social_title: "Social Media",
        footer_rights: "All rights reserved."
    },
    ru: {
        title_main: "Главная страница",
        nav_home: "Главная",
        nav_catalog: "Каталог",
        nav_contacts: "Связь с нами",
        car_types_title: "Классы автомобилей",
        type_sport: "Спорткары",
        type_super: "Суперкары",
        type_hyper: "Гиперкары",
        type_suv: "Внедорожники (SUV)",
        footer_about_title: "О нас",
        footer_about_text: "Мы предлагаем лучшие автомобили для ваших незабываемых поездок. Надежность и качество — наш приоритет.",
        footer_contacts_title: "Контакты",
        footer_address: "г. Киев, ул. Автомобильная, 1",
        footer_social_title: "Соцсети",
        footer_rights: "Все права защищены."
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Свайпер
    new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });

    // Плавный скролл
    const contactLink = document.getElementById('scroll-to-contacts');
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Смена языка
    const langSelect = document.getElementById('lang-select');
    function changeLanguage(lang) {
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'TITLE') document.title = translations[lang][key];
                else el.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('selectedLang', lang);
        if(langSelect) langSelect.value = lang;
    }

    if(langSelect) {
        langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));
    }
    changeLanguage(localStorage.getItem('selectedLang') || 'uk');
});