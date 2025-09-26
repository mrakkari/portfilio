import React from 'react';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Développement Full-Stack",
      description: "Expertise en développement front-end et back-end avec des technologies modernes"
    },
    {
      icon: Zap,
      title: "Architecture Microservices",
      description: "Conception et mise en œuvre d'architectures scalables et sécurisées"
    },
    {
      icon: Lightbulb,
      title: "Innovation Technique",
      description: "Passionné par les nouvelles technologies et l'apprentissage continu"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail d'équipe efficace avec des outils de gestion de projet modernes"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">À Propos de Moi</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Passionné par le développement logiciel, je suis spécialisé dans la création 
              d'applications web et mobiles performantes. Mon expertise couvre l'ensemble 
              du cycle de développement, de la conception d'architectures robustes à la 
              mise en production de solutions scalables.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Fort d'une solide formation en génie logiciel et d'expériences pratiques 
              variées, je maîtrise les technologies modernes comme Spring Boot, Angular, 
              React, et les architectures microservices. Mon approche allie rigueur 
              technique et créativité pour répondre aux défis technologiques actuels.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Développement Full-Stack
              </span>
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                Microservices
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                DevOps
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Mobile Development
              </span>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-gray-600">Ans</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">3+</div>
              <div className="text-gray-600">Années d'Expérience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Projets Réalisés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;