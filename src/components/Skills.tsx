import React from 'react';
import { Code2, Database, Globe, Smartphone, Cloud, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Langages de Programmation",
      color: "blue",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "PHP", level: 70 }
      ]
    },
    {
      icon: Globe,
      title: "Frameworks Web",
      color: "teal",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Angular", level: 85 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 }
      ]
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      color: "orange",
      skills: [
        { name: "React Native", level: 80 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      icon: Database,
      title: "Bases de Données",
      color: "purple",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQLite", level: 80 }
      ]
    },
    {
      icon: Cloud,
      title: "DevOps & Outils",
      color: "green",
      skills: [
        { name: "Docker", level: 75 },
        { name: "Git", level: 90 },
        { name: "CI/CD", level: 65 }
      ]
    },
    {
      icon: Users,
      title: "Gestion de Projet",
      color: "red",
      skills: [
        { name: "Jira", level: 80 },
        { name: "Trello", level: 85 },
        { name: "Confluence", level: 75 },
        { name: "Miro", level: 70 }
      ]
    }
  ];

  const languages = [
    { name: "Arabe", level: "Langue maternelle", flag: "🇹🇳" },
    { name: "Anglais", level: "Avancé", flag: "🇬🇧" },
    { name: "Français", level: "Avancé", flag: "🇫🇷" }
  ];

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' },
      teal: { bg: 'bg-teal-500', text: 'text-teal-600', border: 'border-teal-200' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200' },
      green: { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-200' },
      red: { bg: 'bg-red-500', text: 'text-red-600', border: 'border-red-200' }
    };
    return colorMap[color as keyof typeof colorMap][type];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Compétences</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expertise technique approfondie dans le développement full-stack, 
            les architectures modernes et les outils de développement collaboratif.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${getColorClasses(category.color, 'bg')} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-2 ${getColorClasses(category.color, 'border')} border`}>
                      <div
                        className={`h-2 ${getColorClasses(category.color, 'bg')} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Langues</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{language.flag}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{language.name}</h4>
                <p className="text-gray-600">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;