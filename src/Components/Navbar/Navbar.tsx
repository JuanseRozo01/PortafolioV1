import './Navbar.css'
import { Hamburger } from '../../Controllers/Hamburger'
import { useTranslation } from 'react-i18next'
import { Link } from "react-scroll";

export const Navbar: React.FC = () => {

  const [t, i18n] = useTranslation("global");

    const butonChangeLenguage = () => {
        if(i18n.language == 'ES'){
          i18n.changeLanguage('EN')
        }else{
          i18n.changeLanguage('ES')
        }
      }

return(
    <div className="header">


        <nav className="menu">

        <div className='menu-wrapper'>
        <a className="header-ancor" href="#">
          <img className='images-svg' src="./src/assets/JR.svg" alt="logo" />
        </a>
            <ul className="menu-list panel">
              <li className="menu-link"><Link to='home' smooth={true} duration={500} spy={true} ><a className='menu_link' href="#">{t("Navbar.HOME")}</a></Link></li>
                <li className="menu-link"><Link to='aboutme' smooth={true} duration={500} spy={true} ><a className='menu_link' href="#">{t("Navbar.ABOUTME")}</a></Link></li>
                <li className="menu-link"><Link to='skills' smooth={true} duration={500} spy={true} ><a className='menu_link' href="#">{t("Navbar.SKILLS")}</a></Link></li>
                <li className="menu-link"><Link to='projects' smooth={true} duration={500} spy={true} ><a className='menu_link' href="#">{t("Navbar.PROJECTS")}</a></Link></li>
                <li className="menu-link"><Link to='contact' smooth={true} duration={500} spy={true}><a className='menu_link' href="#">{t("Navbar.CONTACT")}</a></Link></li>                
            </ul>
        </div>
        <div>
        <button className='btn' onClick={()=>butonChangeLenguage()}>{i18n.language}</button>
        </div>
        </nav>
    <button className="hamburger hamburger--emphatic" type="button">
    <span className="hamburger-box">
    <span className="hamburger-inner"></span>
    </span>
    </button>    
     <Hamburger/>    
    </div>

)

}