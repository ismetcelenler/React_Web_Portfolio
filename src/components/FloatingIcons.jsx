import React, { useEffect, useState } from 'react';

const ICONS = [
  'html5', 'css3-alt', 'js', 'react', 'node', 'npm',
  'git', 'database', 'server', 'mobile-alt'
];

function FloatingIcons() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    // Rastgele ikonlar oluştur
    const newIcons = Array(12).fill().map((_, i) => ({
      id: i,
      icon: ICONS[Math.floor(Math.random() * ICONS.length)],
      size: Math.random() * 1.5 + 0.8, // 0.8-2.3 arasında boyut
      x: Math.random() * 100, // Ekranın yatay konumu (%)
      y: Math.random() * 100, // Ekranın dikey konumu (%)
      speed: Math.random() * 50 + 20, // Hareket hızı
      direction: Math.random() > 0.5 ? 1 : -1, // Yön (yukarı/aşağı)
    }));
    
    setIcons(newIcons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map(icon => (
        <div
          key={icon.id}
          className="absolute text-primary/10 dark:text-white/5 animate-float"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            fontSize: `${icon.size}rem`,
            animationDuration: `${icon.speed}s`,
            animationDirection: icon.direction > 0 ? 'normal' : 'reverse',
          }}
        >
          <i className={`fab fa-${icon.icon}`}></i>
        </div>
      ))}
    </div>
  );
}

export default FloatingIcons;