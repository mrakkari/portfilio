import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Delf B2",
      issuer: "DELF/DALF",
      type: "Langue",
      description: "Certification officielle de français langue étrangère niveau B2, attestant d'un niveau avancé en français.",
      color: "blue",
      verified: true,
      certificateUrl: "https://example.com/delf-b2-certificate"
    },
    {
      name: "The Machine Learning Algorithms A-Z",
      issuer: "Formation en ligne",
      type: "Machine Learning",
      description: "Certification complète sur les algorithmes de machine learning et leur implémentation pratique.",
      color: "teal",
      verified: true,
      certificateUrl: "https://learn.365datascience.com/certificates/CC-30EDE9CBF6/"
    },
    {
      name: "Web Scraping and API Fundamentals in Python",
      issuer: "Formation en ligne",
      type: "Python",
      description: "Maîtrise des techniques de web scraping et utilisation d'APIs avec Python.",
      color: "orange",
      verified: true,
      certificateUrl: "https://learn.365datascience.com/certificates/CC-7EAE0B5B03/"
    },
    {
      name: "Certified Database Specialist",
      issuer: "Certiport",
      type: "Bases de données",
      description: "Certification officielle attestant des compétences avancées en gestion de bases de données.",
      color: "purple",
      verified: true,
      certificateUrl: "https://www.credly.com/badges/ec6a32b8-5225-43b6-8bce-a36b8b667225/linked_in?t=seynip"
    },
    {
      name: "Cisco Certified Network Associate 1",
      issuer: "Cisco",
      type: "Réseau",
      description: "Première certification Cisco CCNA couvrant les fondamentaux des réseaux informatiques.",
      color: "green",
      verified: true,
      certificateUrl: "https://example.com/ccna-1-certificate"
    },
    {
      name: "Cisco Certified Network Associate 2",
      issuer: "Cisco",
      type: "Réseau",
      description: "Deuxième certification Cisco CCNA approfondissant les concepts de routage et commutation.",
      color: "red",
      verified: true,
      certificateUrl: "https://example.com/ccna-2-certificate"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
      teal: { bg: 'bg-teal-500', light: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600' },
      orange: { bg: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' },
      green: { bg: 'bg-green-500', light: 'bg-green-50', border: 'border-green-200', text: 'text-green-600' },
      red: { bg: 'bg-red-500', light: 'bg-red-50', border: 'border-red-200', text: 'text-red-600' }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const certificationTypes = [...new Set(certifications.map(cert => cert.type))];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Certifications professionnelles et académiques validant mes compétences 
            dans différents domaines technologiques et linguistiques.
          </p>
        </div>

        {/* Certification Types Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
          {certificationTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-2">
                {type === 'Langue' && '🗣️'}
                {type === 'Machine Learning' && '🤖'}
                {type === 'Python' && '🐍'}
                {type === 'Bases de données' && '🗃️'}
                {type === 'Réseau' && '🌐'}
              </div>
              <span className="text-sm font-medium text-gray-700">{type}</span>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const colors = getColorClasses(cert.color);
            
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Header */}
                <div className={`${colors.bg} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4">
                    <Award className="w-8 h-8 opacity-20" />
                  </div>
                  
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <Award className="w-6 h-6" />
                      {cert.verified && (
                        <CheckCircle className="w-5 h-5 text-green-200" />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mt-4 mb-2 leading-tight">{cert.name}</h3>
                  <p className="text-sm opacity-90">{cert.issuer}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors.light} ${colors.text} mb-4`}>
                    {cert.type}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {cert.verified && (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-xs text-green-600 font-medium">Vérifié</span>
                        </>
                      )}
                    </div>
                    
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-1 text-xs ${colors.text} hover:opacity-80 transition-opacity`}
                    >
                      <span>Voir certificat</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{certifications.length}</div>
              <div className="text-gray-600">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">{certificationTypes.length}</div>
              <div className="text-gray-600">Domaines</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">{certifications.filter(cert => cert.verified).length}</div>
              <div className="text-gray-600">Vérifiées</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2024</div>
              <div className="text-gray-600">Dernière obtenue</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;