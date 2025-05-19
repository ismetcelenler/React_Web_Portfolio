import React from 'react';

// Eğitim verileri
const educationData = [
  {
    title: "Bilgisayar Mühendisliği",
    institution: "Balıkesir Üniversitesi",
    period: "2018 - 2022",
    description: [
      "Lisans derecesi",
      "Veri yapıları, algoritma analizi ve yazılım mühendisliği odaklı eğitim",
      "Web geliştirme ve veritabanı yönetimi konularında projeler geliştirdim",
      "Bitirme projesi: Yapay zeka destekli mobil uygulama geliştirme"
    ]
  },
  {
    title: "Computer Science - Erasmus+",
    institution: "Politechnika Czestochowa",
    period: "2020 - 2021",
    description: [
      "Erasmus+ değişim programı",
      "İleri düzey web teknolojileri ve veritabanı sistemleri",
      "Uluslararası takım çalışmaları ile proje geliştirme",
      "Yabancı dil ve kültürel deneyim kazanımı"
    ]
  },
  {
    title: "Fen Lisesi",
    institution: "Ödemiş Fen Lisesi",
    period: "2014 - 2018",
    description: [
      "Matematik, fizik ve bilgisayar bilimleri odaklı eğitim",
      "Robotik ve yazılım kulüplerinde aktif katılım",
      "TÜBİTAK Bilim Olimpiyatları'na katılım",
      "Okul birinciliği ile mezuniyet"
    ]
  }
];

// Deneyim verileri
const experienceData = [
  {
    title: "Web Designer",
    company: "Nokta Medya",
    period: "2022 - Şimdi",
    description: [
      "Kurumsal müşteriler için özel web siteleri tasarımı ve geliştirmesi",
      "UI/UX tasarım prensiplerine uygun kullanıcı dostu arayüzler oluşturma",
      "Müşterilerle birebir iletişim kurarak ihtiyaçların doğru analizi",
      "Responsive ve mobil uyumlu web siteleri geliştirme"
    ]
  }
];

// Zaman çizelgesi öğesi bileşeni
function TimelineItem({ item, index, isEducation = false }) {
  return (
    <div className={`flex flex-col md:flex-row mb-8 md:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
      {/* Bağlantı çizgisi */}
      <div className="hidden md:block flex-grow-0 md:flex-grow w-20 relative">
        <div className="h-full w-px bg-gradient-to-b from-primary to-accent mx-auto relative opacity-50">
          <div className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent top-7 -left-2 shadow-lg"></div>
        </div>
      </div>
      
      {/* İçerik */}
      <div className={`flex-1 p-6 bg-white dark:bg-darkSurface rounded-lg shadow-md md:max-w-md animate-fade-in hover:shadow-xl transition-shadow duration-300 ${
        index % 2 === 0 ? 'md:mr-6 md:text-right' : 'md:ml-6'
      }`}>
        <h3 className="text-xl font-bold text-secondary dark:text-white mb-1">{item.title}</h3>
        <h4 className="text-lg text-primary mb-2">{isEducation ? item.institution : item.company}</h4>
        <p className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 mb-4">
          {item.period}
        </p>
        <ul className={`space-y-2 text-gray-700 dark:text-gray-300 ${index % 2 === 0 ? 'md:pl-0' : ''}`}>
          {item.description.map((point, idx) => (
            <li key={idx} className={`flex items-start ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
              <span className={`mr-2 text-primary group-hover:text-accent transition-colors duration-300 mt-1 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}>
                <i className="fas fa-check-circle"></i>
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/10">
      <div className="container mx-auto px-4">
        {/* Eğitim Bölümü */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">
            Eğitimim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Akademik yolculuğum ve kazandığım nitelikler
          </p>
        </div>
        
        <div className="md:hidden space-y-8 mb-16">
          {educationData.map((item, index) => (
            <div key={index} className="p-6 bg-white dark:bg-darkSurface rounded-lg shadow-md animate-fade-in">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-1">{item.title}</h3>
              <h4 className="text-lg text-primary mb-2">{item.institution}</h4>
              <p className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 mb-4">
                {item.period}
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {item.description.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-primary mt-1">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="hidden md:block mb-20">
          <div className="space-y-12 relative">
            {/* Dikey bağlantı çizgisi */}
            <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-gradient-to-b from-primary to-accent opacity-50"></div>
            
            {/* Eğitim öğeleri */}
            {educationData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} isEducation={true} />
            ))}
          </div>
        </div>
        
        {/* Deneyim Bölümü */}
        <div className="text-center mb-10 mt-20">
          <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">
            Deneyimim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Profesyonel iş hayatımdaki rollerim ve kazanımlarım
          </p>
        </div>
        
        <div className="md:hidden space-y-8">
          {experienceData.map((item, index) => (
            <div key={index} className="p-6 bg-white dark:bg-darkSurface rounded-lg shadow-md animate-fade-in">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-1">{item.title}</h3>
              <h4 className="text-lg text-primary mb-2">{item.company}</h4>
              <p className="inline-block bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 mb-4">
                {item.period}
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {item.description.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-primary mt-1">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="hidden md:block">
          <div className="space-y-12 relative">
            {/* Dikey bağlantı çizgisi */}
            <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-gradient-to-b from-primary to-accent opacity-50"></div>
            
            {/* Deneyim öğeleri */}
            {experienceData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} isEducation={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;