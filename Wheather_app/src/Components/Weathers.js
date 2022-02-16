import React, { useEffect, useState } from "react";

function Weathers() {
    const [city, setCity] = useState();
    const [data, setData] = useState([])
    const [tempC, setTempC] = useState()
    const [date, setDate] = useState()

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
            .then((res) => res.json())
            .then((details) => {
                setData(details.main)
                setTempC(details.main.temp - 273.15)
                getDate()
            })
    };



    const getDate = () => {
        setDate(Date())
    }

    console.log(date)

    return (
        <div>
            <h3>Weather Details</h3>
            <form onSubmit={handleSubmit}>
                <input className="" type="text" onChange={handleChange} />
                <button className="btn btn-primary">
                    Get Temperature
                </button>
            </form>
            <div className="card">
                <h1>{tempC}</h1>
                <p>{date}</p>
                <p>Pressure :<h6>{data.pressure}&nbsp;hPa</h6></p>
                <p>Humidity : <h6>{data.humidity}&nbsp;%</h6></p>
            </div>
        </div>
    );
}

export default Weathers;
