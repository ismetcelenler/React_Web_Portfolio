import React, { useEffect, useState, useRef } from 'react';

function ParticleBackground() {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Sayfa boyutunu güncelleme
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Canvas boyutunu ayarla
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Parçacık sayısı
    const particleCount = Math.floor(dimensions.width * dimensions.height / 15000);
    
    // Parçacıklar
    const particles = [];
    
    // Parçacık oluşturma
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    
    // Animasyon fonksiyonu
    const animate = () => {
      // Canvas'ı temizle
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Her parçacığı çiz ve hareket ettir
      particles.forEach((particle, i) => {
        // Diğer parçacıklarla bağlantı
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(particle.x - p2.x, 2) + 
            Math.pow(particle.y - p2.y, 2)
          );
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(121, 133, 151, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        
        // Parçacığı çiz
        ctx.beginPath();
        const isDarkMode = document.documentElement.classList.contains('dark');
        const color = isDarkMode ? '200, 200, 255' : '100, 100, 255';
        ctx.fillStyle = `rgba(${color}, ${particle.opacity})`;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Parçacığı hareket ettir
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Sınırlara geldiğinde yönünü değiştir
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx = -particle.vx;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy = -particle.vy;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, [dimensions]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}

export default ParticleBackground;