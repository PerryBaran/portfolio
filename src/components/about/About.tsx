import style from './about.module.css';
import Link from './link/Link';
import { GitHub } from '../../media/logos/index';
import { cv, at } from '../../media/icons/index';
import { profile } from '../../media/images/index';

function About() {
    return (
        <section id="about" className={style.container}>
            <div className='sticky'>
                <h2>About</h2>
            </div>
            <div className={style.content}>
                <div>
                    <p>Hi, I'm Perry, a full-stack web developer based in Leeds. I started my coding journey in 2021, 
                        following the Oden Project (a free online course), and quickly fell in 
                        love with it. Currently, I am a studying full-stack web development at Manchester Codes, 
                        with the aim of taking my hobby for coding into a career in web-development. When I'm not coding, you can find me 
                        making <a href="https://perrybaran.github.io/jenico/" target="_blank" rel="noreferrer">electronic music</a> playing
                        a wide variety of video games, bouldering or camping with my friends.
                    </p>
                    <section className={style.contact}>
                        <Link
                            href="https://github.com/PerryBaran"
                            src={GitHub.src}
                            caption={GitHub.name}
                        />
                        <Link 
                            href="mailto:perrybaran@gmail.com"
                            src={at}
                            caption="perrybaran@gmail.com"
                        />
                        <Link
                            href="https://drive.google.com/file/d/1vmQDnvjXqyskpUeLhpW4re1_56tEkF68/view"
                            src={cv}
                            caption="CV"
                        />
                    </section>
                </div>
                <img src={profile} alt="Perry Baran profile" className={style.profile}/>
            </div>
        </section>
    );
};

export default About