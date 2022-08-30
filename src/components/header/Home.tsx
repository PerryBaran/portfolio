import style from './home.module.css';
import BackgroundVideo from '../background/video/backgroundVideo';

function Home() {
    return (
        <header id="home" className={style.container}>
            <BackgroundVideo src={require('../../media/videos/home.mp4')}/>
            <div className={style.gridContainer}>
                <div className='sticky'>
                    <h2>Home</h2>
                </div>
                <div className={style.centerFlex}>
                    <h1><span className={style.left}>PERRY</span><span className={style.right}>BARAN</span></h1>
                </div>
                <p>Full-Stack Web Developer</p>
            </div>
        </header>
    );
};

export default Home