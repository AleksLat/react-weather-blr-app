
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastPreview.css";

export default function WeatherForecastPreview(props){
function hours(){
    let date = new Date(props.data.dt*1000);
    let hours = date.getHours();
    return `${hours}:00`;
}
function temperature(){
    let temperature = Math.round(props.data.main.temp);
return `${temperature}°C`;
}

function feelTemperature(){
    let feelTemperature = Math.round(props.data.main.feels_like);
return `${feelTemperature}°C`;
}

    return(
        <div className=" WeatherForecastPreview col">
        {hours()}
        <WeatherIcon code= {props.data.weather[0].icon}/>
       <ul>
           <li>{temperature()}</li>
           <li className="feelTemperature">{feelTemperature()}</li>
           </ul>
       
        </div>
    );
}
