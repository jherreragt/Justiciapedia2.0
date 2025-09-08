import React, { useState } from 'react';
import { Shield, Lock, Users, Eye, LogIn } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import LoginModal from './LoginModal';
import Card, { CardContent } from '../ui/Card';
import Button from '../ui/Button';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'researcher' | 'citizen';
  fallbackTitle?: string;
  fallbackDescription?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
  fallbackTitle = 'Acceso Restringido',
  fallbackDescription = 'Esta funcionalidad requiere autenticación para garantizar el uso responsable de la información.'
}) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Verificando autenticación...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock size={40} className="text-primary-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{fallbackTitle}</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
                {fallbackDescription}
              </p>

              {/* Benefits of logging in */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Eye size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mapas de Poder</h3>
                  <p className="text-gray-600 text-sm">Visualiza conexiones y relaciones en el sistema judicial</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users size={24} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dashboard</h3>
                  <p className="text-gray-600 text-sm">Accede a análisis avanzados y estadísticas</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield size={24} className="text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contenido Exclusivo</h3>
                  <p className="text-gray-600 text-sm">Información detallada y reportes especializados</p>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setShowLoginModal(true)}
                  className="w-full md:w-auto"
                >
                  <LogIn size={20} className="mr-2" />
                  Iniciar Sesión
                </Button>
                
                <div className="text-sm text-gray-500">
                  <p>¿No tienes cuenta? Contacta al administrador para solicitar acceso.</p>
                </div>
              </div>

              {/* Why authentication is required */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">¿Por qué requiere autenticación?</h3>
                <div className="text-blue-800 text-sm space-y-2">
                  <p>• Garantizar el uso responsable de información sensible</p>
                  <p>• Cumplir con regulaciones de protección de datos</p>
                  <p>• Proporcionar funcionalidades personalizadas</p>
                  <p>• Mantener la integridad de la plataforma</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          redirectTo={window.location.pathname}
        />
      </>
    );
  }

  // Check role-based access
  if (requiredRole && user?.role !== requiredRole && user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <Card className="max-w-lg mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={32} className="text-orange-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Acceso Restringido</h1>
            <p className="text-gray-600 mb-6">
              No tienes los permisos necesarios para acceder a esta funcionalidad.
              Se requiere rol de {requiredRole === 'admin' ? 'Administrador' : 'Investigador'}.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-gray-500">
                Tu rol actual: <span className="font-medium">{user?.role}</span>
              </p>
              <Button
                variant="outline"
                onClick={() => window.history.back()}
              >
                Volver
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;