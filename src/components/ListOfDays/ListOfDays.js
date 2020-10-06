import React from 'react';
import styled from 'styled-components';

import MeteoDataContext from '../contexts/MeteoDataContext'

class ListOfDays extends React.Component {
  
  static contextType = MeteoDataContext

  Button = styled.button`
      padding: 1rem;
      background-color: #00000087;
      border-color: #0006;
      border-radius: 4px;
      margin: 1em 2px;
      color: white;
      &.active {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            transform: scale(1.1);
            outline: none;
            margin: 1em 5px;
        }
  `

  render() {
    const date = new Date();
    const currDay = date.getDay();
    const week = getSortedWeek(currDay)
    return(
        <div className="">
            <this.Button className={this.context.currentDay === 0 ? 'active' : ''} onClick={() => this.context.onSetDay(0)} >
                {week[0]}
              </this.Button>
            <this.Button className={this.context.currentDay === 1 ? 'active' : ''} onClick={() => this.context.onSetDay(1)} >
                {week[1]}
            </this.Button>
            <this.Button className={this.context.currentDay === 2 ? 'active' : ''} onClick={() => this.context.onSetDay(2)} >
                {week[2]}
            </this.Button>
            <this.Button className={this.context.currentDay === 3 ? 'active' : ''} onClick={() => this.context.onSetDay(3)} >
                {week[3]}
            </this.Button>
            <this.Button className={this.context.currentDay === 4 ? 'active' : ''} onClick={() => this.context.onSetDay(4)} >
                {week[4]}
            </this.Button>
        </div>
      )
  }
}

function getSortedWeek(firstDay) {
  const daysOfWeek = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
  const updatedWeek = []

  for (let i = 0; i < 7; i++) {
      let currentDay = (firstDay + i) % 7
      updatedWeek[i] = daysOfWeek[currentDay]
  }
  return(updatedWeek)
}

export default ListOfDays