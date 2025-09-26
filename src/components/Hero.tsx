import React from 'react';
import { ChevronDown, Download, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-2xl">
            <span className="text-4xl font-bold text-white">BA</span>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Bacem Ben Akkari
        </h1>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-blue-100">
          Ingénieur Logiciel
        </h2>

        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-blue-50">
          Ingénieur web et mobile junior, spécialisé dans le développement d'applications 
          réactives et performantes. Expérimenté avec des frameworks modernes tels que 
          Spring Boot, Angular, React et React Native.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-blue-100">
          <div className="flex items-center space-x-2">
            <Mail size={18} />
            <span>bacem.benakkari@polytechnicien.tn</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={18} />
            <span>Sousse, Tunisie</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Me Contacter
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-2">
            <Download size={18} />
            <span>Télécharger CV</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white hover:text-blue-200 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
};

export default Hero;