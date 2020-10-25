import React from 'react';

import MeteoDataContext from '../contexts/MeteoDataContext';
import { Button, Container } from './ListOfDaysComponents';

class ListOfDays extends React.Component {
    static contextType = MeteoDataContext;
    
    getSortedWeek = firstDay => {
        const daysOfWeek = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
        const updatedWeek = [];
    
        for (let i = 0; i < 7; i++) {
            let currentDay = (firstDay + i) % 7;
            updatedWeek[i] = daysOfWeek[currentDay];
        }
        return(updatedWeek);
    }

  render() {
    const date = new Date();
    const currDay = date.getDay();
    const week = this.getSortedWeek(currDay);

    return(
        <Container>
            <Button className={this.context.currentDay === 0 ? 'active' : ''} onClick={() => this.context.onSetDay(0)} >
                {week[0]}
              </Button>
            <Button className={this.context.currentDay === 1 ? 'active' : ''} onClick={() => this.context.onSetDay(1)} >
                {week[1]}
            </Button>
            <Button className={this.context.currentDay === 2 ? 'active' : ''} onClick={() => this.context.onSetDay(2)} >
                {week[2]}
            </Button>
            <Button className={this.context.currentDay === 3 ? 'active' : ''} onClick={() => this.context.onSetDay(3)} >
                {week[3]}
            </Button>
            <Button className={this.context.currentDay === 4 ? 'active' : ''} onClick={() => this.context.onSetDay(4)} >
                {week[4]}
            </Button>
        </Container>
      )
  }
}


export default ListOfDays