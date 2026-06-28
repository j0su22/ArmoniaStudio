import type { Project, Property, Testimonial } from '@/types'

const pda = (file: string) => `./images/portafolio/puerta-del-alma/${file}`

const PDA_SECTIONS = [
  { label: 'Portada',             images: [pda('portada.jpg')] },
  { label: 'Sala',                images: Array.from({ length: 11 }, (_, i) => pda(`sala-${i + 1}.jpg`)) },
  { label: 'Dormitorio Principal',images: Array.from({ length: 22 }, (_, i) => pda(`dorm-principal-${i + 1}.jpg`)) },
  { label: 'Dormitorio Junior',   images: Array.from({ length: 12 }, (_, i) => pda(`dorm-junior-${i + 1}.jpg`)) },
  { label: 'Cocina y Comedor',    images: Array.from({ length: 7 },  (_, i) => pda(`cocina-${i + 1}.jpg`)) },
  { label: 'Baño Social',         images: Array.from({ length: 3 },  (_, i) => pda(`bano-social-${i + 1}.jpg`)) },
  { label: 'Baño Dormitorio',     images: Array.from({ length: 7 },  (_, i) => pda(`bano-dorm-${i + 1}.jpg`)) },
  { label: 'Espacio Integrado',   images: Array.from({ length: 7 },  (_, i) => pda(`espacio-${i + 1}.jpg`)) },
  { label: 'Terraza',             images: Array.from({ length: 3 },  (_, i) => pda(`terraza-${i + 1}.jpg`)) },
  { label: 'Antes y Después',     images: [
    pda('antes-despues-1.jpg'),   // fuente: 1
    pda('antes-despues-9.jpg'),   // fuente: 2
    pda('antes-despues-10.jpg'),  // fuente: 3
    pda('antes-despues-11.jpg'),  // fuente: 4
    pda('antes-despues-12.jpg'),  // fuente: 5
    pda('antes-despues-13.jpg'),  // fuente: 6
    pda('antes-despues-14.jpg'),  // fuente: 7
    pda('antes-despues-15.jpg'),  // fuente: 8
    pda('antes-despues-16.jpg'),  // fuente: 9
    pda('antes-despues-2.png'),   // fuente: 10.PNG
    pda('antes-despues-3.jpg'),   // fuente: 11
    pda('antes-despues-4.jpg'),   // fuente: 12
    pda('antes-despues-5.jpg'),   // fuente: 13
    pda('antes-despues-6.jpg'),   // fuente: 14
    pda('antes-despues-7.jpg'),   // fuente: 15
    pda('antes-despues-8.jpg'),   // fuente: 16
    pda('antes-despues-17.png'),  // fuente: PORTADA.PNG
  ]},
]

export const PROJECTS: Project[] = [
  {
    id: 'puerta-del-alma',
    name: 'Puerta del Alma',
    category: 'residencial',
    location: 'El Salvador',
    year: 2025,
    image: pda('portada.jpg'),
    gallerySections: PDA_SECTIONS,
    gallery: PDA_SECTIONS.flatMap((s) => s.images),
  },
  {
    id: 'park-tower',
    name: 'Park Tower',
    category: 'residencial',
    location: 'El Salvador',
    year: 2025,
    image: null,
  },
  {
    id: 'garden-tower',
    name: 'Garden Tower',
    category: 'residencial',
    location: 'El Salvador',
    year: 2024,
    image: null,
  },
  {
    id: 'art-haus',
    name: 'Art Haus',
    category: 'comercial',
    location: 'El Salvador',
    year: 2024,
    image: null,
  },
  {
    id: 'consultorio-cp-1',
    name: 'Consultorio Cirugía Plástica I',
    category: 'consultorio',
    location: 'El Salvador',
    year: 2024,
    image: null,
  },
  {
    id: 'consultorio-cp-2',
    name: 'Consultorio Cirugía Plástica II',
    category: 'consultorio',
    location: 'El Salvador',
    year: 2024,
    image: null,
  },
  {
    id: 'de-casa-a-apartamentos',
    name: 'De Casa a Apartamentos',
    category: 'comercial',
    location: 'El Salvador',
    year: 2023,
    image: null,
  },
]

