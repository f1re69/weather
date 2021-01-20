import React, { useState, createContext } from 'react';

export const WeatherContext = createContext();

export const WeatherContextProvider = props => {

  const [weather, setWeather] = useState({
    error: "",
    city: "",
    lat: "",
    lon: "",
    data: "",
    selectedDay: 0
  })

  const setError = (error) => {
      // weather.error = error;
      // setWeather(weather);
      setWeather(Object.assign({}, weather, { error }));

  }
  const setCity = (city) => {
      // weather.city = city;
      // setWeather(weather)
      setWeather(Object.assign({}, weather, { city }));

  }
  const setCoord = (lat, lon) => {
    // weather.lat = lat;
    // weather.lon = lon
    // setWeather(weather)
    setWeather(Object.assign({}, weather, { lat, lon }));

  }  
  const setData = (data) => {
    // weather.data = data;
    // setWeather(weather);
    // console.log(data)
    setWeather(Object.assign({}, weather, { data }));

  }  
  const setSelectedDay = (selectedDay) => {
    // weather.selectedDay(selectedDay);
    // setWeather(weather);
    setWeather(Object.assign({}, weather, { selectedDay }));

  }

  return(
    <WeatherContext.Provider value={{weather, setError, setCity, setCoord, setData, setSelectedDay}}>
      {props.children}
    </WeatherContext.Provider>
  );
}