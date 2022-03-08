import s from "./Projects.module.css";
import Card from "./card/Card";
import { UilMouseAlt, UilAngleDoubleDown } from '@iconscout/react-unicons';
import { Link } from "react-scroll";

export default function Projects(){

    return(
        <section id="projects" className={s.projects}>
            <span className={s.subTitle}>Proyectos.</span>
            <div className={s.swiperContainer}>
                <Card/>
                <div className={s.scrollContainer}>
                        <Link className={s.effect} activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={800}>
                            <UilMouseAlt className={s.scrollIcon} />
                            <span>Scroll Down</span>
                            <UilAngleDoubleDown className={s.scrollIcon} />
                        </Link>
                </div>
            </div>
  
        </section>
    )
}