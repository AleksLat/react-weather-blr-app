import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return  (
        <div classname="WeatherInfo">
            <h1>{props.data.city}</h1>
            <div className="row">
                <div className="col-6">
                <span className="temperature">{Math.round(props.data.temperature)} </span>
                <span className="unit">C° / F°</span> 
           <ul>
               <li>
                <FormattedDate date={props.data.date}/>
               </li>
               <li className="text-capitalize">
                {props.data.description}
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
                   src={props.data.iconUrl}
                   alt={props.data.description}/>
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
                       <li>{props.data.humidity}%</li>
                       <li>{props.data.pressure}</li>
                       <li>{props.data.wind}km/hr</li>
                   </ul>
               </div>
           </div>
        </div>

    );
    
}