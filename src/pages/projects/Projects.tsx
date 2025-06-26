import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import useFetch from '../../hooks/useFetch';
import { Data, Project } from '../models';

const Projects = () => {
    const { data, error, isPending } = useFetch<Data>('/data/projects.json');
    
    const openLink = (event: React.MouseEvent, url: string | null): void => {
        event.stopPropagation();
        
        if (url) {
            window.open(url, '_blank');
        }
    };
    
    return (
        <section id="projects">
            <div className="container container-lg">
                <h1>Side Projects</h1>
                <div className="content text-left">
                    <div className="card-grid">
                        { error && <div className="error">{error}</div> }
                        { isPending && <div>Loading...</div> }
                        { data && data.projects.map((project: Project, index: number) => {
                            return (
                                <div className={`card ${project.demoUrl ? 'cursor-pointer' : ''}`} key={index} 
                                     data-aos="fade-up" onClick={project.demoUrl ? (e) => openLink(e, project.demoUrl) : undefined}>
                                    <div className="card-title" style={{ padding: 0, position: 'relative', height: 350 }}>
                                        <img src={project.screenshortUrl || "/images/no-image.png"} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    
                                    <div className="card-content">
                                        <div className="flex-row align-items-center justify-between">
                                            <label className="font-bold color-secondary">{ project.title }</label>
                                            { project.repoUrl && 
                                                <FontAwesomeIcon icon={faCode} className="color-secondary" 
                                                                 onClick={(e) => openLink(e, project.repoUrl)}/>
                                            }
                                        </div>
                                        
                                        <div>{ project.description }</div>
                                        
                                        <div className="technologies flex-col gap-2 flex-wrap pt-1">
                                            { project.technologies?.map((tech: string, index: number) => {
                                                return (
                                                    <span key={index} data-aos="fade in" className="me-1 color-gray">
                                                        { tech }
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        }) }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;