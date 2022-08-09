import style from './home.module.css';

function Home() {
    return (
        <header id="home" className={style.container}>
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