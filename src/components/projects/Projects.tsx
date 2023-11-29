import Project from "./project/Project";
import VideoProject from "./videoProject/VideoProject";
import style from './projects.module.css';
import { CSS3, Firebase, JavaScript, React, TypeScript, MySQL, Express, Mocha, Sequelize, AWS } from '../../media/logos/index';
import { jenico, weatherApp, musicLibrary, bookLibrary } from '../../media/images/index';

function Projects() {
    return (
        <section id='projects' className={style.container}>
            <div className='sticky'>
                <h2>Projects</h2>
            </div>
            <div>
                <VideoProject 
                    projectTitle='SoundClone'
                    projectDescription="A music sharing app that allows users to search and listen to other artists' music or upload their own. 
                        Created by Nicola and I as our final project at Command Shift.
                        The app is a React SPA that interacts with an Express.js API that uses Sequelize and Postgres to run a relational database.
                        Images and audio files are stored in an AWS S3 Bucket.
                        During development, I was responsible for creating the backend, linking the backend and frontend together, creating the music player and search
                        functionality, creating the home, search and profile feeds, adding the edit album and profile forms and styling the app.
                    "
                    skills={[
                        React,
                        AWS,
                        Express,
                        Sequelize
                    ]}
                    video='yB0kFoOHehA'
                >
                    <div>
                        <a href='https://github.com/ngiannotta84/soundcloud-clone' target='_blank' rel='noreferrer'>Front-End Repo</a>
                        <a href='https://github.com/PerryBaran/soundcloud-clone-api' target='_blank' rel='noreferrer'>Back-End Repo</a>                  
                    </div>
                </VideoProject>
                <Project
                    projectSrc={jenico}
                    projectTitle='Musciains Website'
                    projectDescription='A personal website to showcase my music. Created in React and Typescript. Uses Firebase cloud storage for hosting of music files, EmailJS for contacts form.'
                    skills={[
                        React,
                        TypeScript,
                        Firebase
                    ]}
                >
                    <a href='https://github.com/PerryBaran/jenico' target='_blank' rel='noreferrer'>Repository</a>
                    <a href='https://perrybaran.github.io/jenico/' target='_blank' rel='noreferrer'>Live Preview</a>
                </Project>
                <Project
                    projectSrc={weatherApp}
                    projectTitle='Weather App'
                    projectDescription='React app that interacts with OpenWeatherMap’s API to get up to date weather forecast data and displays it granularly. TDD using Jest and react-testing-library followed throughout.'
                    skills={[
                        React,
                        JavaScript,
                        CSS3,
                    ]}
                >
                    <a href='https://github.com/PerryBaran/weather-app' target='_blank' rel='noreferrer'>Repository</a>
                    <a href='https://perrybaran.github.io/weather-app/' target='_blank' rel='noreferrer'>Live Preview</a>
                </Project>
                <Project 
                    projectSrc={musicLibrary}
                    projectTitle='Music Library'
                    projectDescription='An Express.js API that interacts with a mySQL database via CRUD requests to store and interact with data containing artists and albums information. TDD using Mocha at the forefront of the development process.'
                    skills={[
                        MySQL,
                        Express,
                        Mocha,
                    ]}
                >
                    <a href='https://github.com/PerryBaran/music-library' target='_blank' rel='noreferrer'>Repository</a>
                </Project>
                <Project
                    projectSrc={bookLibrary}
                    projectTitle='Book Library'
                    projectDescription='An Express.js API that interacts with a Sequelize database running MySQL for testing and Postgres for production, hosted on Render. TDD using Mocha and Chai.'
                    skills={[
                        Sequelize,
                        Express,
                        Mocha,
                    ]}
                >
                    <a href='https://github.com/PerryBaran/book-library' target='_blank' rel='noreferrer'>Repository</a>
                    <a href='https://book-library-f9gi.onrender.com' target='_blank' rel='noreferrer'>Live Preview</a>
                </Project>
            </div>
        </section>
    );
};

export default Projects