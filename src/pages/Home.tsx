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
      id: 'csj',
      title: 'Corte Suprema de Justicia',
      description: 'Máximo tribunal de justicia en Guatemala, responsable de garantizar el estado de derecho.',
      imageUrl: 'https://images.pexels.com/photos/1536357/pexels-photo-1536357.jpeg',
      link: '/instituciones/csj',
    },
    {
      id: 'cc',
      title: 'Corte de Constitucionalidad',
      description: 'Tribunal permanente con funciones específicas en materia constitucional.',
      imageUrl: 'https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg',
      link: '/instituciones/cc',
    },
    {
      id: 'mp',
      title: 'Ministerio Público',
      description: 'Institución auxiliar de la administración de justicia, responsable de la acción penal pública.',
      imageUrl: 'https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg',
      link: '/instituciones/mp',
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