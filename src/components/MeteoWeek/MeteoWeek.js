import React from 'react';
import styled from 'styled-components'
import MeteoDataContext from '../contexts/MeteoDataContext'

class MeteoWeeks extends React.Component  {
    state = { currentDay: ""}  
    static contextType = MeteoDataContext

    Table = styled.table`
        & td {
            padding: 10px;
            text-align: center;
            background-color: #00000087;
            border-color: #0006;
            border-radius: 4px;
            color: #fff;
        }
    `

    convertTimeStamp(dt) {
        const date = new Date(dt * 1000)
        const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}
        return(date.toLocaleDateString(undefined, options))
    }

    showForecast(weather, currentDay) {
        const date = Object.keys(weather)[currentDay]

        if(Object.keys(weather).length > 0) {
            console.log(weather[date][0])

            return(
                <this.Table className="">
                    <thead>
                        <tr>
                            {
                                weather[date].map((hour, key) => <td key={key}><div>
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

                                    {/* <img src={`http://openweathermap.org/img/w/10d.png`}></img> */}
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