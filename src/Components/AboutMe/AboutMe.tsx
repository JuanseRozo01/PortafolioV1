import './Aboutme.css'
import { useTranslation } from 'react-i18next'

export const AboutMe: React.FC = () => {

    const[t, i18next] = useTranslation("global");

    const getCVFile = () => {
    const currentLanguage = i18next.language || 'en'; 
    if (currentLanguage === "ES") {
        return "/Image/CV-ES.pdf";
    } else {
        return "/Image/CV-EN.pdf";
    }
      };

    return(
        <section className='about_container about_container--ancho'>
        
        <h1 data-aos="zoom-in" className="title">{t("Aboutme.title")}</h1>

        <div className="about-description">
        
        <div className='Textos'>
        <p className="parrafo">{t("Aboutme.Parrafo")}</p>
        <p className='parrafo'>{t("Aboutme.Text")}</p>
        <p className='parrafo'>{t("Aboutme.Texto2")}</p>
        </div>

        <div className='about'>
        <img className='photo-about' src="/Image/oooooo.jpg" alt="photo" />
        <a className='cv' href={getCVFile()}>{t("Aboutme.cv")}</a>
        </div> 
       
    </div>
    
    </section>
   
    );
    }