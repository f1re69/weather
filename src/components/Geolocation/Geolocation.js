import React from 'react';

import getWeather from '../helpers/getWeather';
import MeteoDataContext from '../contexts/MeteoDataContext';


class Geolocation extends React.Component {
  static contextType = MeteoDataContext;
  state = {
    city: '',
    lat: '',
    lon: '',
    errLocation: null,
    errOpenWeatherMap: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(({coords}) => {
        getWeather( {lat: coords.latitude, lon: coords.longitude} )
            .then(response => {
                const structuredData =  response.data.list.reduce((acc, row) => {
                    const date = row.dt_txt.split(' ')[0];
                    acc[date] =  [...(acc[date] ? acc[date] : []), row];
                    return acc;
                }, {});
                // Store data meteo to Context for MeteoDays components that will directly access data
                this.context.onLoadData(structuredData);
            })
    }, err => this.context.onError(err));
  }

  render() {
    return null
  }
}

export default Geolocation;