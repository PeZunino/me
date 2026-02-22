import info from '../../../../experiences.json';
import { home__presentation_text } from './PresentationSection.css';


interface ExperienceInfo {
	skills: string[],
	title: string,
	description: string,
	business: string,
	endDate: string,
	startDate: string,
	businessURL: string
}

export default function PresentationSection(){

  	const experiences: ExperienceInfo[] = info.experience;

  return(
    <section className={home__presentation_text}>
      <p>
        Sou desenvolvedor com foco em backend e integrações web.
        Iniciei minha trajetória automatizando processos e realizando coletas de dados em portais públicos e privados, utilizando Node.js, jQuery e integrações com APIs.

        Com o tempo, ampliei meu interesse pelo desenvolvimento web de forma mais estruturada, explorando stacks modernas e aprofundando meus conhecimentos em arquitetura de software, organização de código e ciclo de vida de desenvolvimento (SDLC).

        Tenho interesse em construir aplicações bem estruturadas, com responsabilidades claras e foco em evolução contínua. Sigo estudando e aplicando boas práticas para desenvolver software com mais intenção, clareza e escalabilidade.

        Moro em Itajaí, Santa Catarina. Você pode me encontrar no GitHub ou no LinkedIn.
      </p>
    

    </section >
  )
}