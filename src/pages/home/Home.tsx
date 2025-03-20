import { useContext } from 'react';

import './Home.css';
import SocialLinks from '../../components/social-links/SocialLinks';
import TypingEffect from '../../components/typing-effect/TypingEffect';
import useFetch from '../../hooks/useFetch';
import { DataContext } from '../../contexts/DataContext';

interface Home {
    displayName: string;
    titles: string[];
    description: string;
    resumeLink: string;
    descriptions: string[];
}

const Home = () => {
    const { data: homeData, error, isPending } = useFetch<Home>('/data/home.json');
    const { data } = useContext(DataContext);
    
    return (
        <section id="home" className="home" data-aos="fade-zoom-in" data-aos-delay="500">
            <div className="container container-lg">
                <div className="content flex-row align-items-center gap-5">
                    { error && <div className="error">{ error }</div> }
                    { isPending && <div>Loading...</div> }
                    { homeData && 
                        <>
                            <div>
                                <h1 className="greeting-title">Hi<span className="color-secondary">!</span></h1>
                                {/* <h1 className="greeting-title">Hi <span className="wave-emoji">👋</span></h1> */}
                                { homeData.descriptions.map((desc: string, index: number) => <p key={index}>{ desc }</p>) }
                                <div className="contact">
                                    <SocialLinks />
                                    <button onClick={() => window.open(data.openToPublic ? data.resumeLink : '', '_blank')}>See My Resume</button>
                                    {/* <button className="btn-reverse" onClick={handleContactClick}>Contact Me</button> */}
                                </div>
                            </div>
                            <div className="profile text-center">
                                <img className="image-profile" src="/images/avatar.jpg" alt="Avatar" />
                                <h3 className="font-bold">{ homeData.displayName }</h3>
                                <h4 className="color-secondary">
                                    <TypingEffect words={homeData.titles} />
                                </h4>
                            </div>
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;