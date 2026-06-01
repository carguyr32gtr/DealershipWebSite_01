// data.js
const translations = {
    uk: {
        title_catalog: "Каталог автомобілів", nav_home: "Головна", nav_catalog: "Каталог", nav_contacts: "Зв'язок з нами",
        catalog_header: "Наш Каталог", filter_price: "Ціна", filter_brand: "Марка", filter_body: "Кузов",
        filter_country: "Країна", filter_mileage: "Пробіг", filter_class: "Клас авто", filter_sort: "Сортувати за",
        filter_year: "Рік випуску від", opt_all: "Всі", opt_new_car: "Без пробігу (Нова)",
        body_coupe: "Купе", body_sedan: "Седан", body_suv: "Позашляховик",
        country_germany: "Німеччина", country_italy: "Італія", country_japan: "Японія",
        type_sport: "Спорткари", type_super: "Суперкари", type_hyper: "Гіперкари", type_suv: "Позашляховики (SUV)",
        sort_price_asc: "Ціна: від дешевих", sort_price_desc: "Ціна: від дорогих", sort_year_desc: "Новіші за роком",
        sort_mileage_asc: "Найменший пробіг", no_cars: "Автомобілів не знайдено", text_year: "рік", text_km: "км",
        text_from: "Знайдено авто:", text_out_of: "з",
        filter_year: "Рік випуску"
    },
    en: {
        title_catalog: "Car Catalog", nav_home: "Home", nav_catalog: "Catalog", nav_contacts: "Contact us",
        catalog_header: "Our Catalog", filter_price: "Price", filter_brand: "Brand", filter_body: "Body Type",
        filter_country: "Country", filter_mileage: "Mileage", filter_class: "Car Class", filter_sort: "Sort by",
        filter_year: "Year of release from", opt_all: "All", opt_new_car: "No mileage (New)",
        body_coupe: "Coupe", body_sedan: "Sedan", body_suv: "SUV",
        country_germany: "Germany", country_italy: "Italy", country_japan: "Japan",
        type_sport: "Sports Cars", type_super: "Supercars", type_hyper: "Hypercars", type_suv: "SUVs",
        sort_price_asc: "Price: low to high", sort_price_desc: "Price: high to low", sort_year_desc: "Newer by year",
        sort_mileage_asc: "Lowest mileage", no_cars: "No cars found", text_year: "y.o.", text_km: "km",
        text_from: "Found cars:", text_out_of: "of",
        filter_year: "Year of release"
    },
    ru: {
        title_catalog: "Каталог автомобилей", nav_home: "Главная", nav_catalog: "Каталог", nav_contacts: "Связь с нами",
        catalog_header: "Наш Catalog", filter_price: "Цена", filter_brand: "Марка", filter_body: "Кузов",
        filter_country: "Страна", filter_mileage: "Пробег", filter_class: "Класс авто", filter_sort: "Сортировка",
        filter_year: "Год выпуска от", opt_all: "Все", opt_new_car: "Без пробега (Новая)",
        body_coupe: "Купе", body_sedan: "Седан", body_suv: "Внедорожник",
        country_germany: "Германия", country_italy: "Италия", country_japan: "Япония",
        type_sport: "Спорткары", type_super: "Суперкары", type_hyper: "Гиперкары", type_suv: "Внедорожники (SUV)",
        sort_price_asc: "Цена: от дешевых", sort_price_desc: "Цена: от дорогих", sort_year_desc: "Более новые по году",
        sort_mileage_asc: "Наименьший пробег", no_cars: "Автомобилей не найдено", text_year: "г.", text_km: "км",
        text_from: "Найдено авто:", text_out_of: "из",
        filter_year: "Год выпуска"
    }
};

const CarsCatalogData = [
    { id: 'car1', brand: 'Porsche', model: '911 Carrera', class: 'sport', body: 'Coupe', country: 'Німеччина', year: 2022, mileage: 15000, price: 120000, img: 'pics/car1.jpg' },
    { id: 'car2', brand: 'BMW', model: 'M4 Competition', class: 'sport', body: 'Coupe', country: 'Німеччина', year: 2023, mileage: 8000, price: 85000, img: 'pics/car2.jpg' },
    { id: 'car3', brand: 'Ferrari', model: 'F8 Tributo', class: 'super', body: 'Coupe', country: 'Італія', year: 2021, mileage: 4000, price: 280000, img: 'pics/car3.jpg' },
    { id: 'car4', brand: 'Toyota', model: 'RAV4 Hybrid', class: 'suv', body: 'SUV', country: 'Японія', year: 2024, mileage: 0, price: 38000, img: 'pics/car4.jpg' },
    { id: 'car5', brand: 'Lamborghini', model: 'Revuelto', class: 'hyper', body: 'Coupe', country: 'Італія', year: 2025, mileage: 500, price: 600000, img: 'pics/car5.jpg' },
    { id: 'car6', brand: 'BMW', model: 'X5 M60i', class: 'suv', body: 'SUV', country: 'Німеччина', year: 2023, mileage: 23000, price: 95000, img: 'pics/car6.jpg' },
    { id: 'car7', brand: 'Porsche', model: 'Taycan Turbo S', class: 'super', body: 'Sedan', country: 'Німеччина', year: 2022, mileage: 12000, price: 145000, img: 'pics/car7.jpg' }
];