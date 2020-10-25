import React from 'react';

import MeteoDataContext from '../contexts/MeteoDataContext';
import getWeather from '../helpers/getWeather';
import { Container } from './SearchBarComponents';

class SearchBar extends React.Component {
    static contextType = MeteoDataContext;
    state = {
        city: ''
    };

    onChangeValue = e => {
        this.setState({
            city: e.target.value
        });
    };

    onSubmitForm = e => {
        console.log("searchbar", this.context);
        e.preventDefault();
        getWeather(this.state.city)
            .then(response => {
                const structuredData =  response.data.list.reduce((acc, row) => {
                    const date = row.dt_txt.split(' ')[0];
                    acc[date] =  [...(acc[date] ? acc[date] : []), row];
                    return acc;
                }, {});
                // Store data meteo to Context for MeteoDays components that will directly access data
                this.context.onSearchCity(this.state.city);
                this.context.onLoadData(structuredData);
            })
            .catch(error => console.log("SearchBar error",error));
    };
 
    render() {
        return(
            <Container>
                <form className="" onSubmit={this.onSubmitForm}>
                    <input
                        type="text" 
                        value={this.state.city} 
                        placeholder="Entrez le nom d'une ville" 
                        onChange={this.onChangeValue} 
                    />
                </form>
            </Container>
        );
    }
}

export default SearchBar;