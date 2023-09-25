import React, { useContext } from 'react'
import { Grid, TextField, InputAdornment } from '@mui/material'
import { AllCurrenciesContext } from '../context/AllCurrenciesContext'

const InputCurrency = (props) => {
    const { startAmount, setStartAmount, currencyFrom, currencyTo } = useContext(AllCurrenciesContext)
    const { outcome, show } = props;
    return (
        <Grid item xs={12} md>
            <TextField
                label={ show ? "Outcome" : "Amount"}
                readOnly
                value={ show ? outcome : startAmount }
                onChange={e => setStartAmount(e.target.value)}
                fullWidth
                InputProps={{
                    type: "numer",
                    readOnly: show,
                    disabled: show,
                    startAdornment: <InputAdornment position="start">{ show ? currencyTo : currencyFrom  }</InputAdornment>
                }}
            />
        </Grid>
    )
}

export default InputCurrency
