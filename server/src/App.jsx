
import { useState, useEffect } from "react"
import axios from "axios";




function Weather() {

    const [weatherData, setWeatherData] = useState(null)
    const [cityName, setCityName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        console.log("I am click handler")
        axios.get(`http://localhost:5001/weather`)
            .then(response => {
                console.log("response: ", response.data);

                setWeatherData(response.data);
            })
            .catch(err => {
                console.log("error: ", err);
            })
    }

    return (
        <div>

            <form onSubmit={submitHandler}>
                City Name:
                <input type="text" placeholder="enter your city name" required
                    />

                <button type="submit">get weather</button>
            </form>
            <br />
            <br />

            {(weatherData === null) ? null :
                <div>
                    Temperature: {Math.round(weatherData?.temp)}°C
                    <br />
                    min: {Math.round(weatherData?.min)}°C
                    <br />
                    max: {Math.round(weatherData?.max)}°C
                </div>
            }
        </div>
    );
}

export default Weather;



