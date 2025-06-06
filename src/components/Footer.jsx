import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <img src="/images/skyaid-logo.png" alt="SkyAid Logo" />
              </div>
              <div className="footer-logo-text">
                <h3>SkyAid</h3>
                <p>Tecnologia que salva vidas</p>
              </div>
            </Link>
            <p className="footer-description">
              Desenvolvendo drones autônomos para operações de resgate em áreas de difícil acesso, 
              salvando vidas quando cada segundo importa.
            </p>
          </div>

          <div className="footer-section">
            <h4>Navegação</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/problema">O Problema</Link></li>
              <li><Link to="/solucao">A Solução</Link></li>
              <li><Link to="/tecnologia">Tecnologia</Link></li>
              <li><Link to="/parcerias">Parcerias</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-info">
              <p>
                <span className="contact-icon">📧</span>
                contato@skyaid.org
              </p>
              <p>
                <span className="contact-icon">📱</span>
                +55 (11) 9999-0000
              </p>
              <p>
                <span className="contact-icon">📍</span>
                São Paulo, Brasil
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Siga-nos</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <span>📘</span> Facebook
              </a>
              <a href="#" className="social-link">
                <span>📷</span> Instagram
              </a>
              <a href="#" className="social-link">
                <span>🐦</span> Twitter
              </a>
              <a href="#" className="social-link">
                <span>💼</span> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} SkyAid. Todos os direitos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#">Política de Privacidade</a>
              <a href="#">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;