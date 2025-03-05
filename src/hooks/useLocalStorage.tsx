/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

const useLocalStorage = (key: string, defaultValue: any = '') => {
    const [storedValue, setStoredValue] = useState<any>(() => {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : defaultValue;
            
        } catch {
            console.log('Unable to get "' + key + '" from local storage, use default value "' + defaultValue + '"');
            return defaultValue;
        }
    });
    
    const setValue = (value: any) => {
        const valueStr = JSON.stringify(value);
        localStorage.setItem(key, valueStr);
        setStoredValue(value);
    };
    
    return [storedValue, setValue];
};

export default useLocalStorage;