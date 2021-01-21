import React from 'react';

export const weatherReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ERROR':
            return Object.assign({}, state, { error: action.error })
        case 'SET_CITY':
            return Object.assign({}, state, { city: action.city})
        case 'SET_COORD':
            return Object.assign({}, state, { lat: action.lat, lon: action.lon })
        case 'SET_DATA':
            return Object.assign({}, state, { data: action.data })
        case 'SET_DAY_INDEX':
            return Object.assign({}, state, { selectedDay: action.selectedDay })
        default:
            return state;
    }
}




