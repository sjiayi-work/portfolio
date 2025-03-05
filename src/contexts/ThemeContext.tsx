import { createContext } from 'react';

interface Context {
    isDark: boolean;
    changeTheme: () => void;
}

const defaultContext: Context = {
    isDark: true,
    changeTheme: () => {}
};

export const ThemeContext = createContext(defaultContext);