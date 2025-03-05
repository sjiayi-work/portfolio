/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

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
    const [hoveredImageMap, setHoveredImageMap] = useState<any>({});
    
    const handleImageMouseEnter = (stackId: number, techId: number) => {
        // When using the functional form of setState, React passes the current state as an argument to the updater function.
        setHoveredImageMap((prevState: any) => ({
            ...prevState,           // store the previous state
            [stackId]: techId       // add new state
        }));
    };
    
    const handleImageMouseLeave = (stackId: number) => {
        setHoveredImageMap((prevState: any) => ({
            ...prevState,
            [stackId]: -1           // no technology will match with this id
        }));
    };
    
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
    
    // return (
    //     <div id="tech-stack" className="pb-3">
    //         <h2 className="title flex-row justify-content-center align-items-center">
    //             <FontAwesomeIcon icon={faStar} spin className="fa-icon-24" />
    //             <span>My Stack</span>
    //         </h2>
    //         <div className="card-grid">
    //             { stacks && stacks.map((stack: Stack) => {
    //                 return (
    //                     <div className="card" key={stack.id} data-aos="fade-left">
    //                         <h2 className="card-title">{ stack.topic }</h2>
    //                         <ul className="stack-list text-center">
    //                             { stack.technologies.map((tech: Technology) => {
    //                                 return (
    //                                     <li className="flex-row justify-content-center align-items-center" 
    //                                         key={tech.id}
    //                                         onMouseEnter={() => handleImageMouseEnter(stack.id, tech.id)}
    //                                         onMouseLeave={() => handleImageMouseLeave(stack.id)}>
    //                                         <div className="d-inline-block">
    //                                             <img className={`tech-image ${hoveredImageMap[stack.id] !== tech.id ? 'd-block' : 'd-none'}`} 
    //                                                 src={tech.icon} />
    //                                         </div>
    //                                         <div className={`${hoveredImageMap[stack.id] === tech.id ? 'd-block' : 'd-none'}`}>{ tech.label }</div>
    //                                     </li>
    //                                 );
    //                             })}
    //                         </ul>
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //     </div>
    // );
};

export default Skills;