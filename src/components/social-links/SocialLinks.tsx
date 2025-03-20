import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';
import { faStop } from '@fortawesome/free-solid-svg-icons';

import './SocialLinks.css';
import Tooltip from '../tooltip/Tooltip';
import { DataContext } from '../../contexts/DataContext';

export interface Contact {
    id: number;
    key: string;
    link: string;
    label: string;
}

interface SocialLink {
    id: number;
    url: string;
    label: string;
    icon: IconDefinition;
    linkClass: string;
}

interface SocialLinkProp {
    divClass?: string;
    linkClass?: string;
    iconClass?: string;
    socialLinks?: Contact[]
}

const SocialLinks = (props: SocialLinkProp) => {
    const divClass = props.divClass || '';
    const propLinkClass = props.linkClass || '';
    const extraLinks = props.socialLinks || [];
    const propIconClass = props.iconClass || 'fa-icon-24';
    
    const { data, error, isPending } = useContext(DataContext);
    
    if (error) {
        return <div className="error">{ error }</div>;
    }
    
    if (isPending) {
        return <div>Loading...</div>;
    }
    
    const socialLinks = [...data.socialLinks, ...extraLinks];
    
    return (
        <div className={`social-links ${divClass || ''}`}>
            { socialLinks?.map((contact: Contact) => {
                let icon: IconDefinition = faStop;
                let iconClass: string = 'no-icon';
                
                const key = contact.key;
                if (key == 'github') {
                    icon = faGithub;
                    iconClass = 'icon-github';
                    
                } else if (key == 'linkedin') {
                    icon = faLinkedin;
                    iconClass = 'icon-linkedin';
                    
                } else if (key == 'email') {
                    icon = faEnvelope;
                    iconClass = 'icon-email';
                    
                } else if (key == 'resume') {
                    icon = faFile;
                    iconClass = 'icon-github';
                    
                } else {
                    icon = faStop;
                    iconClass = 'no-icon';
                }
                
                const link: SocialLink = {
                    id: contact.id,
                    url: data.openToPublic ? contact.link : '#',
                    label: contact.label,
                    icon: icon,
                    linkClass: iconClass
                };
                
                return (
                    <Tooltip text={link.label} key={link.id}>
                        <a href={link.url} className={`social-link ${link.linkClass} ${propLinkClass}`} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={link.icon} className={propIconClass} />
                        </a>
                    </Tooltip>
                );
            })}
        </div>
    );
};

export default SocialLinks;