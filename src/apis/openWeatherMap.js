import axios from 'axios';

const units = "metric"
const KEY = '4e77def3779dd4d758be739532b6d479'

export default axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/forecast`,
    key: KEY,
    units
})


