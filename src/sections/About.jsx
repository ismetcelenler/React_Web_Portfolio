import React from 'react';
import ParallaxContainer from '../components/ParallaxContainer';
import profilePhoto2 from '../assets/profile-photo2.jpg';

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">
              Hakkımda
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300">
              Kim olduğum ve neler yaptığım hakkında kısa bilgi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <img
                src={profilePhoto2}
                alt="İsmet Çelenler"
                className="w-full h-auto relative z-30"
            />

            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">
                Ben Kimim?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Merhaba! Ben İsmet Çelenler, 5 yılı aşkın süredir web geliştirme alanında çalışıyorum. 
                Frontend ve backend teknolojileriyle modern, kullanıcı dostu ve performanslı web uygulamaları 
                geliştirme konusunda uzmanım. Karmaşık problemleri basit ve şık çözümlere dönüştürmeyi seviyorum.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-bold text-secondary dark:text-white mb-2">Kişisel Bilgiler</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center group">
                      <span className="mr-2 text-primary group-hover:text-accent transition-colors duration-300">
                        <i className="fas fa-calendar"></i>
                      </span>
                      <span>Doğum Tarihi: 15.05.1990</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="mr-2 text-primary group-hover:text-accent transition-colors duration-300">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <span>Konum: İstanbul, Türkiye</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="mr-2 text-primary group-hover:text-accent transition-colors duration-300">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span>E-posta: info@ismetcelenler.com</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="mr-2 text-primary group-hover:text-accent transition-colors duration-300">
                        <i className="fas fa-phone"></i>
                      </span>
                      <span>Telefon: +90 555 123 4567</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-secondary dark:text-white mb-2">İlgi Alanları</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center group">
                      <span className="mr-2 text-primary group-hover:text-accent transition-colors duration-300">
                        <i className="fas fa-laptop-code"></i>
                      </span>
                      <span>Web Geliştirme</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="mr-2 text-primary group-hover:text-accent transition-colors duration-300">
                        <i className="fas fa-mobile-alt"></i>
                      </span>
                      <span>Mobil Uygulama Geliştirme</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="mr-2 text-primary group-hover:text-accent transition-colors duration-300">
                        <i className="fas fa-palette"></i>
                      </span>
                      <span>UI/UX Tasarım</span>
                    </li>
                    <li className="flex items-center group">
                      <span className="mr-2 text-primary group-hover:text-accent transition-colors duration-300">
                        <i className="fas fa-database"></i>
                      </span>
                      <span>Veritabanı Yönetimi</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="#" className="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-secondary dark:text-white rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg">
                  <i className="fas fa-download mr-2"></i>
                  CV'mi İndir
                </a>
                <a href="#contact" className="px-6 py-3 bg-white dark:bg-gray-800 text-secondary dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 shadow-lg">
                  <i className="fas fa-paper-plane mr-2"></i>
                  İletişime Geç
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;