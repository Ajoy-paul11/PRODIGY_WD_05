import { API_KEY } from './config.js';

const searchInput = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')

async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block'

        document.querySelector('.temp').innerText = "NA"
        document.querySelector('.city').innerText = "Invalid"
        document.querySelector('.humidity').innerText = "NA"
        document.querySelector('.wind').innerText = "NA"

    } else {
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

        document.querySelector('.error').style.display = 'none'

    }

}

searchBtn.addEventListener('click', function () {

    checkWeather(searchInput.value)
})
