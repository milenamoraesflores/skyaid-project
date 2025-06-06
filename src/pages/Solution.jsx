import React, { useState } from 'react';
import SimpleMap from '../components/SimpleMap.jsx'
import './Solution.css';

const Solution = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Mapeamento Aéreo",
      icon: "🗺️",
      description: "Análise em tempo real de áreas afetadas por desastres",
      details: "Utilizando sensores avançados e algoritmos de visão computacional, o SkyAid mapeia áreas de desastre em alta resolução, identificando rotas seguras e zonas de risco."
    },
    {
      id: 1,
      title: "Identificação de Vítimas",
      icon: "🎯",
      description: "Detecção automática de pessoas em situação de emergência",
      details: "Câmeras termais e algoritmos de IA detectam sinais vitais e movimentos humanos, priorizando vítimas com base na urgência da situação."
    },
    {
      id: 2,
      title: "Entrega de Suprimentos",
      icon: "📦",
      description: "Transporte rápido de medicamentos e alimentos",
      details: "Sistema de compartimentos modulares permite entrega precisa de medicamentos, água, alimentos e equipamentos de primeiros socorros."
    },
    {
      id: 3,
      title: "Comunicação com Resgatistas",
      icon: "📡",
      description: "Coordenação direta com equipes terrestres",
      details: "Rede mesh integrada estabelece comunicação entre drones e equipes, transmitindo dados em tempo real e coordenando operações de resgate."
    }
  ];

  const missionSteps = [
    {
      step: "01",
      title: "Ativação Automática",
      description: "Sistema detecta emergência via alertas da Defesa Civil"
    },
    {
      step: "02", 
      title: "Decolagem Autônoma",
      description: "Drones decolam automaticamente da base mais próxima"
    },
    {
      step: "03",
      title: "Mapeamento da Área",
      description: "Análise completa da região afetada em tempo real"
    },
    {
      step: "04",
      title: "Localização de Vítimas",
      description: "Identificação e priorização de pessoas em risco"
    },
    {
      step: "05",
      title: "Entrega de Suprimentos",
      description: "Distribuição estratégica de recursos essenciais"
    },
    {
      step: "06",
      title: "Coordenação de Resgate",
      description: "Guia equipes terrestres até as vítimas localizadas"
    }
  ];

  return (
    <div className="solution-page">
      <div className="container">
        {/* Hero Section */}
        <section className="solution-hero section">
          <div className="section-header text-center">
            <h1>SkyAid em Ação</h1>
            <p>Tecnologia autônoma que revoluciona operações de resgate</p>
          </div>
          
          <div className="hero-content">
            <div className="hero-text">
              <div className="solution-intro">
                <h2>A Revolução no Resgate</h2>
                <p>
                  O SkyAid representa um avanço tecnológico sem precedentes em operações de emergência. 
                  Nossos drones autônomos operam 24/7, voando onde equipes humanas não conseguem chegar, 
                  salvando vidas quando cada segundo importa.
                </p>
                <div className="key-phrase">
                  "O SkyAid voa onde ninguém mais alcança."
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="drone-in-action">
                <div className="action-drone">
                  <div className="drone-body-action">
                    <span className="action-icon">🚁</span>
                  </div>
                  <div className="search-beam"></div>
                </div>
                <div className="rescue-indicators">
                  <div className="indicator victim-found">👤 Vítima Localizada</div>
                  <div className="indicator supplies-dropped">📦 Suprimentos Entregues</div>
                  <div className="indicator team-notified">📡 Equipe Notificada</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="interactive-map-section section">
          <h2 className="text-center mb-4">Simulação em Tempo Real</h2>
          <div className="map-intro text-center mb-4">
            <p>
              Veja o SkyAid em ação! Esta simulação interativa mostra como nossos drones autônomos 
              operam em cenários reais de emergência, salvando vidas em áreas de difícil acesso.
            </p>
            <div className="map-features">
              <span className="map-feature">🗺️ Mapa Interativo</span>
              <span className="map-feature">🚁 Drones em Tempo Real</span>
              <span className="map-feature">📊 Dashboard de Status</span>
              <span className="map-feature">💬 Comunicação Ao Vivo</span>
            </div>
          </div>
          <SimpleMap />
        </section>

        {/* Features Interactive Section */}
        <section className="features-interactive section">
          <h2 className="text-center mb-4">Funcionalidades Principais</h2>
          <div className="features-container">
            <div className="features-tabs">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  className={`feature-tab ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <span className="tab-icon">{feature.icon}</span>
                  <span className="tab-title">{feature.title}</span>
                </button>
              ))}
            </div>
            <div className="feature-content">
              <div className="feature-display">
                <div className="feature-icon-large">
                  {features[activeFeature].icon}
                </div>
                <h3>{features[activeFeature].title}</h3>
                <p className="feature-description">
                  {features[activeFeature].description}
                </p>
                <p className="feature-details">
                  {features[activeFeature].details}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Flow */}
        <section className="mission-flow section">
          <h2 className="text-center mb-4">Como Funciona uma Missão</h2>
          <div className="mission-timeline">
            {missionSteps.map((step, index) => (
              <div key={index} className="mission-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
                {index < missionSteps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="capabilities-section section">
          <h2 className="text-center mb-4">Capacidades Avançadas</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-icon">🌙</div>
              <h3>Operação 24/7</h3>
              <p>Funcionamento contínuo, dia e noite, em qualquer condição climática</p>
              <ul>
                <li>Visão noturna avançada</li>
                <li>Resistente à chuva</li>
                <li>Autonomia de 6 horas</li>
              </ul>
            </div>
            <div className="capability-card">
              <div className="capability-icon">🧠</div>
              <h3>Inteligência Artificial</h3>
              <p>Tomada de decisões autônoma baseada em machine learning</p>
              <ul>
                <li>Reconhecimento de padrões</li>
                <li>Priorização automática</li>
                <li>Aprendizado contínuo</li>
              </ul>
            </div>
            <div className="capability-card">
              <div className="capability-icon">🛡️</div>
              <h3>Segurança Máxima</h3>
              <p>Sistemas redundantes garantem operação segura e confiável</p>
              <ul>
                <li>Backup de energia</li>
                <li>Rotas de emergência</li>
                <li>Comunicação encriptada</li>
              </ul>
            </div>
            <div className="capability-card">
              <div className="capability-icon">⚡</div>
              <h3>Resposta Rápida</h3>
              <p>Ativação em menos de 2 minutos após receber alerta</p>
              <ul>
                <li>Decolagem automática</li>
                <li>Rota otimizada</li>
                <li>Velocidade de 80 km/h</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="solution-comparison-section section">
          <h2 className="text-center mb-4">SkyAid vs Métodos Tradicionais</h2>
          <div className="solution-comparison-table">
            <div className="solution-comparison-header">
              <div className="solution-comparison-item">
                <h3>Aspecto</h3>
              </div>
              <div className="solution-comparison-item skyaid">
                <h3>🚁 SkyAid</h3>
              </div>
              <div className="solution-comparison-item traditional">
                <h3>🚐 Métodos Tradicionais</h3>
              </div>
            </div>
            
            <div className="solution-comparison-row">
              <div className="solution-comparison-item aspect">
                <strong>Tempo de Resposta</strong>
              </div>
              <div className="solution-comparison-item skyaid">
                <span className="advantage">2-5 minutos</span>
              </div>
              <div className="solution-comparison-item traditional">
                <span className="disadvantage">30-120 minutos</span>
              </div>
            </div>

            <div className="solution-comparison-row">
              <div className="solution-comparison-item aspect">
                <strong>Acesso a Áreas Isoladas</strong>
              </div>
              <div className="solution-comparison-item skyaid">
                <span className="advantage">Irrestrito</span>
              </div>
              <div className="solution-comparison-item traditional">
                <span className="disadvantage">Muito Limitado</span>
              </div>
            </div>

            <div className="solution-comparison-row">
              <div className="solution-comparison-item aspect">
                <strong>Custo por Operação</strong>
              </div>
              <div className="solution-comparison-item skyaid">
                <span className="advantage">Baixo</span>
              </div>
              <div className="solution-comparison-item traditional">
                <span className="disadvantage">Alto</span>
              </div>
            </div>

            <div className="solution-comparison-row">
              <div className="solution-comparison-item aspect">
                <strong>Risco para Equipes</strong>
              </div>
              <div className="solution-comparison-item skyaid">
                <span className="advantage">Zero</span>
              </div>
              <div className="solution-comparison-item traditional">
                <span className="disadvantage">Elevado</span>
              </div>
            </div>

            <div className="solution-comparison-row">
              <div className="solution-comparison-item aspect">
                <strong>Cobertura Simultânea</strong>
              </div>
              <div className="solution-comparison-item skyaid">
                <span className="advantage">Múltiplas Áreas</span>
              </div>
              <div className="solution-comparison-item traditional">
                <span className="disadvantage">Área Limitada</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="solution-cta section">
          <div className="cta-content text-center">
            <h2>O Futuro dos Resgates é Agora</h2>
            <p>
              Cada minuto economizado pelo SkyAid pode significar a diferença entre a vida e a morte. 
              Nossa tecnologia está pronta para transformar operações de emergência em todo o mundo.
            </p>
            <div className="cta-stats">
              <div className="cta-stat">
                <div className="stat-number">95%</div>
                <div className="stat-label">Redução no tempo de resposta</div>
              </div>
              <div className="cta-stat">
                <div className="stat-number">3x</div>
                <div className="stat-label">Mais vidas salvas</div>
              </div>
              <div className="cta-stat">
                <div className="stat-number">60%</div>
                <div className="stat-label">Menor custo operacional</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solution;