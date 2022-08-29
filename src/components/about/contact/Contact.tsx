import style from './contact.module.css';

function Contact(props: {href: string, src: string, caption: string}) {
    const {href, src, caption} = props

    return (
        <a href={href} target="_blank" rel="noreferrer" className={style.container}>
            <figure>
                <img src={src} alt={caption}/>
                <figcaption>{caption}</figcaption>
            </figure>
        </a>
    );
}

export default Contact;