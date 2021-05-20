//0ccf0b1c1a6737e16e4c88c68e630b77

input = document.querySelector('.search-input');
input.placeholder = 'wsdcsdc';

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weatherDescription = document.querySelector('.weather-description');

const city = document.querySelector('.search-input');


const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city.placeholder}&lang=ua&units=metric&APPID=0ccf0b1c1a6737e16e4c88c68e630b77`;
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