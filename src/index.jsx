import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Função para remover o loading screen
const removeLoadingScreen = () => {
  const loadingElement = document.getElementById('loading');
  if (loadingElement) {
    loadingElement.style.opacity = '0';
    setTimeout(() => {
      loadingElement.style.display = 'none';
      document.body.classList.add('app-loaded');
    }, 300);
  }
};

// Criar root do React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar a aplicação
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remover loading screen após a renderização
setTimeout(removeLoadingScreen, 100);

// Error Boundary global para capturar erros
window.addEventListener('error', (event) => {
  console.error('Erro global capturado:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Promise rejeitada:', event.reason);
});

// Performance monitoring básico (opcional)
if (process.env.NODE_ENV === 'development') {
  // Log de performance simples
  const startTime = performance.now();
  window.addEventListener('load', () => {
    const loadTime = performance.now() - startTime;
    console.log(`⚡ SkyAid carregado em ${loadTime.toFixed(2)}ms`);
  });
}