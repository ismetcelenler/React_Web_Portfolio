import React, { useState } from 'react';

// Proje verileri
const projectsData = [
  {
    title: "E-Ticaret Platformu",
    category: "web",
    image: "https://via.placeholder.com/600x400?text=E-Commerce+Platform",
    description: "Modern ve kullanıcı dostu bir e-ticaret platformu. Ödeme entegrasyonu, ürün yönetimi ve analitik özellikleri içerir.",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    title: "Fitness Takip Uygulaması",
    category: "mobile",
    image: "https://via.placeholder.com/600x400?text=Fitness+App",
    description: "Egzersiz rutinlerini ve beslenme alışkanlıklarını takip etmek için geliştirilen kapsamlı bir mobil uygulama.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    link: "#",
    github: "#"
  },
  {
    title: "Blog & Portföy Teması",
    category: "web",
    image: "https://via.placeholder.com/600x400?text=Blog+Theme",
    description: "İçerik üreticileri ve profesyoneller için özelleştirilebilir WordPress teması.",
    technologies: ["WordPress", "PHP", "JavaScript", "SCSS"],
    link: "#",
    github: "#"
  },
  {
    title: "Sosyal Medya Dashboard",
    category: "web",
    image: "https://via.placeholder.com/600x400?text=Social+Media+Dashboard",
    description: "Tüm sosyal medya platformlarınızı tek bir panelden yönetmenizi sağlayan web uygulaması.",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    github: "#"
  },
  {
    title: "Seyahat Planlama Uygulaması",
    category: "mobile",
    image: "https://via.placeholder.com/600x400?text=Travel+Planner",
    description: "Tatil ve seyahat planlamanızı kolaylaştıran, harita entegrasyonlu mobil uygulama.",
    technologies: ["Flutter", "Dart", "Google Maps API", "Firebase"],
    link: "#",
    github: "#"
  },
  {
    title: "Hava Durumu API",
    category: "backend",
    image: "https://via.placeholder.com/600x400?text=Weather+API",
    description: "Çeşitli hava durumu kaynaklarından veri toplayan ve tek bir API üzerinden sunan servis.",
    technologies: ["Python", "Django", "REST APIsektr"],
    link: "#",
    github: "#"
  }
];

function Projects() {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobil' },
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