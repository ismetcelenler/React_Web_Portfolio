import React, { useState } from 'react';

// Proje verileri
const projectsData = [
  {
    title: "Statify+",
    category: "web",
    image: "/images/statify.jpeg",
    description: "StatifyPlus, Python ile geliştirilmiş bir Spotify veri analiz projesidir. Projenin arka ucunda Python kullanılırken, ön yüz tasarımı HTML, CSS ve JavaScript ile oluşturulmuştur. Python, Spotify API’sinden veri çekme ve analiz işlemlerini gerçekleştirir. Kullanıcı arayüzü, müzik verilerini görselleştirmek için dinamik ve etkileşimli yapıda tasarlanmıştır. Proje, veri işleme, API entegrasyonu ve web teknolojilerinin birlikte kullanılmasıyla kapsamlı bir çözüm sunar.",
    technologies: ["Python", "JavaScript", "CSS", "HTML"],
    link: "#",
    github: "https://github.com/ceyhunemre0/StatifyPlus"
  },
  {
    title: "Freelance İş Yönetim Uygulaması",
    category: "desktop",
    image: "/images/freelance.png",
    description: "Freelancerlar için projeleri, müşterileri ve ödemeleri kolayca yönetebileceğiniz, PyQt5 ve SQLite ile geliştirilmiş masaüstü uygulaması. Kolay kullanım, güvenli veri saklama ve görsel özet ekranı sunar.",
    technologies: ["Python", "PyQt5","SQLite"],
    link: "#",
    github: "https://github.com/ismetcelenler/Freelancer_Management_Project"
  },
    {
    title: "Hastane Randevu Sistemi",
    category: "desktop",
    image: "/images/hospital.png" ,
    description: "Hastane işlemlerini yönetmek için geliştirilmiş bir C# Windows Forms masaüstü uygulamasıdır. Kullanıcı dostu arayüzü sayesinde randevu, doktor ve hasta bilgilerini kolayca düzenlemenizi ve takip etmenizi sağlar. Hastane personelinin iş süreçlerini verimli şekilde yönetmesine yardımcı olur.",
    technologies: ["C#", ".NET",],
    link: "#",
    github: "https://github.com/ismetcelenler/Hospital_Management_App"
  },

  {
    title: "Kayak Kiralama Uygulaması",
    category: "desktop",
    image: "/images/kayak.png",
    description: "Bu uygulama, kayak kiralama işlemlerini kolayca yönetmek için geliştirilmiş bir masaüstü programıdır. Kullanıcılar, kayak kiralama kayıtlarını görüntüleyebilir, kalan süreleri takip edebilir ve kiralama ücretlerini hesaplayabilir. Uygulama, Windows Forms arayüzü ile kullanıcı dostu bir deneyim sunar ve .NET 6.0 teknolojisi ile geliştirilmiştir.",
    technologies: ["C#", ".NET",],
    link: "#",
    github: "https://github.com/ismetcelenler/Ski-Rental-Management-System"
  },
  {
    title: "Text Editor",
    category: "backend",
    image: "/images/text.png",
    description: "Bu proje, PyQt5 kullanılarak geliştirilmiş basit bir metin düzenleyici uygulamasıdır. Kullanıcılar metin dosyalarını açabilir, düzenleyebilir ve kaydedebilirler. Ayrıca yazı tipini değiştirme, yazı boyutunu büyütme/küçültme ve Türkçe sağ tık menüsü gibi özellikler sunar. Kullanıcı dostu arayüzü ile temel metin düzenleme işlemlerini kolayca gerçekleştirmenizi sağlar.",
    technologies: ["Python", "PyQt5",],
    link: "#",
    github: "https://github.com/ismetcelenler/Text_Editor"
  },
  {
    title: "Soru Bankası",
    category: "desktop",
    image: "/images/soru.png",
    description: "Bu proje, Python ve PyQt5 ile geliştirilmiş modern bir Soru Bankası uygulamasıdır. Kullanıcılar çoktan seçmeli sorular ekleyip düzenleyebilir, doğru cevabı seçebilir ve tüm soruları Excel dosyasına kolayca aktarabilir.",
    technologies: ["Python", "PyQt5",],
    link: "#",
    github: "https://github.com/ismetcelenler/Question_Bank_App"
  },

];

function Projects() {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'web', label: 'Web' },
    { id: 'desktop', label: 'Desktop' },
    { id: 'backend', label: 'Backend' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">
            Projelerim
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Geliştirdiğim çeşitli projelerden bir seçki. Her biri farklı teknolojiler ve çözümler içerir.
          </p>
        </div>

        {/* Filtreleme butonları */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 $ bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700
                
                  
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projeler grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-darkSurface rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fade-in"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-3">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <i className="fas fa-eye mr-2"></i>
                      Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <i className="fab fa-github mr-2"></i>
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;