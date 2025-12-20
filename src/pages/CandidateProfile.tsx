import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FileText, Building2, GraduationCap, User, ArrowLeft, Award, BookOpen, Languages, ExternalLink, Calendar, MapPin, Star, Globe } from 'lucide-react';
import ProfileLayout from '../components/layout/ProfileLayout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Loading from '../components/ui/Loading';
import SocialShare from '../components/ui/SocialShare';
import { candidates } from '../data/candidates';

const CandidateProfile: React.FC = () => {
  const { candidateId } = useParams<{ candidateId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('basic');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [candidateId]);

  const candidate = candidates.find(c => c.id === candidateId);

  if (isLoading) {
    return <Loading fullScreen text="Cargando perfil del aspirante..." />;
  }

  if (!candidate) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <User size={64} className="mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Aspirante no encontrado</h1>
          <p className="text-gray-600 mb-4">El aspirante que buscas no existe o ha sido removido.</p>
          <Link
            to="/candidatos"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Ver todos los aspirantes
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'basic', label: 'Datos Básicos', icon: FileText },
    { id: 'experience', label: 'Experiencia Profesional', icon: Building2 },
    { id: 'education', label: 'Formación Académica', icon: GraduationCap },
    { id: 'achievements', label: 'Logros y Reconocimientos', icon: Award },
  ];

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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Información General</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                      <p className="text-gray-900 font-medium">{candidate.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cargo al que Aspira</label>
                      <p className="text-gray-900">{candidate.role}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Institución</label>
                      <p className="text-gray-900">{candidate.institution}</p>
                    </div>
                    {candidate.commission && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Comisión</label>
                        <p className="text-gray-900">{candidate.commission}</p>
                      </div>
                    )}
                    {candidate.election && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Elección</label>
                        <p className="text-gray-900">{candidate.election}</p>
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(candidate.status)}`}>
                        {candidate.status}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {candidate.profession && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Profesión</label>
                        <p className="text-gray-900">{candidate.profession}</p>
                      </div>
                    )}
                    {candidate.gender && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sexo</label>
                        <p className="text-gray-900">{candidate.gender}</p>
                      </div>
                    )}
                    {candidate.maritalStatus && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Estado Civil</label>
                        <p className="text-gray-900">{candidate.maritalStatus}</p>
                      </div>
                    )}
                    {candidate.barAssociationNumber && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">No. Colegiado</label>
                        <p className="text-gray-900 font-mono">{candidate.barAssociationNumber}</p>
                      </div>
                    )}
                    {candidate.yearsOfExperienceText && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Experiencia</label>
                        <p className="text-gray-900">{candidate.yearsOfExperienceText}</p>
                      </div>
                    )}
                    {candidate.workStartDate && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha Inicio Laboral</label>
                        <p className="text-gray-900">{candidate.workStartDate}</p>
                      </div>
                    )}
                    {candidate.department && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Departamento</label>
                        <p className="text-gray-900">{candidate.department}</p>
                      </div>
                    )}
                  </div>
                </div>
                {candidate.summary && (
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Resumen</label>
                    <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">{candidate.summary}</p>
                  </div>
                )}
                {candidate.description && (
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                    <p className="text-gray-900 leading-relaxed">{candidate.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {candidate.humanProjection && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold flex items-center">
                    <User size={20} className="mr-2 text-primary-600" />
                    Proyección Humana
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">{candidate.humanProjection}</p>
                </CardContent>
              </Card>
            )}

            {(candidate.cvUrl || candidate.fileUrl) && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold flex items-center">
                    <FileText size={20} className="mr-2 text-primary-600" />
                    Documentos
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {candidate.cvUrl && (
                      <a
                        href={candidate.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                      >
                        <div className="flex items-center">
                          <FileText size={20} className="mr-3 text-blue-600" />
                          <span className="font-medium text-blue-900">Currículum Vitae</span>
                        </div>
                        <ExternalLink size={16} className="text-blue-600" />
                      </a>
                    )}
                    {candidate.fileUrl && (
                      <a
                        href={candidate.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                      >
                        <div className="flex items-center">
                          <FileText size={20} className="mr-3 text-green-600" />
                          <span className="font-medium text-green-900">Expediente Completo</span>
                        </div>
                        <ExternalLink size={16} className="text-green-600" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {(candidate.sourceText || candidate.sourceUrl) && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold flex items-center">
                    <Globe size={20} className="mr-2 text-primary-600" />
                    Fuente de Información
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {candidate.sourceText && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fuente</label>
                        <p className="text-gray-900">{candidate.sourceText}</p>
                      </div>
                    )}
                    {candidate.sourceUrl && (
                      <div>
                        <a
                          href={candidate.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700"
                        >
                          Ver fuente completa
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {candidate.certifications && candidate.certifications.length > 0 && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold flex items-center">
                    <Award size={20} className="mr-2 text-primary-600" />
                    Certificaciones
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {candidate.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Award size={16} className="mr-2 text-primary-600" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 'experience':
        return (
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center">
                <Building2 size={20} className="mr-2 text-primary-600" />
                Experiencia Profesional
              </h3>
            </CardHeader>
            <CardContent>
              {candidate.professionalExperience ? (
                <div className="prose max-w-none">
                  <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">{candidate.professionalExperience}</p>
                </div>
              ) : candidate.experience && candidate.experience.length > 0 ? (
                <div className="space-y-6">
                  {candidate.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 pb-6 border-l-2 border-primary-200 last:border-l-0 last:pb-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h4 className="font-semibold text-gray-900 text-lg">{exp.position}</h4>
                        <p className="text-primary-600 font-medium mb-1">{exp.institution}</p>
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <Calendar size={14} className="mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No se ha proporcionado información de experiencia profesional.</p>
              )}
            </CardContent>
          </Card>
        );

      case 'education':
        return (
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center">
                <GraduationCap size={20} className="mr-2 text-primary-600" />
                Formación Académica
              </h3>
            </CardHeader>
            <CardContent>
              {candidate.academicExperience ? (
                <div className="prose max-w-none">
                  <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">{candidate.academicExperience}</p>
                </div>
              ) : candidate.education && candidate.education.length > 0 ? (
                <div className="space-y-6">
                  {candidate.education.map((edu, index) => (
                    <div key={index} className="relative pl-8 pb-6 border-l-2 border-primary-200 last:border-l-0 last:pb-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h4 className="font-semibold text-gray-900 text-lg">{edu.degree}</h4>
                        <p className="text-primary-600 font-medium mb-1">{edu.institution}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar size={14} className="mr-1" />
                            <span>Año: {edu.year}</span>
                          </div>
                          {edu.honors && (
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                              {edu.honors}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No se ha proporcionado información de formación académica.</p>
              )}
            </CardContent>
          </Card>
        );

      case 'achievements':
        return (
          <div className="space-y-6">
            {candidate.publications && candidate.publications.length > 0 && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold flex items-center">
                    <BookOpen size={20} className="mr-2 text-primary-600" />
                    Publicaciones
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {candidate.publications.map((pub, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-1">{pub.title}</h4>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{pub.publisher}</span>
                          <div className="flex items-center">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">{pub.type}</span>
                            <span>{pub.year}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {candidate.awards && candidate.awards.length > 0 && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold flex items-center">
                    <Star size={20} className="mr-2 text-yellow-500" />
                    Reconocimientos y Premios
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {candidate.awards.map((award, index) => (
                      <div key={index} className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h4 className="font-semibold text-gray-900 mb-1">{award.title}</h4>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{award.institution}</span>
                          <span className="font-medium">{award.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const profileUrl = window.location.href;
  const shareTitle = `${candidate.name} - ${candidate.role}`;
  const shareDescription = `Perfil de ${candidate.name}, aspirante a ${candidate.role} en ${candidate.institution}`;

  return (
    <ProfileLayout
      title={candidate.name}
      subtitle={candidate.role}
      imageUrl={candidate.imageUrl}
      headerContent={
        <div className="space-y-4 mt-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center text-white/80">
              <Building2 size={16} className="mr-2" />
              {candidate.institution}
            </div>
            <div className="flex items-center text-white/80">
              <Award size={16} className="mr-2" />
              {candidate.specialization}
            </div>
            <div className="flex items-center text-white/80">
              <Calendar size={16} className="mr-2" />
              {candidate.yearsOfExperience} años de experiencia
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/90 text-sm font-medium">Compartir perfil:</span>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
              <SocialShare
                url={profileUrl}
                title={shareTitle}
                description={shareDescription}
                variant="buttons"
                className="social-share-light"
              />
            </div>
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

        <div className="mt-8">
          <Card>
            <CardContent className="py-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 font-medium">Compartir perfil:</span>
                  <SocialShare
                    url={profileUrl}
                    title={shareTitle}
                    description={shareDescription}
                    variant="buttons"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    onClick={() => navigate(-1)}
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Volver
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/comisiones/${candidate.commissionId}`)}
                  >
                    Ver comisión
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => navigate('/candidatos')}
                  >
                    Ver todos los candidatos
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default CandidateProfile;