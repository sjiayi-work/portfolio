import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';
import SocialLinks, { Contact as IContact } from '../../components/social-links/SocialLinks';
import { DataContext } from '../../contexts/DataContext';

const Contact = () => {
    // use context from parent
    const { data, error, isPending } = useContext(DataContext);
    
    if (error) {
        return <div className="error">{ error }</div>;
    }
    
    if (isPending || !data) {
        return <div>Loading...</div>;
    }
    
    // create download icon
    const downloadLink: IContact = { id: 4, key: 'resume', link: data.resumeLink, label: 'See My Resume' };
    
    return (
        <section id="contact">
            <div className="container container-lg">
                <h1>Get In Touch</h1>
                <div className="content flex-row align-items-center" data-aos="zoom-in">
                    { data && 
                        <div className="main-content flex-fill">
                            <p>{ data.contactDescription }</p>
                            <p><i>Open for opportunities: { data.openToPublic ? 'Yes' : 'No' }</i></p>
                            <div className="location">
                                <FontAwesomeIcon icon={faLocationDot} className="fa-icon-16 color-secondary" />
                                <span className="label">Remote</span>
                            </div>
                            <SocialLinks divClass="justify-space-around" linkClass="rounded" socialLinks={[downloadLink]} />
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Contact;