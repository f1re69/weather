import React from 'react';

import { MeteoDataStore } from '../contexts/MeteoDataContext';
import SearchBar from '../SearchBar/SearchBar';
import MeteoWeeks from '../MeteoWeek/MeteoWeek';
import ListOfDays from '../ListOfDays/ListOfDays';
import GlobalStyle from '../../themes/globalStyle';
import Geolocation from '../Geolocation/Geolocation';
import { Container } from './AppComponents';

class App extends React.Component {
    state = {
        city: '',
        lat: '',
        lon: '',
        errLocation: null,
        errOpenWeatherMap: null
    };

    render() {
        return(
            <Container>
                <GlobalStyle />
                <h1>Weather App</h1>
                <MeteoDataStore>
                    <Geolocation />
                    <SearchBar />
                    <ListOfDays />
                    <MeteoWeeks />
                </MeteoDataStore>
            </Container>
        );
    }
}

export default App;