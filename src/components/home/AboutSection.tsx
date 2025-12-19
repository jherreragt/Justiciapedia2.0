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
        {/* Main Info Box */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 rounded-2xl shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

            {/* Content */}
            <div className="relative px-8 py-10 md:px-12 md:py-14">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Scale className="w-10 h-10 text-white" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
                ¿Qué es Justiciapedia?
              </h2>

              <div className="space-y-4 text-center">
                <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                  Justiciapedia es una <span className="font-semibold text-white">plataforma ciudadana</span> que promueve la transparencia y la participación
                  en los procesos de selección de autoridades del sistema de justicia en Guatemala.
                </p>
                <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                  Nuestro objetivo es brindar información accesible y comprensible sobre las instituciones
                  de justicia, las comisiones de postulación y los candidatos, para <span className="font-semibold text-white">fortalecer la democracia
                  y el estado de derecho</span>.
                </p>
              </div>

              {/* Decorative bottom line */}
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm leading-relaxed">
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
