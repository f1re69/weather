import React from 'react';

import { WeatherContextProvider } from '../contexts/WeatherContext.js';
import SearchBar from '../SearchBar/SearchBar';
import { MeteoWeeks } from '../MeteoWeek/MeteoWeek';
import ListOfDays from '../ListOfDays/ListOfDays';
import GlobalStyle from '../../themes/globalStyle';
import Geolocation from '../Geolocation/Geolocation';
import { Container } from './AppComponents';

class App extends React.Component {
    render() {
        return(
            <Container>
                <GlobalStyle />
                <h1>Weather App</h1>
                <WeatherContextProvider>
                    <Geolocation />
                    <SearchBar />
                    <ListOfDays />
                    <MeteoWeeks />
                </WeatherContextProvider>
            </Container>
        );
    }
}

export default App;