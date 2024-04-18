import './Contact.css'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

emailjs.init('service_do7jodb','QjJDGgNrvAWDSzlA5');

export const Contact: React.FC = () => {

  const[t] = useTranslation("global");
  const [selectedNombre, setSelectedNombre] = useState("");
  const [selectedCorreo, setSelectedCorreo] = useState("");
  const [selectedAsunto, setSelectedAsunto] = useState("");
  const [selectedMensaje, setSelectedMensaje] = useState("");

  const sendForm:React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (
      !selectedNombre ||
      !selectedCorreo ||
      !selectedAsunto ||
      !selectedMensaje
    ) {
      return;
    }

    const templateParams = {
      nombre: selectedNombre,
      correo: selectedCorreo,
      asunto: selectedAsunto,
      mensaje: selectedMensaje,
  };

  emailjs
  .send("service_5z98glp", "template_27n0lqo", templateParams)
  .then((response) => {
    console.log("Correo enviado con éxito", response.status, response.text);
  })
  .catch((error) => {
    console.error("Error al enviar el correo", error);
  })
  .finally(() => {
    setSelectedNombre("");
    setSelectedCorreo("");
    setSelectedAsunto("");
    setSelectedMensaje("");
  });
};

    return(    
       
       <div className='concatena'>

        <form action="#" className="forms" onSubmit={sendForm}>

        <h2 className='contactame'>{t("Contact.title")}</h2>

        <input className='input-form' type="text" name="name" placeholder="Name" required value={selectedNombre} onChange={(event) => setSelectedNombre(event.target.value)}/>

        <input className='input-form' type="text" name="correo" placeholder="Email" required value={selectedCorreo} onChange={(event) => setSelectedCorreo(event.target.value)}/>

        <input className='input-form' type="text"  required value={selectedAsunto} onChange={(event) => setSelectedAsunto(event.target.value)}/>

        <textarea className="forms_texarea" cols ="30" rows ="10" placeholder="Message" value={selectedMensaje} onChange={(event) => setSelectedMensaje(event.target.value)}></textarea>
        <input className="submit" type="submit" value="enviar"/>
              

       </form>
       </div>
    )
}