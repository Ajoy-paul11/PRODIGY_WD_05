import { API_KEY } from './config.js';



async function checkWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=guwahati&appid=${API_KEY}&units=metric`)
    var data = await response.json();

    console.log(data);
}

checkWeather()