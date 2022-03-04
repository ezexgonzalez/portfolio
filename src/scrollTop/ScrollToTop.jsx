import { useState, useEffect } from "react";
import s from "./ScrollToTop.module.css";
import { UilAngleDoubleUp } from '@iconscout/react-unicons';
import Link from "react-scroll/modules/components/Link";


export default function ScrollToTop(){

    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility () {
        if(window.pageYOffset > 880){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }


    useEffect(()=>{
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    },[])

    return(
        <div className={s.fixed}>
            {
                isVisible ? 
                <Link activeClass="active" to="main" spy={true} smooth={true} offset={50} duration={500}>
                <button type="button" className={s.button}>
                    <UilAngleDoubleUp className={s.icon}/>
                </button> 
                </Link> : ""
            }
        </div>
    )

}