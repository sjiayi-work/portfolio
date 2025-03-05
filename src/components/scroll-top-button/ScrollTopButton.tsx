import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import './ScrollTopButton.css';

const ScrollTopButton = () => {
    const [showBtn, setShowBtn] = useState<boolean>(false);
    const history = useHistory();
    
    const handleClick = () => {
        history.push('/');
        document.documentElement.scrollTop = 0;
    };
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 500) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };
        
        onScroll();
        
        window.addEventListener('scroll', onScroll);
        
        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);
    
    return (
        <button className={`go-up ${showBtn ? 'show' : ''}`} onClick={handleClick} title="Go to top">
            <FontAwesomeIcon icon={faArrowUp} className="fa-icon-24" />
        </button>
    );
};

export default ScrollTopButton;