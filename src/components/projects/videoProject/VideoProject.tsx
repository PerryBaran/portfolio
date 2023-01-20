import style from './videoProject.module.css';
import { LogoInfo } from '../../../Interfaces';
import YoutubeEmbed from '../../youtube/YouTube';

interface Props {
  projectTitle: string,
  projectDescription: string,
  video: string,
  skills: LogoInfo[],
  children?: React.ReactNode,
}

function VideoProject(props: Props) {
    const {
        projectTitle,
        projectDescription,
        skills,
        video,
        children
    } = props

    return(
        <section className={style.container}>
            <div className={style.video}>
              <YoutubeEmbed embedId={video} />
            </div>
            <div className={style.info}>
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

export default VideoProject;