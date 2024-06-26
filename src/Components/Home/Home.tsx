import './Home.css'
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next'

export const Home: React.FC = () => {

    const[ t ] = useTranslation("global") 

    return(
        
    <div className='home'>
        
        <img className="photito" src='/Image/computer.gif'/>
        
        <h2 className='tittle'>{t("Home.Title")}</h2>
        <h1 className='context'>{t("Home.Context")}</h1>

        <div className='content-icon'>
        <a className='iconify-y' href='https://github.com/JuanseRozo01'><Icon icon="skill-icons:github-light" /></a> 
        <a className='iconify-y' href='https://www.linkedin.com/in/juansebastianrozonegrete/'><Icon icon="skill-icons:linkedin" /></a>
        <a className='iconify-y' href="https://www.instagram.com/jrozo01/"><Icon icon="skill-icons:instagram" /></a> 
        </div>

        
    </div>
    
    );    
}