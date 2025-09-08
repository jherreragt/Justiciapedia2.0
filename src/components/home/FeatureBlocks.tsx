import React from 'react';
import { Users, Network, Search } from 'lucide-react';
import Container from '../ui/Container';

const FeatureBlocks: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Explora Perfiles',
      description: 'Conoce a los candidatos a puestos clave en el sistema judicial guatemalteco.',
      link: '/candidatos',
    },
    {
      icon: Users,
      title: 'Sigue las Comisiones',
      description: 'Mantente informado sobre los procesos de postulación y selección.',
      link: '/comisiones',
    },
    {
      icon: FileText,
      title: 'Notas de Interés',
      description: 'Lee las últimas noticias y análisis sobre el sistema judicial.',
      link: '/noticias',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <a
                key={index}
                href={feature.link}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <Icon size={24} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeatureBlocks;