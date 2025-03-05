import './Skills.css';
import useFetch from '../../hooks/useFetch';

export interface Technology {
    id: number;
    label: string;
    icon: string;
}

export interface Stack {
    id: number;
    topic: string;
    technologies: Technology[];
    svg?: string;
    svgClass?: string;
}

interface Data {
    stacksNew: Stack[]
}

const Skills = () => {
    const { data, error, isPending } = useFetch<Data>('/data/about.json');
    
    return (
        <section id="skills">
            <div className="container container-lg">
                <h1>Skills</h1>
                <div className="content">
                    <div className="card-grid">
                        { error && <div className="error">{error}</div> }
                        { isPending && <div>Loading...</div> }
                        { data && data.stacksNew.map((stack: Stack) => {
                            return (
                                <div className="card" key={stack.id} data-aos="fade-up">
                                    <div className="card-title">
                                        { stack.svg && <div className={stack.svgClass ? stack.svgClass : 'svg-icon'} dangerouslySetInnerHTML={{ __html: stack.svg }}></div> }
                                        <label className="font-bold">{ stack.topic }</label>
                                    </div>
                                    <div className="card-content">
                                        <ul className="technologies">
                                            { stack.technologies.map((tech: Technology) => {
                                                return (
                                                    <li className="flex-column align-items-center" key={tech.id}>
                                                        <img className="image-36" src={tech.icon} />
                                                        <label className="mt-1">{ tech.label }</label>
                                                    </li>
                                                );
                                            })}
                                        </ul>
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

export default Skills;