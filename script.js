const apiKey = "65e6c064c2e37e1fc86b9fd9f7d9c701";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`
let searchBox = document.querySelector('#cityName');
const searchBtn = document.querySelector('button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(cityName) {
    const response = await fetch(`${apiUrl}${cityName}&units=metric&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else{
    let data = await response.json();
    console.log(data)
    document.querySelector('.temp').innerText = Math.round(data.main.temp) + "°c";
    document.querySelector('.city').innerText = data.name;
    document.querySelector('.humidity').innerText = data.main.humidity + "%";
    document.querySelector('.wind').innerText = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"
    }
    else if (data.weather[0].main == "Humidity") {
        weatherIcon.src = "images/humidity.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Fog") {
        weatherIcon.src = "images/snow.png"
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
}
}
searchBtn.addEventListener('click', () => {
    if (searchBox.value === '')
    {
        document.querySelector('.error').innerHTML = "";
        return alert("Please enter a city name");
    }
   
    else {
        checkWeather(searchBox.value);
        searchBox.value = '';
    }
});
