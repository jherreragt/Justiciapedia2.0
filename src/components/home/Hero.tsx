import React from 'react';
import { ArrowRight, Shield, Users, FileText } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import HeroSlider from '../ui/HeroSlider';

const Hero: React.FC = () => {
  const slides = [
    {
      title: 'Transparencia en la Justicia de Guatemala',
      description: 'Información verificada sobre los procesos de designación de autoridades judiciales para un sistema de justicia independiente, transparente y accesible.',
      videoUrl: 'https://videos.pexels.com/video-files/5725953/5725953-uhd_2560_1440_25fps.mp4',
    },
    {
      title: 'Sistema Judicial Independiente',
      description: 'Conoce a los profesionales que aspiran a formar parte de las instituciones judiciales y su trayectoria.',
      videoUrl: 'https://videos.pexels.com/video-files/6077245/6077245-hd_1920_1080_30fps.mp4',
    },
    {
      title: 'Instituciones de Justicia',
      description: 'Explora las instituciones que conforman el sistema de justicia guatemalteco y su rol en la sociedad.',
      videoUrl: 'https://videos.pexels.com/video-files/3141211/3141211-hd_1920_1080_25fps.mp4',
    },
  ];

  return (
    <div className="relative -mt-8">
      <HeroSlider slides={slides} autoplayInterval={7000} />

      <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-justice-800 text-white">
        <Container className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
              <Shield size={16} className="mr-2" />
              Plataforma Oficial de Transparencia Judicial
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
              <div className="flex items-center justify-center md:justify-start text-white/80">
                <Users size={20} className="mr-3 text-primary-200" />
                <span className="text-sm font-medium">350+ Perfiles Verificados</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-white/80">
                <FileText size={20} className="mr-3 text-primary-200" />
                <span className="text-sm font-medium">Documentos Oficiales</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-white/80">
                <Shield size={20} className="mr-3 text-primary-200" />
                <span className="text-sm font-medium">Información Verificada</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-primary-800 hover:bg-primary-50 shadow-medium hover:shadow-strong font-semibold"
                onClick={() => window.location.href = '/candidatos'}
              >
                <Users size={20} className="mr-2" />
                Explorar Perfiles
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold"
                onClick={() => window.location.href = '/documentacion'}
              >
                Más Información
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;