import { useContext, useEffect } from 'react';
import getWeather from '../helpers/getWeather';
import { WeatherContext } from '../../contexts/WeatherContext';

const Geolocation = () => {
  const { weather, dispatch } = useContext(WeatherContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      getWeather( {lat: coords.latitude, lon: coords.longitude} )
            .then(response => {
                  const structuredData =  response.data.list.reduce((acc, row) => {
                    const date = row.dt_txt.split(' ')[0];
                    acc[date] =  [...(acc[date] ? acc[date] : []), row];
                        return acc;
                  }, {});
                  // Store data meteo to Context for MeteoDays components that will directly access data
                  dispatch({type: 'SET_DATA', data: structuredData});
            });
    }, error => dispatch({type: 'SET_ERROR', error}));
  }, []);

  return null;
}

export default Geolocation;