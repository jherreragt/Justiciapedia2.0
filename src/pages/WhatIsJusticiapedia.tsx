import React from 'react';
import { AlertCircle, Target, Eye, Users, Shield, BookOpen, TrendingUp, CheckCircle } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';

const WhatIsJusticiapedia: React.FC = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Desinterés ciudadano',
      description: 'Falta de participación en procesos clave'
    },
    {
      icon: Eye,
      title: 'Baja comprensión',
      description: 'Desconocimiento del funcionamiento institucional'
    },
    {
      icon: Shield,
      title: 'Débil control social',
      description: 'Limitada capacidad de vigilancia ciudadana'
    },
    {
      icon: Users,
      title: 'Desconfianza institucional',
      description: 'Pérdida de credibilidad en las instituciones'
    },
    {
      icon: TrendingUp,
      title: 'Normalización de la impunidad',
      description: 'Aceptación pasiva de prácticas irregulares'
    }
  ];

  const objectives = [
    {
      icon: Users,
      title: 'Acercar la justicia a la ciudadanía',
      description: 'Traduciendo un sistema complejo en información clara y comprensible.'
    },
    {
      icon: BookOpen,
      title: 'Democratizar el acceso a la información',
      description: 'Facilitando datos, documentos y explicaciones en un solo lugar.'
    },
    {
      icon: Eye,
      title: 'Fortalecer la transparencia',
      description: 'Visibilizando procesos, actores y decisiones clave del sector justicia.'
    },
    {
      icon: Target,
      title: 'Promover participación informada',
      description: 'Para que la ciudadanía pueda opinar, vigilar y exigir con conocimiento.'
    }
  ];

  return (
    <PageLayout
      title="¿Qué es Justiciapedia?"
      description="Conoce más sobre nuestra plataforma y nuestra misión de transparentar el sector justicia en Guatemala."
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-2xl p-8 md:p-12 lg:p-16 mb-16 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            ¿Qué es Justiciapedia?
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              Justiciapedia es una <strong className="text-primary-700">herramienta digital ciudadana</strong> que busca acercar el sector justicia a la población, haciendo comprensibles procesos que históricamente han sido técnicos, cerrados y poco accesibles.
            </p>
            <p>
              En Guatemala, la justicia ha sido tradicionalmente un tema reservado para juristas, académicos y pequeños círculos especializados. Esto ha generado distancia, desinformación y desconfianza. <strong className="text-primary-700">Justiciapedia rompe esa barrera</strong>, poniendo la información pública al alcance de todas y todos, de forma clara, interactiva y transparente.
            </p>
            <p>
              Aquí podrás entender <strong className="text-primary-700">quiénes toman las decisiones</strong>, cómo se eligen las autoridades, qué instituciones intervienen y qué derechos tiene la ciudadanía para informarse y participar.
            </p>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
            <div className="flex items-center">
              <AlertCircle size={32} className="text-red-600 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">¿Qué problema aborda?</h2>
                <p className="text-lg text-gray-700 mt-1">Un sistema complejo, una ciudadanía excluida</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 md:p-10">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              La falta de información clara y accesible sobre el sector justicia genera múltiples consecuencias negativas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <Icon size={24} className="text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{problem.title}</h3>
                    <p className="text-gray-600 text-sm">{problem.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>Cuando la ciudadanía no entiende cómo funciona la justicia</strong>, es más difícil exigir rendición de cuentas y defender la democracia. <strong className="text-red-700">Justiciapedia nace para cerrar esa brecha de información y conocimiento.</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Objectives Section */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 border-b border-blue-100">
            <div className="flex items-center">
              <Target size={32} className="text-blue-600 mr-4" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">¿Qué buscamos con Justiciapedia?</h2>
                <p className="text-lg text-gray-700 mt-1">Nuestros objetivos</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 md:p-10">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Justiciapedia busca:
            </p>

            <div className="space-y-6">
              {objectives.map((objective, index) => {
                const Icon = objective.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mr-5">
                      <Icon size={28} className="text-blue-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{objective.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <CheckCircle size={24} className="text-green-500" />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Guiding Principle Section - Highlighted */}
      <div className="mb-16">
        <Card className="overflow-hidden bg-gradient-to-br from-green-600 to-blue-700 text-white shadow-2xl">
          <CardContent className="p-8 md:p-12 lg:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <Shield size={56} className="mx-auto text-green-100" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Nuestro principio rector
              </h2>
              <div className="h-1 w-24 bg-green-300 mx-auto mb-8"></div>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white">
                A mayor transparencia,<br />menor impunidad.
              </p>
              <p className="text-lg md:text-xl text-green-50 leading-relaxed max-w-2xl mx-auto">
                Creemos que la información pública, cuando es clara y accesible, se convierte en una herramienta poderosa para combatir la impunidad y fortalecer una sociedad más justa, democrática y equitativa.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Explora Justiciapedia
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Descubre cómo funcionan las instituciones, conoce a los aspirantes y accede a información transparente sobre el sector justicia en Guatemala.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.href = '/instituciones'}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
          >
            Ver Instituciones
          </button>
          <button
            onClick={() => window.location.href = '/candidatos'}
            className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Conocer Aspirantes
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default WhatIsJusticiapedia;
