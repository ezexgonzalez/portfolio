import s from "./Nav.module.css";
import {Link} from "react-scroll";


export default function Nav() {
 
    return (
        <nav className={s.nav}>
            <span className={s.logo}>egdev</span>
            <div className={s.buttonsContainer}>
            <Link className={s.navButton} activeClass="active" to="main" spy={true} smooth={true} offset={50} duration={500}>
                    <span className={s.spanText}>Home</span>
                </Link>
                <Link className={s.navButton} activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                    <span className={s.spanText}>Sobre Mi</span>
                </Link>
                <Link className={s.navButton} activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={800}>
                    <span className={s.spanText}>Proyectos</span>
                </Link>
                <Link className={s.navButton} activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={800}>
                    <span className={s.spanText}>Skills</span>
                </Link>
                <Link className={s.navButton} activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={800}>
                    <span className={s.spanText}>Conctacto</span>
                </Link>
            </div>
        </nav>
    )

}