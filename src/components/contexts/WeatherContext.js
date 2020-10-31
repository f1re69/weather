import React, { useState, createContext } from 'react';

export const WeatherContext = createContext();

export const WeatherContextProvider = props => {

  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [data, setData] = useState({});
  const [currentDay, setCurrentDay] = useState(0);

  return(
    <WeatherContext.Provider value={[
      error, setError, city, setCity, lat, setLat, lon, setLon, data, setData, currentDay, setCurrentDay
    ]}>
      {props.children}
    </WeatherContext.Provider>
  );
}