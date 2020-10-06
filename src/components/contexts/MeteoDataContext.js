import React from 'react';

const Context = React.createContext([])

export class MeteoDataStore extends React.Component {
  state = {
    city: "",
    lat: "",
    lon: "",
    data: {},
    currentDay: 0
  }

  onSearchCity = (city) => this.setState({ city })

  onGeolocation = (lat, lon) => this.setState({lat, lon})

  onLoadData = data => this.setState({ data })

  onSetDay = currentDay => this.setState({currentDay})

  render() {
    return(
      <Context.Provider 
        value={{...this.state, onSearchCity: this.onSearchCity, onGeolocation: this.onGeolocation, onLoadData: this.onLoadData, onSetDay: this.onSetDay}} >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context