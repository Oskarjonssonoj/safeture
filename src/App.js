import './App.css';
import { Container, Typography, Grid } from '@mui/material'
import InputCurrency from './components/InputCurrency';
import CountrySelection from './components/CountrySelection';
import ChangeCurrency from './components/ChangeCurrency';
import { useContext, useEffect, useState } from 'react';
import { AllCurrenciesContext } from './context/AllCurrenciesContext';
import useFetchData from './hooks/useFetchData';
import CurrencyDisplay from './components/CurrencyDisplay';
import axios from 'axios';


function App() {
  const [newCurrency, setNewCurrency] = useState(0)

  const [data, loaded] = useFetchData('https://restcountries.com/v3.1/all');
  
  const {
    currencyFrom,
    setCurrencyFrom,
    currencyTo,
    setCurrencyTo,
    startAmount,
  } = useContext(AllCurrenciesContext)

  useEffect(() => {
    if(startAmount) {
      axios(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`)
      .then(response => {
        // console.log(currencyTo / response.data.rates[currencyFrom])
        let convertedValue = ((response.data.rates[currencyTo] / response.data.rates[currencyFrom]) * startAmount).toFixed(2)

        console.log(convertedValue)
      })
    }
  }, [startAmount])

  const containerStyleProps = {
    background: "#fdfdfd",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative"
  }

  return (
    <Container maxWidth="md" sx={containerStyleProps}>
      <Typography variant="h5" sx={{ marginBottom: "2rem", marginTop: "1rem"}}>Currency Converter</Typography>
      <Grid container spacing={2}>
        <CurrencyDisplay data={data}/>
        <InputCurrency/>
        <CountrySelection label="From" value={currencyFrom} setValue={setCurrencyFrom} data={data} loaded={loaded}/>
        <ChangeCurrency />
        <CountrySelection label="To" value={currencyTo} setValue={setCurrencyTo} data={data} loaded={loaded}/>
      </Grid>
    </Container>
  );
}

export default App;
