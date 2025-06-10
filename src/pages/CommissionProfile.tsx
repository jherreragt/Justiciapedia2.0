import React, { useState } from 'react';
import { Calendar, Users, FileText, Clock, CheckCircle, AlertCircle, XCircle, ArrowLeft, Download, Eye, MapPin, Phone, Mail, Globe, Award, Target, BookOpen, TrendingUp } from 'lucide-react';
import ProfileLayout from '../components/layout/ProfileLayout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { commissions } from '../data/commissions';
import { candidates } from '../data/candidates';

interface CommissionProfileProps {
  commissionId?: string;
}

const CommissionProfile: React.FC<CommissionProfileProps> = ({ commissionId }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Get commission ID from props or URL
  const id = commissionId || window.location.pathname.split('/').pop() || '';
  const commission = commissions.find(c => c.id === id);

  if (!commission) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Users size={64} className="mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Comisión no encontrada</h1>
          <p className="text-gray-600 mb-4">La comisión que buscas no existe o ha sido removida.</p>
          <a
            href="/comisiones"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Ver todas las comisiones
          </a>
        </div>
      </div>
    );
  }

  // Get candidates for this commission
  const commissionCandidates = candidates.filter(c => c.commissionId === commission.id);

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
        return 'bg-green-100 text-green-800 border-green-200';
      case 'En proceso':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Pendiente':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Finalizada':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  const getPhaseProgress = () => {
    const completedPhases = commission.phases.filter(p => p.status === 'Completada').length;
    return Math.round((completedPhases / commission.phases.length) * 100);
  };

  const getCurrentPhase = () => {
    return commission.phases.find(p => p.status === 'En proceso') || 
           commission.phases.find(p => p.status === 'Pendiente');
  };

  const getNextMilestone = () => {
    const currentDate = new Date();
    const upcomingPhases = commission.phases.filter(p => {
      const phaseDate = new Date(p.startDate);
      return phaseDate > currentDate && p.status === 'Pendiente';
    });
    return upcomingPhases.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())[0];
  };

  const tabs = [
    { id: 'overview', label: 'Resumen', icon: Target },
    { id: 'timeline', label: 'Cronograma', icon: Calendar },
    { id: 'members', label: 'Integrantes', icon: Users },
    { id: 'candidates', label: 'Candidatos', icon: Award },
    { id: 'documents', label: 'Documentos', icon: FileText },
    { id: 'requirements', label: 'Requisitos', icon: BookOpen },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-2">{commission.candidatesCount}</div>
                  <div className="text-blue-600 text-sm font-medium">Candidatos Postulados</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-700 mb-2">{commission.positionsAvailable}</div>
                  <div className="text-green-600 text-sm font-medium">Plazas Disponibles</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-700 mb-2">{commission.phases.length}</div>
                  <div className="text-purple-600 text-sm font-medium">Fases del Proceso</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-700 mb-2">{getPhaseProgress()}%</div>
                  <div className="text-orange-600 text-sm font-medium">Progreso Completado</div>
                </CardContent>
              </Card>
            </div>

            {/* Current Status */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center">
                  <TrendingUp size={20} className="mr-2 text-primary-600" />
                  Estado Actual del Proceso
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Estado General</h4>
                      <p className="text-gray-600 text-sm">{commission.description}</p>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(commission.status)}`}>
                      {getStatusIcon(commission.status)}
                      <span className="ml-1">{commission.status}</span>
                    </span>
                  </div>

                  {getCurrentPhase() && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-900 mb-2">Fase Actual</h4>
                      <p className="text-blue-800 font-medium">{getCurrentPhase()!.name}</p>
                      <p className="text-blue-700 text-sm">{getCurrentPhase()!.description}</p>
                      <div className="mt-2 text-sm text-blue-600">
                        <Calendar size={14} className="inline mr-1" />
                        {formatDate(getCurrentPhase()!.startDate)} - {formatDate(getCurrentPhase()!.endDate)}
                      </div>
                    </div>
                  )}

                  {getNextMilestone() && (
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h4 className="font-medium text-yellow-900 mb-2">Próximo Hito</h4>
                      <p className="text-yellow-800 font-medium">{getNextMilestone()!.name}</p>
                      <p className="text-yellow-700 text-sm">{getNextMilestone()!.description}</p>
                      <div className="mt-2 text-sm text-yellow-600">
                        <Calendar size={14} className="inline mr-1" />
                        Inicia: {formatDate(getNextMilestone()!.startDate)}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Purpose and Description */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Propósito y Descripción</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Propósito</h4>
                    <p className="text-gray-700">{commission.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Descripción Detallada</h4>
                    <p className="text-gray-700">{commission.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Progreso del Proceso</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Progreso General</span>
                    <span className="text-sm font-medium text-gray-900">{getPhaseProgress()}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-primary-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${getPhaseProgress()}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {commission.phases.map((phase, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {getStatusIcon(phase.status)}
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">{phase.name}</div>
                          <div className="text-xs text-gray-600">{formatDate(phase.startDate)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'timeline':
        return (
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center">
                <Calendar size={20} className="mr-2 text-primary-600" />
                Cronograma Detallado del Proceso
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Timeline Overview */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Fecha de Inicio:</span>
                      <span className="ml-2 text-gray-900">{formatDate(commission.startDate)}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Fecha de Finalización:</span>
                      <span className="ml-2 text-gray-900">{formatDate(commission.endDate)}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Duración Total:</span>
                      <span className="ml-2 text-gray-900">
                        {Math.ceil((new Date(commission.endDate).getTime() - new Date(commission.startDate).getTime()) / (1000 * 60 * 60 * 24))} días
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Progreso:</span>
                      <span className="ml-2 text-gray-900">{getPhaseProgress()}% completado</span>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                  {commission.phases.map((phase, index) => {
                    const isLast = index === commission.phases.length - 1;
                    const duration = Math.ceil((new Date(phase.endDate).getTime() - new Date(phase.startDate).getTime()) / (1000 * 60 * 60 * 24));
                    
                    return (
                      <div key={index} className="relative flex items-start space-x-4 pb-8">
                        {/* Timeline line */}
                        {!isLast && (
                          <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-300"></div>
                        )}
                        
                        {/* Status icon */}
                        <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 ${
                          phase.status === 'Completada' 
                            ? 'bg-green-100 border-green-500' 
                            : phase.status === 'En proceso'
                            ? 'bg-yellow-100 border-yellow-500'
                            : 'bg-gray-100 border-gray-300'
                        }`}>
                          {getStatusIcon(phase.status)}
                        </div>
                        
                        {/* Phase content */}
                        <div className="flex-1 min-w-0">
                          <Card className={`${
                            phase.status === 'En proceso' 
                              ? 'border-yellow-300 bg-yellow-50' 
                              : phase.status === 'Completada'
                              ? 'border-green-300 bg-green-50'
                              : 'border-gray-200'
                          }`}>
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-lg font-semibold text-gray-900">{phase.name}</h4>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(phase.status)}`}>
                                  {phase.status}
                                </span>
                              </div>
                              <p className="text-gray-700 mb-3">{phase.description}</p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div>
                                  <span className="font-medium text-gray-600">Inicio:</span>
                                  <div className="text-gray-900">{formatDate(phase.startDate)}</div>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-600">Finalización:</span>
                                  <div className="text-gray-900">{formatDate(phase.endDate)}</div>
                                </div>
                                <div>
                                  <span className="font-medium text-gray-600">Duración:</span>
                                  <div className="text-gray-900">{duration} días</div>
                                </div>
                              </div>

                              {/* Phase-specific details */}
                              {phase.status === 'En proceso' && (
                                <div className="mt-3 p-3 bg-yellow-100 rounded-lg">
                                  <div className="flex items-center text-yellow-800">
                                    <Clock size={16} className="mr-2" />
                                    <span className="font-medium">Fase en curso</span>
                                  </div>
                                  <p className="text-yellow-700 text-sm mt-1">
                                    Esta fase está actualmente en desarrollo. Consulta regularmente para actualizaciones.
                                  </p>
                                </div>
                              )}

                              {phase.status === 'Completada' && (
                                <div className="mt-3 p-3 bg-green-100 rounded-lg">
                                  <div className="flex items-center text-green-800">
                                    <CheckCircle size={16} className="mr-2" />
                                    <span className="font-medium">Fase completada</span>
                                  </div>
                                  <p className="text-green-700 text-sm mt-1">
                                    Esta fase ha sido finalizada exitosamente según el cronograma establecido.
                                  </p>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Key Dates Summary */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <h4 className="font-semibold text-blue-900">Fechas Clave</h4>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {commission.phases.map((phase, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-white rounded border">
                          <span className="text-sm font-medium text-gray-900">{phase.name}</span>
                          <span className="text-sm text-gray-600">{formatDate(phase.startDate)}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        );

      case 'members':
        return (
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center">
                <Users size={20} className="mr-2 text-primary-600" />
                Integrantes de la Comisión
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commission.members.map((member, index) => (
                  <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        {member.imageUrl ? (
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300">
                            <Users size={24} className="text-gray-400" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-lg">{member.name}</h4>
                          <p className="text-primary-600 font-medium mb-1">{member.role}</p>
                          <p className="text-gray-600 text-sm">{member.institution}</p>
                          
                          {/* Role badge */}
                          <div className="mt-3">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              member.role === 'Presidente' 
                                ? 'bg-blue-100 text-blue-800'
                                : member.role === 'Secretaria' || member.role === 'Secretario'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {member.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Commission Structure */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Estructura de la Comisión</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded border">
                    <span className="font-medium text-gray-900">Total de Integrantes</span>
                    <span className="text-primary-600 font-semibold">{commission.members.length}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded border">
                    <span className="font-medium text-gray-900">Instituciones Representadas</span>
                    <span className="text-primary-600 font-semibold">
                      {new Set(commission.members.map(m => m.institution)).size}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 'candidates':
        return (
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center">
                <Award size={20} className="mr-2 text-primary-600" />
                Candidatos Postulados
              </h3>
            </CardHeader>
            <CardContent>
              {commissionCandidates.length > 0 ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-700">{commissionCandidates.length}</div>
                      <div className="text-blue-600 text-sm">Candidatos Totales</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-700">
                        {commissionCandidates.filter(c => c.status === 'Activo').length}
                      </div>
                      <div className="text-green-600 text-sm">Candidatos Activos</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-700">
                        {new Set(commissionCandidates.map(c => c.specialization)).size}
                      </div>
                      <div className="text-purple-600 text-sm">Especializaciones</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {commissionCandidates.map((candidate) => (
                      <Card key={candidate.id} className="hover:shadow-lg transition-shadow cursor-pointer"
                            onClick={() => window.location.href = `/candidatos/${candidate.id}`}>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3 mb-3">
                            <img
                              src={candidate.imageUrl}
                              alt={candidate.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{candidate.name}</h4>
                              <p className="text-sm text-gray-600">{candidate.role}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mb-3 line-clamp-2">{candidate.description}</p>
                          <div className="space-y-2 text-xs text-gray-600">
                            <div className="flex items-center">
                              <Award size={12} className="mr-1" />
                              <span>{candidate.specialization}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock size={12} className="mr-1" />
                              <span>{candidate.yearsOfExperience} años de experiencia</span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              candidate.status === 'Activo' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {candidate.status}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button
                      variant="outline"
                      onClick={() => window.location.href = `/candidatos?commission=${commission.id}`}
                    >
                      Ver todos los candidatos
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Award size={48} className="mx-auto text-gray-400 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    No hay candidatos registrados
                  </h4>
                  <p className="text-gray-600">
                    Los candidatos aparecerán aquí una vez que se abra el proceso de postulación.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        );

      case 'documents':
        return (
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center">
                <FileText size={20} className="mr-2 text-primary-600" />
                Documentos del Proceso
              </h3>
            </CardHeader>
            <CardContent>
              {commission.documents.length > 0 ? (
                <div className="space-y-4">
                  {commission.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <FileText size={20} className="text-primary-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{doc.title}</h4>
                          <p className="text-sm text-gray-600">Tipo: {doc.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(doc.url, '_blank')}
                        >
                          <Eye size={16} className="mr-1" />
                          Ver
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(doc.url, '_blank')}
                        >
                          <Download size={16} className="mr-1" />
                          Descargar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    No hay documentos disponibles
                  </h4>
                  <p className="text-gray-600">
                    Los documentos del proceso se publicarán aquí cuando estén disponibles.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        );

      case 'requirements':
        return (
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center">
                <BookOpen size={20} className="mr-2 text-primary-600" />
                Requisitos para Candidatos
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Requisitos Obligatorios</h4>
                  <div className="space-y-3">
                    {commission.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-700">{requirement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">Información Importante</h4>
                  <div className="space-y-2 text-blue-800 text-sm">
                    <p>• Todos los requisitos deben cumplirse al momento de la postulación.</p>
                    <p>• La documentación debe estar debidamente autenticada.</p>
                    <p>• Los candidatos serán evaluados según los criterios establecidos en las bases.</p>
                    <p>• El proceso de verificación puede tomar varias semanas.</p>
                  </div>
                </div>

                {/* Process Information */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Proceso de Evaluación</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">Evaluación Documental</h5>
                      <p className="text-gray-600 text-sm">
                        Revisión exhaustiva de todos los documentos presentados para verificar el cumplimiento de requisitos.
                      </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">Entrevistas</h5>
                      <p className="text-gray-600 text-sm">
                        Entrevistas públicas para evaluar la idoneidad y competencias de los candidatos.
                      </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">Verificación de Antecedentes</h5>
                      <p className="text-gray-600 text-sm">
                        Investigación de antecedentes profesionales, académicos y personales.
                      </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">Evaluación Final</h5>
                      <p className="text-gray-600 text-sm">
                        Calificación integral basada en todos los criterios establecidos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <ProfileLayout
      title={commission.name}
      subtitle={commission.type}
      headerContent={
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(commission.status)}`}>
            {getStatusIcon(commission.status)}
            <span className="ml-1">{commission.status}</span>
          </span>
          <div className="flex items-center text-white/80">
            <Calendar size={16} className="mr-2" />
            {formatDate(commission.startDate)} - {formatDate(commission.endDate)}
          </div>
          <div className="flex items-center text-white/80">
            <Users size={16} className="mr-2" />
            {commission.candidatesCount} candidatos
          </div>
          <div className="flex items-center text-white/80">
            <Award size={16} className="mr-2" />
            {commission.positionsAvailable} plazas
          </div>
        </div>
      }
    >
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap
                    ${activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  <Icon size={16} className="mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-6">
          {renderTabContent()}
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">
          <Button
            variant="outline"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver
          </Button>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/candidatos'}
            >
              Ver candidatos
            </Button>
            <Button
              variant="primary"
              onClick={() => window.location.href = '/comisiones'}
            >
              Ver todas las comisiones
            </Button>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default CommissionProfile;