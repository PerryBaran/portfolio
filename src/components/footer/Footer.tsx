import style from './footer.module.css';

function Footer() {
    return (
        <footer className={style.container}>
            <div>
                <div className={style.info}>
                    <h3>Perry Baran</h3>
                    <a href='https://github.com/PerryBaran/' target='_blank' rel='noreferrer'>GitHub</a>
                    <a href='https://github.com/PerryBaran/portfolio' target='_blank' rel='noreferrer'>Portfolio Repository</a>
                    <a href='mailto:perrybaran@gmail.com'  target='_blank' rel='noreferrer'>Email</a>
                    <a href='https://drive.google.com/file/d/1vmQDnvjXqyskpUeLhpW4re1_56tEkF68/view'  target='_blank' rel='noreferrer'>CV</a>
                </div>
                <div className={`${style.border} ${style.hideOnMobile}`}/>
                <div className={`${style.info} ${style.hideOnMobile}`}>
                    <h3>Navigation</h3>
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#skills'>Skills</a>
                    <a href='projects'>Projects</a>
                </div>
                <div className={style.border}/>
                <div className={style.info}>
                    <h3>Attribution</h3>
                    <a href='https://www.flaticon.com' target='_blank' rel='noreferrer'>Icons by Freepik - Flaticon</a>
                    <a href='https://www.pexels.com/@theo-57769809/' target='_blank' rel='noreferrer'>Background Video by Theo - Pexels</a>
                </div>    
            </div>   
        </footer>
    );
}

export default Footer;