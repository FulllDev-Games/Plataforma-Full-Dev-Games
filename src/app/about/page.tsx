import Container from "@/components/Container/Container";
import styles from "../page-styles.module.css"; // Reusing a generic style module

export default function AboutPage() {
  return (
    <Container>
      <div className={styles.pageContent}>
        <h1>Sobre a Fuldev Games</h1>
        <p>
          Somos uma comunidade de entusiastas de tecnologia e jogos, apaixonados
          por criar experiências memoráveis. Nossa missão é construir um espaço
          acolhedor onde jogadores e desenvolvedores possam se conectar,
          colaborar e crescer juntos.
        </p>
        <p>
          Desde a nossa fundação, temos nos dedicado a oferecer servidores de
          jogos de alta qualidade e a desenvolver projetos open-source que
          possam beneficiar a comunidade. Acreditamos no poder da colaboração e
          no compartilhamento de conhecimento.
        </p>
      </div>
    </Container>
  );
}
