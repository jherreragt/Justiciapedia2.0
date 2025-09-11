import React from 'react';
import Container from '../ui/Container';

interface Stat {
  value: string;
  label: string;
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    { value: '350+', label: 'Perfiles de candidatos' },
    { value: '15', label: 'Comisiones de postulación' },
    { value: '25', label: 'Instituciones de justicia' },
    { value: '120+', label: 'Mapas de poder' },
  ];

  return (
    <section className="py-12 bg-primary-700 text-white">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Datos de Transparencia</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            JusticiapedIA recopila y analiza datos sobre el sistema judicial guatemalteco
            para promover la transparencia y la rendición de cuentas.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;