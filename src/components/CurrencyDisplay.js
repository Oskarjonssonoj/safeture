import React, { useState, useContext } from 'react'
import { Grid, Typography } from '@mui/material'
import { AllCurrenciesContext } from '../context/AllCurrenciesContext';

const CurrencyDisplay = (props) => {
    const { data } = props;

    const {
        currencyFrom,
    } = useContext(AllCurrenciesContext)      
      
    const [exchangeRate] = useState(['SEK', 'EUR', 'CNY', 'GBP'])
    return (
        <Grid container sx={{ margin: '1rem 0'}}>
            {
                exchangeRate.map((rate, index) => {
                    if(data && data.rates) {    
                        return (
                            <Grid item xs={3} key={index}>
                                <Typography variant="h5" sx={{ fontSize: '16px', fontWeight: "bold"}}>
                                {rate}: { (data.rates[rate] / data.rates[currencyFrom]).toFixed(2) }
                                </Typography>
                            </Grid>
                        )
                    }
                })
            }
        </Grid>
    )
}

export default CurrencyDisplay
