import './Footer.css'
import { useTranslation } from 'react-i18next'

export const Footer: React.FC = () =>{

    const[ t ] = useTranslation("global");

    return(
        <footer className="footer">
            <h1>{t("Footer.title")}</h1>
        </footer>
    )
}