import React from 'react';
import styled from 'styled-components'

import { MeteoDataStore } from './contexts/MeteoDataContext'
import SearchBar from './SearchBar/SearchBar';
import MeteoWeeks from './MeteoWeek/MeteoWeek';
import ListOfDays from './ListOfDays/ListOfDays';
import GlobalStyle from '../themes/globalStyle'
import Geolocation from './Geolocation/Geolocation'


class App extends React.Component {
    state = {
        city: '',
        lat: '',
        lon: '',
        errLocation: null,
        errOpenWeatherMap: null
    }


    Container = styled.div`
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 50%;
        margin: 0 auto;
        & > * {
            flex-basis: 15%;
        }
    `;

    ForecastContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    render() {
            return(
            <this.Container>
                <GlobalStyle />
                <h1>Weather App</h1>
                <MeteoDataStore>
                    <Geolocation />
                    <SearchBar />
                    <this.ForecastContainer>
                        <ListOfDays />
                        <MeteoWeeks />
                    </this.ForecastContainer>
                </MeteoDataStore>
            </this.Container>
        ) 
    }
}

export default App;