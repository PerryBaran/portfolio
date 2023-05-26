import style from './skills.module.css';
import Icon from './icon/Icon';
import { CSS3, Firebase, GitHub, HTML5, Jest, JavaScript, React, TypeScript, Git, Node, Mocha, Docker, MySQL, Sequelize, Express, AWS, PostgreSQL, NextJS } from '../../media/logos/index';

function Skills() {
    return(
        <section id="skills" className={style.container}>
            <div className='sticky'>
                <h2>Skills</h2>
            </div>
            <section>
                <h3>Main Skills</h3>
                <div className={style.iconContainer}>
                    <Icon icon={JavaScript}/>
                    <Icon icon={React}/>
                    <Icon icon={TypeScript}/>
                    <Icon icon={Node}/>
                </div>
            </section>
            <section>
                <h3>Other Skills</h3>
                <div className={style.iconContainer}>
                    <Icon icon={HTML5}/>
                    <Icon icon={CSS3}/>
                    <Icon icon={NextJS}/>
                    <Icon icon={Jest}/>
                    <Icon icon={Mocha}/>
                    <Icon icon={Git}/>
                    <Icon icon={GitHub}/>
                    <Icon icon={AWS} />
                    <Icon icon={Firebase}/>
                    <Icon icon={Docker}/>
                    <Icon icon={MySQL}/>
                    <Icon icon={PostgreSQL} />
                    <Icon icon={Sequelize}/>
                    <Icon icon={Express}/>
                </div>
            </section>
        </section>
    );
};

export default Skills