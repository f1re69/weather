import React, { useContext } from 'react';

import { WeatherContext } from '../../contexts/WeatherContext.js';
import { ParentContainer, Table } from './MeteoWeekComponents';
 
export const MeteoWeeks = () => {
    const {weather} = useContext(WeatherContext);
    const {data, selectedDay} = weather;
    console.log(data)

    return(
        <ParentContainer>
            <div className="childContainer">
                {showForecast(data, selectedDay)}
            </div>
        </ParentContainer>
    );
}

const convertTimeStamp = dt => {
    const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const date = new Date(dt * 1000);
    return(date.toLocaleDateString('fr-FR', options));
};

const showForecast = (data, currentDay) => {
    const date = Object.keys(data)[currentDay]
    if(Object.keys(data).length > 0) {
        return(
            <Table>
                <thead>
                    <tr>{
                        data[date].map((hour, key) => 
                        <td className="head" key={key}>
                            <div><p>{convertTimeStamp(hour.dt)}</p></div>
                        </td>
                        )}
                    </tr>
                </thead>

                <tbody>
                   <tr>{
                        data[date].map((hour, key) =>
                            <td key={key}><div>
                                <p>{Math.floor(hour.main.temp)}°</p>
                                <img src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}></img>
                            </div></td>
                        )}
                    </tr>
                </tbody>
            </Table>
        );
    } else {
        return '';
    }
}