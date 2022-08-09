import style from './navbar.module.css';

function NavBar() {
    return(
        <nav className={style.container}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
        </nav>
    )
}

export default NavBar