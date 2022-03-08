import s from "./Skills.module.css";
import { UilHtml5, UilReact } from '@iconscout/react-unicons';
import { DiCss3, DiPostgresql } from "react-icons/di";
import { SiRedux, SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { UilMouseAlt, UilAngleDoubleDown } from '@iconscout/react-unicons';
import { Link } from "react-scroll";

export default function Skills() {

    return (
        <section id="skills" className={s.skills}>
            <span className={s.subTitle}>Skills.</span>
            <div className={s.fullContainer}>
                <div className={s.iconsContainer}>
                    <div className={s.box}>
                        <SiJavascript className={s.icon} />
                        <div className={s.tooltip}>
                            JavaScript
                        </div>
                    </div>
                    <div className={s.box}>
                        <UilHtml5 className={s.icon} />
                        <div className={s.tooltip}>
                            Html5
                        </div>
                    </div>
                    <div className={s.box}>
                        <DiCss3 className={s.icon} />
                        <div className={s.tooltip}>
                            Css
                        </div>
                    </div>
                    <div className={s.box}>
                        <UilReact className={s.icon} />
                        <div className={s.tooltip}>
                            ReactJS
                        </div>
                    </div>
                    <div className={s.box}>
                        <SiRedux className={s.icon} />
                        <div className={s.tooltip}>
                            Redux
                        </div>
                    </div>
                    <div className={s.box}>
                        <FaNodeJs className={s.icon} />
                        <div className={s.tooltip}>
                            NodeJS
                        </div>
                    </div>
                    <div className={s.box}>
                        <DiPostgresql className={s.icon} />
                        <div className={s.tooltip}>
                            PostgreSQL
                        </div>
                    </div>
                </div>
                <div className={s.scrollContainer}>
                    <Link className={s.effect} activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={800}>
                        <UilMouseAlt className={s.scrollIcon} />
                        <span>Scroll Down</span>
                        <UilAngleDoubleDown className={s.scrollIcon} />
                    </Link>
                </div>
            </div>
        </section>
    )

}