const prop = (id: string, file: string) => `./images/propiedades/${id}/${file}`

export const PROPERTIES: Property[] = [
  {
    id: 'bodega-chalchuapa',
    name: 'Bodega Chalchuapa',
    location: 'Chalchuapa, Santa Ana',
    mode: 'venta',
    image: prop('bodega-chalchuapa', 'portada.jpg'),
    badge: 'En Venta',
    gallery: [
      prop('bodega-chalchuapa', 'portada.jpg'),
      prop('bodega-chalchuapa', 'img_5168.jpg'),
      prop('bodega-chalchuapa', 'img_5170.jpg'),
      prop('bodega-chalchuapa', 'img_5171.jpg'),
      prop('bodega-chalchuapa', 'img_5177.jpg'),
      prop('bodega-chalchuapa', 'img_5180.jpg'),
      prop('bodega-chalchuapa', 'img_5181.jpg'),
    ],
  },
  {
    id: 'edificio-centro-historico',
    name: 'Edificio Centro Histórico',
    location: 'Centro Histórico, San Salvador',
    mode: 'venta',
    image: prop('edificio-centro-historico', 'portada.jpg'),
    badge: 'En Venta',
    gallery: [
      prop('edificio-centro-historico', 'portada.jpg'),
      prop('edificio-centro-historico', 'img_5061.jpg'),
      prop('edificio-centro-historico', 'img_5063.jpg'),
    ],
  },
  {
    id: 'edificio-comercial-proceres',
    name: 'Edificio Comercial Los Próceres',
    location: 'Cerca de Los Próceres, San Salvador',
    mode: 'venta',
    image: prop('edificio-comercial-proceres', 'portada.jpg'),
    badge: 'En Venta',
    gallery: [
      prop('edificio-comercial-proceres', 'portada.jpg'),
      prop('edificio-comercial-proceres', 'img-2.jpg'),
      prop('edificio-comercial-proceres', 'img-3.jpg'),
      prop('edificio-comercial-proceres', 'img-4.png'),
      prop('edificio-comercial-proceres', 'img-5.png'),
    ],
  },
  {
    id: 'ranchador-bodega',
    name: 'El Ranchador con Bodega Industrial',
    location: 'El Salvador',
    mode: 'venta',
    image: prop('ranchador-bodega', 'portada.jpg'),
    badge: 'En Venta',
    gallery: ['portada.jpg', 'img_5195.jpg', 'img_5197.jpg', 'img_5199.jpg',
      'img_5200.jpg', 'img_5203.jpg', 'img_5206.jpg', 'img_5207.jpg',
      'img_5210.jpg', 'img_5213.jpg', 'img_5216.jpg'].map(f => prop('ranchador-bodega', f)),
  },
  {
    id: 'locales-santa-ana',
    name: 'Locales Centro Santa Ana',
    location: 'Centro, Santa Ana',
    mode: 'venta',
    image: prop('locales-santa-ana', 'portada.jpg'),
    badge: 'En Venta',
    gallery: [
      prop('locales-santa-ana', 'portada.jpg'),
      prop('locales-santa-ana', 'img_5223.jpg'),
      prop('locales-santa-ana', 'img_5225.jpg'),
      prop('locales-santa-ana', 'img_5226.jpg'),
    ],
  },
  {
    id: 'villas-molino',
    name: 'Villas del Molino',
    location: 'El Salvador',
    mode: 'venta',
    image: null,
    badge: 'En Venta',
  },
  {
    id: 'casa-lomas-san-francisco',
    name: 'Complejo Lomas de San Francisco',
    location: 'Lomas de San Francisco, El Salvador',
    mode: 'venta',
    price: '$2,000,000',
    area: '2,957 m²',
    units: 5,
    image: prop('casa-lomas-san-francisco', 'portada.png'),
    badge: 'En Venta',
    description: '5 casas con escrituras independientes en un solo terreno. Ideal para inversión o renta.',
    gallery: Array.from({ length: 21 }, (_, i) =>
      prop('casa-lomas-san-francisco', i === 0 ? 'portada.png' : `${i + 1}.png`)
    ),
  },
  {
    id: 'paseo-del-prado',
    name: 'Residencial Paseo del Prado',
    location: 'El Salvador',
    mode: 'alquiler',
    image: prop('paseo-del-prado', 'portada.jpg'),
    badge: 'En Alquiler',
    gallery: [
      prop('paseo-del-prado', 'portada.jpg'),
      prop('paseo-del-prado', 'sala-comedor.jpg'),
      prop('paseo-del-prado', 'cocina.jpg'),
      prop('paseo-del-prado', 'dormitorio-1.jpg'),
      prop('paseo-del-prado', 'dormitorio-2.jpg'),
      prop('paseo-del-prado', 'dormitorio-3.jpg'),
      prop('paseo-del-prado', 'bano-dormitorio.jpg'),
      prop('paseo-del-prado', 'bano-social.jpg'),
      prop('paseo-del-prado', 'bano-compartido.jpg'),
      prop('paseo-del-prado', 'area-lavado.jpg'),
      prop('paseo-del-prado', 'area-lavado-2.jpg'),
      prop('paseo-del-prado', 'escaleras.jpg'),
      prop('paseo-del-prado', 'patio.jpg'),
    ],
  },
  {
    id: 'puerta-del-alma-prop',
    name: 'Puerta del Alma',
    location: 'El Salvador',
    mode: 'venta',
    image: pda('portada.jpg'),
    badge: 'En Venta',
    gallery: [pda('portada.jpg'), pda('sala-1.jpg'), pda('dorm-principal-1.jpg'), pda('cocina-1.jpg')],
  },
  {
    id: 'park-tower-prop',
    name: 'Park Tower',
    location: 'El Salvador',
    mode: 'venta',
    image: null,
    badge: 'En Venta',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Armonía entendió exactamente lo que necesitábamos para nuestro consultorio. Ahora nuestros pacientes se sienten cómodos y seguros desde el primer momento.',
    author: 'Dra. Ana López',
    service: 'Diseño de Consultorio Médico',
    rating: 5,
  },
  {
    id: 't2',
    quote: 'Transformaron nuestro Airbnb por completo. Las reservas aumentaron un 60% y las reseñas hablan solas. Cada detalle fue pensado para el huésped.',
    author: 'Roberto Hernández',
    service: 'Diseño Estratégico Airbnb',
    rating: 5,
  },
  {
    id: 't3',
    quote: 'No solo diseñaron nuestra casa, sino que nos acompañaron en todo el proceso con una paciencia y profesionalismo increíbles. El resultado superó nuestras expectativas.',
    author: 'Familia Martínez',
    service: 'Diseño Residencial Integral',
    rating: 5,
  },
]

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Diseño de Interiores', href: '#portafolio' },
  { label: 'Propiedades', href: '#propiedades' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export const PROJECT_CATEGORIES = [
  { value: 'all', label: 'Todos' },
  { value: 'residencial', label: 'Residencial' },
  { value: 'airbnb', label: 'Airbnb' },
  { value: 'consultorio', label: 'Consultorios' },
  { value: 'comercial', label: 'Comercial' },
] as const

export const SOCIAL_LINKS = [
  { label: 'IG', href: 'https://www.instagram.com/armoniaestudiosv/' },
  { label: 'FB', href: 'https://www.facebook.com/share/1D3Yooqd4n/?mibextid=wwXIfr' },
]

export const CONTACT = {
  whatsapp: '+50373473219',
  email: 'gabrielaaguilarconsultora@gmail.com',
  emailSubject: 'Consulta desde Armonía Estudio',
}
