import React from 'react';
import TypedText from '../components/TypedText';
import profilePhoto1 from '../assets/profile-photo1.jpg';

function Hero() {
  const typedTexts = [
    "Web Geliştirici",
    "UI/UX Tasarımcısı",
    "React.js Geliştiricisi"
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-secondary dark:text-white animate-fade-in">
              Ben <span className="gradient-text">İsmet Çelenler</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 animate-fade-in animation-delay-200">
              <TypedText texts={typedTexts} />
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 animate-slide-up">
              Yaratıcı ve kullanıcı odaklı web çözümleri tasarlıyor ve geliştiriyorum. 
              Modern teknolojiler kullanarak performanslı ve etkileyici projeler üretiyorum.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-slide-up">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-white dark:bg-gray-800 text-secondary dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                <i className="fas fa-code-branch mr-2"></i>
                Projelerim
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-white dark:bg-gray-800 text-secondary dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                İletişime Geç
              </a>
            </div>
            
            <div className="mt-10 flex justify-center md:justify-start space-x-6 animate-fade-in animation-delay-800">
              <a href="https://www.linkedin.com/in/ismet-%C3%A7elenler-847306253/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent dark:text-primary dark:hover:text-accent transition-colors transform hover:scale-125 duration-300">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a href="https://github.com/ismetcelenler" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent dark:text-primary dark:hover:text-accent transition-colors transform hover:scale-125 duration-300">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="#" className="text-primary hover:text-accent dark:text-primary dark:hover:text-accent transition-colors transform hover:scale-125 duration-300">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://www.instagram.com/ismetcelenler/?next=%2Fismetcelenler%2F" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent dark:text-primary dark:hover:text-accent transition-colors transform hover:scale-125 duration-300">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center md:justify-end z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse-slow opacity-60"></div>
              <img 
                src={profilePhoto1} 
                alt="İsmet Çelenler" 
                className="w-[28rem] h-auto rounded-full shadow-2xl border-4 border-primary/50 relative z-10 animate-float object-cover"
              />
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 text-primary p-4 rounded-full shadow-lg animate-bounce-slow">
                <i className="fas fa-code text-3xl"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 text-accent p-4 rounded-full shadow-lg animate-bounce-slow animation-delay-500">
                <i className="fas fa-palette text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dekoratif şekiller */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 dark:bg-primary/5 animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-accent/10 dark:bg-accent/5 animate-float animation-delay-500"></div>
      <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-accent/20 dark:bg-accent/10 animate-float animation-delay-700"></div>
    </section>
  );
}

export default Hero;