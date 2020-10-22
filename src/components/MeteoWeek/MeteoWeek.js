import React from 'react';
import styled from 'styled-components'
import MeteoDataContext from '../contexts/MeteoDataContext'

class MeteoWeeks extends React.Component  {
    state = { currentDay: ""}  
    static contextType = MeteoDataContext

    
    Table = styled.table`
        border-collapse: collapse;
        & td {
            padding: 10px;
            text-align: center;
            background-color: #00000087;
            border-color: #0006;
            color: #fff;
        }
        & td:nth-child(2n+1) {
            background-color: #2d0505bd;
        }
        & thead tr td.head {
            // background-color: #00000087;
        }
    
    `;

  
            
        convertTimeStamp(dt) {
            const date = new Date(dt * 1000)
        const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}
        return(date.toLocaleDateString(undefined, options))
    }

    showForecast(weather, currentDay) {
        const date = Object.keys(weather)[currentDay]

        if(Object.keys(weather).length > 0) {
            return(
                <this.Table className="">
                    <thead>
                        <tr>
                            {
                            weather[date].map((hour, key) => <td className="head" key={key}><div>
                                <p>{this.convertTimeStamp(hour.dt)}</p>
                                </div></td>) 
                            }
                        </tr>
                    </thead>
                    <tbody>
                       <tr>
                            {
                                weather[date].map((hour, key) => <td key={key}><div>
                                    <p>{Math.floor(hour.main.temp)}°</p>
                                    <img src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}></img>
                                    </div></td>) 
                            }
                        </tr>
                    </tbody>
                </this.Table>
            )
        }
       return ''   
    }

    render() {
        return(
            <div>
                <div className="">
                    {this.showForecast(this.context.data, this.context.currentDay)}
                </div>
            </div>
        )
    }   
}

export default MeteoWeeks;