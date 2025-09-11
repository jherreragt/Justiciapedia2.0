import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeatureBlocks from '../components/home/FeatureBlocks';
import FeaturedSection from '../components/home/FeaturedSection';
import StatsSection from '../components/home/StatsSection';
import NewsSection from '../components/home/NewsSection';

const Home: React.FC = () => {
  const featuredInstitutions = [
    {
      id: 'institution-1',
      title: 'Corte Suprema de Justicia',
      description: 'Máximo tribunal de justicia en Guatemala, responsable de garantizar el estado de derecho.',
      imageUrl: 'https://raw.githubusercontent.com/RedCiudadana/Instituciones-Justiciapedia/gh-pages/1.-Corte-Suprema-de-Justicia-(CSJ).png',
      link: '/instituciones/institution-1',
    },
    {
      id: 'institution-6',
      title: 'Corte de Constitucionalidad',
      description: 'Tribunal permanente con funciones específicas en materia constitucional.',
      imageUrl: 'https://raw.githubusercontent.com/RedCiudadana/Instituciones-Justiciapedia/gh-pages/6.-Corte-de-Constitucionalidad-(CC).png',
      link: '/instituciones/institution-6',
    },
    {
      id: 'institution-7',
      title: 'Ministerio Público',
      description: 'Institución auxiliar de la administración de justicia, responsable de la acción penal pública.',
      imageUrl: 'https://raw.githubusercontent.com/RedCiudadana/Instituciones-Justiciapedia/gh-pages/7.-Ministerio-Publico-(MP).png',
      link: '/instituciones/institution-7',
    },
  ];

  const featuredCandidates = [
    {
      id: '1',
      title: 'María Eugenia Morales',
      description: 'Candidata a magistrada de la Corte Suprema de Justicia con experiencia en derecho constitucional.',
      imageUrl: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg',
      link: '/candidatos/1',
    },
    {
      id: '2',
      title: 'Juan Carlos Rodríguez',
      description: 'Candidato a magistrado de la Corte de Constitucionalidad con amplia trayectoria académica.',
      imageUrl: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg',
      link: '/candidatos/2',
    },
    {
      id: '3',
      title: 'Ana Lucía Castillo',
      description: 'Candidata a Fiscal General con especialización en derechos humanos y justicia transicional.',
      imageUrl: 'https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg',
      link: '/candidatos/3',
    },
  ];

  return (
    <Layout>
      <Hero />
      <FeatureBlocks />
      
      <FeaturedSection 
        title="Instituciones de Justicia" 
        description="Conoce las principales instituciones del sistema de justicia en Guatemala."
        items={featuredInstitutions}
        viewAllLink="/instituciones"
      />
      
      <StatsSection />
      
      <FeaturedSection 
        title="Perfiles de Candidatos" 
        description="Explora los perfiles de los candidatos a puestos clave en el sistema judicial."
        items={featuredCandidates}
        viewAllLink="/candidatos"
      />

      <NewsSection />
    </Layout>
  );
};

export default Home;