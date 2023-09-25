import React, { useState, useEffect } from 'react'
import { Grid, Autocomplete, TextField, Skeleton } from '@mui/material'

const CountrySelection = (props) => {
    const { value, setValue, label, data, loaded } = props;
    const [countries, setCountries] = useState('');

    useEffect(() => {
        if(data && data.rates) {
            setCountries(Object.keys(data.rates))
        }
    }, [data])

    if(loaded) {
        return (
            <Grid item xs={12} md={3}>
                <Skeleton variant="rounded" height={60}></Skeleton>
            </Grid>
        )
    }

    return (
        <Grid item xs={12} md={3}>
            <Autocomplete
                value={value} 
                disableClearable
                onChange={(event, updatedValue) => {
                    setValue(updatedValue)
                }}
                options={countries && countries.length ? countries : []}
                renderInput={(params => <TextField {...params} label={label}/>)}
            />
        </Grid>
    )
}

export default CountrySelection
