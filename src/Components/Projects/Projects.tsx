import "./Projects.css";
import { useTranslation } from 'react-i18next'

export const Projects: React.FC = () =>{

    const[ t ] = useTranslation("global");

    return(

     <section className='box-body'>

        <h1 data-aos="zoom-in-down" className="project_title">{t("Projects.title")}</h1>

        <div data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="330" data-aos-offset="0" className="project-container">
            <div className="card">
                <div className="imgBx">
                    <img 
                    className="project-img"
                    src="/Image/todoApp.jpeg" 
                    alt="photo" />
                </div>
                <div className="content">
                    <h2>Todo Add</h2>
                    <p>{t("Projects.Parrafo")}</p>
                    <a href="https://my-react-task-list-omega.vercel.app/">{t("Projects.buttom2")}</a>
                </div>
            </div>

            <div data-aos="zoom-in-down" data-aos-easing="ease-in-back" data-aos-delay="330" data-aos-offset="0" className="card">
                <div className="imgBx">
                    <img 
                    className="project-img"
                    src="/Image/Node API.png" 
                    alt="photo" />
                </div>
                <div className="content">
                    <h2>API rest</h2>
                    <p>{t("Projects.API")}</p>
                    <a href="https://github.com/JuanseRozo01/-Node-Express-server/tree/project-5">{t("Projects.buttom")}</a>
                </div>
            </div>

            <div data-aos="zoom-in-left" data-aos-easing="ease-in-back" data-aos-delay="330" data-aos-offset="0" className="card">
                <div className="imgBx">
                    <img 
                    className="project-img"
                    src="/Image/Portafolio.png" 
                    alt="photo" />
                </div>
                <div className="content">
                    <h2>Portafolio</h2>
                    <p>{t("Projects.Portafolio")}</p>
                    <a href="https://github.com/JuanseRozo01/PortafolioV1">{t("Projects.buttom")}</a>
                </div>
            </div>

        </div>

        </section>

    )
}