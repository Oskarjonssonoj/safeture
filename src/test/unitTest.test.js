const axios = import('axios')

jest.mock('axios')

describe('mock api calls', () => {
  test('mocking external endpoint in axios', () => {

    // arrange 
    const mockResponse = {
      "disclaimer": "Usage subject to terms: https://openexchangerates.org/terms",
      "license": "https://openexchangerates.org/license",
      "timestamp": 1695679200,
      "base": "USD",
      "rates": {
          "AED": 3.673005,
          "AFN": 78.967641,
          "ALL": 99.6545,
          "AMD": 386.783576,
          "ANG": 1.801422,
          "AOA": 829.138667,
          "ARS": 350.0085,
          "AUD": 1.556818,
          "AWG": 1.8,
          "AZN": 1.7,
          "BAM": 1.837804,
          "BBD": 2,
          "BDT": 110.205344,
          "BGN": 1.847404,
          "BHD": 0.376997,
          "BIF": 2837.344323,
          "BMD": 1,
          "BND": 1.365057,
          "BOB": 6.906629,
          "BRL": 4.9702,
          "BSD": 1,
          "BTC": 0.000038057796,
          "BTN": 83.093657,
          "BWP": 13.60828,
          "BYN": 2.522916,
          "BZD": 2.014837,
          "CAD": 1.345576,
          "CDF": 2487.467625,
          "CHF": 0.912161,
          "CLF": 0.03274,
          "CLP": 901.65036,
          "CNH": 7.314582,
          "CNY": 7.3112,
          "COP": 4002.877464,
          "CRC": 536.921306,
          "CUC": 1,
          "CUP": 25.75,
          "CVE": 104.109741,
          "CZK": 22.984674,
          "DJF": 177.847086,
          "DKK": 7.039909,
          "DOP": 56.76291,
          "DZD": 137.553944,
          "EGP": 30.922385,
          "ERN": 15,
          "ETB": 55.253806,
          "EUR": 0.944069,
          "FJD": 2.2661,
          "FKP": 0.818906,
          "GBP": 0.818906,
          "GEL": 2.68,
          "GGP": 0.818906,
          "GHS": 11.520682,
          "GIP": 0.818906,
          "GMD": 65,
          "GNF": 8609.824171,
          "GTQ": 7.861193,
          "GYD": 209.123218,
          "HKD": 7.816195,
          "HNL": 24.775857,
          "HRK": 7.113541,
          "HTG": 134.768538,
          "HUF": 368.467029,
          "IDR": 15412.800761,
          "ILS": 3.812285,
          "IMP": 0.818906,
          "INR": 83.021958,
          "IQD": 1309.437898,
          "IRR": 42237.5,
          "ISK": 136.99,
          "JEP": 0.818906,
          "JMD": 154.331177,
          "JOD": 0.7096,
          "JPY": 148.84296429,
          "KES": 147.6,
          "KGS": 88.71,
          "KHR": 4117.135332,
          "KMF": 465.04983,
          "KPW": 900,
          "KRW": 1337.900392,
          "KWD": 0.309058,
          "KYD": 0.833016,
          "KZT": 473.99731,
          "LAK": 20089.442824,
          "LBP": 15078.399294,
          "LKR": 325.617067,
          "LRD": 186.574963,
          "LSL": 18.740711,
          "LYD": 4.87225,
          "MAD": 10.222071,
          "MDL": 18.177572,
          "MGA": 4523.559322,
          "MKD": 58.035763,
          "MMK": 2099.034809,
          "MNT": 3450,
          "MOP": 8.048976,
          "MRU": 38.117355,
          "MUR": 44.653227,
          "MVR": 15.45,
          "MWK": 1084.257517,
          "MXN": 17.393156,
          "MYR": 4.6855,
          "MZN": 63.899991,
          "NAD": 18.75,
          "NGN": 780.236017,
          "NIO": 36.575138,
          "NOK": 10.811527,
          "NPR": 132.949649,
          "NZD": 1.676363,
          "OMR": 0.38497,
          "PAB": 1,
          "PEN": 3.760782,
          "PGK": 3.638559,
          "PHP": 56.880003,
          "PKR": 290.494797,
          "PLN": 4.347557,
          "PYG": 7290.047906,
          "QAR": 3.641,
          "RON": 4.6896,
          "RSD": 110.716901,
          "RUB": 95.923283,
          "RWF": 1205.391224,
          "SAR": 3.750868,
          "SBD": 8.386666,
          "SCR": 14.055914,
          "SDG": 601.5,
          "SEK": 11.056049,
          "SGD": 1.366298,
          "SHP": 0.818906,
          "SLL": 20969.5,
          "SOS": 570.531419,
          "SRD": 38.2375,
          "SSP": 130.26,
          "STD": 22281.8,
          "STN": 23.174032,
          "SVC": 8.746517,
          "SYP": 2512.53,
          "SZL": 18.716319,
          "THB": 36.174333,
          "TJS": 10.985007,
          "TMT": 3.51,
          "TND": 3.167,
          "TOP": 2.388268,
          "TRY": 27.211248,
          "TTD": 6.780585,
          "TWD": 32.1426,
          "TZS": 2504.309564,
          "UAH": 36.917764,
          "UGX": 3763.355865,
          "USD": 1,
          "UYU": 38.089208,
          "UZS": 12217.023731,
          "VES": 33.948711,
          "VND": 24393.227757,
          "VUV": 118.722,
          "WST": 2.7185,
          "XAF": 619.268384,
          "XAG": 0.04323297,
          "XAU": 0.00052194,
          "XCD": 2.70255,
          "XDR": 0.759534,
          "XOF": 619.268384,
          "XPD": 0.0008126,
          "XPF": 112.657347,
          "XPT": 0.00109382,
          "YER": 250.375049,
          "ZAR": 18.787362,
          "ZMW": 21.03992,
          "ZWL": 322
      }
    }


    axios.get.mockResolvedValue(mockResponse)
    const unitTest = import('../unitTest.js');
    // act
    get.getLatestCurrencies()
    
    // asserts
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledWith('https://openexchangerates.org/api/latest.json?app_id=213db40fed2445ffa9634a1e7342bdb1')

  })
})