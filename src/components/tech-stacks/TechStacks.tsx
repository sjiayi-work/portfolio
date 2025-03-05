import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TechStacks.css';

export interface Stack {
    id: number;
    label: string;
    icon: string;
}

interface TechStackProp {
    stacks: Stack[]
}

const TechStacks = (props: TechStackProp) => {
    const stacks = props.stacks;
    
    return (
        <div id="tech-stack" className="pb-3">
            <h2 className="title flex-row justify-content-center align-items-center">
                <FontAwesomeIcon icon={faStar} spin className="fa-icon-24" />
                <span>My Stack</span>
            </h2>
            
            <ul className="stack-list">
                { stacks.map((stack: Stack) => {
                    return (
                        <li className="stack-item flex-row align-items-center" key={stack.id} data-aos="fade-up">
                            <img src={stack.icon} className="image-36" />
                            <label>{ stack.label }</label>
                        </li>
                    );
                }) }
            </ul>
        </div>
    );
};

export default TechStacks;