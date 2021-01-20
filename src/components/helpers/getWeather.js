import openWeatherMap from '../../apis/openWeatherMap'

const getWeather = props => {
  if (typeof props === "string") {
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
  if (typeof props === "object") {
    return(
      openWeatherMap.get(openWeatherMap.defaults.baseURL, {
      params: {
          lat: props.lat,
          lon: props.lon,
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
}
export default getWeather