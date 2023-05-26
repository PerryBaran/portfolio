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
                        following the Oden Project (a free online course), and quickly fell in love with it. 
                        In 2022, I joined the Command Shift (formerly Manchester Codes) full-stack coding bootcamp,
                        from which I have recently graduated. Currently I am a tutor at Command Shift, this involves:
                        giving lectures on the fundamentals of coding and web development, supporting students with their questions
                        and issues in and out of lectures and providing feedback to students on their progess through code-reviews.
                    </p>
                    <section className={style.contact}>
                        <Link
                            href='https://github.com/PerryBaran'
                            src={GitHub.src}
                            caption={GitHub.name}
                        />
                        <Link 
                            href='mailto:perrybaran@gmail.com'
                            src={at}
                            caption='perrybaran@gmail.com'
                        />
                        <Link
                            href='https://drive.google.com/file/d/1-kc-9scIZMWALchzWS7Y5UXjalgmiT_a/view?usp=sharing'
                            src={cv}
                            caption='CV'
                        />
                    </section>
                </div>
                <img src={profile} alt='Perry Baran profile' className={style.profile}/>
            </div>
        </section>
    );
};

export default About