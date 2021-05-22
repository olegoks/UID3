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

async function changeWeatherInfo() { //${city.placeholder}

    current_lang = localStorage.getItem('language');

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
    humidities[0].innerHTML = `${data.list[0].main.humidity}%`;
    winds[0].innerHTML = `${data.list[0].wind.speed} m/s`;

    for (let i = 0; i < icons.length; i++) {

        icons[i].classList.add(`owf-${data.list[i].weather[0].id}`);
        temperatures[i].textContent = `${data.list[i].main.temp}°C`;

    }

    UpdateMap(data.city.coord.lon, data.city.coord.lat);

    country_name.innerHTML = data.city.country;
    city_name.innerHTML = city.value + ',';

}

//changeWeatherInfo();

search.addEventListener('click', () => {

    changeWeatherInfo();

});

/*
const res = await fetch(url);

if (!res.ok) {

    city.textContent = 'Incorrect city name';

    return;

}

localStorage.setItem('city_name', city.textContent);

const data = await res.json();

weatherIcon.classList.add(`owf-${data.weather[0].id}`);

temperature.textContent = `${data.main.temp}°C`;
weatherDescription.textContent = data.weather[0].description;
humidity.innerHTML = `${data.main.humidity}%`;
wind.innerHTML = `${data.wind.speed} m/s`;
*/