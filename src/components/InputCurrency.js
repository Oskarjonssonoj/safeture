import React, { useContext } from 'react'
import { Grid, TextField, InputAdornment } from '@mui/material'
import { AllCurrenciesContext } from '../context/AllCurrenciesContext'

const InputCurrency = () => {
    const { startAmount, setStartAmount, currencyFrom } = useContext(AllCurrenciesContext)

    return (
        <Grid item xs={12} md>
            <TextField
                label="Amount"
                value={startAmount}
                onChange={e => setStartAmount(e.target.value)}
                fullWidth
                InputProps={{
                    type: "numer",
                    startAdornment: <InputAdornment position="start">{ currencyFrom }</InputAdornment>
                }}
            />
        </Grid>
    )
}

export default InputCurrency
