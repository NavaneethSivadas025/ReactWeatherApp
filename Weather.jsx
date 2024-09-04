import React, { useState, useEffect, useRef } from 'react';
import './Weather.css'
import { FaSearch } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
const Weather = () => {

    const [weatherData, setweatherData] = useState(false);
    const inputRef = useRef("");
    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=066ca19cd1d4d47a615601c8f7d072ad`;
            const response = await fetch(url);
            const data = await response.json();
            setweatherData({
                humidity: data.main.humidity,
                windspeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name
            })
        }
        catch (err) {
            setweatherData({
                humidity: 1,
                windspeed: 2,
                temperature: 3000,
                location: 0
            })
        }
    }
    useEffect(() => {
        search("Mumbai");
    }, [])
    return (
        <div className='weather'>
            <div className="search-bar">
                <input ref={inputRef} type="text" placeholder="Search for your city" />
                <FaSearch className="searchbutton" onClick={() => search(inputRef.current.value)} />
            </div>
            <div className="sunny">
                <IoIosSunny />
            </div>
            <div>
                <p className="temperature">{weatherData.temperature}<sup>o</sup>C</p>
                <p className="city">{weatherData.location}</p>
            </div>
            <div className="weatherdata">
                <div className="col">
                    <div className="humidity">
                        <WiHumidity />
                    </div>
                    <p>{weatherData.humidity}</p>
                    <span>Humidity</span>
                </div>
                <div className="col">
                    <div className="windspeed">
                        <FaWind />
                    </div>
                    <p>{weatherData.windspeed}</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div >
    )
}

export default Weather;