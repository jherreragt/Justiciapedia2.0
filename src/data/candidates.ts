import { CandidateData } from '../types';

export const candidates: CandidateData[] = [
  {
    id: '1',
    name: 'María Eugenia Morales',
    role: 'Candidata a Magistrada',
    institution: 'Corte Suprema de Justicia',
    imageUrl: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg',
    description: 'Abogada con especialización en derecho constitucional y amplia experiencia en litigio estratégico.',
    status: 'Activa',
    commissionId: 'csj-2024',
    specialization: 'Derecho Constitucional',
    yearsOfExperience: 25,
    education: [
      {
        institution: 'Universidad de San Carlos de Guatemala',
        degree: 'Licenciatura en Ciencias Jurídicas y Sociales',
        year: '1998',
        honors: 'Cum Laude'
      },
      {
        institution: 'Universidad Rafael Landívar',
        degree: 'Maestría en Derecho Constitucional',
        year: '2003',
        honors: 'Magna Cum Laude'
      },
      {
        institution: 'Universidad Complutense de Madrid',
        degree: 'Doctorado en Derecho Constitucional',
        year: '2008'
      }
    ],
    experience: [
      {
        position: 'Jueza de Primera Instancia Civil',
        institution: 'Organismo Judicial',
        period: '2015 - 2024',
        description: 'Resolución de casos civiles y mercantiles de alta complejidad'
      },
      {
        position: 'Magistrada Suplente',
        institution: 'Sala de Apelaciones Civil',
        period: '2012 - 2015',
        description: 'Conocimiento de recursos de apelación en materia civil'
      },
      {
        position: 'Abogada Litigante',
        institution: 'Bufete Jurídico Morales & Asociados',
        period: '2000 - 2012',
        description: 'Litigio estratégico en casos constitucionales y civiles'
      }
    ],
    publications: [
      {
        title: 'Los Derechos Fundamentales en la Constitución Guatemalteca',
        year: '2020',
        type: 'Libro',
        publisher: 'Editorial Universitaria'
      },
      {
        title: 'El Control de Constitucionalidad en Guatemala',
        year: '2018',
        type: 'Artículo',
        publisher: 'Revista de Derecho Constitucional'
      }
    ],
    awards: [
      {
        title: 'Reconocimiento a la Excelencia Judicial',
        year: '2022',
        institution: 'Organismo Judicial'
      },
      {
        title: 'Premio Nacional de Jurisprudencia',
        year: '2019',
        institution: 'Colegio de Abogados y Notarios'
      }
    ],
    languages: ['Español (Nativo)', 'Inglés (Avanzado)', 'Francés (Intermedio)'],
    certifications: [
      'Certificación en Derechos Humanos - IIDH',
      'Diplomado en Justicia Constitucional - Universidad Carlos III'
    ],
    socialMedia: {
      linkedin: 'https://linkedin.com/in/maria-morales',
      twitter: 'https://twitter.com/mariamorales'
    }
  },
  {
    id: '2',
    name: 'Juan Carlos Rodríguez',
    role: 'Candidato a Magistrado',
    institution: 'Corte de Constitucionalidad',
    imageUrl: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg',
    description: 'Doctor en Derecho Constitucional con trayectoria académica y publicaciones sobre derechos fundamentales.',
    status: 'Activo',
    commissionId: 'cc-2024',
    specialization: 'Derecho Constitucional',
    yearsOfExperience: 28,
    education: [
      {
        institution: 'Universidad de San Carlos de Guatemala',
        degree: 'Licenciatura en Ciencias Jurídicas y Sociales',
        year: '1995',
        honors: 'Summa Cum Laude'
      },
      {
        institution: 'Universidad Complutense de Madrid',
        degree: 'Doctorado en Derecho Constitucional',
        year: '2000'
      },
      {
        institution: 'Harvard Law School',
        degree: 'LL.M. in Constitutional Law',
        year: '2002'
      }
    ],
    experience: [
      {
        position: 'Catedrático Titular',
        institution: 'Universidad de San Carlos - Facultad de Derecho',
        period: '2005 - Presente',
        description: 'Docencia e investigación en Derecho Constitucional'
      },
      {
        position: 'Consultor en Derecho Constitucional',
        institution: 'Corte Interamericana de Derechos Humanos',
        period: '2010 - 2020',
        description: 'Asesoría en casos de jurisdicción constitucional'
      },
      {
        position: 'Abogado Senior',
        institution: 'Bufete Constitucional Rodríguez',
        period: '2000 - 2005',
        description: 'Litigio constitucional y derechos fundamentales'
      }
    ],
    publications: [
      {
        title: 'Tratado de Derecho Constitucional Guatemalteco',
        year: '2021',
        type: 'Libro',
        publisher: 'Editorial Jurídica'
      },
      {
        title: 'La Interpretación Constitucional en América Latina',
        year: '2019',
        type: 'Libro',
        publisher: 'Editorial Universitaria'
      },
      {
        title: 'El Amparo Constitucional: Evolución y Perspectivas',
        year: '2017',
        type: 'Artículo',
        publisher: 'Revista Iberoamericana de Derecho'
      }
    ],
    awards: [
      {
        title: 'Premio Internacional de Investigación Jurídica',
        year: '2021',
        institution: 'Universidad Complutense de Madrid'
      },
      {
        title: 'Reconocimiento a la Excelencia Académica',
        year: '2018',
        institution: 'Universidad de San Carlos'
      }
    ],
    languages: ['Español (Nativo)', 'Inglés (Fluido)', 'Francés (Avanzado)', 'Italiano (Intermedio)'],
    certifications: [
      'Certificación en Justicia Constitucional - Universidad Carlos III',
      'Diplomado en Derechos Humanos - IIDH'
    ]
  },
  {
    id: '3',
    name: 'Ana Lucía Castillo',
    role: 'Candidata a Fiscal General',
    institution: 'Ministerio Público',
    imageUrl: 'https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg',
    description: 'Especialista en derecho penal con experiencia en investigación de casos de corrupción y crimen organizado.',
    status: 'Activa',
    commissionId: 'fg-2024',
    specialization: 'Derecho Penal',
    yearsOfExperience: 22,
    education: [
      {
        institution: 'Universidad Rafael Landívar',
        degree: 'Licenciatura en Ciencias Jurídicas y Sociales',
        year: '2001',
        honors: 'Magna Cum Laude'
      },
      {
        institution: 'Universidad de Salamanca',
        degree: 'Maestría en Derecho Penal Internacional',
        year: '2005'
      },
      {
        institution: 'Georgetown University Law Center',
        degree: 'LL.M. in Criminal Law',
        year: '2008'
      }
    ],
    experience: [
      {
        position: 'Fiscal de Sección',
        institution: 'Ministerio Público - FECI',
        period: '2018 - 2024',
        description: 'Investigación y persecución de casos de corrupción de alto impacto'
      },
      {
        position: 'Fiscal Distrital',
        institution: 'Ministerio Público - Guatemala',
        period: '2012 - 2018',
        description: 'Coordinación de fiscalías y casos complejos'
      },
      {
        position: 'Fiscal Adjunta',
        institution: 'Ministerio Público',
        period: '2005 - 2012',
        description: 'Investigación de delitos contra la administración pública'
      }
    ],
    publications: [
      {
        title: 'La Lucha contra la Corrupción en Guatemala',
        year: '2022',
        type: 'Libro',
        publisher: 'Editorial Jurídica Centroamericana'
      },
      {
        title: 'Crimen Organizado y Justicia Penal',
        year: '2020',
        type: 'Artículo',
        publisher: 'Revista de Derecho Penal'
      }
    ],
    awards: [
      {
        title: 'Reconocimiento por Lucha Anticorrupción',
        year: '2023',
        institution: 'Transparency International'
      },
      {
        title: 'Premio Nacional de Justicia',
        year: '2021',
        institution: 'Organismo Judicial'
      }
    ],
    languages: ['Español (Nativo)', 'Inglés (Fluido)', 'Portugués (Intermedio)'],
    certifications: [
      'Certificación en Investigación Criminal - FBI Academy',
      'Diplomado en Lavado de Dinero - UNODC'
    ]
  },
  {
    id: '4',
    name: 'Roberto Méndez',
    role: 'Candidato a Magistrado',
    institution: 'Corte Suprema de Justicia',
    imageUrl: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg',
    description: 'Juez de carrera con amplia experiencia en tribunales y especialización en derecho mercantil y civil.',
    status: 'Activo',
    commissionId: 'csj-2024',
    specialization: 'Derecho Civil y Mercantil',
    yearsOfExperience: 20,
    education: [
      {
        institution: 'Universidad Francisco Marroquín',
        degree: 'Licenciatura en Ciencias Jurídicas y Sociales',
        year: '2003',
        honors: 'Cum Laude'
      },
      {
        institution: 'Universidad de Barcelona',
        degree: 'Maestría en Derecho Mercantil',
        year: '2007'
      }
    ],
    experience: [
      {
        position: 'Juez de Primera Instancia Civil y Mercantil',
        institution: 'Organismo Judicial',
        period: '2010 - 2024',
        description: 'Resolución de casos civiles y mercantiles complejos'
      },
      {
        position: 'Juez de Paz',
        institution: 'Organismo Judicial',
        period: '2005 - 2010',
        description: 'Conocimiento de casos de menor cuantía'
      }
    ],
    languages: ['Español (Nativo)', 'Inglés (Intermedio)'],
    certifications: [
      'Certificación en Arbitraje Comercial - ICC',
      'Diplomado en Derecho Bancario - BANGUAT'
    ]
  },
  {
    id: '5',
    name: 'Claudia Hernández',
    role: 'Candidata a Magistrada',
    institution: 'Salas de Apelaciones',
    imageUrl: 'https://images.pexels.com/photos/6866174/pexels-photo-6866174.jpeg',
    description: 'Abogada con experiencia en litigio en materia laboral y especialización en derechos humanos.',
    status: 'Activa',
    commissionId: 'ca-2024',
    specialization: 'Derecho Laboral',
    yearsOfExperience: 18,
    education: [
      {
        institution: 'Universidad del Istmo',
        degree: 'Licenciatura en Ciencias Jurídicas y Sociales',
        year: '2005'
      },
      {
        institution: 'Universidad de Costa Rica',
        degree: 'Maestría en Derechos Humanos',
        year: '2010'
      }
    ],
    experience: [
      {
        position: 'Jueza de Trabajo y Previsión Social',
        institution: 'Organismo Judicial',
        period: '2015 - 2024',
        description: 'Resolución de conflictos laborales y de seguridad social'
      },
      {
        position: 'Abogada Laboralista',
        institution: 'Bufete Hernández & Asociados',
        period: '2008 - 2015',
        description: 'Representación en casos laborales y sindicales'
      }
    ],
    languages: ['Español (Nativo)', 'Inglés (Avanzado)'],
    certifications: [
      'Certificación en Derecho Laboral Internacional - OIT',
      'Diplomado en Género y Justicia - IIDH'
    ]
  },
  {
    id: '6',
    name: 'Miguel Ángel Gálvez',
    role: 'Candidato a Magistrado',
    institution: 'Corte de Constitucionalidad',
    imageUrl: 'https://images.pexels.com/photos/8422230/pexels-photo-8422230.jpeg',
    description: 'Jurista con amplia trayectoria en casos de alto impacto y especialización en derecho penal internacional.',
    status: 'Activo',
    commissionId: 'cc-2024',
    specialization: 'Derecho Penal Internacional',
    yearsOfExperience: 30,
    education: [
      {
        institution: 'Universidad de San Carlos de Guatemala',
        degree: 'Licenciatura en Ciencias Jurídicas y Sociales',
        year: '1993'
      },
      {
        institution: 'Universidad de Leiden',
        degree: 'Maestría en Derecho Penal Internacional',
        year: '1998'
      }
    ],
    experience: [
      {
        position: 'Juez de Alto Riesgo',
        institution: 'Organismo Judicial',
        period: '2010 - 2024',
        description: 'Conocimiento de casos de crimen organizado y corrupción'
      },
      {
        position: 'Fiscal Especializado',
        institution: 'Ministerio Público',
        period: '2000 - 2010',
        description: 'Investigación de delitos de lesa humanidad'
      }
    ],
    awards: [
      {
        title: 'Reconocimiento Internacional por Justicia',
        year: '2020',
        institution: 'Corte Penal Internacional'
      }
    ],
    languages: ['Español (Nativo)', 'Inglés (Fluido)', 'Holandés (Intermedio)'],
    certifications: [
      'Certificación en Justicia Transicional - ICTJ',
      'Diplomado en Crímenes de Guerra - Universidad de Leiden'
    ]
  }
];