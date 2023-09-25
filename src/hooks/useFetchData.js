import { useEffect, useState } from 'react';
import { GetData } from '../utils/API';

const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                setLoaded(true);
                const response = await GetData();
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoaded(false);
            }
        }

        fetchCurrencyData();
    }, [url])

    return [data, error, loaded]
}

export default useFetchData
