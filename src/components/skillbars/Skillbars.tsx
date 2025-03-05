import './Skillbars.css';

interface Skill {
    id: number;
    title: string;
    percentage: string;
}

interface SkillbarProp {
    proficiencies: Skill[]
}

const Skillbars = (props: SkillbarProp) => {
    const proficiencies = props.proficiencies;
    
    return (
        <div>
            { proficiencies.map((skill: Skill) => {
                return (
                    <div className="skillbar flex-column" key={skill.id}>
                        <div className="skillbar-info">
                            <span>{ skill.title }</span>
                            <span>{ skill.percentage }</span>
                        </div>
                        <div className="skillbar-progress">
                            <div className="skillbar-fill" style={{ width: skill.percentage }}></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Skillbars;