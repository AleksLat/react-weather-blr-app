import React from 'react';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App ">
      <div className="container">
      <Weather />
      <footer>
        This project was coded by {" "}
        <a href="https://www.linkedin.com/in/aleks-lat/"
        target="_blank">
          Aleks Lat{" "}
        </a>
         and is{" "}
      <a href="https://github.com/AleksLat/react-weather-blr-app"
      target="_blank">  
      open-sourced on GitHub
      </a>
      </footer>
      </div>
    </div>
  );
}

