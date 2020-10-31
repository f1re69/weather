import React, { useContext } from 'react';

import { WeatherContext } from '../contexts/WeatherContext.js';
import { Button, Container } from './ListOfDaysComponents';

const ListOfDays = () => {
    const [
        error, setError,
        city, setCity,
        lat, setLat,
        lon, setLon,
        data, setData,
        currentDay, setCurrentDay
    ] = useContext(WeatherContext);
    const date = new Date();
    const currDay = date.getDay();
    const week = getSortedWeek(currDay);
  
    return(
        <Container>
            <Button className={currentDay === 0 ? 'active' : ''} onClick={() => setCurrentDay(0)} >
                {week[0]}
              </Button>
            <Button className={currentDay === 1 ? 'active' : ''} onClick={() => setCurrentDay(1)} >
                {week[1]}
            </Button>
            <Button className={currentDay === 2 ? 'active' : ''} onClick={() => setCurrentDay(2)} >
                {week[2]}
            </Button>
            <Button className={currentDay === 3 ? 'active' : ''} onClick={() => setCurrentDay(3)} >
                {week[3]}
            </Button>
            <Button className={currentDay === 4 ? 'active' : ''} onClick={() => setCurrentDay(4)} >
                {week[4]}
            </Button>
        </Container>
    );
}

const getSortedWeek = firstDay => {
    const days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    const sortedDays = [];

    for (let i = 0; i < 7; i++) {
        let currentDay = (firstDay + i) % 7;
        sortedDays[i] = days[currentDay];
    }
    return(sortedDays);
}

export default ListOfDays;