import React, { useState } from 'react';

// Beceri verileri
const skillsData = {
  frontend: [
    { name: "HTML5/CSS3", percentage: 75 },
    { name: "JavaScript", percentage: 70 },
    { name: "React.js", percentage: 65 },
  ],
  backend: [
    { name: "Node.js", percentage: 60 },
    { name: "Python", percentage: 70 },
    { name: "C#", percentage: 65 },
  ],
  tools: [
    { name: "Git/GitHub", percentage: 75 },
    { name: "VS Code", percentage: 70 },
    { name: "Windows Forms", percentage: 55 },
    { name: "PyQt", percentage: 50 },
  ]
};

function ProgressBar({ skill }) {
  return (
    <div className="mb-6 animate-fade-in">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-secondary dark:text-white">{skill.name}</span>
        <span className="text-sm font-medium text-secondary dark:text-white">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">
            Neler Yapabilirim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Windows Forms ve PyQt kullanarak masaüstü uygulamaları geliştirebiliyorum. React ile modern ve dinamik web arayüzleri tasarlayabiliyor, API ve web servisleriyle entegre çalışabiliyorum. Ayrıca veritabanı yönetimi konusunda da bilgi sahibiyim.
          </p>
        </div>
        
        {/* Kategori butonları */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Beceri progress barları */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
            {skillsData[activeCategory].map((skill, index) => (
              <ProgressBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;