import { useState } from 'react';
import style from './navbar.module.css';

function NavBar() {
    const [visible, setVisibility] = useState(false);

    const clickHandler = () => {
        setVisibility(!visible);
    };

    return(
        <>  
        <div className={style.buttonContainer}>
            <button onClick={clickHandler}><img src={require('../../media/icons/menu.png')} alt='menu'/></button>
        </div>
        <div className={style.navContainer}>
            <nav className={`${style.linkContainer} ${visible ? undefined : style.hidden}`}>
                <a href="#home" onClick={clickHandler} style={{transitionDelay: '125ms'}}>Home</a>
                <a href="#about" onClick={clickHandler} style={{transitionDelay: '250ms'}}>About</a>
                <a href="#skills" onClick={clickHandler} style={{transitionDelay: '375ms'}}>Skills</a>
                <a href="#projects" onClick={clickHandler} style={{transitionDelay: '500ms'}}>Projects</a>                
            </nav>
        </div>
        
        </>

    )
}

export default NavBar