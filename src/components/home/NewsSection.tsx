import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Card, { CardContent } from '../ui/Card';
import { newsArticles } from '../../data/news';

const NewsSection: React.FC = () => {
  // Get the 3 most recent articles
  const recentArticles = newsArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Procesos de Selección': 'bg-blue-100 text-blue-800',
      'Análisis': 'bg-purple-100 text-purple-800',
      'Entrevistas': 'bg-green-100 text-green-800',
      'Noticias': 'bg-yellow-100 text-yellow-800',
      'Reportajes': 'bg-red-100 text-red-800',
      'Opinión': 'bg-indigo-100 text-indigo-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Notas de Interés</h2>
            <p className="text-gray-600">
              Las últimas noticias y análisis sobre el sistema judicial
            </p>
          </div>
          <a
            href="/noticias"
            className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
          >
            Ver todas las notas
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <Card
              key={article.id}
              className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => window.location.href = `/noticias/${article.id}`}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              <CardContent className="flex-1 flex flex-col p-6">
                <div className="flex items-center mb-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(article.date)}
                  </div>
                  {article.readTime && (
                    <span className="ml-3">
                      {article.readTime} min lectura
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  {article.author && (
                    <span className="text-sm text-gray-500">
                      Por {article.author}
                    </span>
                  )}
                  <div className="text-primary-600 hover:text-primary-700 font-medium flex items-center text-sm">
                    Leer más
                    <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewsSection;