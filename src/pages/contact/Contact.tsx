import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';
import SocialLinks from '../../components/social-links/SocialLinks';
import { DataContext } from '../../contexts/DataContext';

const Contact = () => {
    // use context from parent
    const { data, error, isPending } = useContext(DataContext);
    
    return (
        <section id="contact">
            <div className="container container-lg">
                <h1>Get In Touch</h1>
                <div className="content flex-row align-items-center" data-aos="zoom-in">
                    { error && <div className="error">{error}</div> }
                    { isPending && <div>Loading...</div> }
                    { data && 
                        <div className="main-content flex-fill">
                            <p>{ data.contactDescription }</p>
                            <p><i>Open for opportunities: { data.openToPublic ? 'Yes' : 'No' }</i></p>
                            <div className="location">
                                <FontAwesomeIcon icon={faLocationDot} className="fa-icon-16 color-secondary" />
                                <span className="label">Remote</span>
                            </div>
                            <SocialLinks/>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Contact;