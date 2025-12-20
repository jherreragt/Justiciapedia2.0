import React from 'react';
import { Scale } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full">
        {/* Main Info Box */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 shadow-2xl overflow-hidden">
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

            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                Justiciapedia es una <span className="font-semibold text-white">plataforma ciudadana</span> que promueve la transparencia y la participación
                en los procesos de selección de autoridades del sistema de justicia en Guatemala.
              </p>
            </div>

            {/* Decorative bottom line */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
