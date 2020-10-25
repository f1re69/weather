import React from 'react';
import MeteoDataContext from '../contexts/MeteoDataContext'

import { ParentContainer, Table } from './MeteoWeekComponents';
 
class MeteoWeeks extends React.Component  {
    
    state = { currentDay: ""}  
    static contextType = MeteoDataContext

    convertTimeStamp(dt) {
        const date = new Date(dt * 1000);
        const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        return(date.toLocaleDateString(undefined, options));
    }

    showForecast(weather, currentDay) {
        const date = Object.keys(weather)[currentDay]

        if(Object.keys(weather).length > 0) {
            return(
                <Table>
                    <thead>
                        <tr>{
                            weather[date].map((hour, key) => 
                            <td className="head" key={key}>
                                <div><p>{this.convertTimeStamp(hour.dt)}</p></div>
                            </td>
                            )}
                        </tr>
                    </thead>

                    <tbody>
                       <tr>{
                            weather[date].map((hour, key) =>
                                <td key={key}><div>
                                    <p>{Math.floor(hour.main.temp)}°</p>
                                    <img src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}></img>
                                </div></td>
                            )}
                        </tr>
                    </tbody>
                </Table>
            );
        } else {
            return '';
        }
    }

    render() {
        return(
            <ParentContainer>
                <div className="childContainer">
                    {this.showForecast(this.context.data, this.context.currentDay)}
                </div>
            </ParentContainer>
        );
    }   
}

export default MeteoWeeks;