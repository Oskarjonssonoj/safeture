import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material'

const CurrencyDisplay = (props) => {
    const { data } = props;
    const [exchangeRate, setExchangeRate] = useState(['SEK', 'EUR', 'CNY', 'GBP'])
    return (
        <Grid container sx={{ margin: '1rem 0'}}>
            {
                exchangeRate.map((rate, index) => {
                    if(data && data.rates) {    
                        return (
                            <Grid item xs={3} key={index}>
                                <Typography variant="h5" sx={{ fontSize: '16px'}}>{rate}: {data.rates[rate]}</Typography>
                            </Grid>
                        )
                    }
                })
            }
        </Grid>
    )
}

export default CurrencyDisplay
