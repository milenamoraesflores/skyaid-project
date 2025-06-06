import React, { useState, useEffect, useRef } from 'react';
import './RescueMap.css';

const RescueMap = () => {
  const mapRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedDrone, setSelectedDrone] = useState(null);
  const [mapMode, setMapMode] = useState('normal'); // normal, night, delivery
  const [showCommunication, setShowCommunication] = useState(true);
  const [simulation, setSimulation] = useState({
    dronesActive: 5,
    victimsFound: 12,
    deliveriesCompleted: 8,
    connectionStatus: 'online',
    weather: 'moderate'
  });

  // Dados simulados dos drones
  const [drones, setDrones] = useState([
    {
      id: 1,
      name: 'SkyAid-Alpha',
      position: { x: 35, y: 40 },
      battery: 85,
      speed: 65,
      status: 'Entregando kit médico',
      eta: '3 min',
      route: [{ x: 35, y: 40 }, { x: 60, y: 25 }],
      mission: 'rescue'
    },
    {
      id: 2,
      name: 'SkyAid-Beta',
      position: { x: 70, y: 60 },
      battery: 92,
      speed: 72,
      status: 'Mapeando área',
      eta: '5 min',
      route: [{ x: 70, y: 60 }, { x: 45, y: 70 }],
      mission: 'mapping'
    },
    {
      id: 3,
      name: 'SkyAid-Gamma',
      position: { x: 25, y: 75 },
      battery: 67,
      speed: 58,
      status: 'Retornando à base',
      eta: '7 min',
      route: [{ x: 25, y: 75 }, { x: 10, y: 10 }],
      mission: 'returning'
    },
    {
      id: 4,
      name: 'SkyAid-Delta',
      position: { x: 80, y: 30 },
      battery: 78,
      speed: 69,
      status: 'Localizando vítimas',
      eta: '2 min',
      route: [{ x: 80, y: 30 }, { x: 55, y: 45 }],
      mission: 'search'
    },
    {
      id: 5,
      name: 'SkyAid-Echo',
      position: { x: 50, y: 20 },
      battery: 94,
      speed: 75,
      status: 'Patrulhamento',
      eta: '4 min',
      route: [{ x: 50, y: 20 }, { x: 30, y: 50 }],
      mission: 'patrol'
    }
  ]);

  // Zonas de risco e vítimas
  const riskZones = [
    { id: 1, x: 40, y: 50, radius: 15, type: 'flood', severity: 'high' },
    { id: 2, x: 65, y: 35, radius: 12, type: 'landslide', severity: 'critical' },
    { id: 3, x: 30, y: 70, radius: 10, type: 'building_collapse', severity: 'medium' }
  ];

  const victims = [
    { id: 1, x: 45, y: 55, status: 'critical', rescued: false, type: 'trapped' },
    { id: 2, x: 62, y: 40, status: 'stable', rescued: true, type: 'injured' },
    { id: 3, x: 35, y: 65, status: 'critical', rescued: false, type: 'missing' },
    { id: 4, x: 70, y: 45, status: 'stable', rescued: false, type: 'isolated' }
  ];

  const supplyPoints = [
    { id: 1, x: 20, y: 30, type: 'medical', supplies: 15 },
    { id: 2, x: 75, y: 70, type: 'food', supplies: 8 },
    { id: 3, x: 85, y: 15, type: 'shelter', supplies: 12 }
  ];

  // Mensagens de comunicação
  const [messages, setMessages] = useState([
    { id: 1, time: '14:32', type: 'alert', content: 'Nova vítima identificada na zona 3', priority: 'high' },
    { id: 2, time: '14:29', type: 'delivery', content: 'Kit médico entregue com sucesso', priority: 'normal' },
    { id: 3, time: '14:25', type: 'system', content: 'Drone Alpha reporta bateria baixa', priority: 'medium' },
    { id: 4, time: '14:20', type: 'rescue', content: 'Vítima resgatada na coordenada 45.2, 55.8', priority: 'high' }
  ]);

  // Animação dos drones
  useEffect(() => {
    const interval = setInterval(() => {
      setDrones(prevDrones => 
        prevDrones.map(drone => {
          const target = drone.route[1];
          const current = drone.position;
          const speed = 0.5; // velocidade de movimento
          
          const newX = current.x + (target.x - current.x) * speed * 0.1;
          const newY = current.y + (target.y - current.y) * speed * 0.1;
          
          // Se chegou perto do destino, escolhe novo destino aleatório
          if (Math.abs(newX - target.x) < 2 && Math.abs(newY - target.y) < 2) {
            const newTarget = {
              x: Math.random() * 90 + 5,
              y: Math.random() * 90 + 5
            };
            return {
              ...drone,
              position: { x: newX, y: newY },
              route: [{ x: newX, y: newY }, newTarget]
            };
          }
          
          return {
            ...drone,
            position: { x: newX, y: newY }
          };
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Adicionar novas mensagens periodicamente
  useEffect(() => {
    const interval = setInterval(() => {
      const newMessages = [
        'Área segura identificada para pouso de emergência',
        'Sinais vitais detectados em zona de escombros',
        'Entrega de suprimentos programada para 15:00',
        'Condições meteorológicas estáveis para operação',
        'Drone em manutenção preventiva - retornando à base'
      ];
      
      const randomMessage = newMessages[Math.floor(Math.random() * newMessages.length)];
      const currentTime = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      
      setMessages(prev => [
        {
          id: Date.now(),
          time: currentTime,
          type: 'system',
          content: randomMessage,
          priority: 'normal'
        },
        ...prev.slice(0, 9) // Manter apenas 10 mensagens
      ]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleDroneClick = (drone) => {
    setSelectedDrone(selectedDrone?.id === drone.id ? null : drone);
  };

  const startNewMission = () => {
    const newSimulation = {
      dronesActive: Math.floor(Math.random() * 3) + 4,
      victimsFound: Math.floor(Math.random() * 10) + 8,
      deliveriesCompleted: Math.floor(Math.random() * 8) + 5,
      connectionStatus: 'online',
      weather: ['good', 'moderate', 'challenging'][Math.floor(Math.random() * 3)]
    };
    setSimulation(newSimulation);
    
    // Reset drones positions
    setDrones(prevDrones => 
      prevDrones.map(drone => ({
        ...drone,
        position: {
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10
        },
        battery: Math.floor(Math.random() * 30) + 70
      }))
    );
  };

  const getMissionIcon = (mission) => {
    const icons = {
      rescue: '🚑',
      mapping: '🗺️',
      returning: '🏠',
      search: '🔍',
      patrol: '👁️'
    };
    return icons[mission] || '🚁';
  };

  const getVictimIcon = (victim) => {
    if (victim.rescued) return '✅';
    return victim.status === 'critical' ? '🆘' : '⚠️';
  };

  return (
    <div className={`rescue-map-container ${isFullscreen ? 'fullscreen' : ''}`}>
      {/* Header Controls */}
      <div className="map-header">
        <div className="map-title">
          <h3>🚁 SkyAid - Central de Operações</h3>
          <span className="mission-status">Operação Ativa: Resgate Enchente SP</span>
        </div>
        <div className="map-controls">
          <button 
            className={`control-btn ${mapMode === 'normal' ? 'active' : ''}`}
            onClick={() => setMapMode('normal')}
          >
            📍 Normal
          </button>
          <button 
            className={`control-btn ${mapMode === 'night' ? 'active' : ''}`}
            onClick={() => setMapMode('night')}
          >
            👁️ Visão Noturna
          </button>
          <button 
            className={`control-btn ${mapMode === 'delivery' ? 'active' : ''}`}
            onClick={() => setMapMode('delivery')}
          >
            📦 Entregas
          </button>
          <button className="control-btn" onClick={startNewMission}>
            🔄 Nova Missão
          </button>
          <button className="control-btn" onClick={toggleFullscreen}>
            {isFullscreen ? '📴' : '📺'} Tela Cheia
          </button>
        </div>
      </div>

      <div className="map-content">
        {/* Main Map */}
        <div className={`map-area ${mapMode}`} ref={mapRef}>
          {/* Risk Zones */}
          {riskZones.map(zone => (
            <div
              key={zone.id}
              className={`risk-zone ${zone.type} ${zone.severity}`}
              style={{
                left: `${zone.x}%`,
                top: `${zone.y}%`,
                width: `${zone.radius}%`,
                height: `${zone.radius}%`
              }}
            >
              <div className="zone-label">{zone.type === 'flood' ? '🌊' : zone.type === 'landslide' ? '⛰️' : '🏢'}</div>
            </div>
          ))}

          {/* Victims */}
          {victims.map(victim => (
            <div
              key={victim.id}
              className={`victim ${victim.status} ${victim.rescued ? 'rescued' : ''}`}
              style={{
                left: `${victim.x}%`,
                top: `${victim.y}%`
              }}
              title={`Vítima ${victim.status} - ${victim.rescued ? 'Resgatada' : 'Aguardando resgate'}`}
            >
              {getVictimIcon(victim)}
            </div>
          ))}

          {/* Supply Points */}
          {mapMode === 'delivery' && supplyPoints.map(point => (
            <div
              key={point.id}
              className={`supply-point ${point.type}`}
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`
              }}
              title={`Ponto de ${point.type} - ${point.supplies} unidades`}
            >
              {point.type === 'medical' ? '🏥' : point.type === 'food' ? '🍞' : '🏠'}
              <span className="supply-count">{point.supplies}</span>
            </div>
          ))}

          {/* Drones */}
          {drones.map(drone => (
            <div key={drone.id}>
              {/* Drone Route */}
              <svg className="drone-route" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <line
                  x1={`${drone.route[0].x}%`}
                  y1={`${drone.route[0].y}%`}
                  x2={`${drone.route[1].x}%`}
                  y2={`${drone.route[1].y}%`}
                  stroke="rgba(249, 105, 0, 0.6)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
              
              {/* Drone */}
              <div
                className={`drone ${drone.mission} ${selectedDrone?.id === drone.id ? 'selected' : ''}`}
                style={{
                  left: `${drone.position.x}%`,
                  top: `${drone.position.y}%`
                }}
                onClick={() => handleDroneClick(drone)}
                title={`${drone.name} - ${drone.status}`}
              >
                <div className="drone-icon">{getMissionIcon(drone.mission)}</div>
                <div className="drone-pulse"></div>
                
                {/* Drone Info Popup */}
                {selectedDrone?.id === drone.id && (
                  <div className="drone-info">
                    <h4>{drone.name}</h4>
                    <div className="drone-stats">
                      <div className="stat">
                        <span className="stat-icon">🔋</span>
                        <span>{drone.battery}%</span>
                      </div>
                      <div className="stat">
                        <span className="stat-icon">⚡</span>
                        <span>{drone.speed} km/h</span>
                      </div>
                      <div className="stat">
                        <span className="stat-icon">⏱️</span>
                        <span>ETA: {drone.eta}</span>
                      </div>
                    </div>
                    <div className="drone-status">{drone.status}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Side Panels */}
        <div className="side-panels">
          {/* Status Dashboard */}
          <div className="status-panel">
            <h4>📊 Status da Operação</h4>
            <div className="status-grid">
              <div className="status-item">
                <span className="status-icon">🚁</span>
                <div>
                  <div className="status-value">{simulation.dronesActive}</div>
                  <div className="status-label">Drones Ativos</div>
                </div>
              </div>
              <div className="status-item">
                <span className="status-icon">👥</span>
                <div>
                  <div className="status-value">{simulation.victimsFound}</div>
                  <div className="status-label">Vítimas Localizadas</div>
                </div>
              </div>
              <div className="status-item">
                <span className="status-icon">📦</span>
                <div>
                  <div className="status-value">{simulation.deliveriesCompleted}</div>
                  <div className="status-label">Entregas Realizadas</div>
                </div>
              </div>
              <div className="status-item">
                <span className="status-icon">📡</span>
                <div>
                  <div className={`status-value ${simulation.connectionStatus}`}>
                    {simulation.connectionStatus === 'online' ? '●' : '○'}
                  </div>
                  <div className="status-label">Conexão</div>
                </div>
              </div>
            </div>
            
            <div className="weather-status">
              <h5>🌤️ Condições Meteorológicas</h5>
              <div className={`weather-indicator ${simulation.weather}`}>
                {simulation.weather === 'good' ? '☀️ Bom' : 
                 simulation.weather === 'moderate' ? '⛅ Moderado' : '🌧️ Desafiador'}
              </div>
            </div>
          </div>

          {/* Communication Panel */}
          {showCommunication && (
            <div className="communication-panel">
              <div className="comm-header">
                <h4>💬 Central de Comunicação</h4>
                <button 
                  className="close-btn"
                  onClick={() => setShowCommunication(false)}
                >
                  ✕
                </button>
              </div>
              <div className="messages-list">
                {messages.map(message => (
                  <div key={message.id} className={`message ${message.type} ${message.priority}`}>
                    <span className="message-time">{message.time}</span>
                    <span className="message-content">{message.content}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Show Communication Button */}
      {!showCommunication && (
        <button 
          className="show-comm-btn"
          onClick={() => setShowCommunication(true)}
        >
          💬 Mostrar Comunicação
        </button>
      )}
    </div>
  );
};

export default RescueMap;