  const axios = require('axios')

  function getLatestCurrencies() {
    let url = 'https://openexchangerates.org/api/latest.json'
    let api_key = '?app_id=213db40fed2445ffa9634a1e7342bdb1'

    axios.get(`${url}${api_key}`)
    .then(response => {
        console.log(response.data)
    }).catch(error => {
        setError(error);
        console.log(error)
    })
  }

  module.exports = {getLatestCurrencies}