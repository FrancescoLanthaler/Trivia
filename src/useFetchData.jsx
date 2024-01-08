import { useState } from 'react'

export const useFetchData = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [start, setStart] = useState(false);

    const fetchData = () => {
        setLoading(true);
        return fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                setLoading(false);
                return response.json();
            })
            .then(json => setData(json))
            .catch(error => { setError(error.message); setStart(false) });
    };

    return { loading, data, error, start, fetchData, setStart };
};

export default useFetchData;
