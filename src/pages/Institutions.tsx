import React, { useState, useMemo } from 'react';
import { Building2, Search, Filter, MapPin, Phone, Mail, Globe, Users, Clock, ChevronDown } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import HeroSlider from '../components/ui/HeroSlider';
import { institutions } from '../data/institutions';

const Institutions: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  const slides = [
    {
      title: 'Sistema Judicial de Guatemala',
      description: 'Conoce las instituciones que conforman el sistema de justicia y su rol en la sociedad.',
      imageUrl: 'https://images.pexels.com/photos/1536357/pexels-photo-1536357.jpeg',
    },
    {
      title: 'Transparencia y Acceso',
      description: 'Información actualizada sobre el funcionamiento de las instituciones judiciales.',
      imageUrl: 'https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg',
    },
    {
      title: 'Participación Ciudadana',
      description: 'Descubre cómo puedes involucrarte en el fortalecimiento del sistema judicial.',
      imageUrl: 'https://images.pexels.com/photos/8111965/pexels-photo-8111965.jpeg',
    },
  ];

  // Get unique institution types for filtering
  const institutionTypes = useMemo(() => {
    return [...new Set(institutions.map(inst => inst.type))];
  }, []);

  // Filter and sort institutions
  const filteredInstitutions = useMemo(() => {
    let filtered = institutions.filter(institution => {
      const matchesSearch = 
        institution.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        institution.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        institution.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = typeFilter === 'all' || institution.type === typeFilter;
      
      return matchesSearch && matchesType;
    });

    // Sort institutions
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'type':
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, typeFilter, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setTypeFilter('all');
    setSortBy('name');
  };

  const InstitutionCard: React.FC<{ institution: typeof institutions[0] }> = ({ institution }) => (
    <Card className="group h-full flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden relative">
        <img
          src={institution.imageUrl}
          alt={institution.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {institution.type}
          </span>
        </div>
      </div>
      <CardContent className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
          {institution.name}
        </h3>
        <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{institution.description}</p>
        
        {/* Quick Info */}
        <div className="space-y-2 mb-4 text-sm text-gray-600">
          {institution.schedule && (
            <div className="flex items-center">
              <Clock size={14} className="mr-2 text-primary-600" />
              <span>{institution.schedule}</span>
            </div>
          )}
          {institution.phone && (
            <div className="flex items-center">
              <Phone size={14} className="mr-2 text-primary-600" />
              <span>{institution.phone}</span>
            </div>
          )}
          {institution.website && (
            <div className="flex items-center">
              <Globe size={14} className="mr-2 text-primary-600" />
              <span className="truncate">{institution.website}</span>
            </div>
          )}
        </div>

        <Button
          variant="primary"
          onClick={() => window.location.href = `/instituciones/${institution.id}`}
          className="w-full group-hover:bg-primary-700 transition-colors"
        >
          Ver detalles
        </Button>
      </CardContent>
    </Card>
  );

  const InstitutionListItem: React.FC<{ institution: typeof institutions[0] }> = ({ institution }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-full md:w-32 h-24 md:h-20 overflow-hidden rounded-lg flex-shrink-0">
            <img
              src={institution.imageUrl}
              alt={institution.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{institution.name}</h3>
                <span className="inline-block bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm font-medium">
                  {institution.type}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = `/instituciones/${institution.id}`}
                className="mt-2 md:mt-0"
              >
                Ver detalles
              </Button>
            </div>
            
            <p className="text-gray-600 mb-3 line-clamp-2">{institution.description}</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {institution.schedule && (
                <div className="flex items-center">
                  <Clock size={14} className="mr-1 text-primary-600" />
                  <span>{institution.schedule}</span>
                </div>
              )}
              {institution.phone && (
                <div className="flex items-center">
                  <Phone size={14} className="mr-1 text-primary-600" />
                  <span>{institution.phone}</span>
                </div>
              )}
              {institution.email && (
                <div className="flex items-center">
                  <Mail size={14} className="mr-1 text-primary-600" />
                  <span>{institution.email}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <PageLayout
      title="Instituciones de Justicia"
      description="Información sobre las principales instituciones del sistema de justicia en Guatemala."
    >
      <HeroSlider slides={slides} />

      {/* Search and Filter Section */}
      <div className="mt-16 mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar por nombre, tipo o descripción..."
            className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
          />
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center"
          >
            <Filter size={16} className="mr-2" />
            Filtros avanzados
            <ChevronDown size={16} className={`ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Institución
                  </label>
                  <select
                    id="type-filter"
                    value={typeFilter}
                    onChange={e => setTypeFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">Todos los tipos</option>
                    {institutionTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-2">
                    Ordenar por
                  </label>
                  <select
                    id="sort-by"
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="name">Nombre</option>
                    <option value="type">Tipo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vista
                  </label>
                  <div className="flex rounded-md border border-gray-300 overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-primary-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Cuadrícula
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
                        viewMode === 'list'
                          ? 'bg-primary-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Lista
                    </button>
                  </div>
                </div>
              </div>

              {(searchQuery || typeFilter !== 'all') && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Results Summary */}
      <div className="mb-6 text-center">
        <p className="text-gray-600">
          Mostrando {filteredInstitutions.length} de {institutions.length} instituciones
          {(searchQuery || typeFilter !== 'all') && (
            <span className="ml-1">
              {searchQuery && `para "${searchQuery}"`}
              {typeFilter !== 'all' && ` en ${typeFilter}`}
            </span>
          )}
        </p>
      </div>

      {/* Institutions Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInstitutions.map((institution) => (
            <InstitutionCard key={institution.id} institution={institution} />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {filteredInstitutions.map((institution) => (
            <InstitutionListItem key={institution.id} institution={institution} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredInstitutions.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Building2 size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No se encontraron instituciones
          </h3>
          <p className="text-gray-600 mb-4">
            No hay instituciones que coincidan con los criterios de búsqueda.
          </p>
          <Button
            variant="outline"
            onClick={clearFilters}
          >
            Limpiar filtros
          </Button>
        </div>
      )}

      {/* Institution Types Overview */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Tipos de Instituciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {institutionTypes.map(type => {
            const count = institutions.filter(inst => inst.type === type).length;
            return (
              <div
                key={type}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setTypeFilter(type)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{type}</h3>
                    <p className="text-sm text-gray-600">{count} institución{count !== 1 ? 'es' : ''}</p>
                  </div>
                  <Users size={20} className="text-primary-600" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default Institutions;