import Project from "./project/Project";
import style from './projects.module.css';
import { CSS3, Firebase, JavaScript, React, TypeScript, MySQL, Express, Mocha, Sequelize } from '../../media/logos/index';
import { jenico, weatherApp, musicLibrary, bookLibrary } from '../../media/images/index';

function Projects() {
    return (
        <section id="projects" className={style.container}>
            <div className='sticky'>
                <h2>Projects</h2>
            </div>
            <div>
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
                    projectSrc={weatherApp}
                    projectTitle={'Weather App'}
                    projectDescription={'React app that interacts with OpenWeatherMap’s API to get up to date weather forecast data and displays it granularly. TDD using Jest and react-testing-library followed throughout.'}
                    skills={[
                        React,
                        JavaScript,
                        CSS3,
                    ]}
                    repohref={'https://github.com/PerryBaran/weather-app'}
                    livehref={'https://perrybaran.github.io/weather-app/'}
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
                    projectSrc={bookLibrary}
                    projectTitle={'Book Library'}
                    projectDescription={'An Express.js API that interacts with a Sequelize database running MySQL for testing and Postgres for production, hosted on Render. TDD using Mocha and Chai.'}
                    skills={[
                        Sequelize,
                        Express,
                        Mocha,
                    ]}
                    repohref={'https://github.com/PerryBaran/book-library'}
                    livehref={'https://book-library-f9gi.onrender.com'}
                />
            </div>
        </section>
    );
};

export default Projects