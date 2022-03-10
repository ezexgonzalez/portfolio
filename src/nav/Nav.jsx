import s from "./Nav.module.css";
import { UilBars } from '@iconscout/react-unicons';
import { Link } from "react-scroll";
import { useState } from "react";
import {CgClose} from "react-icons/cg";

export default function Nav() {

    const [showMenu, setShowMenu] = useState(false);

    function closeMenu (){
        setShowMenu(false);
    }

    return (
        <nav className={showMenu ? s.navShow : s.nav}>
            <div className={s.topNav}> 
                <span className={s.logo}>egdev</span>
               {showMenu? <CgClose onClick={() => setShowMenu(!showMenu)} className={s.iconClose}/> : <UilBars onClick={() => setShowMenu(!showMenu)} className={s.icon} />}
            </div> 
                <div className={showMenu ? s.showMenu : s.buttonsContainer}>
                    <Link onClick={closeMenu} className={s.navButton} activeClass="active" to="main" spy={true} smooth={true} offset={50} duration={500}>
                        <span className={s.spanText}>Home</span>
                    </Link>
                    <Link onClick={closeMenu} className={s.navButton} activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                        <span className={s.spanText}>Sobre Mi</span>
                    </Link>
                    <Link onClick={closeMenu} className={s.navButton} activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={800}>
                        <span className={s.spanText}>Proyectos</span>
                    </Link>
                    <Link onClick={closeMenu} className={s.navButton} activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={800}>
                        <span className={s.spanText}>Skills</span>
                    </Link>
                    <Link onClick={closeMenu} className={s.navButton} activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={800}>
                        <span className={s.spanText}>Conctacto</span>
                    </Link>
                </div> 
            
        </nav>
    )

}