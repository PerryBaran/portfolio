import style from './icon.module.css';

function Skill(props: {src: string, text: string}) {
    const {src, text} = props

    return (
        <figure className={style.container}>
            <img src={src} alt={`${text} logo`}/>
            <figcaption>{text}</figcaption>
        </figure>
    );
}

export default Skill;