document.addEventListener('DOMContentLoaded', function() {
    
    new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });

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