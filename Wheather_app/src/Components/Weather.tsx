import React, { ChangeEvent, FormEvent, useState } from "react";

type weather = {
  temp: number;
  humidity: number;
  pressure: number;
};

function Weather() {
  const [city, setCity] = useState<string>();
  const [data, setData] = useState<weather>();
  const [tempC, setTempC] = useState<number>();
  const [date, setDate] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(city);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((res) => res.json())
      .then((details) => {
        setData(details.main);
        setTempC(details.main.temp - 273.15);
        getDate();
      });
  };

  const getDate = () => {
    setDate(new Date().toLocaleDateString());
  };

  return (
    <div>
      <h3>Weather Details</h3>
      <form onSubmit={handleSubmit}>
        <input className="" type="text" onChange={handleChange} />
        <button type="submit" className="btn btn-primary">
          Get Temperature
        </button>
      </form>
      <div className="card text-center">
        <h1>{city?.toUpperCase()}</h1>
        {tempC && (
          <h1>
            {tempC.toFixed(2)}
            <sup>o</sup>C
          </h1>
        )}

        <p>{date}</p>
        {data && (
          <p>
            Pressure : <h6>{data?.pressure}&nbsp;hPa</h6>
          </p>
        )}
        {data && (
          <p>
            Humidity : <h6>{data?.humidity}&nbsp;%</h6>
          </p>
        )}
      </div>
    </div>
  );
}

export default Weather;
