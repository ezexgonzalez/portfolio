import s from "./Contact.module.css";
import { useState, useEffect} from "react";
import { UilWhatsapp, UilEnvelope, UilLocationPoint, UilEnvelopeUpload, UilSpinner } from '@iconscout/react-unicons';
import emailjs from '@emailjs/browser';

export default function Conctact() {

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        message: ""
    });

    const [send, setSend] = useState({
        loading: false,
        send: ""
    })

    const [errors, setErrors] = useState({
        fullName: { state: false, msg: "" },
        email: { state: false, msg: "" },
        message: { state: false, msg: "" },
        validate : false
    });
    
    useEffect(()=>{
        if(form.fullName.length > 0 && form.email.length > 0 && form.message.length > 0){
            setErrors(data =>{
                return{
                    ...data,
                    validate: true
                }
            });
        }


    },[form]);

    const handleOnChange = (e) => {
        setForm(data => {

            const newState = {
                ...data,
                [e.target.name]: e.target.value
            }

            validate(newState, e);
            return newState
        })
    }

    const validate = (state, e) => {
        
        if (state[e.target.name].length === 0) {
            setErrors(data => {
                return {
                    ...data,
                    [e.target.name]: { state: true, msg: "* Este campo es obligatorio" }
                }
            });
        } else if (e.target.name === "fullName" && !/^[a-zA-Z ]+$/g.test(state.fullName)) {
            setErrors(data => {
                return {
                    ...data,
                    [e.target.name]: { state: true, msg: "* Solo letras" }
                }
            });
        } else if (e.target.name === "email" && !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(state.email)) {
            setErrors(data => {
                return {
                    ...data,
                    [e.target.name]: { state: true, msg: "* Email Incorrecto" }
                }
            });
        } else {
            setErrors(data => {
                const newState = {
                    ...data,
                    [e.target.name]: false
                }
                return newState
            });
        }

    }

    const sendEmail = (e) => {
        e.preventDefault();
        if(!send.loading && !errors.email.state && !errors.fullName.state && !errors.message.state && errors.validate){
            emailjs.send('service_erbfx1i', 'template_3l5rxpi', form, 'OQn-tL3bPgEibwmTY')
            .then((result) => {
                setSend(data =>{
                    return{
                        loading: false,
                        send:"ok"
                    }
                });
            }, (error) => {
                setSend(data =>{
                    return{
                        loading: false,
                        send:"error"
                    }
                });
            });
            setSend((data) =>{
                return{
                    ...data,
                    loading: true
                }
            })
        }
        
    };

    return (
        <section id="contact" className={s.contact}>
            <span className={s.subTitle}>Contacto.</span>
            <div className={s.contactCard}>
                <div className={s.info}>
                    <div className={s.data}>
                        <a className={s.link} rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=+541161993279">
                            <UilWhatsapp className={s.icon} />
                            +54 1161993279
                        </a>
                    </div>
                    <div className={s.data}>
                        <UilEnvelope className={s.icon} />
                        ezexgonzalez@outlook.com
                    </div>
                    <div className={s.data}>
                        <UilLocationPoint className={s.icon} />
                        Buenos Aires, Argentina
                    </div>
                </div>
                <div>
                    <form onSubmit={sendEmail} className={s.form} action="">
                        <div className={s.inputContainer}>
                            <div className={s.box}>
                                <input className={errors.fullName.state ? s.inputError : s.input} onChange={handleOnChange} name="fullName" placeholder="Name" type="text" />
                                {errors.fullName.state ? <span className={s.error}>{errors.fullName.msg}</span> : ""}
                            </div>
                            <div className={s.box}>
                                <input className={errors.email.state ? s.inputError : s.input} onChange={handleOnChange} name="email" placeholder="Email" type="text" />
                                {errors.email.state ? <span className={s.error}>{errors.email.msg}</span> : ""}
                            </div>
                        </div>
                        <div className={s.textBox}>
                            <textarea className={errors.message.state ? s.textError : s.text} onChange={handleOnChange} name="message" placeholder="Message" cols="30" rows="10"></textarea>
                            {errors.message.state ? <span className={s.error}>{errors.message.msg}</span> : ""}
                        </div>
                        <div className={s.buttonContainer}>
                        <button className={send.send === "ok" ? s.sendOk : send.send === "error" ? s.sendError : s.sendButton} type="submit">{send.loading ? <UilSpinner className={s.loading}/>:<span className={s.enviar}>Enviar <UilEnvelopeUpload className={s.buttonIcon} /></span>}</button>
                        {send.send === "ok" && !send.loading ? <span className={s.msg}>¡Mensaje enviado!</span> : ""}
                        {send.send === "error" && !send.loading ? <span className={s.msg}>Error al enviar el mensaje.</span> : ""}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}