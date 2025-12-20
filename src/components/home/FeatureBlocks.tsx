import React from 'react';
import { Users, Network, Search, FileText } from 'lucide-react';
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
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <a
                key={index}
                href={feature.link}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="h-14 w-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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