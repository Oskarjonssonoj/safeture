import React, { createContext, useState } from 'react'

export const AllCurrenciesContext = createContext();

const AllCurrenciesProvider = ({ children }) => {
    const [currencyFrom, setCurrencyFrom] = useState('SEK')
    const [currencyTo, setCurrencyTo] = useState('EUR')
    const [startAmount, setStartAmount] = useState('')

    const providers = {
        currencyFrom,
        setCurrencyFrom,
        currencyTo,
        setCurrencyTo,
        startAmount,
        setStartAmount
    };
    
    return (
        <AllCurrenciesContext.Provider value={providers}>
            { children }
        </AllCurrenciesContext.Provider>
    )
}

export default AllCurrenciesProvider;
