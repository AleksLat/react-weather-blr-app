import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";


export default function Weather(props){
    const [weatherData, setWeatherdata] = useState({ ready: false});
    const[city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
    console.log(response.data);
    setWeatherdata({
        ready: true,
        temperature:response.data.main.temp,
        city: response.data.name,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        pressure: response.data.main.pressure,
        wind: response.data.wind.speed,
    })
    
}

function search(){
    const apiKey= "577759180b250273cb6dd606dacb4cd6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
}

function handleSubmit(event){
    event.preventDefault();
search();
}

function handleCityChange(event){
    setCity(event.target.value);
}

if(weatherData.ready) {
    return(
        <div className ="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                     <input type="search" 
                     placeholder="City name" 
                     className="form-control" 
                     autoFocus="on"
                     onChange={handleCityChange}/>
                    </div>
                    <div className="col-3">
                     <input type="submit" value="Search" className="btn btn-danger w-100"/>
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast city={weatherData.city}/>
            </div>
    );
} else {
search();
    return "Loading...";
}

   
}