import style from './about.module.css';

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
                        video games or bouldering.
                    </p>
                    <section className={style.contact}>
                        <a href="https://github.com/PerryBaran" target="_blank" rel="noreferrer">GitHub</a>
                        <p>Email: <a href ="mailto:perrybaran@gmail.com">perrybaran@gmail.com</a></p>
                    </section>
                </div>
                <img src={require('../../media/images/Profile.jpg')} alt="Perry Baran profile"/>
            </div>
        </section>
    );
};

export default About