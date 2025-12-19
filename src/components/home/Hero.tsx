import React from 'react';
import HeroSlider from '../ui/HeroSlider';

const Hero: React.FC = () => {
  const slides = [
    {
      title: 'Justiciapedia',
      description: 'Una plataforma ciudadana para conocer, entender y vigilar el sector justicia en Guatemala.',
      videoUrl: 'https://videos.pexels.com/video-files/5725953/5725953-uhd_2560_1440_25fps.mp4',
    },
    {
      title: 'Conoce el sector justicia',
      description: 'Una plataforma ciudadana para conocer, entender y vigilar el sector justicia en Guatemala.',
      videoUrl: 'https://videos.pexels.com/video-files/6077245/6077245-hd_1920_1080_30fps.mp4',
    },
    {
      title: 'Entiende cómo se eligen las autoridades',
      description: 'Una plataforma ciudadana para conocer, entender y vigilar el sector justicia en Guatemala.',
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