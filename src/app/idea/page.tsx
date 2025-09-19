import Container from "@/components/Container/Container";
import styles from "../page-styles.module.css"; // Reusing a generic style module

export default function IdeaPage() {
  return (
    <Container>
      <div className={styles.pageContent}>
        <h1>A Ideia do Projeto</h1>
        <p>
          O projeto Fuldev Games nasceu da simples ideia de que poderíamos ter
          um lugar melhor para jogar e para discutir o desenvolvimento de jogos.
          Estávamos cansados de comunidades tóxicas e servidores instáveis, e
          decidimos que poderíamos fazer melhor.
        </p>
        <p>Nossos objetivos são claros:</p>
        <ul>
          <li>
            <strong>Comunidade Inclusiva:</strong> Criar um ambiente seguro e
            amigável para todos.
          </li>
          <li>
            <strong>Performance:</strong> Oferecer servidores de jogos com o
            mínimo de lag e a máxima estabilidade.
          </li>
          <li>
            <strong>Aprendizado Aberto:</strong> Desenvolver e compartilhar
            projetos, tutoriais e ferramentas para aspirantes a desenvolvedores
            de jogos.
          </li>
        </ul>
      </div>
    </Container>
  );
}
