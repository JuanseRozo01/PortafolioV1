import './Contact.css'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const Contact: React.FC = () => {

  const[t] = useTranslation("global");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_do7jodb', 'template_foxv2cf', form.current, {
        publicKey: 'QjJDGgNrvAWDSzlA5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return(    
       
       <div data-aos="fade-down" className='concatena'>

        <form action="#" className="forms" ref={form} onSubmit={sendEmail}>

        <h2 className='contactame'>{t("Contact.title")}</h2>

        <input className='input-form' type="text" name="user_name" placeholder="Name" />

        <input className='input-form' type="text" name="user_email" placeholder="Email"/>

        <textarea className="forms_texarea" cols={30} rows={10} placeholder="Message" name="message"></textarea>
        <input className="submit" type="submit" value="send"/>
              

       </form>
       </div>
    )
}