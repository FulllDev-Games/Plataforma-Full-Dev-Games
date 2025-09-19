"use client";

import Container from "@/components/Container/Container";
import styles from "./minecraft.module.css";

export default function MinecraftPage() {
  return (
    <div className={styles.minecraftPage}>
      {/* Floating Particles Background */}
      <div className={styles.particlesContainer}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`${styles.particle} ${styles[`particle${i + 1}`]}`}
          >
            🟫
          </div>
        ))}
      </div>

      <div className={styles.heroSection}>
        <Container>
          <div className={styles.heroContent}>
            <div className={styles.heroTitle}>
              <span className={styles.minecraftLogo}>⛏️ Minecraft</span>
              <span className={styles.serverTag}>🎮 Server</span>
            </div>
            <p className={styles.heroSubtitle}>
              Embarque em aventuras épicas no nosso servidor Survival
              customizado
            </p>
            <div className={styles.serverInfo}>
              <div className={styles.serverIP}>
                <span className={styles.label}>🌐 IP do Servidor:</span>
                <span className={styles.ip}>mc.fuldevgames.com</span>
                <button
                  className={styles.copyButton}
                  onClick={(event) => {
                    navigator.clipboard.writeText("mc.fuldevgames.com");
                    const button = event.target as HTMLButtonElement;
                    const originalText = button.textContent;
                    button.textContent = "✅ Copiado!";
                    setTimeout(() => {
                      button.textContent = originalText;
                    }, 2000);
                  }}
                >
                  📋 Copiar IP
                </button>
              </div>
              <div className={styles.serverStatus}>
                <span className={styles.statusIndicator}></span>
                <span>🟢 Online • 24/7 • 128 Jogadores</span>
              </div>
              <div className={styles.quickActions}>
                <button
                  className={styles.quickJoinButton}
                  onClick={() =>
                    window.open(
                      "minecraft://connect?ip=mc.fuldevgames.com",
                      "_self",
                    )
                  }
                >
                  🚀 Entrada Rápida
                </button>
                <button
                  className={styles.discordButton}
                  onClick={() =>
                    window.open("https://discord.gg/fuldevgames", "_blank")
                  }
                >
                  💬 Discord
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className={styles.contentSection}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚔️</div>
              <div className={styles.featureBadge}>🆕 Atualizado</div>
              <h3>Survival Customizado</h3>
              <p>
                Experiência Survival única com plugins exclusivos, mecânicas
                aprimoradas e sistemas de craftings especiais para mais
                diversão.
              </p>
              <div className={styles.featureProgress}>
                <span>Popularidade</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏰</div>
              <div className={styles.featureBadge}>🔒 Seguro</div>
              <h3>Proteção de Terrenos</h3>
              <p>
                Sistema completo de proteção WorldGuard. Suas construções
                estarão sempre seguras contra griefing e invasões.
              </p>
              <div className={styles.featureProgress}>
                <span>Segurança</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <div className={styles.featureBadge}>💎 Premium</div>
              <h3>Economia Balanceada</h3>
              <p>
                Sistema econômico justo com lojas de jogadores, leilões, bancos
                e recompensas por atividades diárias.
              </p>
              <div className={styles.featureProgress}>
                <span>Atividade Econômica</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <div className={styles.featureBadge}>🎉 Eventos</div>
              <h3>Missões & Eventos</h3>
              <p>
                Missões diárias, eventos especiais, competições PvP e desafios
                únicos com recompensas exclusivas.
              </p>
              <div className={styles.featureProgress}>
                <span>Participação</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <div className={styles.featureBadge}>🚀 Ultra</div>
              <h3>Performance Otimizada</h3>
              <p>
                Servidor dedicado com SSD NVMe, baixa latência e uptime de
                99.9%. Jogue sem lag com até 200 jogadores simultâneos!
              </p>
              <div className={styles.featureProgress}>
                <span>Performance</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <div className={styles.featureBadge}>❤️ Ativo</div>
              <h3>Comunidade Ativa</h3>
              <p>
                Participe de uma comunidade acolhedora com mais de 500 membros,
                moderação ativa 24/7 e ambiente respeitoso.
              </p>
              <div className={styles.featureProgress}>
                <span>Engajamento</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "96%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.registrationSection} id="register">
            <div className={styles.registrationCard}>
              <h2>Como Entrar no Servidor</h2>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h4>Abra o Minecraft</h4>
                    <p>Certifique-se de ter a versão Java Edition instalada</p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h4>Adicione o Servidor</h4>
                    <p>
                      Vá em &quot;Multiplayer&quot; → &quot;Add Server&quot; e
                      cole o IP: <strong>mc.fuldevgames.com</strong>
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h4>Conecte e Registre-se</h4>
                    <p>
                      Entre no servidor e use{" "}
                      <code>/register &lt;senha&gt;</code> para criar sua conta
                    </p>
                  </div>
                </div>

                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h4>Comece a Aventura!</h4>
                    <p>
                      Explore o mundo, construa sua base e faça novos amigos
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.registrationActions}>
                <button
                  className={styles.primaryButton}
                  onClick={(event) => {
                    navigator.clipboard.writeText("mc.fuldevgames.com");
                    const button = event.target as HTMLButtonElement;
                    const originalText = button.textContent;
                    button.textContent = "🎮 IP Copiado! Conecte-se Agora!";
                    button.style.background =
                      "linear-gradient(135deg, #32cd32, #228b22)";
                    setTimeout(() => {
                      button.textContent = originalText;
                      button.style.background = "";
                    }, 3000);
                  }}
                >
                  🎮 Entrar no Servidor
                </button>
                <button
                  className={styles.secondaryButton}
                  onClick={() =>
                    window.open("https://discord.gg/fuldevgames", "_blank")
                  }
                >
                  💬 Discord da Comunidade
                </button>
                <button
                  className={styles.tertiaryButton}
                  onClick={() => {
                    const element = document.getElementById("stats");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  📊 Ver Estatísticas
                </button>
              </div>
            </div>
          </div>

          <div className={styles.rulesSection}>
            <h2>Regras do Servidor</h2>
            <div className={styles.rulesList}>
              <div className={styles.rule}>
                <span className={styles.ruleIcon}>✅</span>
                <span>
                  Respeite todos os jogadores - não toleramos toxicidade
                </span>
              </div>
              <div className={styles.rule}>
                <span className={styles.ruleIcon}>✅</span>
                <span>Proibido griefing, roubo e PvP não consensual</span>
              </div>
              <div className={styles.rule}>
                <span className={styles.ruleIcon}>✅</span>
                <span>Use linguagem apropriada no chat</span>
              </div>
              <div className={styles.rule}>
                <span className={styles.ruleIcon}>✅</span>
                <span>Não use hacks, cheats ou exploits</span>
              </div>
              <div className={styles.rule}>
                <span className={styles.ruleIcon}>✅</span>
                <span>Construções devem respeitar o tema medieval/fantasy</span>
              </div>
            </div>
          </div>

          <div className={styles.statsSection} id="stats">
            <h2>📈 Estatísticas em Tempo Real</h2>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>👥</div>
                <div className={styles.statValue}>128/200</div>
                <div className={styles.statLabel}>Jogadores Online</div>
                <div className={styles.statTrend}>↗️ +15 hoje</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>⚡</div>
                <div className={styles.statValue}>99.9%</div>
                <div className={styles.statLabel}>Uptime</div>
                <div className={styles.statTrend}>🔥 30 dias</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>📡</div>
                <div className={styles.statValue}>12ms</div>
                <div className={styles.statLabel}>Latência</div>
                <div className={styles.statTrend}>⚡ Excelente</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>🕐</div>
                <div className={styles.statValue}>24/7</div>
                <div className={styles.statLabel}>Disponibilidade</div>
                <div className={styles.statTrend}>🌍 Global</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>🏆</div>
                <div className={styles.statValue}>2,547</div>
                <div className={styles.statLabel}>Conquistas</div>
                <div className={styles.statTrend}>🎯 Esta semana</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>💎</div>
                <div className={styles.statValue}>156k</div>
                <div className={styles.statLabel}>Diamantes Minerados</div>
                <div className={styles.statTrend}>⛏️ Este mês</div>
              </div>
            </div>
          </div>

          {/* Seção de Galeria de Screenshots */}
          <div className={styles.gallerySection}>
            <h2>🖼️ Galeria do Servidor</h2>
            <div className={styles.gallery}>
              <div className={styles.galleryItem}>
                <div className={styles.placeholder}>🏰</div>
                <span>Spawn Principal</span>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.placeholder}>🌲</div>
                <span>Mundo Survival</span>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.placeholder}>⚔️</div>
                <span>Arena PvP</span>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.placeholder}>🏪</div>
                <span>Mercado</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
