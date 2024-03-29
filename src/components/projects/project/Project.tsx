import style from './project.module.css';
import { LogoInfo } from '../../../Interfaces';

interface Props {
    projectSrc: string,
    projectTitle: string,
    projectDescription: string,
    skills: LogoInfo[],
    children?: React.ReactNode,
}

function Project(props: Props) {
    const {
        projectSrc,
        projectTitle,
        projectDescription,
        skills,
        children
    } = props

    return(
        <section className={style.container}>
            <img src={projectSrc} alt={`${projectTitle} page`}/>
            <div>
                <h3>{projectTitle}</h3>
                <p className={style.description}>{projectDescription}</p>
                <ul>
                    {skills.map(((skill, i) => {
                        return <li key={i}><img src={skill.src} alt={skill.name}/></li>
                    }))}
                </ul>
                {children}
            </div>
        </section>
    );
};

export default Project