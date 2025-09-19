"use client";

import Container from "@/components/Container/Container";
import Card from "@/components/Card/Card";
import styles from "./servers.module.css"; // I'll need to create this file

export default function ServersPage() {
  return (
    <Container>
      <div className={styles.pageHeader}>
        <h1>Nossos Servidores</h1>
        <p>Servidores de alta performance para a comunidade.</p>
      </div>
      <div className={styles.serversGrid}>
        <Card
          title="Minecraft"
          buttons={[
            {
              text: "Ver Mais",
              href: "/servers/minecraft",
              variant: "primary",
            },
            {
              text: "Registrar",
              href: "/servers/minecraft#register",
              variant: "secondary",
            },
          ]}
        >
          <p>
            <strong>IP:</strong> mc.fuldevgames.com
          </p>
          <p>
            Um mundo de blocos e aventuras esperando por você. Modo Survival com
            plugins customizados.
          </p>
        </Card>
        <Card
          title="Counter-Strike 2"
          buttons={[
            { text: "Ver Mais", href: "/servers/cs2", variant: "primary" },
            {
              text: "Registrar",
              href: "/servers/cs2#register",
              variant: "secondary",
            },
          ]}
        >
          <p>
            <strong>IP:</strong> cs.fuldevgames.com
          </p>
          <p>
            Servidores competitivos 5x5 com tickrate de 128 para a melhor
            experiência.
          </p>
        </Card>
        <Card
          title="Em Breve: Valheim"
          buttons={[
            {
              text: "Em Breve",
              onClick: () => alert("Servidor em desenvolvimento!"),
              variant: "secondary",
            },
          ]}
        >
          <p>
            <strong>IP:</strong> A ser anunciado
          </p>
          <p>
            Prepare-se para explorar o décimo mundo nórdico em nosso futuro
            servidor de Valheim.
          </p>
        </Card>
      </div>
    </Container>
  );
}
