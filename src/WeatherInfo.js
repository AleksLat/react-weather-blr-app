import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return  (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <div className="row">
                <div className="col-6">
                    <WeatherTemp celsius={props.data.temperature}/>
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
                    <ul className="donation">
                        <li className="belarus">#STAND WITH BELARUS</li>
                       
                        <li>
                        <a className="btn btn-primary btn-light btn-sm donation" 
                            href="https://bysol.org/english" 
                            role="button"
                            target="_blank"
                            >How To Help</a>
                        </li>
                    </ul>
                </div>
            </div>
            
           <div className="row">
               <div className="col-1 mainImg">
                   <WeatherIcon code={props.data.icon}
                   alt={props.data.description}/>
               </div>
               <div className="col-8 parameters ">
                   <ul className="boldText">
                       <li>Humidity</li>
                       <li>Pressure</li>
                       <li>Wind</li>
                   </ul>
               </div>
               <div className="col-2 paramValues">
                   <ul>
                       <li>{props.data.humidity}%</li>
                       <li>{props.data.pressure}hPa</li>
                       <li>{props.data.wind}km/hr</li>
                   </ul>
               </div>
           </div>
        </div>

    );
    
}