languageButton = document.getElementsByClassName('button drop-down-menu__face-button')[0];
menu = document.getElementsByClassName('drop-down-menu')[0];
search = document.querySelector('.search-input__button');
arrowDown = document.getElementsByClassName('arrow-down')[0];

languageButton.addEventListener('click', function() {
    menu.classList.toggle('drop-down-menu--open');
    languageButton.classList.toggle('drop-down-menu__face-button--open');
    arrowDown.classList.toggle('arrow-down--open');
});

farengateButton = document.getElementsByClassName('button--f')[0];
celsiumButton = document.getElementsByClassName('button button--c')[0];

farengateButton.addEventListener('click', function() {

    localStorage.setItem('temp_degr', '°F');

});

celsiumButton.addEventListener('click', function() {

    localStorage.setItem('temp_degr', '°C');

});

RUButton = document.getElementById('ru');
ENButton = document.getElementById('en');
BEButton = document.getElementById('be');
city_input = document.querySelector('.search-input');

RUButton.addEventListener('click', () => {

    localStorage.setItem('language', 'ru')
    languageButton.click();

    languageButton.innerHTML = 'Язык';
    city_input.placeholder = 'Введите название города';
    search.innerHTML = 'Поиск';

});


ENButton.addEventListener('click', () => {

    localStorage.setItem('language', 'en')
    languageButton.click();

    languageButton.innerHTML = 'Language';
    city_input.placeholder = 'Enter city name';
    search.innerHTML = 'Search';

});


BEButton.addEventListener('click', () => {

    localStorage.setItem('language', 'be')
    languageButton.click();

    languageButton.innerHTML = 'Мова';
    city_input.placeholder = 'Калі ласка, увядзіце назву горада';
    search.innerHTML = 'Пошук';

});

current_lang = localStorage.getItem('language');

if (current_lang == null)
    localStorage.setItem('language', 'en');

if (current_lang == 'en') {

    languageButton.innerHTML = 'Language';
    city_input.placeholder = 'Enter city name';
    search.innerHTML = 'Search';

} else if (current_lang == 'ru') {

    languageButton.innerHTML = 'Язык';
    city_input.placeholder = 'Введите название города';
    search.innerHTML = 'Поиск';

} else if (current_lang == 'be') {

    languageButton.innerHTML = 'Мова';
    city_input.placeholder = 'Калі ласка, увядзіце назву горада';
    search.innerHTML = 'Пошук';

}