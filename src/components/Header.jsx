import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'O Problema', path: '/problema' },
    { name: 'A Solução', path: '/solucao' },
    { name: 'Tecnologia', path: '/tecnologia' },
    { name: 'Parcerias', path: '/parcerias' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <img src="/images/skyaid-logo.png" alt="SkyAid Logo" />
            </div>
            <div className="logo-text">
              <h1>SkyAid</h1>
              <p>Tecnologia que salva vidas, do céu para a terra</p>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;