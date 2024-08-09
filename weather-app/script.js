const inputBox = document.querySelector('.input-box');
const searchButton = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temparature = document.querySelector('.temparature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const locationNotFound = document.querySelector('.location-not-found')
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key = "0b557ee7be8fe16d1406d54ffd4b1dce";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        locationNotFound.style.display = "flex";
        weather_body.style.display = "none";
        console.log('error');
        return;
    }
    locationNotFound.style.display = "none";
    weather_body.style.display = "flex";
    console.log(weather_data);
    
    temparature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}Km/H`;

    
        switch(weather_data.weather[0].main){
            case 'Clouds':
                weather_img.src = "../weather-app/images/cloud.png";
                break;
            case 'Clear':
                weather_img.src = "../weather-app/images/clear.png";
                break;
            case 'Rain':
                weather_img.src = "../weather-app/images/rain.png";
                break;
            case 'Mist':
                weather_img.src = "../weather-app/images/mist.png";
                break;
            case 'Snow':
                weather_img.src = "../weather-app/images/snow.png";
                break;
            case 'Thunderstorm':
                weather_img.src = "../weather-app/images/thunderstorm.jpg";
                break;
            case 'Haze':
                weather_img.src = "../weather-app/images/haze.jpg";
                break;     
            default:
                weather_img.src = "../weather-app/images/404.png"
        }
      };
      
   

searchButton.addEventListener('click', ()=>{
    checkWeather(inputBox.value)
})

