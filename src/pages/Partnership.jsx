import React, { useState } from 'react';
import './Partnership.css';

const Partnership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    organization: '',
    contact: '',
    email: '',
    phone: '',
    type: '',
    region: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const partnerTypes = [
    {
      id: 'government',
      title: 'Governos & Defesa Civil',
      icon: '🏛️',
      description: 'Parcerias estratégicas com órgãos públicos para implementação em larga escala',
      benefits: [
        'Redução de custos operacionais em 60%',
        'Resposta 95% mais rápida em emergências',
        'Cobertura simultânea de múltiplas áreas',
        'Relatórios detalhados em tempo real'
      ],
      examples: ['Defesa Civil Estadual', 'Bombeiros', 'Prefeituras', 'Ministério da Defesa']
    },
    {
      id: 'ngo',
      title: 'ONGs & Organizações Humanitárias',
      icon: '🤝',
      description: 'Colaboração com organizações focadas em ajuda humanitária e assistência social',
      benefits: [
        'Tecnologia acessível para causas sociais',
        'Treinamento completo das equipes',
        'Suporte técnico 24/7',
        'Customização para necessidades específicas'
      ],
      examples: ['Cruz Vermelha', 'Médicos Sem Fronteiras', 'ONGs Locais', 'Fundações']
    },
    {
      id: 'private',
      title: 'Empresas Privadas',
      icon: '🏢',
      description: 'Soluções corporativas para empresas que operam em áreas de risco',
      benefits: [
        'Proteção de colaboradores em locais remotos',
        'Monitoramento de infraestrutura crítica',
        'Resposta rápida a acidentes industriais',
        'Compliance com normas de segurança'
      ],
      examples: ['Mineradoras', 'Petrolíferas', 'Construtoras', 'Agronegócio']
    }
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Básico',
      target: 'Municípios pequenos',
      price: 'R$ 150.000',
      period: 'por ano',
      features: [
        '2 drones SkyAid',
        'Central de controle básica',
        'Treinamento inicial',
        'Suporte técnico',
        'Manutenção inclusa',
        'Atualizações de software'
      ],
      highlighted: false
    },
    {
      id: 'professional',
      name: 'Profissional',
      target: 'Estados e grandes municípios',
      price: 'R$ 350.000',
      period: 'por ano',
      features: [
        '5 drones SkyAid',
        'Central de controle avançada',
        'Integração com sistemas existentes',
        'Treinamento completo',
        'Suporte prioritário 24/7',
        'Relatórios personalizados',
        'Backup de equipamentos'
      ],
      highlighted: true
    },
    {
      id: 'enterprise',
      name: 'Corporativo',
      target: 'Grandes organizações',
      price: 'Sob consulta',
      period: 'personalizado',
      features: [
        'Frota personalizada',
        'Múltiplas centrais de controle',
        'Integração API completa',
        'Desenvolvimento customizado',
        'Suporte dedicado',
        'SLA garantido',
        'Expansão ilimitada'
      ],
      highlighted: false
    }
  ];

  const businessModels = [
    {
      model: 'Venda Direta',
      description: 'Aquisição completa do sistema SkyAid',
      icon: '💰',
      details: 'Investimento único com propriedade total da tecnologia'
    },
    {
      model: 'Locação Mensal',
      description: 'Aluguel de equipamentos com manutenção inclusa',
      icon: '📅',
      details: 'Pagamento mensal flexível com todos os serviços inclusos'
    },
    {
      model: 'Pay-per-Use',
      description: 'Pagamento por missão executada',
      icon: '🎯',
      details: 'Ideal para uso esporádico ou teste de eficiência'
    },
    {
      model: 'Parceria Público-Privada',
      description: 'Investimento compartilhado entre governo e SkyAid',
      icon: '🤝',
      details: 'Modelo sustentável com benefícios mútuos'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Partnership form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        organization: '',
        contact: '',
        email: '',
        phone: '',
        type: '',
        region: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="partnership-page">
      <div className="container">
        {/* Hero Section */}
        <section className="partnership-hero section">
          <div className="section-header text-center">
            <h1>Junte-se ao SkyAid</h1>
            <p>Transforme operações de resgate em sua região com tecnologia de ponta</p>
          </div>

          <div className="hero-content">
            <div className="hero-text">
              <h2>Vamos Salvar Vidas Juntos</h2>
              <p>
                O SkyAid está revolucionando operações de emergência globalmente. 
                Seja parte desta transformação e leve tecnologia que salva vidas para sua comunidade.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Parceiros Ativos</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Vidas Salvas</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">15</span>
                  <span className="stat-label">Estados Atendidos</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="partnership-network">
                <div className="central-node">
                  <span className="skyaid-logo">🚁</span>
                  <label>SkyAid</label>
                </div>
                <div className="partner-nodes">
                  <div className="partner-node gov">
                    <span>🏛️</span>
                    <label>Governos</label>
                  </div>
                  <div className="partner-node ngo">
                    <span>🤝</span>
                    <label>ONGs</label>
                  </div>
                  <div className="partner-node private">
                    <span>🏢</span>
                    <label>Empresas</label>
                  </div>
                </div>
                <div className="connection-lines">
                  <div className="line line1"></div>
                  <div className="line line2"></div>
                  <div className="line line3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="partner-types-section section">
          <h2 className="text-center mb-4">Tipos de Parceria</h2>
          <div className="partner-types-grid">
            {partnerTypes.map((type) => (
              <div key={type.id} className="partner-type-card">
                <div className="type-header">
                  <span className="type-icon">{type.icon}</span>
                  <h3>{type.title}</h3>
                </div>
                <p className="type-description">{type.description}</p>
                <div className="type-benefits">
                  <h4>Benefícios:</h4>
                  <ul>
                    {type.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="type-examples">
                  <h4>Exemplos de parceiros:</h4>
                  <div className="examples-tags">
                    {type.examples.map((example, index) => (
                      <span key={index} className="example-tag">{example}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Business Models */}
        <section className="business-models-section section">
          <h2 className="text-center mb-4">Modelos de Negócio</h2>
          <div className="business-models-grid">
            {businessModels.map((model, index) => (
              <div key={index} className="business-model-card">
                <div className="model-icon">{model.icon}</div>
                <h3>{model.model}</h3>
                <p className="model-description">{model.description}</p>
                <p className="model-details">{model.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="pricing-section section">
          <h2 className="text-center mb-4">Planos e Investimento</h2>
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`pricing-card ${plan.highlighted ? 'highlighted' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
              >
                {plan.highlighted && <div className="popular-badge">Mais Popular</div>}
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <p className="plan-target">{plan.target}</p>
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>
                <div className="plan-features">
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="plan-button">
                  {selectedPlan === plan.id ? 'Plano Selecionado' : 'Selecionar Plano'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Success Cases */}
        <section className="success-cases-section section">
          <h2 className="text-center mb-4">Casos de Sucesso</h2>
          <div className="success-cases-grid">
            <div className="success-case">
              <div className="case-header">
                <h3>Defesa Civil - São Paulo</h3>
                <span className="case-date">2024</span>
              </div>
              <p className="case-description">
                Implementação do SkyAid reduziu tempo de resposta em emergências de 2 horas para 15 minutos, 
                salvando 47 vidas durante as chuvas de verão.
              </p>
              <div className="case-metrics">
                <div className="metric">
                  <span className="metric-value">87%</span>
                  <span className="metric-label">Redução no tempo</span>
                </div>
                <div className="metric">
                  <span className="metric-value">47</span>
                  <span className="metric-label">Vidas salvas</span>
                </div>
              </div>
            </div>

            <div className="success-case">
              <div className="case-header">
                <h3>Vale S.A. - Minas Gerais</h3>
                <span className="case-date">2024</span>
              </div>
              <p className="case-description">
                Monitoramento contínuo de barragens com drones SkyAid permitiu detecção precoce de 
                instabilidades, evitando tragédias.
              </p>
              <div className="case-metrics">
                <div className="metric">
                  <span className="metric-value">24/7</span>
                  <span className="metric-label">Monitoramento</span>
                </div>
                <div className="metric">
                  <span className="metric-value">3</span>
                  <span className="metric-label">Incidentes evitados</span>
                </div>
              </div>
            </div>

            <div className="success-case">
              <div className="case-header">
                <h3>Cruz Vermelha - Acre</h3>
                <span className="case-date">2024</span>
              </div>
              <p className="case-description">
                Durante enchentes na Amazônia, drones SkyAid localizaram comunidades isoladas e 
                coordenaram entregas de suprimentos médicos.
              </p>
              <div className="case-metrics">
                <div className="metric">
                  <span className="metric-value">12</span>
                  <span className="metric-label">Comunidades atendidas</span>
                </div>
                <div className="metric">
                  <span className="metric-value">300+</span>
                  <span className="metric-label">Pessoas assistidas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="partnership-form-section section">
          <h2 className="text-center mb-4">Torne-se um Parceiro</h2>
          <div className="form-container">
            {!isSubmitted ? (
              <form className="partnership-form" onSubmit={handleSubmit}>
                <div className="form-intro text-center">
                  <p>Preencha o formulário e nossa equipe entrará em contato para discutir como o SkyAid pode transformar suas operações de emergência.</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="organization">Organização *</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Nome da sua organização"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact">Nome do Contato *</label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Telefone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="type">Tipo de Organização *</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="government">Governo/Defesa Civil</option>
                      <option value="ngo">ONG/Organização Humanitária</option>
                      <option value="private">Empresa Privada</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="region">Região de Atuação *</label>
                    <input
                      type="text"
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      placeholder="Cidade, Estado"
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre suas necessidades e como podemos ajudar..."
                    rows="5"
                  ></textarea>
                </div>

                <div className="form-footer text-center">
                  <button type="submit" className="btn btn-primary">
                    Enviar Proposta de Parceria
                  </button>
                  <p className="form-note">
                    * Campos obrigatórios. Responderemos em até 24 horas.
                  </p>
                </div>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Proposta Enviada com Sucesso!</h3>
                <p>
                  Obrigado pelo seu interesse em se tornar parceiro do SkyAid. 
                  Nossa equipe analisará sua proposta e entrará em contato em até 24 horas.
                </p>
                <div className="next-steps">
                  <h4>Próximos Passos:</h4>
                  <ul>
                    <li>✓ Análise da sua proposta</li>
                    <li>📞 Ligação de nossa equipe comercial</li>
                    <li>📋 Apresentação personalizada</li>
                    <li>🤝 Assinatura da parceria</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partnership;