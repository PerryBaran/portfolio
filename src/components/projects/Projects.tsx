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
                skill1Src={React} skill1Alt={'React'}
                skill2Src={Jest} skill2Alt={'Jest'}
                skill3Src={Firebase} skill3Alt={'Firebase'}
                repohref={'https://github.com/PerryBaran/dodl'}
                livehref={'https://perrybaran.github.io/dodl/'}
            />
            <Project 
                projectSrc={require('../../media/images/Jenico.jpg')}
                projectTitle={'Musciains Personal Website'}
                projectDescription={'Took a lot of the music player functionality in the last project and turned into a full website. Created in React and Typesript.'}
                skill1Src={React} skill1Alt={'React'}
                skill2Src={TypeScript} skill2Alt={'TypeScript'}
                skill3Src={Firebase} skill3Alt={'Firebase'}
                repohref={'https://github.com/PerryBaran/dodl'}
                livehref={'https://perrybaran.github.io/dodl/'}
            />
            <Project 
                projectSrc={require('../../media/images/Weather App.jpg')}
                projectTitle={'Weather App'}
                projectDescription={"Weather app created in Javascript. Gets weather data from OpenWeatherMap's Weather API."}
                skill1Src={JavaScript} skill1Alt={'JavaScript'}
                skill2Src={HTML5} skill2Alt={'HTML5'}
                skill3Src={CSS3} skill3Alt={'CSS3'}
                repohref={'https://github.com/PerryBaran/weatherapp'}
                livehref={'https://perrybaran.github.io/weatherapp/'}
            />
            <Project 
                projectSrc={require('../../media/images/Online Store.jpg')}
                projectTitle={'Online Store'}
                projectDescription={'UI for an online videogame key seller. Made in React and my first project to use React BrowserRouter.'}
                skill1Src={React} skill1Alt={'React'}
                skill2Src={JavaScript} skill2Alt={'JavaScript'}
                skill3Src={CSS3} skill3Alt={'CSS3'}
                repohref={'https://github.com/PerryBaran/shopping-cart'}
                livehref={'https://perrybaran.github.io/shopping-cart/#/'}
            />            
        </section>
    )
};

export default Projects