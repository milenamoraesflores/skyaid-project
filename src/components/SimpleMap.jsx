import React, { useEffect, useRef } from 'react';
import './SimpleMap.css';

const SimpleMap = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const initMap = () => {
      if (mapInstance.current) return;

      // Criar mapa
      const map = window.L.map(mapRef.current).setView([-23.55, -46.63], 13);
      mapInstance.current = map;

      // Adicionar tiles
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      // Zonas de risco
      window.L.circle([-23.570, -46.650], {
        color: '#0096ff',
        fillColor: '#0096ff',
        fillOpacity: 0.3,
        radius: 500
      }).addTo(map).bindPopup('🌊 Zona de Inundação');

      window.L.circle([-23.540, -46.620], {
        color: '#ff4444',
        fillColor: '#ff4444',
        fillOpacity: 0.4,
        radius: 300
      }).addTo(map).bindPopup('⛰️ Deslizamento');

      // Vítimas
      const victimIcon = window.L.divIcon({
        html: '<div style="font-size: 20px;">🆘</div>',
        iconSize: [30, 30],
        className: 'custom-marker'
      });

      window.L.marker([-23.556, -46.639], { icon: victimIcon })
        .addTo(map)
        .bindPopup('👤 Vítima Critical');

      window.L.marker([-23.548, -46.625], { icon: victimIcon })
        .addTo(map)
        .bindPopup('👤 Vítima Estável');

      // Drones
      const droneIcon = window.L.divIcon({
        html: '<div class="drone-marker">🚁</div>',
        iconSize: [40, 40],
        className: 'drone-icon'
      });

      const drone1 = window.L.marker([-23.550, -46.630], { icon: droneIcon })
        .addTo(map)
        .bindPopup('🚁 SkyAid-Alpha<br>🔋 85% | ⚡ 65 km/h');

      const drone2 = window.L.marker([-23.560, -46.640], { icon: droneIcon })
        .addTo(map)
        .bindPopup('🚁 SkyAid-Beta<br>🔋 92% | ⚡ 72 km/h');

      // Movimento dos drones
      let lat1 = -23.550, lng1 = -46.630;
      let lat2 = -23.560, lng2 = -46.640;

      setInterval(() => {
        lat1 += (Math.random() - 0.5) * 0.001;
        lng1 += (Math.random() - 0.5) * 0.001;
        lat2 += (Math.random() - 0.5) * 0.001;
        lng2 += (Math.random() - 0.5) * 0.001;
        
        drone1.setLatLng([lat1, lng1]);
        drone2.setLatLng([lat2, lng2]);
      }, 2000);
    };

    // Carregar Leaflet
    if (!window.L) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
      script.onload = () => setTimeout(initMap, 100);
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="simple-map-container">
      <div className="map-header">
        <h3>🚁 SkyAid - Operação em Tempo Real</h3>
        <p>Simulação de resgate em São Paulo</p>
      </div>
      <div ref={mapRef} className="leaflet-map" />
    </div>
  );
};

export default SimpleMap;