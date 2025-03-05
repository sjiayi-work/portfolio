import { createContext, JSX } from 'react';
import useFetch from '../hooks/useFetch';

interface DataProp {
    url: string;
    children: JSX.Element | JSX.Element[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const context: any = {};
// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext(context);

const DataProvider = (props: DataProp) => {
    const { data, error, isPending } = useFetch(props.url);
    
    return (
        <DataContext.Provider value={{ data, error, isPending }}>
            { props.children }
        </DataContext.Provider>
    );
};

export default DataProvider;