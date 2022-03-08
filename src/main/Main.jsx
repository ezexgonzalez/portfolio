import s from "./Main.module.css";
import { Link } from "react-scroll";
import { UilNavigator, UilMouseAlt, UilAngleDoubleDown, UilLinkedinAlt, UilGithubAlt } from '@iconscout/react-unicons';
import ScrollToTop from "../scrollTop/ScrollToTop";


export default function Main() {

    return (
        <main id="main" className={s.main}>
            <div className={s.presentation}>
               <div className={s.redes}>
                    <a className={s.link} rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ezexgonzalez/">
                        <UilLinkedinAlt className={s.redIcon} />
                    </a>
                    <a className={s.link} rel="noreferrer" target="_blank" href="https://github.com/ezexgonzalez/">
                        <UilGithubAlt />
                    </a>
                </div> 
                <div className={s.info}>
                    <div className={s.titleContainer}>
                        <span className={s.title}>Ezequiel</span>
                        <span className={s.title}>Gonzalez</span>
                        <span className={s.subTitle}>Full Stack Developer</span>
                    </div>
                    <div className={s.pContainer}>
                        <p className={s.resume}>Con formación y experiencia en el desarrollo de paginas web como programador Full Stack</p>
                        <button className={s.mainButton}>
                            Conctáctame
                            <UilNavigator className={s.buttonIcon} />
                        </button>
                    </div>
                    <div className={s.scrollContainer}>
                        <Link className={s.effect} activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={800}>
                            <UilMouseAlt className={s.scrollIcon} />
                            <span>Scroll Down</span>
                            <UilAngleDoubleDown className={s.scrollIcon} />
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className={s.retrato}>
                <img className={s.random} src={random} alt="unpiberandom" />
            </div>
            */
            }
            <ScrollToTop/>
        </main>
    )


}