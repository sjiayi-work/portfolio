import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import ScrollTopButton from './components/scroll-top-button/ScrollTopButton';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import { ThemeContext } from './contexts/ThemeContext';
import DataProvider from './contexts/DataContext';
import useLocalStorage from './hooks/useLocalStorage';
import Footer from './pages/footer/Footer';
import Skills from './pages/tech-stack/Skills';
import Experiences from './pages/experiences/Experiences';
import Education from './pages/education/Education';
import Projects from './pages/projects/Projects';

function App() {
    // detect what color scheme the user's system or browser is.
    const darkQueryMode = window.matchMedia('(prefers-color-scheme: dark)');
    // either get mode from local storage, or use the browser scheme
    const [isDarkTheme, setIsDarkTheme] = useLocalStorage('isDarkMode', darkQueryMode.matches);
    
    const toggleTheme = () => {
        // store value in local storage
        setIsDarkTheme(!isDarkTheme);
    };
    
    const themeMode = isDarkTheme ? 'dark-mode' : '';
    
    useEffect(() => {
        // initialise AOS (animate on scroll)
        AOS.init({
            duration: 1000,
            // once: true      // only show on first load
        });
    });
    
    return (
        <Router>
            <div className={`app ${themeMode}`}>
                <DataProvider url="/data/details.json">
                    <ThemeContext.Provider value={{ isDark: isDarkTheme, changeTheme: toggleTheme }}>
                        <ErrorBoundary>
                            <Navbar />
                            <Home />
                            <Skills />
                            <Experiences />
                            <Projects />
                            <Education />
                            <Contact />
                            <Footer />
                            <ScrollTopButton />
                        </ErrorBoundary>
                    </ThemeContext.Provider>
                </DataProvider>
            </div>
        </Router>
    )
}

export default App;