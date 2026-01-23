const apiKey = "a49d86210afcd8384a7cfdab5cc2dd43";
const searchBtn = document.getElementById("searchBtn");
const weatherBox = document.querySelector(".weather-box");

async function getWeatherInfo(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    );
    const data = await res.json();
    console.log(data);
    weatherBox.innerHTML = `
        <h3 id="cityName">${data.name}</h3>
        <div class="temp" id="temperature">${Math.round(data.main.temp)}°C</div>
        <p id="description">${data.weather[0].description}</p>

        <div class="details">
          <div>
            <span>💧 Humidity</span>
            <p id="humidity">${Math.round(data.main.humidity)}%</p>
          </div>
          <div>
            <span>🌬 Wind</span>
            <p id="wind">${Math.round(data.wind.speed)}km/h</p>
          </div>
        </div>`;
  } catch (err) {
    alert("rejected");
  }
}
getWeatherInfo("kathmandu");

searchBtn.addEventListener("click", () => {
  getWeatherInfo(document.getElementById("cityInput").value);
});
