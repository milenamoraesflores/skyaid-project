import React, { useState } from 'react';
import './Technology.css';

const Technology = () => {
  const [activeSpec, setActiveSpec] = useState(0);
  const [selectedSensor, setSelectedSensor] = useState(null);

  const specifications = [
    {
      category: "Hardware",
      items: [
        { label: "Autonomia de Voo", value: "6 horas", icon: "🔋" },
        { label: "Velocidade Máxima", value: "80 km/h", icon: "⚡" },
        { label: "Alcance de Comunicação", value: "15 km", icon: "📡" },
        { label: "Carga Útil", value: "5 kg", icon: "📦" },
        { label: "Resistência ao Vento", value: "45 km/h", icon: "💨" },
        { label: "Temperatura Operacional", value: "-20°C a 60°C", icon: "🌡️" }
      ]
    },
    {
      category: "Software",
      items: [
        { label: "Processamento de Imagem", value: "Real-time 4K", icon: "📸" },
        { label: "IA de Reconhecimento", value: "99.2% precisão", icon: "🧠" },
        { label: "Tempo de Resposta", value: "< 100ms", icon: "⏱️" },
        { label: "Algoritmos ML", value: "Deep Learning", icon: "🤖" },
        { label: "Mapas 3D", value: "Geração automática", icon: "🗺️" },
        { label: "Predição de Rotas", value: "Otimização dinâmica", icon: "🎯" }
      ]
    },
    {
      category: "Sensores",
      items: [
        { label: "Câmera Térmica", value: "FLIR 640x512", icon: "🔴" },
        { label: "LiDAR", value: "360° - 200m alcance", icon: "📊" },
        { label: "GPS/GNSS", value: "Precisão centimétrica", icon: "🛰️" },
        { label: "Barômetro", value: "Altitude precisa", icon: "📏" },
        { label: "Acelerômetro", value: "3 eixos - alta precisão", icon: "📐" },
        { label: "Microfone Direcional", value: "Captação de vozes", icon: "🎤" }
      ]
    }
  ];

  const sensors = [
    {
      id: 1,
      name: "Câmera Térmica FLIR",
      description: "Detecção de calor corporal em qualquer condição",
      specs: ["Resolução: 640x512", "Range: -40°C a 150°C", "Precisão: ±2°C"],
      icon: "🔴"
    },
    {
      id: 2,
      name: "LiDAR 3D",
      description: "Mapeamento preciso do terreno e obstáculos",
      specs: ["Alcance: 200m", "Precisão: ±2cm", "360° rotação"],
      icon: "📊"
    },
    {
      id: 3,
      name: "Câmera 4K",
      description: "Imagem de alta definição para identificação visual",
      specs: ["Resolução: 4096x2160", "Zoom: 30x óptico", "Estabilização 3 eixos"],
      icon: "📸"
    },
    {
      id: 4,
      name: "GPS RTK",
      description: "Posicionamento centimétrico em tempo real",
      specs: ["Precisão: ±2cm", "Aquisição: <1s", "Multi-constelação"],
      icon: "🛰️"
    }
  ];

  const aiFeatures = [
    {
      title: "Detecção de Pessoas",
      description: "Algoritmos avançados identificam formas humanas mesmo em condições adversas",
      accuracy: "99.2%",
      technology: "Deep Learning CNN"
    },
    {
      title: "Análise de Terreno",
      description: "Avaliação automática de segurança e acessibilidade de áreas",
      accuracy: "97.8%",
      technology: "Machine Learning"
    },
    {
      title: "Priorização Inteligente",
      description: "Sistema decide automaticamente quais vítimas resgatar primeiro",
      accuracy: "95.5%",
      technology: "Decision Trees"
    },
    {
      title: "Otimização de Rotas",
      description: "Calcula trajetos mais eficientes considerando múltiplas variáveis",
      accuracy: "98.7%",
      technology: "Genetic Algorithms"
    }
  ];

  return (
    <div className="technology-page">
      <div className="container">
        {/* Hero Section */}
        <section className="tech-hero section">
          <div className="section-header text-center">
            <h1>A Inteligência por Trás do Céu</h1>
            <p>Tecnologia de ponta que torna o impossível possível</p>
          </div>

          <div className="tech-intro">
            <div className="intro-content">
              <h2>Inovação Tecnológica</h2>
              <p>
                O SkyAid combina os mais avançados sensores embarcados, algoritmos de inteligência artificial 
                e sistemas de comunicação para criar uma plataforma de resgate completamente autônoma.
              </p>
              <div className="key-differentials">
                <div className="differential">
                  <span className="diff-icon">🚀</span>
                  <span>Autonomia Total</span>
                </div>
                <div className="differential">
                  <span className="diff-icon">🧠</span>
                  <span>IA Avançada</span>
                </div>
                <div className="differential">
                  <span className="diff-icon">📡</span>
                  <span>Comunicação Mesh</span>
                </div>
              </div>
            </div>
            <div className="tech-visual">
              <div className="drone-tech-display">
                <div className="tech-drone">
                  <div className="drone-core">
                    <span className="core-icon">🧠</span>
                  </div>
                  <div className="sensor-points">
                    <div className="sensor-point camera" data-sensor="Câmera 4K"></div>
                    <div className="sensor-point thermal" data-sensor="Térmica"></div>
                    <div className="sensor-point lidar" data-sensor="LiDAR"></div>
                    <div className="sensor-point gps" data-sensor="GPS RTK"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="specifications-section section">
          <h2 className="text-center mb-4">Especificações Técnicas</h2>
          <div className="specs-container">
            <div className="specs-tabs">
              {specifications.map((spec, index) => (
                <button
                  key={index}
                  className={`spec-tab ${activeSpec === index ? 'active' : ''}`}
                  onClick={() => setActiveSpec(index)}
                >
                  {spec.category}
                </button>
              ))}
            </div>
            <div className="specs-content">
              <div className="specs-grid">
                {specifications[activeSpec].items.map((item, index) => (
                  <div key={index} className="spec-item">
                    <div className="spec-icon">{item.icon}</div>
                    <div className="spec-info">
                      <div className="spec-label">{item.label}</div>
                      <div className="spec-value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sensors Detail */}
        <section className="sensors-section section">
          <h2 className="text-center mb-4">Sensores Embarcados</h2>
          <div className="sensors-grid">
            {sensors.map((sensor) => (
              <div
                key={sensor.id}
                className={`sensor-card ${selectedSensor === sensor.id ? 'selected' : ''}`}
                onClick={() => setSelectedSensor(selectedSensor === sensor.id ? null : sensor.id)}
              >
                <div className="sensor-header">
                  <span className="sensor-icon">{sensor.icon}</span>
                  <h3>{sensor.name}</h3>
                </div>
                <p className="sensor-description">{sensor.description}</p>
                {selectedSensor === sensor.id && (
                  <div className="sensor-specs">
                    <h4>Especificações:</h4>
                    <ul>
                      {sensor.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="expand-indicator">
                  {selectedSensor === sensor.id ? '▼' : '▶'}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Features */}
        <section className="ai-section section">
          <h2 className="text-center mb-4">Inteligência Artificial</h2>
          <div className="ai-intro text-center mb-4">
            <p>
              Nossos algoritmos de IA são treinados com milhões de imagens e cenários de emergência, 
              garantindo precisão e confiabilidade em situações críticas.
            </p>
          </div>
          <div className="ai-features-grid">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="ai-feature-card">
                <div className="ai-header">
                  <h3>{feature.title}</h3>
                  <div className="accuracy-badge">
                    {feature.accuracy}
                  </div>
                </div>
                <p className="ai-description">{feature.description}</p>
                <div className="ai-tech">
                  <span className="tech-label">Tecnologia:</span>
                  <span className="tech-value">{feature.technology}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: feature.accuracy }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Communication System */}
        <section className="communication-section section">
          <h2 className="text-center mb-4">Sistema de Comunicação</h2>
          <div className="comm-content">
            <div className="comm-info">
              <h3>Rede Mesh Inteligente</h3>
              <p>
                Sistema de comunicação redundante que mantém conectividade mesmo em cenários 
                de infraestrutura danificada. Cada drone funciona como um repetidor, 
                criando uma rede robusta e auto-regenerativa.
              </p>
              <div className="comm-features">
                <div className="comm-feature">
                  <span className="feature-icon">📡</span>
                  <div>
                    <strong>Alcance Estendido</strong>
                    <p>Até 15km com repetidores automáticos</p>
                  </div>
                </div>
                <div className="comm-feature">
                  <span className="feature-icon">🔒</span>
                  <div>
                    <strong>Criptografia AES-256</strong>
                    <p>Comunicação segura e protegida</p>
                  </div>
                </div>
                <div className="comm-feature">
                  <span className="feature-icon">⚡</span>
                  <div>
                    <strong>Baixa Latência</strong>
                    <p>Tempo de resposta inferior a 100ms</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="comm-visual">
              <div className="network-diagram">
                <div className="central-hub">
                  <span>🏢</span>
                  <label>Central</label>
                </div>
                <div className="drone-nodes">
                  <div className="drone-node node1">
                    <span>🚁</span>
                    <div className="signal-waves"></div>
                  </div>
                  <div className="drone-node node2">
                    <span>🚁</span>
                    <div className="signal-waves"></div>
                  </div>
                  <div className="drone-node node3">
                    <span>🚁</span>
                    <div className="signal-waves"></div>
                  </div>
                </div>
                <div className="ground-teams">
                  <div className="ground-team team1">
                    <span>👥</span>
                    <label>Equipe A</label>
                  </div>
                  <div className="ground-team team2">
                    <span>👥</span>
                    <label>Equipe B</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison vs Manual Drones */}
        <section className="comparison-tech section">
          <h2 className="text-center mb-4">SkyAid vs Drones Manuais</h2>
          <div className="tech-comparison">
            <div className="comparison-grid">
              <div className="comparison-header">
                <h3>Característica</h3>
                <h3 className="skyaid-col">🚁 SkyAid</h3>
                <h3 className="manual-col">🎮 Drones Manuais</h3>
              </div>
              
              <div className="comparison-item">
                <div className="characteristic">Operação</div>
                <div className="skyaid-col advantage">100% Autônoma</div>
                <div className="manual-col disadvantage">Requer Piloto</div>
              </div>

              <div className="comparison-item">
                <div className="characteristic">Tomada de Decisão</div>
                <div className="skyaid-col advantage">IA Avançada</div>
                <div className="manual-col disadvantage">Humana</div>
              </div>

              <div className="comparison-item">
                <div className="characteristic">Tempo de Resposta</div>
                <div className="skyaid-col advantage">2 minutos</div>
                <div className="manual-col disadvantage">30+ minutos</div>
              </div>

              <div className="comparison-item">
                <div className="characteristic">Operação Noturna</div>
                <div className="skyaid-col advantage">Térmica + IA</div>
                <div className="manual-col disadvantage">Limitada</div>
              </div>

              <div className="comparison-item">
                <div className="characteristic">Múltiplas Missões</div>
                <div className="skyaid-col advantage">Simultâneas</div>
                <div className="manual-col disadvantage">Uma por vez</div>
              </div>

              <div className="comparison-item">
                <div className="characteristic">Fadiga do Operador</div>
                <div className="skyaid-col advantage">Inexistente</div>
                <div className="manual-col disadvantage">Limita operação</div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Roadmap */}
        <section className="roadmap-section section">
          <h2 className="text-center mb-4">Roadmap de Inovação</h2>
          <div className="roadmap-timeline">
            <div className="timeline-item current">
              <div className="timeline-marker current"></div>
              <div className="timeline-content">
                <h4>Versão 1.0 - Atual</h4>
                <p>Sistema base com IA de detecção e comunicação mesh</p>
                <div className="timeline-status">✅ Implementado</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Versão 2.0 - Q3 2025</h4>
                <p>Integração com sistemas médicos e análise preditiva</p>
                <div className="timeline-status">🔧 Desenvolvimento</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Versão 3.0 - Q1 2026</h4>
                <p>Enxame de drones coordenados e IA colaborativa</p>
                <div className="timeline-status">📋 Planejado</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Versão 4.0 - Q3 2026</h4>
                <p>Integração com robôs terrestres e IoT urbano</p>
                <div className="timeline-status">💡 Conceito</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Technology;