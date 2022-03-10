import s from "./info.module.css";
import foto from "./yo.jpg";
import { UilImport , UilMouseAlt, UilAngleDoubleDown } from '@iconscout/react-unicons';
import { Link } from "react-scroll";

export default function Info() {

    return (
        <section id="about" className={s.sectionInfo}>
            <span className={s.subTitle}>Sobre mi.</span>
            <div className={s.aboutCard}>
                <div className={s.infoContainer}>
                    <div className={s.retrato}>
                        <div className={s.recorte}>
                            <img className={s.random} src={foto} alt="unpiberandom" />
                        </div>
                    </div>
                    <div className={s.parrafo}>
                        Hola! Mi nombre es Ezequiel Gonzalez, nací en Buenos Aires, Argentina.
                        Soy Desarrollador Full Stack orientado al Front-end, con ganas de crecer en el mundo IT y profesionalmente.

                        <a className={s.cvButton} download="" href="Ezequiel-Gonzalez-CV-Full-Stack-Developer.pdf">
                            Descargar CV
                            <UilImport className={s.downloadIcon}/>
                        </a>

                    </div>
                </div>
                <div className={s.scrollContainer}>
                        <Link className={s.effect} activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={800}>
                            <UilMouseAlt className={s.scrollIcon} />
                            <span>Scroll Down</span>
                            <UilAngleDoubleDown className={s.scrollIcon} />
                        </Link>
                </div>
            </div>
        </section>
    )
}