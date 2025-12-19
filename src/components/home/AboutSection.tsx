import React from 'react';
import { BookOpen, Users, Scale, Eye } from 'lucide-react';
import Container from '../ui/Container';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Transparencia',
      description: 'Información clara y accesible sobre los procesos de selección de autoridades judiciales.',
    },
    {
      icon: Users,
      title: 'Participación Ciudadana',
      description: 'Herramientas para que la ciudadanía conozca y participe en los procesos de justicia.',
    },
    {
      icon: Scale,
      title: 'Independencia Judicial',
      description: 'Promovemos un sistema de justicia independiente, imparcial y profesional.',
    },
    {
      icon: BookOpen,
      title: 'Educación Cívica',
      description: 'Recursos educativos para comprender el funcionamiento del sistema de justicia.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            ¿Qué es Justiciapedia?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Justiciapedia es una plataforma ciudadana que promueve la transparencia y la participación
            en los procesos de selección de autoridades del sistema de justicia en Guatemala.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Nuestro objetivo es brindar información accesible y comprensible sobre las instituciones
            de justicia, las comisiones de postulación y los candidatos, para fortalecer la democracia
            y el estado de derecho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
