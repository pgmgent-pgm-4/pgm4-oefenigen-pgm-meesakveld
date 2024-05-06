import { useEffect, useState } from 'react';

/**
 * 
 * @param {string} url 
 * @param {{}} options 
 * @returns data: any, isLoading: boolean, isError: boolean
 */
export const useFetch = (url, options = {}) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        // Set loading state to true
        setIsLoading(true);

        const fetchData = async () => {
            try {

                // Fetch data from the API
                const response = await fetch(url, options)
                const data = await response.json();
                setData(data);

                // Set loading state to false
                setIsLoading(false);

            } catch (error) {

                // Set error state to true
                setIsError(true);

                // Set loading state to false
                setIsLoading(false);

            }
        }

        fetchData();

    }, [url]);

    return { data, isLoading, isError };

};