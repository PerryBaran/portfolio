import Project from "./project/Project";
import style from './projects.module.css';
import {CSS3, Firebase, HTML5, Jest, JavaScript, React, TypeScript} from '../../media/logos/index';

function Projects() {
    return (
        <section id="projects" className={style.container}>
            <h2>Projects</h2>
            <Project 
                projectSrc={require('../../media/images/DoDL.jpg')}
                projectTitle={'Music Player'}
                projectDescription={'Music and video player. Created in React, unit tests with Jest and React Testing Library. Used Firebase for cloud storage of songs and video.'}
                skills={[
                    {src: React, alt: 'React'},
                    {src: Jest, alt: 'Jest'},
                    {src: Firebase, alt: 'Firebase'}
                ]}
                repohref={'https://github.com/PerryBaran/dodl'}
                livehref={'https://perrybaran.github.io/dodl/'}
            />
            <Project 
                projectSrc={require('../../media/images/Jenico.jpg')}
                projectTitle={'Musciains Personal Website'}
                projectDescription={'Took a lot of the music player functionality in the last project and turned into a full website. Created in React and Typesript.'}
                skills={[
                    {src: React, alt: 'React'},
                    {src: TypeScript, alt: 'TypeScript'},
                    {src: Firebase, alt: 'Firebase'}
                ]}
                repohref={'https://github.com/PerryBaran/jenico'}
                livehref={'https://perrybaran.github.io/jenico/'}
            />
            <Project 
                projectSrc={require('../../media/images/Weather App.jpg')}
                projectTitle={'Weather App'}
                projectDescription={"Weather app created in Javascript. Gets weather data from OpenWeatherMap's Weather API."}
                skills={[
                    {src: JavaScript, alt: 'JavaScript'},
                    {src: HTML5, alt: 'HTML5'},
                    {src: CSS3, alt: 'CSS3'}
                ]}
                repohref={'https://github.com/PerryBaran/weatherapp'}
                livehref={'https://perrybaran.github.io/weatherapp/'}
            />
            <Project 
                projectSrc={require('../../media/images/Online Store.jpg')}
                projectTitle={'Online Store'}
                projectDescription={'UI for an online videogame key seller. Made in React and my first project to use React BrowserRouter.'}
                skills={[
                    {src: React, alt: 'React'},
                    {src: JavaScript, alt: 'JavaScript'},
                    {src: CSS3, alt: 'CSS3'}
                ]}
                repohref={'https://github.com/PerryBaran/shopping-cart'}
                livehref={'https://perrybaran.github.io/shopping-cart/#/'}
            />            
        </section>
    );
};

export default Projects