import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
    const [weatherData, setWeatherdata] = useState({ ready: false});
    function handleResponse(response) {
    console.log(response.data);
    setWeatherdata({
        ready: true,
        temperature:response.data.main.temp,
        city: response.data.name,
        description: response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
        humidity: response.data.main.humidity,
        date: "Wed 12:00",
        pressure: response.data.main.pressure,
        wind: response.data.wind.speed,
    })
    
}

if(weatherData.ready) {
    return(
        <div className ="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                     <input type="search" placeholder="City name" className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                     <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <div className="row">
                <div className="col-6">
                <span className="temperature">{Math.round(weatherData.temperature)} </span>
                <span className="unit">C° / F°</span> 
           <ul>
               <li>
                {weatherData.date}
               </li>
               <li className="text-capitalize">
                {weatherData.description}
               </li>
           </ul>
                </div>
                <div className="col-6">
                    <img src="src/busel.jpg"/>
                    <a href="https://bysol.org/english" target="_blank">
                    Donate now
                    </a>
                </div>
            </div>
            
           <div className="row">
               <div classname="col-2">
                   <img className="mainImg"
                   src={weatherData.iconUrl}
                   alt={weatherData.description}/>
               </div>
               <div className="col-6 parameters">
                   <ul>
                       <li>Humidity</li>
                       <li>Pressure</li>
                       <li>Wind</li>
                   </ul>
               </div>
               <div className="col-4">
                   <ul>
                       <li>{weatherData.humidity}%</li>
                       <li>{weatherData.pressure}</li>
                       <li>{weatherData.wind}km/hr</li>
                   </ul>
               </div>
           </div>
            
            
            </div>
    );
} else {

    const apiKey= "577759180b250273cb6dd606dacb4cd6";
    let city="London";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)

    return "Loading...";
}

   
}