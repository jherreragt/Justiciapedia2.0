import React, { useCallback, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import Card, { CardContent } from '../ui/Card';
import { Network, Building2, Users, GraduationCap, Briefcase } from 'lucide-react';

interface NetworkNode {
  id: string;
  name: string;
  group: string;
  image?: string;
  description?: string;
}

interface NetworkLink {
  source: string;
  target: string;
  type: string;
}

interface NetworkData {
  nodes: NetworkNode[];
  links: NetworkLink[];
}

interface CandidateNetworkProps {
  candidateId: string;
  data: NetworkData;
}

const CandidateNetwork: React.FC<CandidateNetworkProps> = ({ candidateId, data }) => {
  const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(null);

  const handleNodeClick = useCallback((node: NetworkNode) => {
    setSelectedNode(node);
  }, []);

  const getNodeColor = (group: string) => {
    switch (group) {
      case 'person':
        return '#2563eb';
      case 'institution':
        return '#059669';
      case 'education':
        return '#7c3aed';
      case 'work':
        return '#ea580c';
      default:
        return '#6b7280';
    }
  };

  const getGroupIcon = (group: string) => {
    switch (group) {
      case 'person':
        return Users;
      case 'institution':
        return Building2;
      case 'education':
        return GraduationCap;
      case 'work':
        return Briefcase;
      default:
        return Network;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3 bg-white rounded-lg shadow-md overflow-hidden" style={{ height: '500px' }}>
        <ForceGraph2D
          graphData={data}
          nodeLabel="name"
          nodeColor={(node: any) => getNodeColor(node.group)}
          nodeRelSize={6}
          linkColor={() => '#94a3b8'}
          linkWidth={1}
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={0.005}
          onNodeClick={handleNodeClick}
          cooldownTicks={100}
        />
      </div>

      <div className="space-y-4">
        {selectedNode && (
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">{selectedNode.name}</h3>
              {selectedNode.image && (
                <img
                  src={selectedNode.image}
                  alt={selectedNode.name}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
              )}
              {selectedNode.description && (
                <p className="text-sm text-gray-600 mb-2">{selectedNode.description}</p>
              )}
              <div className="flex items-center text-sm text-gray-600">
                {React.createElement(getGroupIcon(selectedNode.group), { size: 16, className: 'mr-2' })}
                <span>{selectedNode.group.charAt(0).toUpperCase() + selectedNode.group.slice(1)}</span>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardContent>
            <h3 className="font-medium mb-2">Leyenda</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span className="text-sm">Personas</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-emerald-600 mr-2"></div>
                <span className="text-sm">Instituciones</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                <span className="text-sm">Educación</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-orange-600 mr-2"></div>
                <span className="text-sm">Experiencia Laboral</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CandidateNetwork;