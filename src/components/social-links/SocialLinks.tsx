import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faStop } from '@fortawesome/free-solid-svg-icons';

import './SocialLinks.css';
import Tooltip from '../tooltip/Tooltip';
import { DataContext } from '../../contexts/DataContext';

export interface Contact {
    id: number;
    link: string;
    label: string;
}

export interface Response {
    socialLinks: Contact[];
    resumeLink: string;
    openToPublic: boolean;
}

interface SocialLink {
    id: number;
    url: string;
    label: string;
    icon: IconDefinition;
    iconClass: string;
}

const SocialLinks = () => {
    const { data, error, isPending } = useContext(DataContext);
    
    return (
        <div className="social-links">
            { error && <div className="error">{ error }</div> }
            { isPending && <div>Loading...</div> }
            { data && data.socialLinks?.map((contact: Contact) => {
                let icon: IconDefinition = faStop;
                let iconClass: string = 'no-icon';
                
                const label = contact.label;
                if (label == 'GitHub') {
                    icon = faGithub;
                    iconClass = 'icon-github';
                } else if (label == 'LinkedIn') {
                    icon = faLinkedin;
                    iconClass = 'icon-linkedin';
                } else if (label == 'Email') {
                    icon = faEnvelope;
                    iconClass = 'icon-email';
                }
                
                const link: SocialLink = {
                    id: contact.id,
                    url: data.openToPublic ? contact.link : '#',
                    label: label,
                    icon: icon,
                    iconClass: iconClass
                };
                
                return (
                    <Tooltip text={link.label} key={link.id}>
                        <a href={link.url} className={'social-link ' + link.iconClass} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={link.icon} className="fa-icon-24" />
                        </a>
                    </Tooltip>
                );
            })}
        </div>
    );
};

export default SocialLinks;