import React from 'react';
import { Search, ArrowRight, Shield, Users, FileText } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-justice-800 text-white overflow-hidden -mt-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

      <Container className="relative z-10 pt-16 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
            <Shield size={16} className="mr-2" />
            Plataforma Oficial de Transparencia Judicial
          </div>

          {/* Main Heading */}
          <h1 className="heading-primary text-white mb-6 leading-tight">
            Transparencia en la
            <span className="block text-gradient bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
              Justicia de Guatemala
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Información verificada sobre los procesos de designación de autoridades judiciales
            para un sistema de justicia independiente, transparente y accesible.
          </p>

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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

          {/* Enhanced Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar candidatos, instituciones, procesos o noticias..."
                className="w-full h-16 pl-6 pr-16 rounded-2xl shadow-strong text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-4 focus:ring-white/30 bg-white/95 backdrop-blur-sm border border-white/20 text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white p-4 rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-medium hover:shadow-strong hover:scale-105"
                aria-label="Buscar"
              >
                <Search size={24} />
              </button>
            </div>
            
            {/* Search Suggestions */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="text-white/70 text-sm mr-2">Búsquedas populares:</span>
              {['magistrado', 'corte suprema', 'comisión postulación', 'fiscal general'].map((term) => (
                <button
                  key={term}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/90 transition-colors duration-200 border border-white/20"
                  onClick={() => {
                    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                    if (input) {
                      input.value = term;
                      input.focus();
                    }
                  }}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Información respaldada por:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-white/60 text-sm font-medium">Organismo Judicial</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/60 text-sm font-medium">Ministerio Público</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/60 text-sm font-medium">Sociedad Civil</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;