import style from './skills.module.css';
import Icon from './icon/Icon';
import {CSS3, Firebase, GitHub, HTML5, Jest, JavaScript, React, TypeScript} from '../../media/logos/index';

function Skills() {
    return(
        <section id="skills" className={style.container}>
            <h2>Skills</h2>
            <section>
                <h3>Main Skills</h3>
                <div className={style.iconContainer}>
                    <Icon src={JavaScript} text='JavaScript'/>
                    <Icon src={React} text='React'/>
                    <Icon src={TypeScript} text='TypeScript'/>
                </div>
            </section>
            <section>
                <h3>Other Skills</h3>
                <div className={style.iconContainer}>
                    <Icon src={HTML5} text='HTML5'/>
                    <Icon src={CSS3} text='CSS3'/>
                    <Icon src={Jest} text='Jest'/>
                    <Icon src={GitHub} text='GitHub'/>
                    <Icon src={Firebase} text='Firebase'/>
                </div>
            </section>
        </section>
    );
};

export default Skills