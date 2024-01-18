/*import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'

const WeatherApp = () => {

    let api_key ='87f2d5cba1c3f9b986ae372ceac58f57'

    const [wicon,setWicon] = useState(cloud_icon)

    const search = async () => {
        const element = document.getElementsByClassName('cityInput')
        if (element[0].value==='')
        {
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response = await fetch(url)
        let data = await response.json()
        const humidity = document.getElementsByClassName('humidity-percent')
        const wind = document.getElementsByClassName('wind-rate')
        const temperature= document.getElementsByClassName('weather-temp')
        const location = document.getElementsByClassName('weather-location')

        humidity[0].innerHTML=data.main.humidity+'%'
        wind[0].innerHTML=Math.floor(data.wind.speed)+'km/h'
        temperature[0].innerHTML=Math.floor(data.main.temp)+'°c'
        location[0].innerHTML=data.name

        if(data.weather[0].icon==='01d' || data.weather[0].icon==='01n')
        {
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==='02d' || data.weather[0].icon==='02n')
        {
            setWicon(cloud_icon)
        }
        else if(data.weather[0].icon==='03d' || data.weather[0].icon==='03n')
        {
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==='04d' || data.weather[0].icon==='04n')
        {
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==='09d' || data.weather[0].icon==='09n')
        {
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==='10d' || data.weather[0].icon==='10n')
        {
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==='13d' || data.weather[0].icon==='13n')
        {
            setWicon(snow_icon)
        }
        else
        {
            setWicon(clear_icon)
        }

    }
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='Search'/>
            <div className='search-icon' onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className='weather-image'>
            <img src={wicon} alt='' />
        </div>
        <div className='weather-temp'>24°c</div>
        <div className='weather-location'>London</div>
        <div className="data-container">
            <div className='element'>
                <img src={humidity_icon} alt='' className='icon' />
                <div className='data'>
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>

                </div>

            </div>
            <div className='element'>
                <img src={wind_icon} alt='' className='icon' />
                <div className='data'>
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speed</div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default WeatherApp*/
/*import React, { useState } from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const WeatherApp = () => {
  const api_key = '87f2d5cba1c3f9b986ae372ceac58f57';

  const [weatherData, setWeatherData] = useState({
    wicon: cloud_icon,
    humidity: '64%',
    windSpeed: '18 km/h',
    temperature: '24°c',
    location: 'London',
  });

  const handleIconChange = (weatherCode) => {
    const iconMapping = {
      '01d': clear_icon,
      '01n': clear_icon,
      '02d': cloud_icon,
      '02n': cloud_icon,
      '03d': drizzle_icon,
      '03n': drizzle_icon,
      '04d': drizzle_icon,
      '04n': drizzle_icon,
      '09d': rain_icon,
      '09n': rain_icon,
      '10d': rain_icon,
      '10n': rain_icon,
      '13d': snow_icon,
      '13n': snow_icon,
    };
    return iconMapping[weatherCode] || clear_icon;
  };

  const search = async () => {
    const cityInput = document.querySelector('.cityInput');
    if (!cityInput.value) return;

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();

      setWeatherData({
        wicon: handleIconChange(data.weather[0].icon),
        humidity: `${data.main.humidity}%`,
        windSpeed: `${Math.floor(data.wind.speed)} km/h`,
        temperature: `${Math.floor(data.main.temp)}°c`,
        location: data.name,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='Search' />
        <div className='search-icon' onClick={search}>
          <img src={search_icon} alt='' />
        </div>
      </div>
      <div className='weather-image'>
        <img src={weatherData.wicon} alt='' />
      </div>
      <div className='weather-temp'>{weatherData.temperature}</div>
      <div className='weather-location'>{weatherData.location}</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} alt='' className='icon' />
          <div className='data'>
            <div className='humidity-percent'>{weatherData.humidity}</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} alt='' className='icon' />
          <div className='data'>
            <div className='wind-rate'>{weatherData.windSpeed}</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
*/
import React, { useState } from 'react';
import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const WeatherApp = () => {
  const api_key = "8457984071980fe12c5d71ce9d6b9ef4";

  const [weatherIcon, setWeatherIcon] = useState(cloud_icon);
  const [weatherData, setWeatherData] = useState({
    humidity: '64%',
    windSpeed: '18km/hr',
    temperature: '24°C',
    location: 'Kerala',
  });

  const search = async () => {
    const cityInput = document.querySelector('.cityInput');
    if (cityInput.value === "") {
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();

      setWeatherData({
        humidity: `${data.main.humidity}%`,
        windSpeed: `${data.wind.speed}km/h`,
        temperature: `${data.main.temp}°C`,
        location: data.name,
      });

      switch (data.weather[0].icon) {
        case "01d":
        case "01n":
          setWeatherIcon(clear_icon);
          break;
        case "02d":
        case "02n":
        case "03d":
        case "03n":
          setWeatherIcon(cloud_icon);
          break;
        case "04d":
        case "04n":
        case "09d":
        case "09n":
        case "10d":
        case "10n":
          setWeatherIcon(rain_icon);
          break;
        case "13d":
        case "13n":
          setWeatherIcon(snow_icon);
          break;
        default:
          setWeatherIcon(clear_icon);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='Search' />
        <div className='search-icon' onClick={search}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className='weather-image'>
        <img src={weatherIcon} alt="" />
      </div>
      <div className='weather-temp'>{weatherData.temperature}</div>
      <div className='weather-location'>{weatherData.location}</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} alt='' className='icon' />
          <div className='data'>
            <div className='humidity-percent'>{weatherData.humidity}</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} alt='' className='icon' />
          <div className='data'>
            <div className='wind-rate'>{weatherData.windSpeed}</div>
            <div className='text'>Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
