import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if(url) {
            let api_key = "?app_id=213db40fed2445ffa9634a1e7342bdb1"
            axios(`${url}${api_key}`)
            .then(response => {
                setLoaded(true);
                setData(response.data);
            }).catch(error => {
                setError(error);
                setLoaded(false);
            })
        }
    }, [url])

    return [data, error, loaded]
}

export default useFetchData
