import { IoLogoGithub, IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { linksContainer, subtitle } from "./HomeHeader.css";
import Link from "./Link";

export default function HomeHeader(){
  return (
      <>
      <h1>Pedro Zunino</h1>
      <h2>Desenvolvedor Web</h2>
      <p className={subtitle}>
        Experiência em automações, integrações e frontend
      </p>
      
      <div className={linksContainer}>
        <Link
          title="PeZunino"
          href="https://github.com/PeZunino"
        >
          <IoLogoGithub size={24} />
        </Link>
        <Link
          title="pedrozunino.santos@email.com"
          href="mailto:pedrozunino.santos@email.com"

        >
          <IoMdMail size={24} />
        </Link>
        <Link
          title="Pedro Zunino dos Santos"
          href="https://www.linkedin.com/in/pedro-zunino-dos-santos-0880bb188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <IoLogoLinkedin size={24} />
        </Link>
      </div>
    </>
  )
}