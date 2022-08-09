import style from './project.module.css';

interface Props {
    projectSrc: string,
    projectTitle: string,
    projectDescription: string,
    skill1Src: string,
    skill1Alt: string,
    skill2Src: string,
    skill2Alt: string,
    skill3Src: string,
    skill3Alt: string,
    repohref: string,
    livehref: string
}

function Project(props: Props) {
    const {
        projectSrc,
        projectTitle,
        projectDescription,
        skill1Src,
        skill1Alt,
        skill2Src,
        skill2Alt,
        skill3Src,
        skill3Alt,
        repohref,
        livehref
    } = props

    return(
        <section className={style.container}>
            <img src={projectSrc} alt={`${projectTitle} page`}/>
            <div>
                <h3>{projectTitle}</h3>
                <p>{projectDescription}</p>
                <ul>
                    <li><img src={skill1Src} alt={skill1Alt}/></li>
                    <li><img src={skill2Src} alt={skill2Alt}/></li>
                    <li><img src={skill3Src} alt={skill3Alt}/></li>
                </ul>
                <a href={repohref} target="_blank" rel="noreferrer">Repository</a>
                <a href={livehref} target="_blank" rel="noreferrer">Live Preview</a>
            </div>
        </section>
    )
};

export default Project