import './Skills.css'
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next'

interface Skill {
    icon: string;
    name: string;
    width?: number;
    height?: number;
    className?: string;
  }

  const skillsData: Skill[] = [
    { icon: "skill-icons:javascript", name: "JavaScript" },
    { icon: "skill-icons:typescript", name: "TypeScript" },
    { icon: "devicon:html5", name: "HTML" },
    { icon: "vscode-icons:file-type-css", name: "CSS" },
    { icon: "logos:react", name: "React" },
    { icon: "devicon:bootstrap-wordmark", name: "Bootstrap" },
    { icon: "simple-icons:chakraui", name: "ChakraUI" },
    { icon: "devicon:sass", name: "Sass" },
    { icon: "devicon:java-wordmark", name: "Java" },
    { icon: "vscode-icons:file-type-node", name: "Node.js" },
    { icon: "skill-icons:expressjs-light", name: "Express.js" },
    { icon: "devicon:git", name: "Git" },
    { icon: "devicon:mongodb-wordmark", name: "MongoDB" },
    { icon: "devicon:mysql-wordmark", name:"MySQL"},
    { icon: "devicon:postman", name:"Postman"},
    { icon: "logos:adobe-illustrator", name:"Adobe illustrator"},
    { icon: "vscode-icons:file-type-photoshop", name:"Photoshop"},
    { icon: "skill-icons:javascript", name: "JavaScript" },
    { icon: "skill-icons:typescript", name: "TypeScript" },
    { icon: "devicon:html5", name: "HTML" },
    { icon: "vscode-icons:file-type-css", name: "CSS" },
    { icon: "logos:react", name: "React" },
    { icon: "devicon:bootstrap-wordmark", name: "Bootstrap" },
    { icon: "devicon:chakraui", name: "ChakraUI" },
    { icon: "devicon:sass", name: "Sass" },
    { icon: "devicon:java-wordmark", name: "Java" },
    { icon: "vscode-icons:file-type-node", name: "Node.js" },
    { icon: "skill-icons:expressjs-light", name: "Express.js" },
    { icon: "devicon:git", name: "Git" },
    { icon: "devicon:mongodb-wordmark", name: "MongoDB" },
    { icon: "devicon:mysql-wordmark", name:"MySQL"},
    { icon: "devicon:postman", name:"Postman"},
    { icon: "logos:adobe-illustrator", name:"Adobe illustrator"},
    { icon: "vscode-icons:file-type-photoshop", name:"Photoshop"},
  ];

export const Skills: React.FC = () => {

    const[ t ] = useTranslation("global");

    return(
        <section className="slider_body">

            <h2 data-aos="zoom-in" className="skills_title">{t("Skills.title")}</h2>

        <div className='slider'>

        <div className="slide_track">
        {skillsData.map((skill) => (
            <div key={skill.name} className={`slide ${skill.className || ''}`}>
              <Icon className="icons" icon={skill.icon} width={skill.width} height={skill.height} />
              <div className="skill_texto">
                <p className="texto head">{skill.name}</p>
                </div>
            </div>
            ))}

        </div>
        </div>
    
        </section> 
    );
};