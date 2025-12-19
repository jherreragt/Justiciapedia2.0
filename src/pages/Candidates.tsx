import React, { useState, useMemo } from 'react';
import { UserCircle, Building2, Filter, Search, Award, BookOpen, Languages, ChevronDown, Eye, ExternalLink, Star, Calendar, MapPin } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import HeroSlider from '../components/ui/HeroSlider';
import { candidates } from '../data/candidates';

const Candidates: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [institutionFilter, setInstitutionFilter] = useState('all');
  const [specializationFilter, setSpecializationFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [experienceFilter, setExperienceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  const slides = [
    {
      title: 'Aspirantes al Proceso de Formación',
      description: 'Conoce a los profesionales que aspiran a formar parte del sistema judicial guatemalteco.',
      videoUrl: 'https://videos.pexels.com/video-files/5725953/5725953-uhd_2560_1440_25fps.mp4',
    },
    {
      title: 'Proceso de Formación',
      description: 'Información sobre los procesos de selección y formación de aspirantes.',
      videoUrl: 'https://videos.pexels.com/video-files/6077245/6077245-hd_1920_1080_30fps.mp4',
    },
    {
      title: 'Transparencia y Acceso',
      description: 'Accede a información detallada sobre la trayectoria de cada aspirante.',
      videoUrl: 'https://videos.pexels.com/video-files/3141211/3141211-hd_1920_1080_25fps.mp4',
    },
  ];

  // Get unique values for filtering
  const institutions = useMemo(() => {
    return [...new Set(candidates.map(candidate => candidate.institution))];
  }, []);

  const specializations = useMemo(() => {
    return [...new Set(candidates.map(candidate => candidate.specialization))];
  }, []);

  const statuses = useMemo(() => {
    return [...new Set(candidates.map(candidate => candidate.status))];
  }, []);

  // Filter and sort candidates
  const filteredCandidates = useMemo(() => {
    let filtered = candidates.filter(candidate => {
      const matchesSearch = 
        candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.specialization.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesInstitution = institutionFilter === 'all' || candidate.institution === institutionFilter;
      const matchesSpecialization = specializationFilter === 'all' || candidate.specialization === specializationFilter;
      const matchesStatus = statusFilter === 'all' || candidate.status === statusFilter;
      
      let matchesExperience = true;
      if (experienceFilter !== 'all') {
        const years = candidate.yearsOfExperience;
        switch (experienceFilter) {
          case '0-5':
            matchesExperience = years <= 5;
            break;
          case '6-15':
            matchesExperience = years >= 6 && years <= 15;
            break;
          case '16-25':
            matchesExperience = years >= 16 && years <= 25;
            break;
          case '25+':
            matchesExperience = years > 25;
            break;
        }
      }
      
      return matchesSearch && matchesInstitution && matchesSpecialization && matchesStatus && matchesExperience;
    });

    // Sort candidates
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'experience':
          return b.yearsOfExperience - a.yearsOfExperience;
        case 'institution':
          return a.institution.localeCompare(b.institution);
        case 'specialization':
          return a.specialization.localeCompare(b.specialization);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, institutionFilter, specializationFilter, statusFilter, experienceFilter, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setInstitutionFilter('all');
    setSpecializationFilter('all');
    setStatusFilter('all');
    setExperienceFilter('all');
    setSortBy('name');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Activo':
        return 'bg-green-100 text-green-800';
      case 'Inactivo':
        return 'bg-gray-100 text-gray-800';
      case 'Retirado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const CandidateCard: React.FC<{ candidate: typeof candidates[0] }> = ({ candidate }) => (
    <Card className="group h-full flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-56 overflow-hidden relative">
        <img
          src={candidate.imageUrl}
          alt={candidate.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(candidate.status)}`}>
            {candidate.status}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
            <Star size={16} className="text-yellow-500" />
          </div>
        </div>
      </div>
      <CardContent className="flex-1 flex flex-col p-6">
        <div className="flex items-center mb-3 text-primary-600">
          <Building2 size={18} className="mr-2" />
          <span className="text-sm font-medium">{candidate.institution}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
          {candidate.name}
        </h3>
        <p className="text-gray-600 mb-2 font-medium">{candidate.role}</p>
        <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{candidate.description}</p>
        
        {/* Quick Stats */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Award size={14} className="mr-2 text-primary-600" />
            <span>{candidate.specialization}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar size={14} className="mr-2 text-primary-600" />
            <span>{candidate.yearsOfExperience} años de experiencia</span>
          </div>
          <div className="flex items-center text-gray-600">
            <BookOpen size={14} className="mr-2 text-primary-600" />
            <span>{candidate.education.length} título{candidate.education.length !== 1 ? 's' : ''}</span>
          </div>
        </div>

        <Button
          variant="primary"
          onClick={() => window.location.href = `/candidatos/${candidate.id}`}
          className="w-full group-hover:bg-primary-700 transition-colors"
        >
          Ver perfil completo
        </Button>
      </CardContent>
    </Card>
  );

  const CandidateListItem: React.FC<{ candidate: typeof candidates[0] }> = ({ candidate }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-full md:w-24 h-24 overflow-hidden rounded-lg flex-shrink-0 relative">
            <img
              src={candidate.imageUrl}
              alt={candidate.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1 right-1">
              <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium ${getStatusColor(candidate.status)}`}>
                {candidate.status}
              </span>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{candidate.name}</h3>
                <p className="text-gray-600 font-medium mb-1">{candidate.role}</p>
                <div className="flex items-center text-primary-600 mb-2">
                  <Building2 size={16} className="mr-1" />
                  <span className="text-sm">{candidate.institution}</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = `/candidatos/${candidate.id}`}
                className="mt-2 md:mt-0"
              >
                <Eye size={14} className="mr-1" />
                Ver perfil
              </Button>
            </div>
            
            <p className="text-gray-600 mb-3 line-clamp-2">{candidate.description}</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Award size={14} className="mr-1 text-primary-600" />
                <span>{candidate.specialization}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={14} className="mr-1 text-primary-600" />
                <span>{candidate.yearsOfExperience} años exp.</span>
              </div>
              <div className="flex items-center">
                <BookOpen size={14} className="mr-1 text-primary-600" />
                <span>{candidate.education.length} título{candidate.education.length !== 1 ? 's' : ''}</span>
              </div>
              {candidate.awards && candidate.awards.length > 0 && (
                <div className="flex items-center">
                  <Star size={14} className="mr-1 text-yellow-500" />
                  <span>{candidate.awards.length} reconocimiento{candidate.awards.length !== 1 ? 's' : ''}</span>
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
      title="Aspirantes al Proceso de Formación"
      description="Información sobre los aspirantes al proceso de formación en el sistema judicial guatemalteco."
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
            placeholder="Buscar aspirantes por nombre, cargo, institución o especialización..."
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
          <Card className="max-w-6xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                <div>
                  <label htmlFor="institution-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Institución
                  </label>
                  <select
                    id="institution-filter"
                    value={institutionFilter}
                    onChange={e => setInstitutionFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">Todas</option>
                    {institutions.map(institution => (
                      <option key={institution} value={institution}>{institution}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="specialization-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Especialización
                  </label>
                  <select
                    id="specialization-filter"
                    value={specializationFilter}
                    onChange={e => setSpecializationFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">Todas</option>
                    {specializations.map(spec => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Estado
                  </label>
                  <select
                    id="status-filter"
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">Todos</option>
                    {statuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="experience-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Experiencia
                  </label>
                  <select
                    id="experience-filter"
                    value={experienceFilter}
                    onChange={e => setExperienceFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">Todos</option>
                    <option value="0-5">0-5 años</option>
                    <option value="6-15">6-15 años</option>
                    <option value="16-25">16-25 años</option>
                    <option value="25+">Más de 25 años</option>
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
                    <option value="experience">Experiencia</option>
                    <option value="institution">Institución</option>
                    <option value="specialization">Especialización</option>
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

              {(searchQuery || institutionFilter !== 'all' || specializationFilter !== 'all' || statusFilter !== 'all' || experienceFilter !== 'all') && (
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
          Mostrando {filteredCandidates.length} de {candidates.length} aspirantes
          {(searchQuery || institutionFilter !== 'all' || specializationFilter !== 'all' || statusFilter !== 'all' || experienceFilter !== 'all') && (
            <span className="ml-1">
              {searchQuery && `para "${searchQuery}"`}
              {institutionFilter !== 'all' && ` en ${institutionFilter}`}
              {specializationFilter !== 'all' && ` especializados en ${specializationFilter}`}
              {statusFilter !== 'all' && ` con estado ${statusFilter}`}
              {experienceFilter !== 'all' && ` con ${experienceFilter} años de experiencia`}
            </span>
          )}
        </p>
      </div>

      {/* Candidates Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCandidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {filteredCandidates.map((candidate) => (
            <CandidateListItem key={candidate.id} candidate={candidate} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredCandidates.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <UserCircle size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No se encontraron aspirantes
          </h3>
          <p className="text-gray-600 mb-4">
            No hay aspirantes que coincidan con los criterios de búsqueda.
          </p>
          <Button
            variant="outline"
            onClick={clearFilters}
          >
            Limpiar filtros
          </Button>
        </div>
      )}

      {/* Statistics Section */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Estadísticas de Aspirantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {candidates.length}
            </div>
            <div className="text-gray-600">Total de Aspirantes</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {candidates.filter(c => c.status === 'Activo').length}
            </div>
            <div className="text-gray-600">Aspirantes Activos</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {Math.round(candidates.reduce((sum, c) => sum + c.yearsOfExperience, 0) / candidates.length)}
            </div>
            <div className="text-gray-600">Años Promedio de Experiencia</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {specializations.length}
            </div>
            <div className="text-gray-600">Especializaciones</div>
          </div>
        </div>
      </div>

      {/* Specializations Overview */}
      <div className="mt-8 bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Aspirantes por Especialización
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specializations.map(spec => {
            const count = candidates.filter(c => c.specialization === spec).length;
            const percentage = Math.round((count / candidates.length) * 100);
            return (
              <div
                key={spec}
                className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => setSpecializationFilter(spec)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{spec}</h3>
                  <span className="text-sm text-gray-600">{percentage}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{count} aspirante{count !== 1 ? 's' : ''}</span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default Candidates;