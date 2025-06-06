import React from 'react';
import './Problem.css';

const Problem = () => {
  return (
    <div className="problem-page">
      <div className="container">
        {/* Hero Section */}
        <section className="problem-hero section">
          <div className="section-header text-center">
            <h1>Desastres Naturais e Vidas em Risco</h1>
            <p>Compreenda os desafios enfrentados em situações de emergência</p>
          </div>
          
          <div className="problem-intro">
            <h2>O Desafio</h2>
            <p>
              Após desastres naturais como enchentes, deslizamentos e terremotos, 
              muitas áreas tornam-se completamente inacessíveis para equipes de resgate tradicionais. 
              <strong> Sem acesso rápido, a ajuda não chega a tempo.</strong>
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="statistics-section section">
          <h2 className="text-center mb-4">Dados Alarmantes</h2>
          <div className="statistics-grid">
            <div className="stat-card">
              <div className="stat-number">48h</div>
              <div className="stat-label">Tempo crítico para resgate</div>
              <div className="stat-description">Após este período, chances de sobrevivência diminuem drasticamente</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">85%</div>
              <div className="stat-label">Vítimas em áreas isoladas</div>
              <div className="stat-description">Maioria das vítimas fica em locais de difícil acesso</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">72h</div>
              <div className="stat-label">Tempo médio atual de resgate</div>
              <div className="stat-description">Muito acima do tempo ideal para salvar vidas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">60%</div>
              <div className="stat-label">Redução na taxa de sobrevivência</div>
              <div className="stat-description">Quando o resgate demora mais de 48 horas</div>
            </div>
          </div>
        </section>

        {/* Obstacles Section */}
        <section className="obstacles-section section">
          <h2 className="text-center mb-4">Principais Obstáculos</h2>
          <div className="obstacles-grid">
            <div className="obstacle-card">
              <div className="obstacle-icon">🚧</div>
              <h3>Acesso Limitado</h3>
              <p>Estradas bloqueadas por detritos, pontes destruídas e terrenos instáveis impedem chegada das equipes</p>
            </div>
            <div className="obstacle-card">
              <div className="obstacle-icon">⏰</div>
              <h3>Tempo Crítico</h3>
              <p>Cada hora perdida reduz drasticamente as chances de sobrevivência das vítimas</p>
            </div>
            <div className="obstacle-card">
              <div className="obstacle-icon">👥</div>
              <h3>Recursos Limitados</h3>
              <p>Equipes de resgate insuficientes para cobrir grandes áreas afetadas simultaneamente</p>
            </div>
            <div className="obstacle-card">
              <div className="obstacle-icon">📡</div>
              <h3>Comunicação Falha</h3>
              <p>Torres de comunicação danificadas dificultam coordenação entre equipes</p>
            </div>
          </div>
        </section>

        {/* Impact Timeline */}
        <section className="impact-section section">
          <h2 className="text-center mb-4">O Impacto da Demora</h2>
          <div className="impact-timeline">
            <div className="timeline-item">
              <div className="timeline-time">0-6h</div>
              <div className="timeline-content">
                <h4>Período Dourado</h4>
                <p>90% de chance de sobrevivência com resgate rápido</p>
                <div className="survival-rate high">90%</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">6-24h</div>
              <div className="timeline-content">
                <h4>Período Crítico</h4>
                <p>Chances começam a diminuir significativamente</p>
                <div className="survival-rate medium">65%</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">24-48h</div>
              <div className="timeline-content">
                <h4>Período de Risco</h4>
                <p>Tempo limite para resgates com alta probabilidade de sucesso</p>
                <div className="survival-rate low">35%</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">48h+</div>
              <div className="timeline-content">
                <h4>Período Crítico</h4>
                <p>Chances de sobrevivência drasticamente reduzidas</p>
                <div className="survival-rate critical">15%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Cases */}
        <section className="cases-section section">
          <h2 className="text-center mb-4">Casos Reais no Brasil</h2>
          <div className="cases-grid">
            <div className="case-card">
              <div className="case-location">Petrópolis - RJ</div>
              <div className="case-year">2022</div>
              <div className="case-description">
                <p>Deslizamentos isolaram comunidades por dias. Muitas vítimas não foram encontradas a tempo devido à dificuldade de acesso.</p>
              </div>
              <div className="case-stats">
                <span>+200 vítimas</span>
                <span>3 dias isolados</span>
              </div>
            </div>
            <div className="case-card">
              <div className="case-location">Brumadinho - MG</div>
              <div className="case-year">2019</div>
              <div className="case-description">
                <p>Rompimento de barragem criou área de difícil acesso. Resgate demorou devido à instabilidade do terreno.</p>
              </div>
              <div className="case-stats">
                <span>270 vítimas</span>
                <span>Semanas de busca</span>
              </div>
            </div>
            <div className="case-card">
              <div className="case-location">Enchentes RS</div>
              <div className="case-year">2024</div>
              <div className="case-description">
                <p>Comunidades ilhadas pelas águas ficaram sem comunicação e acesso por equipes terrestres.</p>
              </div>
              <div className="case-stats">
                <span>Milhares afetados</span>
                <span>Isolamento prolongado</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section section">
          <div className="cta-content text-center">
            <h2>É Hora de uma Solução Inovadora</h2>
            <p>
              Os métodos tradicionais de resgate chegaram ao seu limite. 
              Precisamos de tecnologia que possa ir onde nenhum humano consegue chegar rapidamente.
            </p>
            <div className="cta-highlight">
              "O SkyAid voa onde ninguém mais alcança."
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Problem;