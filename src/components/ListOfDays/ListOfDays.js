import React, { useContext } from 'react';

import { WeatherContext } from '../../contexts/WeatherContext.js';
import { Button, Container } from './ListOfDaysComponents';

const ListOfDays = () => {
    const {weather, dispatch} = useContext(WeatherContext);
    const {selectedDay} = weather;
    const date = new Date();
    const currDay = date.getDay();
    const week = getSortedWeek(currDay);
  
    return(
        <Container>
            <Button className={selectedDay === 0 ? 'active' : ''} onClick={() => dispatch({type: 'SET_DAY_INDEX', selectedDay: 0})} >
                {week[0]}
              </Button>
            <Button className={selectedDay === 1 ? 'active' : ''} onClick={() => dispatch({type: 'SET_DAY_INDEX', selectedDay: 1})} >
                {week[1]}
            </Button>
            <Button className={selectedDay === 2 ? 'active' : ''} onClick={() => dispatch({type: 'SET_DAY_INDEX', selectedDay: 2})} >
                {week[2]}
            </Button>
            <Button className={selectedDay === 3 ? 'active' : ''} onClick={() => dispatch({type: 'SET_DAY_INDEX', selectedDay: 3})} >
                {week[3]}
            </Button>
            <Button className={selectedDay === 4 ? 'active' : ''} onClick={() => dispatch({type: 'SET_DAY_INDEX', selectedDay: 4})} >
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