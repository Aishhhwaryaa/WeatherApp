// Replace with your own OpenWeather API key
const apiKey = "a91f151d169b01b1412a5edcc5a3b167";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=${apiKey}&units=metric`;

    document.getElementById("weatherResult").innerHTML = "<p>⏳ Loading...</p>";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                const weather = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <img src="${icon}" alt="Weather Icon">
          <p>🌡 Temperature: <strong>${data.main.temp}</strong> °C</p>
          <p>☁ Condition: ${data.weather[0].description}</p>
          <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;
                document.getElementById("weatherResult").innerHTML = weather;
            } else {
                document.getElementById("weatherResult").innerHTML = "<p>❌ City not found. Try again!</p>";
            }
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = "<p>⚠️ Error fetching weather data.</p>";
        });
}
