import React, { useState, useMemo } from 'react';
import { Users, Calendar, Search, Filter, FileText, Clock, CheckCircle, AlertCircle, XCircle, ChevronDown, Download, Eye, TrendingUp, Award, Target } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import VideoHero from '../components/ui/VideoHero';
import { commissions } from '../data/commissions';

const Commissions: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedCommission, setExpandedCommission] = useState<string | null>(null);

  // Get unique types and statuses for filtering
  const commissionTypes = useMemo(() => {
    return [...new Set(commissions.map(comm => comm.type))];
  }, []);

  const commissionStatuses = useMemo(() => {
    return [...new Set(commissions.map(comm => comm.status))];
  }, []);

  // Filter and sort commissions
  const filteredCommissions = useMemo(() => {
    let filtered = commissions.filter(commission => {
      const matchesSearch = 
        commission.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        commission.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
        commission.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        commission.type.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || commission.status === statusFilter;
      const matchesType = typeFilter === 'all' || commission.type === typeFilter;
      
      return matchesSearch && matchesStatus && matchesType;
    });

    // Sort commissions
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
        case 'name':
          return a.name.localeCompare(b.name);
        case 'status':
          return a.status.localeCompare(b.status);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, statusFilter, typeFilter, sortBy]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completada':
        return <CheckCircle size={16} className="text-green-600" />;
      case 'En proceso':
        return <AlertCircle size={16} className="text-yellow-600" />;
      case 'Pendiente':
        return <Clock size={16} className="text-gray-600" />;
      case 'Finalizada':
        return <CheckCircle size={16} className="text-blue-600" />;
      default:
        return <XCircle size={16} className="text-red-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completada':
        return 'bg-green-100 text-green-800';
      case 'En proceso':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pendiente':
        return 'bg-gray-100 text-gray-800';
      case 'Finalizada':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  const getPhaseProgress = (commission: typeof commissions[0]) => {
    const completedPhases = commission.phases.filter(p => p.status === 'Completada').length;
    return Math.round((completedPhases / commission.phases.length) * 100);
  };

  const getCurrentPhase = (commission: typeof commissions[0]) => {
    return commission.phases.find(p => p.status === 'En proceso') || 
           commission.phases.find(p => p.status === 'Pendiente');
  };

  const clearFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setTypeFilter('all');
    setSortBy('date');
  };

  const toggleCommissionDetails = (commissionId: string) => {
    setExpandedCommission(expandedCommission === commissionId ? null : commissionId);
  };

  return (
    <PageLayout
      title="Comisiones de Postulación"
      description="Información sobre las comisiones encargadas de los procesos de selección de autoridades judiciales."
    >
      <VideoHero
        title="Comisiones de Postulación"
        subtitle="Conoce los procesos de selección de autoridades judiciales en Guatemala"
      />

      {/* Search and Filter Section */}
      <div className="mt-16 mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar por nombre, propósito o tipo de comisión..."
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
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                    <option value="all">Todos los estados</option>
                    {commissionStatuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo
                  </label>
                  <select
                    id="type-filter"
                    value={typeFilter}
                    onChange={e => setTypeFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">Todos los tipos</option>
                    {commissionTypes.map(type => (
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
                    <option value="date">Fecha</option>
                    <option value="name">Nombre</option>
                    <option value="status">Estado</option>
                  </select>
                </div>

                <div className="flex items-end">
                  {(searchQuery || statusFilter !== 'all' || typeFilter !== 'all') && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearFilters}
                      className="w-full"
                    >
                      Limpiar filtros
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Results Summary */}
      <div className="mb-6 text-center">
        <p className="text-gray-600">
          Mostrando {filteredCommissions.length} de {commissions.length} comisiones
          {(searchQuery || statusFilter !== 'all' || typeFilter !== 'all') && (
            <span className="ml-1">
              {searchQuery && `para "${searchQuery}"`}
              {statusFilter !== 'all' && ` con estado ${statusFilter}`}
              {typeFilter !== 'all' && ` de tipo ${typeFilter}`}
            </span>
          )}
        </p>
      </div>

      {/* Commissions List */}
      <div className="space-y-6">
        {filteredCommissions.map((commission) => {
          const progress = getPhaseProgress(commission);
          const currentPhase = getCurrentPhase(commission);
          
          return (
            <Card key={commission.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-3 ${getStatusColor(commission.status)}`}>
                        {getStatusIcon(commission.status)}
                        <span className="ml-1">{commission.status}</span>
                      </span>
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm font-medium">
                        {commission.type}
                      </span>
                      <div className="ml-3 flex items-center text-sm text-gray-600">
                        <TrendingUp size={14} className="mr-1" />
                        <span>{progress}% completado</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                      <a href={`/comisiones/${commission.id}`}>{commission.name}</a>
                    </h3>
                    <p className="text-gray-600 mb-2">{commission.purpose}</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    
                    {currentPhase && (
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Fase actual:</span> {currentPhase.name}
                      </div>
                    )}
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = `/comisiones/${commission.id}`}
                    >
                      <Eye size={16} className="mr-1" />
                      Ver detalles
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleCommissionDetails(commission.id)}
                    >
                      {expandedCommission === commission.id ? 'Ocultar' : 'Resumen'}
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700 mb-1">{commission.candidatesCount}</div>
                    <div className="text-blue-600 text-sm font-medium">Candidatos</div>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-700 mb-1">{commission.positionsAvailable}</div>
                    <div className="text-green-600 text-sm font-medium">Plazas</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700 mb-1">{commission.phases.length}</div>
                    <div className="text-purple-600 text-sm font-medium">Fases</div>
                  </div>
                  
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-700 mb-1">{commission.members.length}</div>
                    <div className="text-orange-600 text-sm font-medium">Integrantes</div>
                  </div>
                </div>

                {/* Timeline Preview */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <Calendar size={16} className="mr-2 text-primary-600" />
                    Cronograma del Proceso
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {commission.phases.slice(0, 3).map((phase, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        {getStatusIcon(phase.status)}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">{phase.name}</div>
                          <div className="text-xs text-gray-600">{formatDate(phase.startDate)}</div>
                        </div>
                      </div>
                    ))}
                    {commission.phases.length > 3 && (
                      <div className="flex items-center justify-center p-3 bg-gray-100 rounded-lg text-gray-500 text-sm">
                        +{commission.phases.length - 3} fases más
                      </div>
                    )}
                  </div>
                </div>

                {/* Documents Preview */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                    <FileText size={16} className="mr-2 text-primary-600" />
                    Documentos Disponibles
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {commission.documents.slice(0, 4).map((doc, index) => (
                      <a
                        key={index}
                        href={doc.url}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-center min-w-0">
                          <FileText size={16} className="mr-2 text-primary-600 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-900 truncate">{doc.title}</span>
                        </div>
                        <div className="flex items-center text-gray-500 ml-2">
                          <span className="text-xs mr-2">{doc.type}</span>
                          <Download size={14} />
                        </div>
                      </a>
                    ))}
                    {commission.documents.length > 4 && (
                      <div className="flex items-center justify-center p-3 bg-gray-100 rounded-lg text-gray-500 text-sm">
                        +{commission.documents.length - 4} documentos más
                      </div>
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedCommission === commission.id && (
                  <div className="border-t pt-6 space-y-6">
                    {/* Description */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Descripción Detallada</h4>
                      <p className="text-gray-600">{commission.description}</p>
                    </div>

                    {/* Members Preview */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Integrantes Principales</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {commission.members.slice(0, 4).map((member, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            {member.imageUrl ? (
                              <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <Users size={16} className="text-gray-400" />
                              </div>
                            )}
                            <div className="min-w-0">
                              <h5 className="font-medium text-gray-900 text-sm truncate">{member.name}</h5>
                              <p className="text-xs text-primary-600">{member.role}</p>
                              <p className="text-xs text-gray-600 truncate">{member.institution}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Requirements */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Requisitos Principales</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {commission.requirements.slice(0, 6).map((requirement, index) => (
                          <div key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{requirement}</span>
                          </div>
                        ))}
                        {commission.requirements.length > 6 && (
                          <div className="text-sm text-gray-500 italic">
                            +{commission.requirements.length - 6} requisitos adicionales
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-3 mt-6 pt-6 border-t">
                  <Button
                    variant="primary"
                    onClick={() => window.location.href = `/comisiones/${commission.id}`}
                    className="flex-1"
                  >
                    <Target size={16} className="mr-2" />
                    Ver Información Completa
                  </Button>
                  {commission.candidatesCount > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => window.location.href = `/candidatos?commission=${commission.id}`}
                      className="flex-1"
                    >
                      <Award size={16} className="mr-2" />
                      Ver Candidatos ({commission.candidatesCount})
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredCommissions.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Users size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No se encontraron comisiones
          </h3>
          <p className="text-gray-600 mb-4">
            No hay comisiones que coincidan con los criterios de búsqueda.
          </p>
          <Button
            variant="outline"
            onClick={clearFilters}
          >
            Limpiar filtros
          </Button>
        </div>
      )}

      {/* Commission Statistics */}
      <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Estadísticas del Sistema de Comisiones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
            <div className="text-3xl font-bold mb-2">
              {commissions.length}
            </div>
            <div className="text-white/80">Total de Comisiones</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
            <div className="text-3xl font-bold mb-2">
              {commissions.filter(c => c.status === 'En proceso').length}
            </div>
            <div className="text-white/80">En Proceso</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
            <div className="text-3xl font-bold mb-2">
              {commissions.reduce((sum, c) => sum + c.candidatesCount, 0)}
            </div>
            <div className="text-white/80">Total Candidatos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
            <div className="text-3xl font-bold mb-2">
              {commissions.reduce((sum, c) => sum + c.positionsAvailable, 0)}
            </div>
            <div className="text-white/80">Plazas Disponibles</div>
          </div>
        </div>
      </div>

      {/* Process Timeline Overview */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Procesos Activos y Próximos
        </h2>
        <div className="space-y-4">
          {commissions
            .filter(c => c.status === 'En proceso' || c.status === 'Pendiente')
            .slice(0, 3)
            .map((commission) => {
              const currentPhase = getCurrentPhase(commission);
              return (
                <div key={commission.id} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{commission.name}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(commission.status)}`}>
                      {commission.status}
                    </span>
                  </div>
                  {currentPhase && (
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Fase actual:</span> {currentPhase.name}
                      <span className="ml-3">
                        <Calendar size={14} className="inline mr-1" />
                        {formatDate(currentPhase.startDate)} - {formatDate(currentPhase.endDate)}
                      </span>
                    </div>
                  )}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex-1 mr-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full"
                          style={{ width: `${getPhaseProgress(commission)}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {getPhaseProgress(commission)}%
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </PageLayout>
  );
};

export default Commissions;