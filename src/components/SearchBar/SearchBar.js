import React, { useState, useContext } from 'react';

import { WeatherContext } from '../contexts/WeatherContext.js';
import getWeather from '../helpers/getWeather';
import { Container } from './SearchBarComponents';


const SearchBar = () => {
    const [formInput, setFormInput] = useState("");
    const [
        error, setError,
        city, setCity,
        lat, setLat,
        lon, setLon,
        data, setData,
        currentDay, setCurrentDay
    ] = useContext(WeatherContext);
    
    const onChangeValue = e => {
        setFormInput(e.target.value);
    };
    const onSubmitForm = e => {
        e.preventDefault();
        getWeather(formInput)
            .then(response => {
                const structuredData =  response.data.list.reduce((acc, row) => {
                    const date = row.dt_txt.split(' ')[0];
                    acc[date] =  [...(acc[date] ? acc[date] : []), row];
                    return acc;
                }, {});
                // Store data meteo to Context for MeteoDays components that will directly access data
                setCity(formInput);
                setData(structuredData);
            })
            .catch(error => console.log("SearchBar error",error));
    };
 
    return(
        <Container>
            <form onSubmit={onSubmitForm}>
                <input
                    type="text" 
                    value={formInput} 
                    placeholder="Entrez le nom d'une ville" 
                    onChange={onChangeValue} 
                />
            </form>
        </Container>
    );
}

export default SearchBar;