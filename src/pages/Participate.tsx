import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Mail, AlertCircle } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import HeroSlider from '../components/ui/HeroSlider';

const Participate: React.FC = () => {
  const slides = [
    {
      title: 'Participa en la Transparencia',
      description: 'Contribuye al fortalecimiento del sistema judicial guatemalteco.',
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    },
    {
      title: 'Aporta Información',
      description: 'Comparte documentos y datos relevantes sobre el sistema judicial.',
      imageUrl: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
    },
    {
      title: 'Verifica y Valida',
      description: 'Ayuda a mantener la calidad y precisión de la información.',
      imageUrl: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg',
    },
  ];

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
    maxSize: 5242880, // 5MB
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <PageLayout
      title="Participa"
      description="Ayúdanos a mantener actualizada la información sobre el sistema judicial"
    >
      <HeroSlider slides={slides} />

      <div className="max-w-2xl mx-auto mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Contribución
            </label>
            <select
              id="type"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="new-info">Nueva Información</option>
              <option value="correction">Corrección</option>
              <option value="document">Documento Relevante</option>
              <option value="complaint">Denuncia</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Descripción
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Describe los detalles de tu contribución..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Documentos de Respaldo
            </label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-500'}`}
            >
              <input {...getInputProps()} />
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                Arrastra archivos aquí o haz clic para seleccionar
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PDF, PNG, JPG (máx. 5MB)
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Tu Correo Electrónico
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="correo@ejemplo.com"
              />
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
              <p className="text-sm text-yellow-700">
                Tu información será revisada por nuestro equipo antes de ser publicada.
                Nos pondremos en contacto contigo si necesitamos información adicional.
              </p>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
            Enviar Contribución
          </Button>
        </form>
      </div>
    </PageLayout>
  );
};

export default Participate;