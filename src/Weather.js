import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className ="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                     <input type="search" placeholder="City name" className="form-control"/>
                    </div>
                    <div className="col-3">
                     <input type="submit" value="Search" className="btn btn-primary"/>
                    </div>
                </div>
            </form>
            <h1>Minsk</h1>
            <div className="row">
                <div className="col-6">
                <h1>12 C° / F°</h1>
           <ul>
               <li>
                Wed 12:06
               </li>
               <li>
                Light rain
               </li>
           </ul>
                </div>
                <div className="col-6">
                    BUSEL
                    <a href="https://bysol.org/english" target="_blank">
                    Donate
                    </a>
                </div>
            </div>
            
           <div className="row">
               <div classname="col-6">
                   <img className="MainImg"
                   src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                   alt="Clouds"/>
               </div>
               <div className="col-3">
                   <ul>
                       <li>Humidity</li>
                       <li>Pressure</li>
                       <li>Wind</li>
                   </ul>
               </div>
               <div className="col-3">
                   <ul>
                       <li>70%</li>
                       <li>1023</li>
                       <li>2 km/hr</li>
                   </ul>
               </div>
           </div>
            
            
            </div>
    )
}