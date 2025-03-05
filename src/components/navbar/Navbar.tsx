import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';
import ToggleSwitch from '../toggle-switch/ToggleSwitch';
import { DataContext } from '../../contexts/DataContext';

interface MenuItem {
    id: number;
    label: string;
    href: string;
}

const Navbar = () => {
    const menuItems: MenuItem[] = [
        { id: 1, label: 'Skills', href: '#skills' },
        { id: 2, label: 'Experiences', href: '#experiences' },
        { id: 3, label: 'Education', href: '#education' },
        { id: 4, label: 'Contact', href: '#contact' }
    ];
    
    const [menuIcon, setMenuIcon] = useState<IconDefinition>(faBars);
    const [isNavbarCollapse, setIsNavbarCollapse] = useState<boolean>(false);
    const [activeHash, setActiveHash] = useState<string>(window.location.hash);
    // get data from parent
    const { data } = useContext(DataContext);
    
    const toggleNavList = () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (isNavbarCollapse) {
                setMenuIcon(faBars);
                setIsNavbarCollapse(false);
                navbar.classList.remove('open');
            } else {
                setMenuIcon(faXmark);
                setIsNavbarCollapse(true);
                navbar.classList.add('open');
            }
        }
    };
    
    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
            
            // Smooth scroll to the section
            if (window.location.hash) {
                const element = document.querySelector(window.location.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        
        // Set the initial hash
        handleHashChange();
        
        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        
        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);
    
    return (
        <header id="header" className="header" data-aos="fade-down">
            <div className="container container-lg">
                <nav className="navbar">
                    <div className="nav-title">
                        { data && <a href="#home">{ data.headerTitle }</a> }
                    </div>
                    <div className="nav-list">
                        { menuItems.map((menu: MenuItem) => {
                            return (
                                <a className={activeHash == menu.href ? 'nav-link active': 'nav-link'} 
                                    href={menu.href} key={menu.id}>
                                    { menu.label }
                                </a>
                            );
                        })}
                        
                        {/* Theme toggle */}
                        <ToggleSwitch />
                    </div>
                    
                    <button className="btn-menu" onClick={toggleNavList}>
                        <FontAwesomeIcon icon={menuIcon} />
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;