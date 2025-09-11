import React, { useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import ForceGraph2D from 'react-force-graph-2d';
import { useAuth } from '../contexts/AuthContext';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import PageLayout from '../components/layout/PageLayout';
import Card from '../components/ui/Card';
import HeroSlider from '../components/ui/HeroSlider';

interface Node {
  id: string;
  name: string;
  group: string;
  image?: string;
}

interface Link {
  source: string;
  target: string;
  type: string;
}

const PowerMaps: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const { user } = useAuth();

  const slides = [
    {
      title: 'Mapas de Poder',
      description: 'Explora las conexiones y relaciones en el sistema judicial guatemalteco.',
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    },
    {
      title: 'Análisis de Redes',
      description: 'Visualiza las relaciones entre instituciones, candidatos y actores clave.',
      imageUrl: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
    },
    {
      title: 'Transparencia',
      description: 'Comprende la estructura y dinámica del sistema judicial.',
      imageUrl: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg',
    },
  ];

  const graphData = {
    nodes: [
      { id: '1', name: 'María Eugenia Morales', group: 'candidate', image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg' },
      { id: '2', name: 'Universidad de San Carlos', group: 'institution' },
      { id: '3', name: 'Corte Suprema de Justicia', group: 'institution' },
      { id: '4', name: 'Juan Carlos Rodríguez', group: 'candidate', image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg' },
      { id: '5', name: 'Partido Político A', group: 'party' },
    ],
    links: [
      { source: '1', target: '2', type: 'education' },
      { source: '1', target: '3', type: 'work' },
      { source: '1', target: '5', type: 'affiliation' },
      { source: '4', target: '2', type: 'education' },
      { source: '4', target: '5', type: 'affiliation' },
    ],
  };

  const handleNodeClick = useCallback((node: Node) => {
    setSelectedNode(node);
  }, []);

  return (
    <ProtectedRoute
      fallbackTitle="Mapas de Poder - Acceso Restringido"
      fallbackDescription="Los mapas de poder contienen información sensible sobre relaciones en el sistema judicial. Se requiere autenticación para acceder a esta funcionalidad."
    >
      <PageLayout
        title="Mapas de Poder"
        description="Explora las relaciones y conexiones en el sistema judicial guatemalteco"
      >
        <HeroSlider slides={slides} />

        <div className="mb-6 mt-16 flex items-center space-x-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar persona o institución..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md overflow-hidden" style={{ height: '600px' }}>
            <ForceGraph2D
              graphData={graphData}
              nodeLabel="name"
              nodeColor={(node: any) => {
                switch (node.group) {
                  case 'candidate':
                    return '#2563eb';
                  case 'institution':
                    return '#059669';
                  case 'party':
                    return '#dc2626';
                  default:
                    return '#6b7280';
                }
              }}
              nodeRelSize={6}
              linkColor={() => '#94a3b8'}
              onNodeClick={handleNodeClick}
              cooldownTicks={100}
            />
          </div>

          <div className="space-y-4">
            {selectedNode && (
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-2">{selectedNode.name}</h3>
                {selectedNode.image && (
                  <img
                    src={selectedNode.image}
                    alt={selectedNode.name}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                )}
                <p className="text-sm text-gray-600 mb-2">
                  Tipo: {selectedNode.group.charAt(0).toUpperCase() + selectedNode.group.slice(1)}
                </p>
                <a
                  href={`/${selectedNode.group}s/${selectedNode.id}`}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Ver perfil completo
                </a>
              </Card>
            )}

            <Card className="p-4">
              <h3 className="font-medium mb-2">Leyenda</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary-600 mr-2"></div>
                  <span className="text-sm">Candidatos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-600 mr-2"></div>
                  <span className="text-sm">Instituciones</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
                  <span className="text-sm">Partidos Políticos</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageLayout>
    </ProtectedRoute>
  );
};

export default PowerMaps;