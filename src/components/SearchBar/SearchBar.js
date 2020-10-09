import React from 'react';
import styled from 'styled-components';

import MeteoDataContext from '../contexts/MeteoDataContext'
import getWeather from '../helpers/getWeather'

class SearchBar extends React.Component {
    state = {
        city: ''
    }
    static contextType = MeteoDataContext

    Container = styled.div`
        width: 13rem;
        flex-basis: 2rem;
        margin-bottom: 2rem;
        background: white;
        border: 1px solid gray;
        border-radius: 20px;
        & form {
            padding: 0 12px;
            height: 100%;
            display: flex;
            align-items: center;
            & input {
                flex: 1 1 auto;
                margin: 0;
                padding: 0;
                border: none;
                box-shadow: none;
                height: 100%;
                background: transparent;
                outline: none;
            }
        }
    `

    onChangeValue = e => {
        this.setState({
            city: e.target.value
        })
    }

    onSubmitForm = e => {
        console.log("searchbar", this.context)
        e.preventDefault()       
        getWeather(this.state.city)
        .then(response => {
            const structuredData =  response.data.list.reduce((acc, row) => {
                const date = row.dt_txt.split(' ')[0]
                acc[date] =  [...(acc[date] ? acc[date] : []), row]
                return acc
            }, {})
            // Store data meteo to Context for MeteoDays components that will directly access data
            this.context.onSearchCity(this.state.city)
            this.context.onLoadData(structuredData)
        })
        .catch(error => console.log("SearchBar error",error))
    }
 
    render() {

        return(
            <this.Container>
                <form className="" onSubmit={this.onSubmitForm}>
                    <input
                        type="text" 
                        value={this.state.city} 
                        placeholder="Entrez le nom d'une ville" 
                        onChange={this.onChangeValue} 
                    />
                </form>
            </this.Container>
        )
    }
}

export default SearchBar;