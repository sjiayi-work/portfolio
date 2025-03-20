import './Skill.css';
import useFetch from '../../hooks/useFetch';
import Tooltip from '../../components/tooltip/Tooltip';

interface Technology {
    id: number;
    label: string;
    icon: string;
}

interface Skill {
    id: number;
    title: string;
    image: string;
    technologies: Technology[];
    descriptions: string[];
}

interface Data {
    skills: Skill[];
}

const Skill = () => {
    const { data, error, isPending } = useFetch<Data>('/data/skills.json');
    
    return (
        <section id="skills">
            { error && <div className="error">{error}</div> }
            { isPending && <div>Loading...</div> }
            { data && (
                <>
                    <div className="container container-lg">
                        <h1>What I do</h1>
                        <div className="content">
                            {/* { skills.map((skill: Skill) => {
                                return (
                                    <div className="skill-block flex-row gap-5 align-items-center" key={skill.id}>
                                        <img className="undraw-image" src={skill.image} data-aos="zoom-in" />
                                        <div className="skill" data-aos="fade-right">
                                            <div className="skill-title">{ skill.title }</div>
                                            <div className="skill-tech-list">
                                                { skill.technologies.map((tech: Technology) => {
                                                    return (
                                                        <Tooltip text={tech.label} key={tech.id}>
                                                            <div className="flex-column align-items-center">
                                                                <img className="tech-image" src={tech.icon} />
                                                            </div>
                                                        </Tooltip>
                                                    );
                                                })}
                                            </div>
                                            <div className="descriptions">
                                                { skill.descriptions.map((desc: string, index: number) => {
                                                    return (
                                                        <div key={index}>⚡{ desc }</div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })} */}
                            <div className="card-grid">
                                { data.skills.map((skill: Skill) => {
                                    return (
                                        <div className="card mb-4 p-2" key={skill.id}>
                                            <div className="card-title" data-aos="zoom-in">
                                                <div className="svg-icon" dangerouslySetInnerHTML={{ __html: skill.image }}></div>
                                                <label className="font-bold">{ skill.title }</label>
                                            </div>
                                            <div className="card-content" data-aos="zoom-in">
                                                <div className="flex-row gap-2 justify-content-center mb-2 pt-1 flex-wrap">
                                                    { skill.technologies.map((tech: Technology) => {
                                                        return (
                                                            <Tooltip text={tech.label} key={tech.id}>
                                                                <div className="task-tech flex-column align-items-center">
                                                                    <img className="image-36" src={tech.icon} />
                                                                </div>
                                                            </Tooltip>
                                                        );
                                                    })}
                                                </div>
                                                <div className="descriptions">
                                                    { skill.descriptions.map((desc: string, index: number) => {
                                                        return (
                                                            <div key={index}>⚡{ desc }</div>
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
                </>
            )}
        </section>
    );
};

export default Skill;