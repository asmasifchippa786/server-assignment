import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import moment from 'moment'

let baseUrl = ``;
if (window.location.href.split(":")[0] === "http") {
  baseUrl = `http://localhost:5001`;
}

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("I am click handler");
    axios
      .get(`${baseUrl}/weather/${cityName}`)
      .then((response) => {
        console.log("response: ", response.data);

        setWeatherData(response.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  return (
    <div className="body">
      <div className="wrappper">
        <form onSubmit={submitHandler} className="form">
          <div className="name">City Name:</div>
          <div className="input">
            <input
              type="text"
              placeholder="enter your city name"
              required
              onChange={(e) => {
                setCityName(e.target.value);
              }}
            />
          </div>
          <div className="btn">
            <button type="submit">get weather</button>
          </div>
        </form>
        {weatherData === null ? null : (
          <div className="weather-Data">
            <div className="head">
              <div className="cityname">{weatherData.city}</div>
              <div className="card">
                <div className="day">{moment().format('dddd')}</div>
                <div className="date">{moment().format("MMMM Do YYYY")}</div>
              </div>
            </div>
            <div className="temp">
              {Math.round(weatherData.temp)}°C
            </div>
            <div className="other">
              <div className="min"> min: {Math.round(weatherData.min)}°C</div>
              <div className="max">max: {Math.round(weatherData.max)}°C </div>
            </div>
            <div className="other teo">
                <div className="hum">Humidity: {weatherData.humidity}%</div>
                <div className="wind">Wind Preesure: {weatherData.wind}km/m</div>
            </div>
          </div>
        )}
        <br />
        <br />
      </div>
    </div>
  );
}

export default Weather;