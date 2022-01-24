import React, { useEffect, useState } from 'react';

function Timer() {
    const [currentTime, setCurrentTime] = useState(new Date().getTime())
    const endTime = new Date('2022,05,24,00:00:00').getTime()
    const gap = endTime - currentTime;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const remainingDays = Math.floor(gap / days);
    const remainingHours = Math.floor((gap % days) / hours);
    const remainingMinutes = Math.floor((gap % hours) / minutes);
    const remainingSeconds = Math.floor((gap % minutes) / seconds);


    useEffect(() => {
        setTimeout(() => (
            setCurrentTime(new Date().getTime()), 1000
        ))
    }, [currentTime])


    return (
        <div>
            <h3>CountDown</h3>
            <table>
                <thead>
                    <tr>
                        <th>{remainingDays}</th>
                        <th>{remainingHours}</th>
                        <th>{remainingMinutes}</th>
                        <th>{remainingSeconds}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Days</th>
                        <th>Hours</th>
                        <th>Minites</th>
                        <th>Seconds</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Timer;
