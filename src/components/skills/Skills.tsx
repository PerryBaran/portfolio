import style from './skills.module.css';
import {CSS3, Firebase, GitHub, HTML5, Jest, JavaScript, React, TypeScript} from '../../media/logos/index';

function Skills() {
    return(
        <section id="skills" className={style.container}>
            <h2>Skills</h2>
            <section>
                <h3>Main Skills</h3>
                <div className={style.iconContainer}>
                    <figure>
                        <img src={JavaScript} alt="Javascript logo"/>
                        <figcaption>Javascript</figcaption>
                    </figure>
                    <figure>
                        <img src={React} alt="React logo"/>
                        <figcaption>React</figcaption>
                    </figure>
                    <figure>
                        <img src={CSS3} alt="CSS3 logo"/>
                        <figcaption>CSS3</figcaption>
                    </figure>
                </div>
            </section>
            <section>
                <h3>Other Skills</h3>
                <div className={style.iconContainer}>
                    <figure>
                        <img src={HTML5} alt="HTML5 logo"/>
                        <figcaption>HTML5</figcaption>
                    </figure>
                    <figure>
                        <img src={TypeScript} alt="Typescript logo"/>
                        <figcaption>Typescript</figcaption>
                    </figure>
                    <figure>
                        <img src={Jest} alt="Jest logo"/>
                        <figcaption>Jest</figcaption>
                    </figure>
                    <figure>
                        <img src={GitHub} alt="Github logo"/>
                        <figcaption>Github</figcaption>
                    </figure>
                    <figure>
                        <img src={Firebase} alt="Firebase Logo"/>
                        <figcaption>Firebase</figcaption>
                    </figure>
                </div>
            </section>
        </section>
    )
};

export default Skills