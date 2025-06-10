import { InstitutionData } from '../types';

export const institutions: InstitutionData[] = [
  {
    id: 'csj',
    name: 'Corte Suprema de Justicia',
    type: 'Órgano Judicial',
    description: 'Máximo tribunal de justicia ordinaria en Guatemala, encargado de la administración de justicia y garantizar el respeto al estado de derecho.',
    imageUrl: 'https://images.pexels.com/photos/1536357/pexels-photo-1536357.jpeg',
    schedule: '08:00 - 15:30',
    workDays: 'Lunes - Viernes',
    website: 'www.oj.gob.gt',
    email: 'comsocial@oj.gob.gt',
    phone: '2290 4444',
    address: '21 Avenida 0-60, Zona 1, Ciudad de Guatemala',
    mission: 'Impartir justicia garantizando el respeto a la Constitución, las leyes y los Tratados Internacionales, con independencia, imparcialidad, celeridad y eficacia.',
    vision: 'Ser un Organismo Judicial independiente, eficiente y confiable que actúe con ética, probidad y transparencia para fortalecer el estado de derecho.',
    authorities: [
      {
        name: 'Dr. Óscar Cruz Oliva',
        position: 'Presidente del Organismo Judicial',
        imageUrl: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg'
      },
      {
        name: 'Dra. Silvia Patricia Valdés',
        position: 'Vicepresidenta del Organismo Judicial',
        imageUrl: 'https://images.pexels.com/photos/6866174/pexels-photo-6866174.jpeg'
      }
    ],
    budget: [
      { year: 2024, amount: 3800000000, currency: 'GTQ' },
      { year: 2023, amount: 3500000000, currency: 'GTQ' },
      { year: 2022, amount: 3200000000, currency: 'GTQ' },
      { year: 2021, amount: 3000000000, currency: 'GTQ' }
    ]
  },
  {
    id: 'ca',
    name: 'Corte de Apelaciones',
    type: 'Órgano Judicial',
    description: 'Tribunal de segunda instancia que conoce las apelaciones contra resoluciones de los juzgados de primera instancia en materia civil, penal, laboral y administrativa.',
    imageUrl: 'https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg',
    schedule: '08:00 - 15:30',
    workDays: 'Lunes - Viernes',
    website: 'www.oj.gob.gt',
    email: 'comsocial@oj.gob.gt',
    phone: '2290 4444',
    address: 'Torre de Tribunales, Zona 1, Ciudad de Guatemala',
    mission: 'Conocer y resolver los recursos de apelación interpuestos contra las resoluciones de los tribunales de primera instancia.',
    vision: 'Garantizar el derecho a la doble instancia y la correcta aplicación de la ley en segunda instancia.'
  },
  {
    id: 'jpi',
    name: 'Juzgados de Primera Instancia',
    type: 'Órgano Judicial',
    description: 'Tribunales pertenecientes al Organismo Judicial, encargados de conocer los casos, hechos o procesos judiciales en primera instancia en las diferentes materias del derecho.',
    imageUrl: 'https://images.pexels.com/photos/5668879/pexels-photo-5668879.jpeg',
    schedule: '08:00 - 15:30',
    workDays: 'Lunes - Viernes',
    website: 'www.oj.gob.gt',
    email: 'comsocial@oj.gob.gt',
    phone: '2290 4444',
    address: 'Diversos ubicaciones en todo el territorio nacional',
    mission: 'Ejercer las facultades jurisdiccionales dentro de la República de Guatemala como tribunales de primera instancia conforme los procesos establecidos en la Constitución Política y demás leyes.',
    vision: 'Brindar un servicio de justicia accesible, eficiente y de calidad en primera instancia en todo el territorio nacional.',
    budget: [
      { year: 2024, amount: 1200000000, currency: 'GTQ' },
      { year: 2023, amount: 1100000000, currency: 'GTQ' }
    ]
  },
  {
    id: 'jp',
    name: 'Juzgados de Paz',
    type: 'Órgano Judicial',
    description: 'Tribunales que conocen asuntos de menor cuantía, faltas y procesos de conciliación en primera instancia, siendo la puerta de entrada al sistema judicial.',
    imageUrl: 'https://images.pexels.com/photos/8111965/pexels-photo-8111965.jpeg',
    schedule: '08:00 - 15:30',
    workDays: 'Lunes - Viernes',
    website: 'www.oj.gob.gt',
    email: 'comsocial@oj.gob.gt',
    phone: '2290 4444',
    address: 'Presentes en todos los municipios del país',
    mission: 'Facilitar el acceso a la justicia en asuntos de menor cuantía y promover la resolución pacífica de conflictos.',
    vision: 'Ser la primera instancia judicial más cercana a la población, garantizando justicia pronta y cumplida.'
  },
  {
    id: 'ccj',
    name: 'Consejo de la Carrera Judicial',
    type: 'Órgano Administrativo',
    description: 'Órgano encargado de administrar la carrera judicial, garantizando la independencia, excelencia profesional y desarrollo de los servidores judiciales.',
    imageUrl: 'https://images.pexels.com/photos/8112111/pexels-photo-8112111.jpeg',
    schedule: '08:00 - 15:30',
    workDays: 'Lunes - Viernes',
    website: 'www.oj.gob.gt',
    email: 'carrerajudicial@oj.gob.gt',
    phone: '2290 4444',
    address: 'Centro Cívico, Zona 1, Ciudad de Guatemala',
    mission: 'Administrar la carrera judicial garantizando la selección, formación y desarrollo profesional de los servidores judiciales.',
    vision: 'Contar con un sistema de carrera judicial que garantice la excelencia, independencia e imparcialidad de los servidores judiciales.'
  },
  {
    id: 'cc',
    name: 'Corte de Constitucionalidad',
    type: 'Tribunal Constitucional',
    description: 'Tribunal permanente de jurisdicción privativa, encargado de defender el orden constitucional y actuar como máximo intérprete de la Constitución Política.',
    imageUrl: 'https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg',
    schedule: '08:00 - 15:30',
    workDays: 'Lunes - Viernes',
    website: 'www.cc.gob.gt',
    email: 'info@cc.gob.gt',
    phone: '2290 4444',
    address: '12 Avenida 12-54, Zona 1, Ciudad de Guatemala',
    mission: 'Defender el orden constitucional, actuar como tribunal permanente de jurisdicción privativa con independencia de los demás organismos del Estado.',
    vision: 'Ser el máximo intérprete de la Constitución Política de la República de Guatemala, garantizando la supremacía constitucional.',
    authorities: [
      {
        name: 'Dr. Neftaly Aldana',
        position: 'Presidente de la Corte de Constitucionalidad',
        imageUrl: 'https://images.pexels.com/photos/8422230/pexels-photo-8422230.jpeg'
      }
    ],
    budget: [
      { year: 2024, amount: 180000000, currency: 'GTQ' },
      { year: 2023, amount: 165000000, currency: 'GTQ' }
    ]
  },
  {
    id: 'mp',
    name: 'Ministerio Público',
    type: 'Órgano Autónomo',
    description: 'Institución auxiliar de la administración pública y de los tribunales, responsable de la acción penal pública y la investigación criminal en Guatemala.',
    imageUrl: 'https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg',
    schedule: '08:00 - 15:30',
    workDays: 'Lunes - Viernes',
    website: 'www.mp.gob.gt',
    email: 'info@mp.gob.gt',
    phone: '2290 4444',
    address: '15 Avenida 15-16, Zona 1, Ciudad de Guatemala',
    mission: 'Ejercer la acción penal pública en representación del Estado y dirigir la investigación criminal con objetividad, eficacia y respeto a los derechos humanos.',
    vision: 'Ser una institución sólida, eficiente y confiable en la persecución penal, contribuyendo al fortalecimiento del estado de derecho.',
    authorities: [
      {
        name: 'Dra. Consuelo Porras',
        position: 'Fiscal General de la República',
        imageUrl: 'https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg'
      },
      {
        name: 'Lic. Francisco Dall\'Anese',
        position: 'Jefe de la FECI',
        imageUrl: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg'
      }
    ],
    budget: [
      { year: 2024, amount: 2200000000, currency: 'GTQ' },
      { year: 2023, amount: 2000000000, currency: 'GTQ' },
      { year: 2022, amount: 1800000000, currency: 'GTQ' }
    ]
  },
  {
    id: 'inacif',
    name: 'Instituto Nacional de Ciencias Forenses',
    type: 'Órgano Auxiliar',
    description: 'Institución encargada de la investigación científica forense y estudios técnico-científicos para apoyar la administración de justicia en Guatemala.',
    imageUrl: 'https://images.pexels.com/photos/8112111/pexels-photo-8112111.jpeg',
    schedule: '24 horas (servicios de emergencia)',
    workDays: 'Todos los días',
    website: 'www.inacif.gob.gt',
    email: 'info@inacif.gob.gt',
    phone: '2290 4444',
    address: 'Finca La Verbena, Zona 7, Ciudad de Guatemala',
    mission: 'Brindar servicios de investigación científica forense de calidad para el sistema de justicia, contribuyendo al esclarecimiento de los hechos.',
    vision: 'Ser la institución líder en ciencias forenses en Guatemala, reconocida por su excelencia técnica y científica.',
    authorities: [
      {
        name: 'Dr. Fanuel García',
        position: 'Director General de INACIF',
        imageUrl: 'https://images.pexels.com/photos/8422230/pexels-photo-8422230.jpeg'
      }
    ],
    budget: [
      { year: 2024, amount: 450000000, currency: 'GTQ' },
      { year: 2023, amount: 420000000, currency: 'GTQ' }
    ]
  },
  {
    id: 'pnc',
    name: 'Policía Nacional Civil',
    type: 'Órgano de Seguridad',
    description: 'Institución encargada de proteger la vida, la integridad física, la seguridad de las personas y sus bienes, el libre ejercicio de los derechos y libertades.',
    imageUrl: 'https://images.pexels.com/photos/8112111/pexels-photo-8112111.jpeg',
    schedule: '24 horas',
    workDays: 'Todos los días',
    website: 'www.pnc.gob.gt',
    email: 'info@pnc.gob.gt',
    phone: '110',
    address: '6ta Avenida 13-71, Zona 1, Ciudad de Guatemala',
    mission: 'Proteger y servir a la población, garantizando el orden público, la seguridad ciudadana y el cumplimiento de la ley.',
    vision: 'Ser una institución policial moderna, profesional y confiable al servicio de la ciudadanía guatemalteca.'
  },
  {
    id: 'idpp',
    name: 'Instituto de la Defensa Pública Penal',
    type: 'Órgano Auxiliar',
    description: 'Institución encargada de brindar el servicio de defensa pública a las personas de escasos recursos económicos que lo requieran.',
    imageUrl: 'https://images.pexels.com/photos/5668879/pexels-photo-5668879.jpeg',
    schedule: '08:00 - 15:30',
    workDays: 'Lunes - Viernes',
    website: 'www.idpp.gob.gt',
    email: 'info@idpp.gob.gt',
    phone: '2290 4444',
    address: '8va Avenida 10-67, Zona 1, Ciudad de Guatemala',
    mission: 'Garantizar el derecho de defensa de las personas que no pueden costear un abogado particular en procesos penales.',
    vision: 'Ser una institución que garantice efectivamente el derecho de defensa con calidad y profesionalismo.',
    budget: [
      { year: 2024, amount: 380000000, currency: 'GTQ' },
      { year: 2023, amount: 350000000, currency: 'GTQ' }
    ]
  }
];