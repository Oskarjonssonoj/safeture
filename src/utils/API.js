import axios from 'axios';

axios.defaults.baseURL = "https://openexchangerates.org"

export const GetData = () => {
    return axios.get("/api/latest.json?app_id=213db40fed2445ffa9634a1e7342bdb1")
}