import type { Project, Property, Testimonial } from '@/types'

export const PROJECTS: Project[] = [
  {
    id: 'puerta-del-alma',
    name: 'Puerta del Alma',
    category: 'residencial',
    location: 'El Salvador',
    year: 2025,
    image: './images/portafolio/puerta-del-alma/portada.jpg',
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

export const PROPERTIES: Property[] = [
  {
    id: 'bodega-chalchuapa',
    name: 'Bodega Chalchuapa',
    location: 'Chalchuapa, Santa Ana',
    mode: 'venta',
    image: './images/propiedades/bodega-chalchuapa/portada.jpg',
    badge: 'En Venta',
  },
  {
    id: 'edificio-centro-historico',
    name: 'Edificio Centro Histórico',
    location: 'Centro Histórico, San Salvador',
    mode: 'venta',
    image: './images/propiedades/edificio-centro-historico/portada.jpg',
    badge: 'En Venta',
  },
  {
    id: 'edificio-comercial-proceres',
    name: 'Edificio Comercial Los Próceres',
    location: 'Cerca de Los Próceres, San Salvador',
    mode: 'venta',
    image: './images/propiedades/edificio-comercial-proceres/portada.jpg',
    badge: 'En Venta',
  },
  {
    id: 'ranchador-bodega',
    name: 'El Ranchador con Bodega Industrial',
    location: 'El Salvador',
    mode: 'venta',
    image: './images/propiedades/ranchador-bodega/portada.jpg',
    badge: 'En Venta',
  },
  {
    id: 'locales-santa-ana',
    name: 'Locales Centro Santa Ana',
    location: 'Centro, Santa Ana',
    mode: 'venta',
    image: './images/propiedades/locales-santa-ana/portada.jpg',
    badge: 'En Venta',
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
    image: './images/propiedades/casa-lomas-san-francisco/portada.png',
    badge: 'En Venta',
    description: '5 casas con escrituras independientes en un solo terreno. Ideal para inversión o renta.',
  },
  {
    id: 'paseo-del-prado',
    name: 'Residencial Paseo del Prado',
    location: 'El Salvador',
    mode: 'alquiler',
    image: './images/propiedades/paseo-del-prado/portada.jpg',
    badge: 'En Alquiler',
  },
  {
    id: 'puerta-del-alma-prop',
    name: 'Puerta del Alma',
    location: 'El Salvador',
    mode: 'venta',
    image: './images/portafolio/puerta-del-alma/portada.jpg',
    badge: 'En Venta',
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
