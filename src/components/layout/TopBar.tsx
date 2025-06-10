import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from 'lucide-react';
import Container from '../ui/Container';
import { SOCIAL_LINKS } from '../../utils/constants';

const TopBar: React.FC = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return <Facebook size={14} />;
      case 'twitter':
        return <Twitter size={14} />;
      case 'instagram':
        return <Instagram size={14} />;
      case 'linkedin':
        return <Linkedin size={14} />;
      case 'youtube':
        return <Youtube size={14} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-primary-900 text-white py-2 text-sm border-b border-primary-800">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:contacto@justiciapedia.org.gt" 
              className="flex items-center hover:text-primary-200 transition-colors duration-200 group"
            >
              <Mail size={14} className="mr-2 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">contacto@justiciapedia.org.gt</span>
              <span className="sm:hidden">Contacto</span>
            </a>
            <a 
              href="tel:+50222334455" 
              className="flex items-center hover:text-primary-200 transition-colors duration-200 group"
            >
              <Phone size={14} className="mr-2 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">+502 2233-4455</span>
              <span className="sm:hidden">Teléfono</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-primary-300 text-xs mr-2 hidden md:inline">Síguenos:</span>
            <div className="flex items-center space-x-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = getSocialIcon(social.platform);
                return Icon ? (
                  <a
                    key={social.platform}
                    href={social.href}
                    className="hover:text-primary-200 transition-all duration-200 transform hover:scale-110 p-1 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Seguir en ${social.platform}`}
                    title={`Seguir en ${social.platform}`}
                  >
                    {Icon}
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;