import React, { useState, useReducer, createContext } from 'react';
import {weatherReducer} from '../reducers/weatherReducer';

export const WeatherContext = createContext();

export const WeatherContextProvider = props => {
  
  const [weather, dispatch] = useReducer(weatherReducer, {
    error: "",
    city: "",
    lat: "",
    lon: "",
    data: "",
    selectedDay: 0
  })

  return(
    <WeatherContext.Provider value={{weather, dispatch}}>
      {props.children}
    </WeatherContext.Provider>
  );
}