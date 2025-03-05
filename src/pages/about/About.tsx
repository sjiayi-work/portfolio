import './About.css';
import TechStacks, { Stack } from '../../components/tech-stacks/TechStacks';
import useFetch from '../../hooks/useFetch';

interface About {
    descriptions: string[];
    stacks: Stack[];
}

const About = () => {
    const { data, error, isPending } = useFetch<About>('/data/about.json');
    
    return (
        <section id="about" className="about">
            <div className="container container-lg">
                <h1>About Me</h1>
                <div className="content" data-aos="fade-up">
                    { error && <div className="error">{error}</div> }
                    { isPending && <div>Loading...</div> }
                    { data && (
                        <>
                            <div className="about-container pb-3 flex-row gap-5" data-aos="fade-up">
                                <img className="undraw-image" src="/src/assets/images/undraw-creative-woman.svg" />
                                <div>
                                    { data.descriptions.map((desc: string, index: number) => {
                                        return (
                                            <p className="about-description mb-3 flex-fill" key={index}>{ desc }</p>
                                        );
                                    })}
                                </div>
                            </div>
                            <TechStacks stacks={data.stacks} />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;