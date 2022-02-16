import React, { useEffect, useState } from "react";

type postions = {
  latitude: number;
  longitude: number;
};

type weather = {
  temp: number;
  humidity: number;
  pressure: number;
};

function MyCurrLocation() {
  const [location, setLocation] = useState<postions>();
  const [locationName, setLocationName] = useState<string>();
  const [data, setData] = useState<weather>();
  const [tempC, setTempC] = useState<number>();
  const [date, setDate] = useState<string>();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Location is not support");
    }
  }, []);
  const getCoordinates = (position: any) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  console.log(location?.latitude);
  console.log(location?.longitude);
  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location?.latitude},${location?.longitude}&key=AIzaSyCIXNP1fktLcsHVktOvxkGRfQQ7sbJzQVg`
    )
      .then((res) => res.json())
      .then((details) => {
        setLocationName(details.resultd);
        fetchTemp();
      });
  });

  const fetchTemp = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((res) => res.json())
      .then((details) => {
        setData(details.main);
        setTempC(details.main.temp - 273.15);
        getDate();
      });
  };

  const getDate = () => {
    setDate(Date());
  };

  return (
    <div className="card text-center">
      <h1>{locationName?.toUpperCase()}</h1>
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
  );
}

export default MyCurrLocation;
