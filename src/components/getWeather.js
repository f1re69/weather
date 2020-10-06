import openWeatherMap from '../apis/openWeatherMap'


const getWeather = props => {
  return(
      openWeatherMap.get(openWeatherMap.defaults.baseURL, {
      params: {
          q: props,
          appid: openWeatherMap.defaults.key,
          units: openWeatherMap.defaults.units
      }
    })
    .then(response => {
        return(response)
    })
    // .catch(function (error) {
    //     console.log(error);
    // })
  )
}
export default getWeather