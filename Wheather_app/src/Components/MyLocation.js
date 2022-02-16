import React, { useEffect, useState } from 'react'

function MyLocation() {
    const [location, setLocation] = useState({})
    const [locationName, setLocationName] = useState()
    const [data, setData] = useState([])
    const [tempC, setTempC] = useState()
    const [date, setDate] = useState()
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates)
        } else {
            alert("Location is not support")
        }
    }, [])
    const getCoordinates = (position) => {
        setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    }

    console.log(location.latitude)
    console.log(location.longitude)
    useEffect(() => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyCIXNP1fktLcsHVktOvxkGRfQQ7sbJzQVg`)
            .then((res) => res.json())
            .then(details =>
                setLocationName(details.resultd)
            )
    })

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=d885aa1d783fd13a55050afeef620fcb`)
            .then((res) => res.json())
            .then((details) => {
                setData(details.main)
                setTempC(details.main.temp - 273.15)
                getDate()
            })
    })

    const getDate = () => {
        setDate(Date())
    }

    return (
        <div>
            <div className="card">
                <h1>{tempC}</h1>
                <p>{date}</p>
                <p>Pressure :<h6>{data.pressure}&nbsp;hPa</h6></p>
                <p>Humidity : <h6>{data.humidity}&nbsp;%</h6></p>
            </div>
        </div>
    )
}

export default MyLocation