import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <Container>
          <h1 className={styles.heroTitle}>
            Comunidade, Jogos e Desenvolvimento
          </h1>
          <p className={styles.heroSubtitle}>
            Fuldev Games é o seu espaço para se conectar, jogar e aprender sobre
            o desenvolvimento de jogos.
          </p>
          <a href="/about" className={styles.ctaButton}>
            Saiba Mais
          </a>
        </Container>
      </div>

      {/* Features Section */}
      <Container>
        <div className={styles.features}>
          <h2 className={styles.featuresTitle}>O Que Oferecemos</h2>
          <div className={styles.featuresGrid}>
            <Card title="Servidores Dedicados">
              <p>
                Servidores de alta performance para seus jogos favoritos,
                otimizados para baixa latência.
              </p>
            </Card>
            <Card title="Comunidade Ativa">
              <p>
                Participe de discussões, encontre equipes e faça parte de uma
                comunidade apaixonada por jogos.
              </p>
            </Card>
            <Card title="Projetos e Ideias">
              <p>
                Explore nossos projetos, compartilhe suas ideias e colabore com
                outros desenvolvedores.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}
