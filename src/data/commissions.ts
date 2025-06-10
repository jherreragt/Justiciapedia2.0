import { CommissionData } from '../types';

export const commissions: CommissionData[] = [
  {
    id: 'csj-2024',
    name: 'Comisión de Postulación para Magistrados de la Corte Suprema de Justicia 2024',
    purpose: 'Seleccionar candidatos idóneos para integrar la Corte Suprema de Justicia para el período 2024-2029',
    description: 'Proceso de selección de magistrados para el máximo tribunal de justicia ordinaria del país, responsable de garantizar la correcta administración de justicia. Esta comisión tiene la responsabilidad de evaluar a los candidatos según criterios de idoneidad moral, competencia profesional y experiencia judicial.',
    type: 'Magistrados CSJ',
    status: 'En proceso',
    members: [
      {
        name: 'Dr. Carlos Morales Monroy',
        role: 'Presidente',
        institution: 'Colegio de Abogados y Notarios de Guatemala',
        imageUrl: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg'
      },
      {
        name: 'Dra. Ana Lucía Pérez',
        role: 'Secretaria',
        institution: 'Universidad de San Carlos de Guatemala',
        imageUrl: 'https://images.pexels.com/photos/6866174/pexels-photo-6866174.jpeg'
      },
      {
        name: 'Lic. Roberto Méndez García',
        role: 'Vocal',
        institution: 'Universidad Rafael Landívar',
        imageUrl: 'https://images.pexels.com/photos/8422230/pexels-photo-8422230.jpeg'
      },
      {
        name: 'Dra. María Elena Castillo',
        role: 'Vocal',
        institution: 'Corte de Apelaciones',
        imageUrl: 'https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg'
      },
      {
        name: 'Dr. Jorge Luis Hernández',
        role: 'Vocal',
        institution: 'Universidad Mariano Gálvez',
        imageUrl: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg'
      }
    ],
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    phases: [
      {
        name: 'Convocatoria Pública',
        description: 'Publicación de bases del concurso y apertura del período de recepción de expedientes de candidatos',
        startDate: '2024-01-15',
        endDate: '2024-02-28',
        status: 'Completada'
      },
      {
        name: 'Evaluación de Expedientes',
        description: 'Revisión exhaustiva y calificación de documentos presentados por los candidatos, verificación de requisitos',
        startDate: '2024-03-01',
        endDate: '2024-04-15',
        status: 'En proceso'
      },
      {
        name: 'Verificación de Antecedentes',
        description: 'Investigación de antecedentes profesionales, académicos y personales de los candidatos preseleccionados',
        startDate: '2024-04-16',
        endDate: '2024-05-15',
        status: 'Pendiente'
      },
      {
        name: 'Entrevistas Públicas',
        description: 'Entrevistas públicas a candidatos preseleccionados para evaluar competencias y idoneidad',
        startDate: '2024-05-16',
        endDate: '2024-06-15',
        status: 'Pendiente'
      },
      {
        name: 'Elaboración de Nómina',
        description: 'Elaboración y envío de nómina final de candidatos al Congreso de la República',
        startDate: '2024-06-16',
        endDate: '2024-06-30',
        status: 'Pendiente'
      }
    ],
    candidatesCount: 45,
    positionsAvailable: 13,
    requirements: [
      'Ser guatemalteco de origen',
      'Ser abogado colegiado activo con al menos 15 años de ejercicio profesional',
      'Tener más de 40 años de edad al momento de la postulación',
      'Haber ejercido la profesión por más de 10 años en el territorio nacional',
      'Ser de reconocida honorabilidad e idoneidad moral',
      'No haber sido condenado por delito doloso',
      'Presentar declaración jurada de bienes y rentas',
      'Someterse a evaluaciones psicológicas y de competencias'
    ],
    documents: [
      {
        title: 'Convocatoria Oficial CSJ 2024',
        url: '/documents/convocatoria-csj-2024.pdf',
        type: 'PDF'
      },
      {
        title: 'Bases del Concurso y Criterios de Evaluación',
        url: '/documents/bases-csj-2024.pdf',
        type: 'PDF'
      },
      {
        title: 'Lista Oficial de Candidatos Postulados',
        url: '/documents/candidatos-csj-2024.pdf',
        type: 'PDF'
      },
      {
        title: 'Cronograma Detallado del Proceso',
        url: '/documents/cronograma-csj-2024.pdf',
        type: 'PDF'
      },
      {
        title: 'Formulario de Postulación',
        url: '/documents/formulario-csj-2024.pdf',
        type: 'PDF'
      }
    ]
  },
  {
    id: 'ca-2024',
    name: 'Comisión de Postulación para Magistrados de Salas de Apelaciones 2024',
    purpose: 'Seleccionar candidatos para integrar las Salas de Apelaciones del país en diferentes materias jurídicas',
    description: 'Proceso de selección para magistrados de segunda instancia en las diferentes materias del derecho, incluyendo civil, penal, laboral y administrativa. Los magistrados seleccionados conocerán recursos de apelación contra resoluciones de primera instancia.',
    type: 'Magistrados CA',
    status: 'En proceso',
    members: [
      {
        name: 'Lic. Fernando Castillo',
        role: 'Presidente',
        institution: 'Colegio de Abogados y Notarios de Guatemala',
        imageUrl: 'https://images.pexels.com/photos/8422230/pexels-photo-8422230.jpeg'
      },
      {
        name: 'Dra. Silvia Rodríguez',
        role: 'Secretaria',
        institution: 'Universidad del Istmo',
        imageUrl: 'https://images.pexels.com/photos/6866174/pexels-photo-6866174.jpeg'
      },
      {
        name: 'Dr. Manuel Pérez',
        role: 'Vocal',
        institution: 'Corte Suprema de Justicia',
        imageUrl: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg'
      },
      {
        name: 'Licda. Carmen Morales',
        role: 'Vocal',
        institution: 'Universidad Francisco Marroquín',
        imageUrl: 'https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg'
      }
    ],
    startDate: '2024-02-01',
    endDate: '2024-07-31',
    phases: [
      {
        name: 'Convocatoria y Recepción',
        description: 'Publicación de bases del concurso y recepción de expedientes de candidatos',
        startDate: '2024-02-01',
        endDate: '2024-03-15',
        status: 'Completada'
      },
      {
        name: 'Evaluación Documental',
        description: 'Revisión y calificación de documentos presentados, verificación de requisitos legales',
        startDate: '2024-03-16',
        endDate: '2024-05-30',
        status: 'En proceso'
      },
      {
        name: 'Exámenes de Conocimientos',
        description: 'Aplicación de exámenes escritos y orales sobre materias jurídicas específicas',
        startDate: '2024-06-01',
        endDate: '2024-06-30',
        status: 'Pendiente'
      },
      {
        name: 'Entrevistas de Evaluación',
        description: 'Entrevistas públicas a candidatos que aprobaron los exámenes de conocimientos',
        startDate: '2024-07-01',
        endDate: '2024-07-20',
        status: 'Pendiente'
      },
      {
        name: 'Integración de Nómina',
        description: 'Elaboración y envío de nómina final de candidatos seleccionados',
        startDate: '2024-07-21',
        endDate: '2024-07-31',
        status: 'Pendiente'
      }
    ],
    candidatesCount: 78,
    positionsAvailable: 25,
    requirements: [
      'Ser guatemalteco',
      'Ser abogado colegiado activo',
      'Tener más de 35 años de edad',
      'Haber ejercido la profesión por más de 5 años',
      'No haber sido condenado por delito doloso',
      'Aprobar exámenes de conocimientos jurídicos',
      'Presentar certificaciones de antecedentes',
      'Demostrar experiencia en la materia correspondiente'
    ],
    documents: [
      {
        title: 'Convocatoria Oficial CA 2024',
        url: '/documents/convocatoria-ca-2024.pdf',
        type: 'PDF'
      },
      {
        title: 'Bases del Concurso',
        url: '/documents/bases-ca-2024.pdf',
        type: 'PDF'
      },
      {
        title: 'Temario de Exámenes',
        url: '/documents/temario-ca-2024.pdf',
        type: 'PDF'
      }
    ]
  },
  {
    id: 'fg-2022',
    name: 'Comisión de Postulación para Fiscal General y Jefe del Ministerio Público 2022',
    purpose: 'Seleccionar candidatos para el cargo de Fiscal General de la República y Jefe del Ministerio Público',
    description: 'Proceso de selección del máximo responsable de la persecución penal en Guatemala. El Fiscal General dirige la investigación criminal y representa al Estado en la acción penal pública.',
    type: 'Fiscal General',
    status: 'Finalizada',
    members: [
      {
        name: 'Dr. Óscar Cruz Oliva',
        role: 'Presidente',
        institution: 'Presidente de la Corte Suprema de Justicia',
        imageUrl: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg'
      },
      {
        name: 'Dr. Murphy Paiz',
        role: 'Vocal',
        institution: 'Decano Facultad de Derecho USAC',
        imageUrl: 'https://images.pexels.com/photos/8422230/pexels-photo-8422230.jpeg'
      },
      {
        name: 'Lic. Bonerge Mejía',
        role: 'Vocal',
        institution: 'Colegio de Abogados y Notarios',
        imageUrl: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg'
      }
    ],
    startDate: '2022-04-10',
    endDate: '2022-05-20',
    phases: [
      {
        name: 'Convocatoria',
        description: 'Publicación de bases y recepción de expedientes',
        startDate: '2022-04-10',
        endDate: '2022-04-20',
        status: 'Completada'
      },
      {
        name: 'Evaluación de Expedientes',
        description: 'Revisión y calificación de documentos presentados',
        startDate: '2022-04-21',
        endDate: '2022-05-05',
        status: 'Completada'
      },
      {
        name: 'Entrevistas',
        description: 'Entrevistas públicas a candidatos preseleccionados',
        startDate: '2022-05-06',
        endDate: '2022-05-15',
        status: 'Completada'
      },
      {
        name: 'Nómina Final',
        description: 'Elaboración y envío de nómina de candidatos',
        startDate: '2022-05-16',
        endDate: '2022-05-20',
        status: 'Completada'
      }
    ],
    candidatesCount: 12,
    positionsAvailable: 1,
    requirements: [
      'Ser guatemalteco de origen',
      'Ser abogado colegiado activo',
      'Tener más de 40 años de edad',
      'Haber ejercido la profesión por más de 10 años',
      'Tener experiencia en derecho penal',
      'Demostrar liderazgo y capacidad administrativa',
      'No tener conflictos de interés'
    ],
    documents: [
      {
        title: 'Acta Final del Proceso',
        url: '/documents/acta-final-fg-2022.pdf',
        type: 'PDF'
      },
      {
        title: 'Nómina de Candidatos Seleccionados',
        url: '/documents/nomina-fg-2022.pdf',
        type: 'PDF'
      }
    ]
  },
  {
    id: 'cc-2021',
    name: 'Comisión de Postulación para Magistrados de la Corte de Constitucionalidad 2021',
    purpose: 'Seleccionar candidatos para integrar la Corte de Constitucionalidad como máximo tribunal constitucional',
    description: 'Proceso de selección para el máximo tribunal constitucional del país, encargado de defender el orden constitucional y actuar como intérprete supremo de la Constitución Política.',
    type: 'Magistrados CC',
    status: 'Finalizada',
    members: [
      {
        name: 'Dr. Neftaly Aldana',
        role: 'Presidente',
        institution: 'Corte Suprema de Justicia',
        imageUrl: 'https://images.pexels.com/photos/8422230/pexels-photo-8422230.jpeg'
      },
      {
        name: 'Dra. Gloria Porras',
        role: 'Vocal',
        institution: 'Colegio de Abogados',
        imageUrl: 'https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg'
      },
      {
        name: 'Dr. Alejandro Maldonado',
        role: 'Vocal',
        institution: 'Universidad de San Carlos',
        imageUrl: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg'
      }
    ],
    startDate: '2021-03-01',
    endDate: '2021-04-30',
    phases: [
      {
        name: 'Convocatoria',
        description: 'Publicación de bases y recepción de expedientes',
        startDate: '2021-03-01',
        endDate: '2021-03-15',
        status: 'Completada'
      },
      {
        name: 'Evaluación de Expedientes',
        description: 'Revisión y calificación de documentos presentados',
        startDate: '2021-03-16',
        endDate: '2021-04-10',
        status: 'Completada'
      },
      {
        name: 'Entrevistas',
        description: 'Entrevistas públicas a candidatos preseleccionados',
        startDate: '2021-04-11',
        endDate: '2021-04-25',
        status: 'Completada'
      },
      {
        name: 'Nómina Final',
        description: 'Elaboración y envío de nómina de candidatos',
        startDate: '2021-04-26',
        endDate: '2021-04-30',
        status: 'Completada'
      }
    ],
    candidatesCount: 28,
    positionsAvailable: 5,
    requirements: [
      'Ser guatemalteco de origen',
      'Ser abogado colegiado activo',
      'Tener más de 40 años de edad',
      'Haber ejercido la profesión por más de 10 años',
      'Especialización en derecho constitucional',
      'Experiencia en litigio constitucional',
      'Publicaciones en materia constitucional'
    ],
    documents: [
      {
        title: 'Resolución Final CC 2021',
        url: '/documents/resolucion-cc-2021.pdf',
        type: 'PDF'
      }
    ]
  },
  {
    id: 'jpi-2023',
    name: 'Comisión de Postulación para Jueces de Primera Instancia 2023',
    purpose: 'Seleccionar candidatos para juzgados de primera instancia a nivel nacional',
    description: 'Proceso de selección para jueces que conocerán casos en primera instancia en todo el territorio nacional, en las diferentes materias del derecho.',
    type: 'Jueces Primera Instancia',
    status: 'Finalizada',
    members: [
      {
        name: 'Lic. Mario Contreras',
        role: 'Presidente',
        institution: 'Consejo de la Carrera Judicial',
        imageUrl: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg'
      },
      {
        name: 'Dra. Carmen López',
        role: 'Secretaria',
        institution: 'Universidad Francisco Marroquín',
        imageUrl: 'https://images.pexels.com/photos/6866174/pexels-photo-6866174.jpeg'
      }
    ],
    startDate: '2023-01-10',
    endDate: '2023-12-15',
    phases: [
      {
        name: 'Convocatoria',
        description: 'Publicación de bases y recepción de expedientes',
        startDate: '2023-01-10',
        endDate: '2023-03-31',
        status: 'Completada'
      },
      {
        name: 'Evaluación de Expedientes',
        description: 'Revisión y calificación de documentos presentados',
        startDate: '2023-04-01',
        endDate: '2023-08-31',
        status: 'Completada'
      },
      {
        name: 'Exámenes',
        description: 'Exámenes de conocimientos y competencias',
        startDate: '2023-09-01',
        endDate: '2023-11-30',
        status: 'Completada'
      },
      {
        name: 'Nómina Final',
        description: 'Elaboración y envío de nómina de candidatos',
        startDate: '2023-12-01',
        endDate: '2023-12-15',
        status: 'Completada'
      }
    ],
    candidatesCount: 156,
    positionsAvailable: 45,
    requirements: [
      'Ser guatemalteco',
      'Ser abogado colegiado activo',
      'Tener más de 28 años de edad',
      'Haber ejercido la profesión por más de 3 años',
      'Aprobar exámenes de oposición',
      'Completar curso de formación judicial',
      'Evaluación psicológica favorable'
    ],
    documents: [
      {
        title: 'Listado Final de Candidatos JPI 2023',
        url: '/documents/listado-jpi-2023.pdf',
        type: 'PDF'
      }
    ]
  }
];