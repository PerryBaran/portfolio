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
                    <Icon icon={JavaScript}/>
                    <Icon icon={React}/>
                    <Icon icon={TypeScript}/>
                </div>
            </section>
            <section>
                <h3>Other Skills</h3>
                <div className={style.iconContainer}>
                    <Icon icon={HTML5}/>
                    <Icon icon={CSS3}/>
                    <Icon icon={Jest}/>
                    <Icon icon={GitHub}/>
                    <Icon icon={Firebase}/>
                </div>
            </section>
        </section>
    );
};

export default Skills