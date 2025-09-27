import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Download, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // CV Download Handler
  const handleCVDownload = () => {
    const cvUrl = '/my_cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Bacem-Ben-Akkari-CV.pdf'; // Filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // EmailJS Integration (Recommended for form)
  const handleEmailJSSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      // EmailJS configuration - Replace with your actual credentials
      const serviceId = 'service_your_id';
      const templateId = 'template_your_id';
      const publicKey = 'your_public_key';

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Bacem Ben Akkari',
          to_email: 'bacem.benakkari@polytechnicien.tn',
          reply_to: formData.email
        },
        publicKey
      );
      
      setSubmitStatus('success');
      setStatusMessage('Message envoyé avec succès! Je vous répondrai bientôt.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Erreur lors de l\'envoi. Veuillez réessayer.');
    }

    setTimeout(() => {
      setSubmitStatus('idle');
      setStatusMessage('');
    }, 5000);
  };

  const handleSubmit = handleEmailJSSubmit;

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bacem.benakkari@polytechnicien.tn",
      action: "mailto:bacem.benakkari@polytechnicien.tn",
      color: "blue"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+216 50 232 389",
      action: "tel:+21650232389",
      color: "teal"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Sidi bou ali, Sousse, Tunisie",
      action: "",
      color: "orange"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@bacembenakkari",
      url: "https://github.com/bacembenakkari", // Replace with actual URL
      color: "gray"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "@bacembenakkari",
      url: "https://linkedin.com/in/bacembenakkari", // Replace with actual URL
      color: "blue"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Contact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Intéressé par une collaboration ? N'hésitez pas à me contacter pour discuter 
            de vos projets ou opportunités professionnelles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Informations de Contact</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{info.label}</div>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-blue-100 hover:text-white transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-blue-100">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-4">Suivez-moi</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <button 
                  onClick={handleCVDownload}
                  className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 active:scale-95 transform duration-150"
                >
                  <Download size={18} />
                  <span>Télécharger CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Envoyez-moi un message</h3>
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={submitStatus === 'loading'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={submitStatus === 'loading'}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={submitStatus === 'loading'}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    disabled={submitStatus === 'loading'}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send size={20} className={submitStatus === 'loading' ? 'animate-pulse' : ''} />
                  <span>
                    {submitStatus === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2025 Bacem Ben Akkari. Tous droits réservés.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;