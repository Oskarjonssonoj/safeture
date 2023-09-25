import './App.css';
import { Container, Typography, Grid, Box } from '@mui/material'
import InputCurrency from './components/InputCurrency';
import CountrySelection from './components/CountrySelection';
import ChangeCurrency from './components/ChangeCurrency';
import { useContext, useEffect, useState } from 'react';
import { AllCurrenciesContext } from './context/AllCurrenciesContext';
import useFetchData from './hooks/useFetchData';
import CurrencyDisplay from './components/CurrencyDisplay';


function App() {
  const [data, loaded] = useFetchData('https://openexchangerates.org/api/latest.json');
  
  const {
    currencyFrom,
    setCurrencyFrom,
    currencyTo, 
    setCurrencyTo,
    startAmount,
  } = useContext(AllCurrenciesContext)
  
  const [newCurrency, setNewCurrency] = useState(0)

  useEffect(() => {
    if(startAmount && data && data.rates) {
      let convertedValue = ((data.rates[currencyTo] / data.rates[currencyFrom]) * startAmount).toFixed(2)
      setNewCurrency(convertedValue)
    }
  }, [startAmount, currencyTo, currencyFrom, data, data.rates])

  const containerStyleProps = {
    background: "#fdfdfd",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative",
    marginTop: "10rem"
  }

  return (
    <Container maxWidth="md" sx={containerStyleProps}>
      <Typography variant="h5" sx={{ marginBottom: "2rem", fontWeight: "bold"}}>Currency Converter</Typography>
      <Grid container spacing={2}>
        <CurrencyDisplay data={data}/>
        <InputCurrency/>
        <CountrySelection label="From" value={currencyFrom} setValue={setCurrencyFrom} data={data} loaded={loaded}/>
        <ChangeCurrency />
        <CountrySelection label="To" value={currencyTo} setValue={setCurrencyTo} data={data} loaded={loaded}/>
      </Grid>

        <Box sx={{ textAlign: "left", paddingTop: "1rem", marginTop: "2rem", borderTop: "solid 2px lightgrey"}}>
      { startAmount ? (
          <Box>
            <Typography>{startAmount} {currencyFrom} =</Typography>
            <Typography variant="h5" sx={{ marginTop: "5px", fontWeight: "bold"}}>{newCurrency} {currencyTo}</Typography>
          </Box>
      ) : "" }
        </Box>
    </Container>
  );
}

export default App;
