import style from './about.module.css';
import Contact from './contact/Contact';
import { GitHub } from '../../media/logos/index';
import at from '../../media/icons/at.png';
import cv from '../../media/icons/cv.png';

function About() {
    return (
        <section id="about" className={style.container}>
            <h2>About</h2>
            <div>
                <div>
                    <p>Hi, I'm Perry, a front-end web develop based in Leeds. I started my coding journey in 2021, 
                        following the Oden Project (a free online course), and quickly fell in 
                        love with it. Currently, I am a studying full-stack web development at Manchester Codes, 
                        with the aim of taking my hobby for coding into a career in web-development. When I'm not coding, you can find me 
                        making <a href="https://perrybaran.github.io/jenico/" target="_blank" rel="noreferrer">electronic music</a> playing
                        video games, bouldering or camping with my friends.
                    </p>
                    <section className={style.contact}>
                        <Contact
                            href="https://github.com/PerryBaran"
                            src={GitHub.src}
                            caption={GitHub.name}
                        />
                        <Contact 
                            href="mailto:perrybaran@gmail.com"
                            src={at}
                            caption="perrybaran@gmail.com"
                        />
                        <Contact
                            href="https://drive.google.com/file/d/1vmQDnvjXqyskpUeLhpW4re1_56tEkF68/view"
                            src={cv}
                            caption="CV"
                        />
                    </section>
                </div>
                <img src={require('../../media/images/Profile.jpg')} alt="Perry Baran profile"/>
            </div>
        </section>
    );
};

export default About