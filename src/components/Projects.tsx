import React from 'react';
import { Github, ExternalLink, Calendar, Code, Database, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Système de réservation de vol",
      period: "Septembre 2025",
      type: "Projet académique",
      description: "Développement d'une application de réservation de vols avec backend Spring Boot pour la recherche, filtrage et gestion des réservations, et frontend Angular réactif. Réalisation de tests unitaires et d'intégration pour garantir la fiabilité et la gestion de la concurrence.",
      technologies: ["Spring Boot", "Angular", "SQLite", "JUnit", "Mockito", "Git"],
      category: "Full-Stack",
      icon: Globe,
      color: "blue",
      githubUrl: "https://github.com/bacembenakkari/Flight-Reservation-System"
    },
    {
      title: "Plateforme de formation de cours",
      period: "Novembre 2024 - Décembre 2024",
      type: "Projet académique",
      description: "Développement d'une plateforme éducative basée sur Spring Boot, exposant des API RESTful pour la gestion des étudiants. Mise en place de la sécurité avec JWT et Spring Security. Conception d'une interface utilisateur réactive avec ReactJS.",
      technologies: ["Spring Boot", "JWT", "Spring Data JPA", "MySQL", "ReactJS", "Git"],
      category: "Full-Stack",
      icon: Code,
      color: "teal",
      githubUrl: "https://github.com/bacembenakkari/Education-Plateform"
    },
    {
      title: "Plateforme de connexion freelance-client",
      period: "Février 2023 - Mars 2023",
      type: "Projet académique",
      description: "Développement d'une plateforme en ligne mettant en relation freelancers et clients, avec une interface conviviale permettant la recherche de services, la gestion de projets et la communication entre les deux parties.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      category: "MERN Stack",
      icon: Database,
      color: "orange",
      githubUrl: "https://github.com/yourusername/freelance-client-platform"
    },
    {
      title: "Projet de site e-commerce",
      period: "Avril 2023 - Mai 2023",
      type: "Projet académique",
      description: "Conception et développement d'une plateforme e-commerce avec Symfony, intégrant les fonctionnalités principales : catalogue produits, panier d'achat et processus de paiement. Création du frontend avec des templates Twig et du CSS personnalisé.",
      technologies: ["Symfony", "Twig", "CSS", "Git"],
      category: "Web",
      icon: Globe,
      color: "purple",
      githubUrl: "https://github.com/bacembenakkari/E-commerce-website"
    },
    {
      title: "Système de gestion de location de voitures",
      period: "Février 2023 - Mars 2023",
      type: "Projet académique",
      description: "Conception d'un système de location de voitures avec affichage des véhicules disponibles. Les utilisateurs peuvent sélectionner la marque et le modèle du véhicule, remplir un formulaire de réservation et obtenir automatiquement le prix calculé.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
      category: "Web",
      icon: Code,
      color: "green",
      githubUrl: "https://github.com/bacembenakkari/Car-Rental-Management-System"
    },
    {
      title: "Modélisation prédictive pour l'optimisation des semiconducteurs",
      period: "Novembre 2024 - Décembre 2024",
      type: "Projet académique",
      description: "Développement d'un classificateur prédictif basé sur des données de capteurs pour optimiser le rendement de fabrication des semi-conducteurs. Mise en avant de l'analyse de données et de la détection de signaux clés.",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Git"],
      category: "Machine Learning",
      icon: Database,
      color: "red",
      githubUrl: "https://github.com/yourusername/semiconductor-optimization"
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

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Projets</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une sélection de projets démontrant mes compétences en développement full-stack, 
            intelligence artificielle et conception d'architectures modernes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                {/* Project Header */}
                <div className={`${colors.bg} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
                    <project.icon size={128} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <project.icon size={24} />
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 leading-tight">{project.title}</h3>
                    
                    <div className="flex items-center text-sm opacity-90">
                      <Calendar size={14} className="mr-2" />
                      {project.period}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors.light} ${colors.text} mb-4`}>
                    {project.category}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 ${colors.bg} text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <button className={`flex items-center space-x-2 px-4 py-2 border-2 ${colors.border} ${colors.text} rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium`}>
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Plus de projets sur GitHub</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Découvrez tous mes projets et contributions sur mon profil GitHub, incluant 
              des expérimentations avec les dernières technologies et des contributions open source.
            </p>
            <a
              href="https://github.com/bacembenakkari"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center space-x-2"
            >
              <Github size={20} />
              <span>Voir GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
