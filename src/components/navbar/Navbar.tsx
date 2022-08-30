import { useState } from 'react';
import style from './navbar.module.css';
import { menu } from '../../media/icons/index';

function NavBar() {
    const [visible, setVisibility] = useState(false);

    const clickHandler = () => {
        setVisibility(!visible);
    };

    return (
        <>  
        <div className={style.buttonContainer}>
            <button onClick={clickHandler}><img src={menu} alt='menu'/></button>
        </div>
        <div className={style.navContainer}>
            <nav className={`${style.linkContainer} ${visible ? undefined : style.hidden}`}>
                <a href="#home" onClick={clickHandler}>Home</a>
                <a href="#about" onClick={clickHandler}>About</a>
                <a href="#skills" onClick={clickHandler}>Skills</a>
                <a href="#projects" onClick={clickHandler}>Projects</a>                
            </nav>
        </div>
        </>
    );
};

export default NavBar