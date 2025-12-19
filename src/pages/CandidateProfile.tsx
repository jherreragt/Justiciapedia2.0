import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FileText, Building2, GraduationCap, Network, User, ArrowLeft, Award, BookOpen, Languages, ExternalLink, Calendar, MapPin, Star, Globe } from 'lucide-react';
import ProfileLayout from '../components/layout/ProfileLayout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import CandidateNetwork from '../components/network/CandidateNetwork';
import Loading from '../components/ui/Loading';
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
    return <Loading fullScreen text="Cargando perfil del candidato..." />;
  }

  if (!candidate) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <User size={64} className="mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Candidato no encontrado</h1>
          <p className="text-gray-600 mb-4">El candidato que buscas no existe o ha sido removido.</p>
          <Link
            to="/candidatos"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Ver todos los candidatos
          </Link>
        </div>
      </div>
    );
  }

  // Sample network data
  const networkData = {
    nodes: [
      { id: '1', name: candidate.name, group: 'person', image: candidate.imageUrl },
      { id: '2', name: 'Universidad de San Carlos', group: 'education', description: 'Facultad de Ciencias Jurídicas' },
      { id: '3', name: candidate.institution, group: 'institution' },
      { id: '4', name: 'Bufete Jurídico XYZ', group: 'work' },
      { id: '5', name: 'Asociación de Jueces', group: 'institution' },
    ],
    links: [
      { source: '1', target: '2', type: 'graduated' },
      { source: '1', target: '3', type: 'works_at' },
      { source: '1', target: '4', type: 'worked_at' },
      { source: '1', target: '5', type: 'member' },
    ],
  };

  const tabs = [
    { id: 'basic', label: 'Datos Básicos', icon: FileText },
    { id: 'experience', label: 'Experiencia', icon: Building2 },
    { id: 'education', label: 'Formación', icon: GraduationCap },
    { id: 'achievements', label: 'Logros', icon: Award },
    { id: 'network', label: 'Red de Vínculos', icon: Network },
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
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(candidate.status)}`}>
                        {candidate.status}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Especialización</label>
                      <p className="text-gray-900">{candidate.specialization}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Años de Experiencia</label>
                      <p className="text-gray-900">{candidate.yearsOfExperience} años</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Idiomas</label>
                      <div className="flex flex-wrap gap-2">
                        {candidate.languages.map((language, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                    {candidate.socialMedia && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Redes Sociales</label>
                        <div className="flex space-x-3">
                          {candidate.socialMedia.linkedin && (
                            <a
                              href={candidate.socialMedia.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-700"
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                          {candidate.socialMedia.twitter && (
                            <a
                              href={candidate.socialMedia.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-500"
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                  <p className="text-gray-900 leading-relaxed">{candidate.description}</p>
                </div>
              </CardContent>
            </Card>

            {candidate.certifications.length > 0 && (
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

      case 'network':
        return <CandidateNetwork candidateId={candidate.id} data={networkData} />;

      default:
        return null;
    }
  };

  return (
    <ProfileLayout
      title={candidate.name}
      subtitle={candidate.role}
      imageUrl={candidate.imageUrl}
      headerContent={
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
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
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver
          </Button>
          <div className="flex gap-2">
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
      </div>
    </ProfileLayout>
  );
};

export default CandidateProfile;