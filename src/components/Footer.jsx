import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">İsmet Çelenler</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Web geliştirici ve UI/UX tasarımcı. Modern teknolojiler kullanarak etkileyici dijital deneyimler yaratıyorum.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary dark:text-white mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="#hero" className="hover:text-primary transition-colors">Ana Sayfa</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">Hakkımda</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">Neler Yapabilirim</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-colors">Deneyim</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">Projeler</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">İletişim</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary dark:text-white mb-4">İletişim Bilgileri</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2 text-primary mt-1"><i className="fas fa-map-marker-alt"></i></span>
                <span>İzmir, Türkiye</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary mt-1"><i className="fas fa-envelope"></i></span>
                <span>ismetcelenler@hotmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary mt-1"><i className="fas fa-phone"></i></span>
                <span>+90 507 173 2387</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary mt-1"><i className="fas fa-globe"></i></span>
                <span>www.ismetcelenler.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} İsmet Çelenler. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;