import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Cycle d'ingénierie informatique : Génie logiciel",
      institution: "Polytechnique Sousse",
      location: "Tunis, Tunisie",
      period: "Septembre 2022 - Juin 2025",
      status: "En cours",
      description: "Formation approfondie en génie logiciel, architectures distribuées, et développement d'applications modernes.",
      color: "blue"
    },
    {
      degree: "Cycle préparatoire : Mathématiques et Physique",
      institution: "Higher School of Science and Technology Hamem",
      location: "Tunis, Tunisie",
      period: "Septembre 2019 - Juin 2021",
      status: "Diplômé",
      description: "Formation scientifique solide en mathématiques et physique, préparation aux études d'ingénieur.",
      color: "teal"
    },
    {
      degree: "Baccalauréat en Mathématiques",
      institution: "Salem Ben Hmida Akouda",
      location: "Akouda, Tunisie",
      period: "Septembre 2018 - Juin 2019",
      status: "Diplômé",
      description: "Spécialisation en mathématiques avec mention, base solide pour les études supérieures techniques.",
      color: "orange"
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
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Éducation</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Parcours académique rigoureux avec une spécialisation en génie logiciel et 
            une base scientifique solide en mathématiques et physique.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-teal-500 to-orange-500 rounded-full"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const colors = getColorClasses(edu.color);
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center z-10 shadow-lg`}>
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 ${isEven ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                    <div className={`bg-white rounded-xl shadow-lg border-l-4 ${colors.border} p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                      {/* Status Badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors.light} ${colors.text} mb-4`}>
                        <Award className="w-3 h-3 mr-1" />
                        {edu.status}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">{edu.degree}</h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-500">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;