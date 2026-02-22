import { IoLogoGithub, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { home__header } from "./HomeHeader.css";

export default function HomeHeader(){
  return (
    <header className={home__header}>
      <h1>Pedro Zunino</h1>
      <h2>Desenvolvedor fullstack</h2>
      <p>
        Transformo ideias em aplicações robustas, escaláveis e integradas — rápidas, limpas e prontas para prod
      </p>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/PeZunino"
          title="PeZunino"

        >
          <IoLogoGithub size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:pedrozunino.santos@email.com"
          title="pedrozunino.santos@email.com"

        >
          <IoMdMail size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/pedro-zunino-dos-santos-0880bb188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          title="Pedro Zunino dos Santos"

        >
          <IoLogoLinkedin size={24} />
        </a>
      </div>
    </header>
  )
}