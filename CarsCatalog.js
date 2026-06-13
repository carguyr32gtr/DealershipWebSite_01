document.addEventListener('DOMContentLoaded', function() {
    const selects = ['price', 'brand', 'body', 'country', 'mileage', 'class', 'sort'].reduce((acc, name) => {
        acc[name] = document.getElementById(`filter-${name}`);
        return acc;
    }, {});

    const yearMinInput = document.getElementById('filter-year-min');
    const yearMaxInput = document.getElementById('filter-year-max');
    const yearMinVal = document.getElementById('year-min-val');
    const yearMaxVal = document.getElementById('year-max-val');

    const carsGrid = document.getElementById('cars-grid');
    const paginationContainer = document.getElementById('pagination-container');
    const countDiv = document.getElementById('products-count');
    const langSelect = document.getElementById('lang-select');

    const productsPerPage = 6;
    let currentPage = 1, filteredCars = [];

    yearMinInput.addEventListener('input', (e) => {
        let minVal = parseInt(e.target.value);
        let maxVal = parseInt(yearMaxInput.value);

        if (minVal > maxVal) {
            yearMaxInput.value = minVal;
            yearMaxVal.textContent = minVal;
        }
        yearMinVal.textContent = e.target.value;
        filterAndSortCars();
    });

    yearMaxInput.addEventListener('input', (e) => {
        let minVal = parseInt(yearMinInput.value);
        let maxVal = parseInt(e.target.value);

        if (maxVal < minVal) {
            yearMinInput.value = maxVal;
            yearMinVal.textContent = maxVal;
        }
        yearMaxVal.textContent = e.target.value;
        filterAndSortCars();
    });

    const classParam = new URLSearchParams(window.location.search).get('class');
    if (classParam && selects.class) selects.class.value = classParam;

    function createCarCard(car) {
        const lang = localStorage.getItem('selectedLang') || 'uk';
        const labels = translations[lang];
        
        let bodyTranslation = car.body;
        if (car.body === 'Coupe' && labels['body_coupe']) bodyTranslation = labels['body_coupe'];
        if (car.body === 'Sedan' && labels['body_sedan']) bodyTranslation = labels['body_sedan'];
        if (car.body === 'SUV' && labels['body_suv']) bodyTranslation = labels['body_suv'];

        let countryTranslation = car.country;
        if (car.country === 'Німеччина' && labels['country_germany']) countryTranslation = labels['country_germany'];
        if (car.country === 'Італія' && labels['country_italy']) countryTranslation = labels['country_italy'];
        if (car.country === 'Японія' && labels['country_japan']) countryTranslation = labels['country_japan'];
        if (car.country === 'Франція' && labels['country_france']) countryTranslation = labels['country_france'];

        const mileageText = car.mileage === 0 ? labels['opt_new_car'] : `${car.mileage.toLocaleString()} ${labels['text_km']}`;

        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6';
        col.innerHTML = `
            <div class="card h-100 shadow-sm border-0 overflow-hidden car-item-card">
                <img src="${car.img}" alt="${car.brand}" class="card-img-top" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <span class="badge bg-info text-dark mb-2">${car.brand} (${countryTranslation})</span>
                    <h5 class="card-title font-weight-bold">${car.brand} ${car.model}</h5>
                    <p class="card-text text-muted mb-1">${car.year} ${labels['text_year']} | ${bodyTranslation}</p>
                    <p class="card-text text-muted small">${labels['filter_mileage']}: ${mileageText}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="fs-5 fw-bold text-primary">$${car.price.toLocaleString('en-US')}</span>
                        <button class="btn btn-dark btn-sm rounded-pill px-3">${labels['nav_contacts']}</button>
                    </div>
                </div>
            </div>`;
        return col;
    }

    function filterAndSortCars() {
        let result = [...CarsCatalogData];

        if (selects.brand.value !== 'all') result = result.filter(c => c.brand === selects.brand.value);
        if (selects.body.value !== 'all') result = result.filter(c => c.body === selects.body.value);
        if (selects.country.value !== 'all') result = result.filter(c => c.country === selects.country.value);
        if (selects.class.value !== 'all') result = result.filter(c => c.class === selects.class.value);
        
        const minYear = parseInt(yearMinInput.value);
        const maxYear = parseInt(yearMaxInput.value);
        result = result.filter(c => c.year >= minYear && c.year <= maxYear);

        if (selects.price.value !== 'all') {
            result = result.filter(c => {
                if (selects.price.value === '0-30000') return c.price <= 30000;
                if (selects.price.value === '30000-100000') return c.price > 30000 && c.price <= 100000;
                return c.price > 100000;
            });
        }

        if (selects.mileage.value !== 'all') {
            result = result.filter(c => {
                if (selects.mileage.value === '0') return c.mileage === 0;
                if (selects.mileage.value === '1-50000') return c.mileage > 0 && c.mileage <= 50000;
                return c.mileage > 50000;
            });
        }

        if (selects.sort.value === 'price-asc') result.sort((a, b) => a.price - b.price);
        if (selects.sort.value === 'price-desc') result.sort((a, b) => b.price - a.price);
        if (selects.sort.value === 'year-desc') result.sort((a, b) => b.year - a.year);
        if (selects.sort.value === 'mileage-asc') result.sort((a, b) => a.mileage - b.mileage);

        filteredCars = result;
        displayCurrentPage();
        updatePagination();
    }

    function displayCurrentPage() {
        carsGrid.innerHTML = '';
        const lang = localStorage.getItem('selectedLang') || 'uk';
        const start = (currentPage - 1) * productsPerPage;
        const carsToShow = filteredCars.slice(start, start + productsPerPage);

        if (carsToShow.length > 0) {
            carsToShow.forEach(car => carsGrid.appendChild(createCarCard(car)));
        } else {
            carsGrid.innerHTML = `<div class="text-center py-5 w-100 fs-4 text-muted">${translations[lang]['no_cars']}</div>`;
        }
        
        const total = filteredCars.length;
        countDiv.textContent = total > 0 ? `${translations[lang]['text_from']} ${start + 1}-${Math.min(start + productsPerPage, total)} ${translations[lang]['text_out_of']} ${total}` : `${translations[lang]['text_from']} 0`;
    }

    function updatePagination() {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(filteredCars.length / productsPerPage);
        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.className = `page-item ${i === currentPage ? 'active' : ''}`;
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener('click', (e) => { e.preventDefault(); currentPage = i; displayCurrentPage(); updatePagination(); });
            paginationContainer.appendChild(li);
        }
    }

    Object.values(selects).forEach(select => {
        if(select) select.addEventListener('change', () => { currentPage = 1; filterAndSortCars(); });
    });

    function changeLanguage(lang) {
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang]?.[key]) {
                if (el.tagName === 'TITLE') document.title = translations[lang][key];
                else el.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('selectedLang', lang);
        if (langSelect) langSelect.value = lang;
        filterAndSortCars();
    }

    if (langSelect) {
        langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));
    }
    
    const contactsBtn = document.getElementById('scroll-to-contacts');
    if (contactsBtn) {
        contactsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    }

    yearMinVal.textContent = yearMinInput.value;
    yearMaxVal.textContent = yearMaxInput.value;

    changeLanguage(localStorage.getItem('selectedLang') || 'uk');
});