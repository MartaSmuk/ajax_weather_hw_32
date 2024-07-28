function getWeather() {
    let xhr = new XMLHttpRequest();
    // let url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=171dfa9d1460da65a4e66008d4090f53";
    // let url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=171dfa9d1460da65a4e66008d4090f53";
    // let url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=171dfa9d1460da65a4e66008d4090f53";
    // let url = "https://api.openweathermap.org/data/2.5/weather?lat=50.4851493&lon=30.4721233&appid=d5e5cf68a96f2aa25ea1ca879d08a6b1";
    let url = "https://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=d5e5cf68a96f2aa25ea1ca879d08a6b1";
    

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            displayWeather(data);
        } else {
            console.log('Error: ' + xhr.status);
        }
    }
    xhr.send();
}


getWeather();

function displayWeather(data) {
    const weatherContent = document.getElementById('weather-content');
    let iconCode = data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    weatherContent.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind speed: ${data.wind.speed} m/s</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Direction of wind: ${data.wind.deg}°</p>
        <img src="${iconUrl}" alt="Weather icon">
    `;
}