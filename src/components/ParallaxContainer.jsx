import React, { useState, useRef, useEffect } from 'react';

function ParallaxContainer({ children, className = '' }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Mouse hareketi ile paralaks efekti
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    
    // Konteyner içindeki fare konumunu 0-1 aralığına normalize et
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Merkez noktadan sapma miktarını hesapla (-0.5 to 0.5 aralığı)
    const offsetX = x - 0.5;
    const offsetY = y - 0.5;
    
    setPosition({ x: offsetX, y: offsetY });
  };

  // Cihaz eğimi ile paralaks efekti (mobil cihazlar için)
  useEffect(() => {
    const handleDeviceOrientation = (e) => {
      if (!e.gamma || !e.beta) return;
      
      // Cihaz eğimini -0.5 to 0.5 aralığına normalize et
      const x = Math.min(Math.max(e.gamma / 45, -0.5), 0.5);
      const y = Math.min(Math.max(e.beta / 45, -0.5), 0.5);
      
      setPosition({ x, y });
    };
    
    window.addEventListener('deviceorientation', handleDeviceOrientation);
    return () => window.removeEventListener('deviceorientation', handleDeviceOrientation);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`parallax-container perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <div 
        className="parallax-layer parallax-layer-1"
        style={{ 
          transform: `translate3d(${position.x * -40}px, ${position.y * -40}px, 0)`
        }}
      >
        {React.Children.toArray(children)[0]}
      </div>
      
      <div 
        className="parallax-layer parallax-layer-2"
        style={{ 
          transform: `translate3d(${position.x * -20}px, ${position.y * -20}px, 0)`
        }}
      >
        {React.Children.toArray(children)[1]}
      </div>
      
      <div 
        className="parallax-layer parallax-layer-3"
        style={{ 
          transform: `translate3d(${position.x * -5}px, ${position.y * -5}px, 0)`
        }}
      >
        {React.Children.toArray(children)[2]}
      </div>
    </div>
  );
}

export default ParallaxContainer;