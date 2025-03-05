import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="content text-center">
                <FontAwesomeIcon icon={faCode} /> with <FontAwesomeIcon icon={faHeart} /> using <FontAwesomeIcon icon={faReact} />
            </div>
        </footer>
    );
};

export default Footer;