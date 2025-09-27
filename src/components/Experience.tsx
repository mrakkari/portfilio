import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Users, Globe } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: "TalentCloud – Plateforme de gestion du recrutement",
      company: "Tekboot Solutions",
      location: "Bruxelles-Capitale, Belgium",
      period: "Février 2025 - Juin 2025",
      type: "Stage",
      description: "Développement d'une plateforme web de recrutement en architecture microservices avec authentification réactive, gestion des profils et documents, publication d'offres et suivi des candidatures. Communication entre services via API RESTful et persistance avec PostgreSQL.",
      technologies: ["Spring Boot", "Java 21", "Angular", "Keycloak", "Docker", "Git", "PostgreSQL"],
      achievements: [
        "Architecture microservices avec authentification Keycloak",
        "API RESTful pour communication inter-services",
        "Interface utilisateur réactive avec Angular",
        "Gestion complète du cycle de recrutement"
      ],
      color: "blue",
      icon: Globe,
      githubUrl: "https://github.com/bacembenakkari/TalentCloud"
    },
    {
      position: "Module de contrôle à distance par téléphone pour les étudiants",
      company: "Abajim",
      location: "Sousse, Tunisie",
      period: "Juillet 2024 - Septembre 2024",
      type: "Développement",
      description: "Développement d'une fonctionnalité de contrôle à distance sur les téléphones des étudiants permettant aux enseignants d'activer un mode examen. Ce mode limite l'usage du téléphone et autorise uniquement la saisie de texte et le scan dans l'application.",
      technologies: ["React Native", "Node.js", "MongoDB", "Git"],
      achievements: [
        "Système de contrôle à distance sécurisé",
        "Mode examen avec restrictions d'usage",
        "Interface mobile intuitive",
        "Intégration avec systèmes éducatifs existants"
      ],
      color: "teal",
      icon: Code,
      githubUrl: "https://github.com/bacembenakkari/student-phone-control"
    },
    {
      position: "Stage réseau et connectivité",
      company: "Tunisie Telecom",
      location: "Sousse, Tunisie",
      period: "Juillet 2023 - Septembre 2023",
      type: "Stage technique",
      description: "Participation au déploiement de la fibre optique et à l'installation de câblage RJ45, avec une immersion pratique dans les infrastructures de connectivité et de partage de réseau assurées par l'opérateur national.",
      technologies: ["Fibre optique", "RJ45", "Infrastructures réseau"],
      achievements: [
        "Déploiement de la fibre optique",
        "Installation de câblage RJ45",
        "Apprentissage des infrastructures réseau",
        "Expérience terrain avec l'opérateur national"
      ],
      color: "orange",
      icon: Users
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
      teal: { bg: 'bg-teal-500', light: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600' },
      orange: { bg: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600' }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Expérience Professionnelle</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expérience diversifiée dans le développement logiciel, des architectures microservices 
            aux infrastructures réseau, avec une approche pratique et innovante.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className={`h-2 ${colors.bg}`}></div>
                
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <exp.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className={`px-3 py-1 ${colors.light} ${colors.text} rounded-full text-xs font-medium`}>
                              {exp.type}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                          
                          <div className="space-y-1 mb-4">
                            <div className="flex items-center text-gray-600">
                              <Briefcase className="w-4 h-4 mr-2" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            
                            <div className="flex items-center text-gray-500">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span>{exp.location}</span>
                            </div>
                            
                            <div className="flex items-center text-gray-500">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>{exp.period}</span>
                            </div>
                          </div>

                          <p className="text-gray-600 leading-relaxed mb-6">{exp.description}</p>

                          {/* Achievements */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Réalisations clés:</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start">
                                  <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                                  <span className="text-gray-600 text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Technologies */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-gray-900 mb-4">Technologies utilisées:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* GitHub Button (only for first two experiences) */}
                      {exp.githubUrl && (
                        <a
                          href={exp.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-4 inline-flex items-center space-x-2 px-4 py-2 ${colors.bg} text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}
                        >
                          <Code size={16} />
                          <span>Code Source</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;