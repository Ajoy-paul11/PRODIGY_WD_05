import { API_KEY } from './config.js';



async function checkWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=siliguri&appid=${API_KEY}&units=metric`)
    var data = await response.json();

    document.querySelector('.temp').innerText = Math.round(data.main.temp) + "°C";
    document.querySelector('.city').innerText = data.name;
    document.querySelector('.humidity').innerText = data.main.humidity + "%";
    document.querySelector('.wind').innerText = data.wind.speed + " Km/h";
    console.log(data);

    if (data.weather[0].main == "Clouds") {
        document.querySelector('.weather-icon').src = "./images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        document.querySelector('.weather-icon').src = "./images/clear.png"
    } else if (data.weather[0].main == "Drizzle") {
        document.querySelector('.weather-icon').src = "./images/drizzle.png"
    } else if (data.weather[0].main == "Humidity") {
        document.querySelector('.weather-icon').src = "./images/humidity.png"
    } else if (data.weather[0].main == "Mist") {
        document.querySelector('.weather-icon').src = "./images/mist.png"
    } else if (data.weather[0].main == "Rain") {
        document.querySelector('.weather-icon').src = "./images/rain.png"
    } else if (data.weather[0].main == "Snow") {
        document.querySelector('.weather-icon').src = "./images/snow.png"
    }
}

checkWeather()