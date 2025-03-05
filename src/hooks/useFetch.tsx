import { useEffect, useState } from 'react';

// add a trailing comma after the generic type parameter to disambiguate it from JSX.
const useFetch = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    
    useEffect(() => {
        // use the AbortController to stop the fetch
        const abortController = new AbortController();
        
        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal: abortController.signal });
                if (!response.ok) {
                    // fetch API does not throw an error for non-OK responses (e.g., 404 or 500). 
                    // We need to manually check the response.ok property and throw an error if the response is not OK.
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const jsonResponse = await response.json();
                if (jsonResponse.data) {
                    setData(jsonResponse.data)
                } else {
                    setData(jsonResponse);
                }
                
            } catch (error) {
                // Check if the error is an AbortError
                if (error instanceof DOMException && error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError(error instanceof Error ? error.message : 'An unknown error occurred');
                }
            } finally {
                setIsPending(false);
            }
        };
        
        fetchData();
        
        return () => abortController.abort();
        
    }, [url]);
    
    return { data, error, isPending };
};

export default useFetch;