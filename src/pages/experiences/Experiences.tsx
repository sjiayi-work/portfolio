import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelopeOpenText, faLocationDot, faMinus } from '@fortawesome/free-solid-svg-icons';

import './Experiences.css';
import Tooltip from '../../components/tooltip/Tooltip';
import useFetch from '../../hooks/useFetch';

export interface Experience {
    id: number;
    company: string;
    position: string;
    date: string;
    employmentType: string;
    location: string;
    icon: string;
    tasks: string[];
    technologies?: Technology[]
}

interface Technology {
    id: number;
    label: string;
    icon: string;
}

const Experiences = () => {
    const { data: experiences, error, isPending } = useFetch<Experience[]>('/data/experiences.json');
    
    return (
        <section id="experiences">
            <div className="container container-lg">
                <h1>Experiences</h1>
                <div className="content">
                    { error && <div className="error">{error}</div> }
                    { isPending && <div>Loading...</div> }
                    { experiences && experiences.map((exp: Experience) => {
                        return (
                            <div className="timeline flex-row pb-3" key={exp.id}>
                                <div className="left-panel pe-3" data-aos="fade-right">
                                    <h1>{ exp.company }</h1>
                                    <div className="date color-gray">{ exp.date }</div>
                                </div>
                                
                                <div className="right-panel flex-row text-left">
                                    <div className="h-full">
                                        <div className="timeline-icon">
                                            <FontAwesomeIcon icon={faBriefcase} className="rounded fa-icon-24" />
                                        </div>
                                        <div className="h-full flex-row justify-content-center">
                                            <span className="timeline-divider"></span>
                                        </div>
                                    </div>
                                    <div className="ps-3 pb-3" data-aos="fade-up-left">
                                        <div className="date color-gray d-none">{ exp.date }</div>
                                        <h1 className="d-none">{ exp.company }</h1>
                                        
                                        <h1>{ exp.position }</h1>
                                        <p>
                                            <FontAwesomeIcon icon={faEnvelopeOpenText} className="fa-icon-16 color-secondary" />
                                            <label>{ exp.employmentType }</label>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faLocationDot} className="fa-icon-16 color-secondary" />
                                            <label>{ exp.location }</label>
                                        </p>
                                        <div className="tasks pt-1">
                                            { exp.tasks.map((task: string, index: number) => {
                                                return (
                                                    <div className="flex-row pb-1" key={index}>
                                                        <FontAwesomeIcon icon={faMinus} className="color-secondary" />
                                                        <label className="color-gray">{ task }</label>
                                                    </div>
                                                );
                                            }) }
                                        </div>
                                        <div className="technologies flex-row gap-2 flex-wrap pt-1">
                                            { exp.technologies?.map((tech: Technology) => {
                                                return (
                                                    <div key={tech.id} data-aos="fade in">
                                                        <Tooltip text={tech.label}>
                                                            <img src={tech.icon} className="image-24" />
                                                        </Tooltip>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experiences;