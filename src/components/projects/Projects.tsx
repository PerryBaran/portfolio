import Project from "./project/Project";
import style from './projects.module.css';
import {CSS3, Firebase, Jest, JavaScript, React, TypeScript, MySQL, Express, Mocha} from '../../media/logos/index';
import { dodl, jenico, onlineStore, musicLibrary } from '../../media/images/index';

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
                    projectDescription={' A personal website to showcase my music. Created in React and Typescript. Uses Firebase cloud storage for hosting of music files, EmailJS for contacts form.'}
                    skills={[
                        React,
                        TypeScript,
                        Firebase
                    ]}
                    repohref={'https://github.com/PerryBaran/jenico'}
                    livehref={'https://perrybaran.github.io/jenico/'}
                />
                <Project 
                    projectSrc={musicLibrary}
                    projectTitle={'Music Library'}
                    projectDescription={'An Express.js API that interacts with a mySQL database via CRUD requests to store and interact with data containing artists and albums information. TDD using Mocha at the forefront of the development process.'}
                    skills={[
                        MySQL,
                        Express,
                        Mocha,
                    ]}
                    repohref={'https://github.com/PerryBaran/music-library'}
                />
                <Project 
                    projectSrc={onlineStore}
                    projectTitle={'Online Store'}
                    projectDescription={'UI for an online video game key reseller, with working shopping cart. Created in React, and my first project using React Browser Router.'}
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