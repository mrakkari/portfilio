import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'À propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Éducation', id: 'education' },
    { label: 'Expérience', id: 'experience' },
    { label: 'Projets', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className={`font-bold text-xl transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Bacem Ben Akkari
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:bacem.benakkari@polytechnicien.tn" className={`transition-colors hover:text-blue-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              <Mail size={20} />
            </a>
            <a href="tel:+21650232389" className={`transition-colors hover:text-blue-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              <Phone size={20} />
            </a>
            <a href="#" className={`transition-colors hover:text-blue-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              <Github size={20} />
            </a>
            <a href="#" className={`transition-colors hover:text-blue-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-6 py-4 border-t border-gray-200">
              <a href="mailto:bacem.benakkari@polytechnicien.tn" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+21650232389" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;