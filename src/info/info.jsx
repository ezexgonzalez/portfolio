import s from "./info.module.css";
import foto from "./yo.jpg";
import { UilImport } from '@iconscout/react-unicons';
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
                    <span className={s.parrafo}>
                        Hola! Mi nombre es Ezequiel Gonzalez, nací en Buenos Aires, Argentina.
                        Soy Desarrollador Full Stack orientado al Front-end, con ganas de crecer en el mundo IT y profesionalmente.

                        <a className={s.cvButton} download="" href="Ezequiel-Gonzalez-CV-Full-Stack-Developer.pdf">
                            Descargar CV
                            <UilImport className={s.downloadIcon}/>
                        </a>

                    </span>
                </div>
            </div>
        </section>
    )
}