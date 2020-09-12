
const apiData = {
    url: "https://api.openweathermap.org/data/2.5/",
    type: "weather",
    city: "Quezon City",
    units: "metric",
    appId: "7cdb59565e2298911f177546e7c34a70"
}

const { url, type, city, units, appId } = apiData;
const apiUrl = `${url}${type}?q=${encodeURIComponent(city)}&units=${units}&appId=${appId}`;
const weatherWrapper = document.querySelector('.weather-wrapper');

async function showWeather() {
    let res = await fetch(apiUrl);
    let weather = await res.json();
    
    const addHtml = data => {
        const desc = data.weather[0].description;
        const urlImg = 'https://openweathermap.org/img/wn/';
        const icon = `${urlImg}${data.weather[0].icon}@2x.png`;
    
        const html = `
                <p class="cityCountry">${data.name}, ${data.sys.country}</p>
                <img alt="Weather Icon" class="icon" src="${icon}">
                <p class="weather">${desc[0].toUpperCase() + desc.substring(1)}</p>
                <p class="temp">${data.main.temp}&#8451;</p>
            `;    
        
        weatherWrapper.innerHTML = html;
    }

    let details = addHtml(weather);
}

showWeather();
