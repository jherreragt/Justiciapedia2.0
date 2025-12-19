import React from 'react';
import { Twitter, Instagram, Scale, ExternalLink, Youtube } from 'lucide-react';
import { FOOTER_SECTIONS, SOCIAL_LINKS, SITE_NAME } from '../../utils/constants';
import Container from '../ui/Container';

const TikTokIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'twitter':
        return <Twitter size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      case 'tiktok':
        return <TikTokIcon size={20} />;
      case 'youtube':
        return <Youtube size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="border-b border-primary-800">
        <Container className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Site */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-3">
                  <Scale size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{SITE_NAME}</h3>
                  <p className="text-primary-300 text-sm">Transparencia Judicial</p>
                </div>
              </div>
              <p className="text-primary-200 mb-6 leading-relaxed">
                Plataforma cívica dedicada a promover la transparencia en los procesos de
                designación de autoridades judiciales en Guatemala.
              </p>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = getSocialIcon(social.platform);
                  return Icon ? (
                    <a
                      key={social.platform}
                      href={social.href}
                      className="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Seguir en ${social.platform}`}
                    >
                      {Icon}
                    </a>
                  ) : null;
                })}
              </div>
            </div>

            {/* Footer Sections */}
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold mb-6 text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.title}</span>
                        <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Contact Info & Legal */}
      <div className="bg-primary-950">
        <Container>
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Contact Information */}
              <div>
                <h4 className="font-semibold text-white mb-4">Información de Contacto</h4>
                <div className="space-y-3">
                  <a
                    href="mailto:contacto@justiciapedia.org.gt"
                    className="flex items-center text-primary-200 hover:text-white transition-colors duration-200 group"
                  >
                    <Mail size={16} className="mr-3 group-hover:scale-110 transition-transform" />
                    contacto@justiciapedia.org.gt
                  </a>
                  <a
                    href="tel:+50222334455"
                    className="flex items-center text-primary-200 hover:text-white transition-colors duration-200 group"
                  >
                    <Phone size={16} className="mr-3 group-hover:scale-110 transition-transform" />
                    +502 2233-4455
                  </a>
                  <div className="flex items-start text-primary-200">
                    <MapPin size={16} className="mr-3 mt-0.5 flex-shrink-0" />
                    <span>Ciudad de Guatemala, Guatemala</span>
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div>
                <h4 className="font-semibold text-white mb-4">Nuestra Misión</h4>
                <p className="text-primary-200 text-sm leading-relaxed">
                  Fortalecer la democracia guatemalteca mediante la promoción de la transparencia
                  y la rendición de cuentas en el sistema de justicia.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="font-semibold text-white mb-4">Mantente Informado</h4>
                <p className="text-primary-200 text-sm mb-4">
                  Recibe actualizaciones sobre procesos judiciales y noticias importantes.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="flex-1 px-3 py-2 bg-primary-800 border border-primary-700 rounded-l-lg text-white placeholder-primary-300 focus:outline-none focus:border-primary-500"
                  />
                  <button className="px-4 py-2 bg-white text-primary-900 rounded-r-lg hover:bg-primary-100 transition-colors font-medium">
                    Suscribir
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary-800">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
                <p className="text-primary-300 text-sm">
                  © {currentYear} {SITE_NAME}. Todos los derechos reservados.
                </p>
                <div className="flex space-x-4 text-sm">
                  <a href="/legal/privacidad" className="text-primary-300 hover:text-white transition-colors">
                    Privacidad
                  </a>
                  <a href="/legal/terminos" className="text-primary-300 hover:text-white transition-colors">
                    Términos
                  </a>
                  <a href="/legal/cookies" className="text-primary-300 hover:text-white transition-colors">
                    Cookies
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-primary-300">
                <span>Hecho con</span>
                <span className="text-red-400">♥</span>
                <span>para Guatemala</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;