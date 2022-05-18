import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import TriviaFoto from "./triviafoto.jpg";
import FoodApp from "./foodApp.jpg";
import MedicalHub from "./medicalHub.jpg";
import s from "./Card.module.css";
import { UilGithubAlt } from '@iconscout/react-unicons';
import MeliChallenge from "./meliChallenge.png";

export default function Card() {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={s.slideContainer}>
                        <img className={s.foto} src={FoodApp} alt="trivia" />
                        <div>
                            <h3>Food App (Full Stack)</h3>
                            <p className={s.parrafo}>En Food App encontraras +100 recetas donde podras filtrar, buscar y crear nuevas recetas.
                                Tecnologias utilizadas: ReactJS, Redux, NodeJS, Express, Sequalize, PostgreSQL
                            </p>
                            <div className={s.buttonsContainer}>
                                <a className={s.demoButton} target="_blank" rel="noreferrer" href="https://github.com/ezexgonzalez/FoodAppPI">Demo</a>
                                <a className={s.gitButton} href="https://github.com/ezexgonzalez/FoodAppPI" rel="noreferrer" target="_blank"><UilGithubAlt /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slideContainer}>
                        <img className={s.fotoMedical} src={MedicalHub} alt="trivia" />
                        <div>
                            <h3>Medical Hub (Front-End)</h3>
                            <p className={s.parrafo}>Medical Hub es una app para gestion medica, puedes pedir turnos, pagar turnos/estudios, ver horarios disponibles y mucho mas!
                                Tecnologias utilizadas: ReactJS, Redux, JavaScript, Css
                            </p>
                            <div className={s.buttonsContainer}>
                                <a className={s.demoButton} target="_blank" rel="noreferrer" href="https://medicalhub.netlify.app/">Demo</a>
                                <a className={s.gitButton} href="https://github.com/ezexgonzalez/medical-hub-pf" rel="noreferrer" target="_blank"><UilGithubAlt /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slideContainer}>
                        <img className={s.foto} src={TriviaFoto} alt="trivia" />
                        <div>
                            <h3>Trivia App (React)</h3>
                            <p className={s.parrafo}>En Trivia app encontraras un juego de preguntas con categorias variadas en ingles.
                                Esta app fue desarrolada con ReactJS.
                            </p>
                            <div className={s.buttonsContainer}>
                                <a className={s.demoButton} target="_blank" rel="noreferrer" href="https://trivia-app-nu.vercel.app/">Demo</a>
                                <a className={s.gitButton} href="https://github.com/ezexgonzalez/TriviaApp" rel="noreferrer" target="_blank"><UilGithubAlt /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={s.slideContainer}>
                        <img className={s.foto} src={MeliChallenge} alt="meli" />
                        <div>
                            <h3>Mercado Libre Challenge Front (React)</h3>
                            <p className={s.parrafo}>Replica de la pagina del detalle de venta de un Auto en Mercado Libre Challenge Front End.
                            </p>
                            <div className={s.buttonsContainer}>
                                <a className={s.demoButton} target="_blank" rel="noreferrer" href="https://me-li-challenge.vercel.app/">Demo</a>
                                <a className={s.gitButton} href="https://github.com/ezexgonzalez/MeLi-Challenge" rel="noreferrer" target="_blank"><UilGithubAlt /></a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}