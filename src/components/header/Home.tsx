import style from './home.module.css';
import BackgroundVideo from '../background/video/backgroundVideo';

function Home() {
    return (
        <header id="home" className={style.container}>
            <BackgroundVideo src={require('../../media/videos/home.mp4')}/>
            <h2>Home</h2>
            <div className={style.gridHeading}>
                <div className={style.centerFlex}>
                    <h1>PERRY<span>BARAN</span></h1>
                </div>
                <div>
                    <p>Front-End Web Developer</p>
                    <p>Contact me at: <a href ="mailto:perrybaran@gmail.com">perrybaran@gmail.com</a></p>
                </div>
            </div>
        </header>
    )
}

export default Home