import React from 'react';
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
    </div>
  );
};

export default Hero;