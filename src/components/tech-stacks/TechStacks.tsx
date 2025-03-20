import './TechStacks.css';

export interface Stack {
    id: number;
    label: string;
    icon: string;
}

interface TechStackProp {
    stacks: Stack[];
}

const TechStacks = (props: TechStackProp) => {
    const stacks = props.stacks;
    
    return (
        <div id="tech-stack">
            <ul className="stack-list">
                { stacks.map((stack: Stack) => {
                    return (
                        <li className="stack-item flex-row align-items-center" key={stack.id} data-aos="fade-up">
                            <img src={stack.icon} className="image-24" />
                            <label>{ stack.label }</label>
                        </li>
                    );
                }) }
            </ul>
        </div>
    );
};

export default TechStacks;