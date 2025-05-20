import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada gerçekleşecek
    // Frontend-only olduğu için şimdilik alert ile gösterilecek
    alert("Form gönderildi! Gerçek bir backend bağlantısı olmadığı için bu sadece bir demo.");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">
            İletişime Geç
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Projeleriniz veya iş fırsatları için benimle iletişime geçebilirsiniz. En kısa sürede dönüş yapacağım.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div className="animate-fade-in">
            <div className="bg-white dark:bg-darkSurface rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6">
                İletişim Bilgileri
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary dark:text-white mb-1">Konum</h4>
                    <p className="text-gray-600 dark:text-gray-400">İstanbul, Türkiye</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <i className="fas fa-envelope text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary dark:text-white mb-1">E-posta</h4>
                    <p className="text-gray-600 dark:text-gray-400">info@ismetcelenler.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <i className="fas fa-phone-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary dark:text-white mb-1">Telefon</h4>
                    <p className="text-gray-600 dark:text-gray-400">+90 555 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <i className="fas fa-globe text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-secondary dark:text-white mb-1">Website</h4>
                    <p className="text-gray-600 dark:text-gray-400">www.ismetcelenler.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-secondary dark:text-white mb-4">Sosyal Medya</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* İletişim Formu */}
          <div className="animate-fade-in">
            <div className="bg-white dark:bg-darkSurface rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6">
                Mesaj Gönder
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        İsim
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="İsminiz"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="E-posta adresiniz"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Mesaj konusu"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Mesajınız..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-white dark:bg-gray-800 text-secondary dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 shadow-lg"
                    >
                      <i className="fas fa-paper-plane mr-2"></i>
                      Mesajı Gönder
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;