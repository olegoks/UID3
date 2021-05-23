//0ccf0b1c1a6737e16e4c88c68e630b77

mapboxgl.accessToken = 'pk.eyJ1Ijoib2xlZ29rcyIsImEiOiJja294MGlnc2cwOW5qMm9wY3lwams2cGZ1In0.bHU3WH1wpH-muUAvQArzUg';

function UpdateMap(lng, lat) {

    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [lng, lat], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

}

search = document.querySelector('.search-input__button');
city = document.querySelector('.search-input');

var icons = document.getElementsByClassName('weather_icon');
temperatures = document.getElementsByClassName('temperature');
humidities = document.getElementsByClassName('humidity');
weather_descriptions = document.getElementsByClassName('weather_description');
winds = document.getElementsByClassName('wind');

city_name = document.querySelector('.city_name');
country_name = document.querySelector('.country_name');


function CelsInFar(celsium) {

    return Math.round((celsium * 9 / 5) + 32);

}

function getHumidityString() {

    current_lang = localStorage.getItem('language');

    if (current_lang == 'en')
        return 'Humidity';
    else if (current_lang == 'ru')
        return 'Влажность';
    else if (current_lang == 'be')
        return 'Вільготнасць';

}

function getTemperatureString() {

    current_lang = localStorage.getItem('language');

    if (current_lang == 'en')
        return 'Temperature';
    else if (current_lang == 'ru')
        return 'Температура';
    else if (current_lang == 'be')
        return 'Тэмпература';

}

function getWindSpeedString() {

    current_lang = localStorage.getItem('language');

    if (current_lang == 'en')
        return 'Wind speed';
    else if (current_lang == 'ru')
        return 'Скорость ветра';
    else if (current_lang == 'be')
        return 'Хуткасць ветру';

}

async function changeWeatherInfo() { //${city.placeholder}

    current_lang = localStorage.getItem('language');

    if (city.value == "")
        city.value = localStorage.getItem('city_name');

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&lang=${current_lang}&units=metric&APPID=0ccf0b1c1a6737e16e4c88c68e630b77`;
    const res = await fetch(url);

    if (!res.ok) {

        if (current_lang == 'en') {
            city.value = '';
            city.placeholder = 'Incorrect city name';
        } else if (current_lang == 'ru') {
            city.value = '';
            city.placeholder = 'Неверное наименование города';
        } else if (current_lang == 'be') {
            city.value = '';
            city.placeholder = 'Няправільнае найменне горада';
        }
        return;

    }

    const data = await res.json();
    weather_descriptions[0].innerHTML = data.list[0].weather[0].description;
    humidities[0].innerHTML = `${getHumidityString()}:${data.list[0].main.humidity}%`;
    winds[0].innerHTML = `${getWindSpeedString()}:${data.list[0].wind.speed} m/s`;

    for (let i = 0; i < icons.length; i++) {

        icons[i].classList.add(`owf-${data.list[i].weather[0].id}`);

        current_degr = localStorage.getItem('temp_degr')

        degrees = data.list[i].main.temp;

        if (current_degr == '°F')
            degrees = CelsInFar(degrees);

        if (i != 0) {

            temperatures[i].textContent = `${degrees}${ current_degr}`;

        } else {

            temperatures[i].textContent = `${getTemperatureString()}:${degrees}${ current_degr}`;

        }

    }

    UpdateMap(data.city.coord.lon, data.city.coord.lat);

    country_name.innerHTML = data.city.country;
    city_name.innerHTML = city.value + ',';

    localStorage.setItem('city_name', city.value);

}

changeWeatherInfo();

search.addEventListener('click', () => {

    changeWeatherInfo();

});

city.addEventListener('keypress', function(event) {

    //if Enter pressed
    if (event.keyCode == 13) {


        city.blur();
        search.click();
        localStorage.setItem('city_name', city_name.value);

    }

});