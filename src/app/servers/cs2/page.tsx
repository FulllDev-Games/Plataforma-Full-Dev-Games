import Container from "@/components/Container/Container";
import styles from "../page-styles.module.css";

export default function CS2Page() {
  return (
    <Container>
      <div className={styles.pageContent}>
        <h1>Counter-Strike 2</h1>
        <p>
          <strong>IP do Servidor:</strong> cs.fuldevgames.com
        </p>
        <p>
          Nosso servidor de Counter-Strike 2 oferece a melhor experiência competitiva
          com tickrate de 128, mapas clássicos e sistema anti-cheat rigoroso.
        </p>

        <h2>Características</h2>
        <ul>
          <li>Tickrate 128 para máxima precisão</li>
          <li>Sistema anti-cheat avançado</li>
          <li>Mapas competitivos atualizados</li>
          <li>Moderação ativa 24/7</li>
          <li>Sistema de ranking interno</li>
        </ul>

        <h2>Como Conectar</h2>
        <p>
          1. Abra o Counter-Strike 2<br/>
          2. Abra o console (~)<br/>
          3. Digite: <code>connect cs.fuldevgames.com</code><br/>
          4. Pressione Enter e divirta-se!
        </p>

        <div id="register">
          <h2>Registro</h2>
          <p>
            O registro é automático ao entrar no servidor. Certifique-se de ter
            uma conta Steam válida e o jogo original.
          </p>
        </div>
      </div>
    </Container>
  );
}
