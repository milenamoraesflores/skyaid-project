import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio
    console.log('Formulário enviado:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: ''
      });
    }, 3000);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                SkyAid
                <span className="hero-subtitle">Tecnologia que salva vidas, do céu para a terra</span>
              </h1>
              <p className="hero-description">
                Drones autônomos equipados com inteligência artificial para operações de resgate 
                em áreas de difícil acesso. Quando cada segundo importa, o SkyAid voa onde ninguém mais alcança.
              </p>
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => scrollToSection('video-section')}
                >
                  🎥 Assista ao Pitch
                </button>
                <Link to="/solucao" className="btn btn-outline">
                  Conheça a Solução
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <img 
                src="/images/skyaid-drone.png" 
                alt="SkyAid Drone em Operação" 
                className="hero-image"
              />
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('video-section')}>
          <span>↓</span>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" className="video-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Veja o SkyAid em Ação</h2>
            <p>Assista ao nosso vídeo e descubra como o SkyAid transforma tecnologia em ação de resgate.</p>
          </div>
          <div className="video-container">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/Vr7ZU63OyMs"
              title="SkyAid - Pitch Oficial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
           </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Por que o SkyAid é Revolucionário?</h2>
            <p>Tecnologia de ponta para salvar vidas em situações críticas</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Mapeamento Inteligente</h3>
              <p>Análise em tempo real de áreas afetadas por desastres naturais</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Detecção Precisa</h3>
              <p>Identificação automática de vítimas e pontos críticos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>Entrega Rápida</h3>
              <p>Transporte de suprimentos médicos e alimentos essenciais</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📡</div>
              <h3>Comunicação Avançada</h3>
              <p>Coordenação direta com equipes de resgate terrestres</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="contact-section section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Entre em Contato</h2>
              <p>Interessado em conhecer mais sobre o SkyAid? Fale conosco!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>contato@skyaid.org</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+55 (11) 9999-0000</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              {!isSubmitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Envie sua Mensagem</h3>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu Nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu E-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="organization"
                      placeholder="Organização (opcional)"
                      value={formData.organization}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Sua Mensagem"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Enviar Mensagem
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon">✅</div>
                  <h3>Mensagem Enviada!</h3>
                  <p>Obrigado pelo seu interesse. Entraremos em contato em breve.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;