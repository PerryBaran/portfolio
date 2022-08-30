import Project from "./project/Project";
import style from './projects.module.css';
import {CSS3, Firebase, HTML5, Jest, JavaScript, React, TypeScript} from '../../media/logos/index';
import { dodl, jenico, onlineStore, weatherApp } from '../../media/images/index';

function Projects() {
    return (
        <section id="projects" className={style.container}>
            <div className='sticky'>
                <h2>Projects</h2>
            </div>
            <div>
                <Project 
                    projectSrc={dodl}
                    projectTitle={'Music Player'}
                    projectDescription={'Music and video player. Created in React, unit tests with Jest and React Testing Library. Used Firebase for cloud storage of songs and video.'}
                    skills={[
                        React,
                        Jest,
                        Firebase
                    ]}
                    repohref={'https://github.com/PerryBaran/dodl'}
                    livehref={'https://perrybaran.github.io/dodl/'}
                />
                <Project 
                    projectSrc={jenico}
                    projectTitle={'Musciains Website'}
                    projectDescription={'A musicians personal website, implements the functionality from Music Player. Created in React and Typesript. Uses Firebase for song hosting.'}
                    skills={[
                        React,
                        TypeScript,
                        Firebase
                    ]}
                    repohref={'https://github.com/PerryBaran/jenico'}
                    livehref={'https://perrybaran.github.io/jenico/'}
                />
                <Project 
                    projectSrc={weatherApp}
                    projectTitle={'Weather App'}
                    projectDescription={"Weather app created in Javascript. Gets weather data from OpenWeatherMap's Weather API."}
                    skills={[
                        JavaScript,
                        HTML5,
                        CSS3,
                    ]}
                    repohref={'https://github.com/PerryBaran/weatherapp'}
                    livehref={'https://perrybaran.github.io/weatherapp/'}
                />
                <Project 
                    projectSrc={onlineStore}
                    projectTitle={'Online Store'}
                    projectDescription={'UI for an online videogame key seller. Made in React and my first project to use React BrowserRouter.'}
                    skills={[
                        React,
                        JavaScript,
                        CSS3,
                    ]}
                    repohref={'https://github.com/PerryBaran/shopping-cart'}
                    livehref={'https://perrybaran.github.io/shopping-cart/#/'}
                />            
            </div>
        </section>
    );
};

export default Projects