import React, { useContext } from 'react'
import { Grid, Button } from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { AllCurrenciesContext } from '../context/AllCurrenciesContext';

const ChangeCurrency = () => {

    const {
        currencyFrom,
        setCurrencyFrom,
        currencyTo,
        setCurrencyTo
      } = useContext(AllCurrenciesContext)


    const switchCurrencies = () => {
        setCurrencyFrom(currencyTo)
        setCurrencyTo(currencyFrom)    
    }

    return (
        <Grid item xs={12} md="auto">
            <Button onClick={switchCurrencies} sx={{
                borderRadius: 1,
                height: "100%"
            }}>
                <CompareArrowsIcon sx={{ fontSize: 30 }}/>
            </Button>
        </Grid>
    )
}

export default ChangeCurrency
