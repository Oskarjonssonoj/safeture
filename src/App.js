import './App.css';
import { Container, Typography, Grid } from '@mui/material'
import InputCurrency from './components/InputCurrency';
import CountrySelection from './components/CountrySelection';
import ChangeCurrency from './components/ChangeCurrency';
import { useContext, useEffect } from 'react';
import { AllCurrenciesContext } from './context/AllCurrenciesContext';
import axios from 'axios';
import useFetchData from './hooks/useFetchData';


function App() {

  const [data, loaded] = useFetchData('https://restcountries.com/v3.1/all');
  
  const {
    currencyFrom,
    setCurrencyFrom,
    currencyTo,
    setCurrencyTo,
    startAmount,
    setStartAmount
  } = useContext(AllCurrenciesContext)

  useEffect(() => {
    if(startAmount) {
      
    }
  }, [startAmount])

  console.log(data)

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
        <InputCurrency/>
        <CountrySelection label="From" value={currencyFrom} setValue={setCurrencyFrom} data={data} loaded={loaded}/>
        <ChangeCurrency />
        <CountrySelection label="To" value={currencyTo} setValue={setCurrencyTo} data={data} loaded={loaded}/>
      </Grid>
    </Container>
  );
}

export default App;
