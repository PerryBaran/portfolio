import style from './icon.module.css';
import { LogoInfo } from '../../../Interfaces';

function Skill(props: {icon: LogoInfo}) {
    const {icon} = props

    return (
        <figure className={style.container}>
            <img src={icon.src} alt={`${icon.name} logo`}/>
            <figcaption>{icon.name}</figcaption>
        </figure>
    );
}

export default Skill;