export interface Project {
  id: string
  name: string
  category: 'residencial' | 'airbnb' | 'consultorio' | 'comercial'
  location: string
  year: number
  image: string | null
  description?: string
}

export interface Property {
  id: string
  name: string
  location: string
  mode: 'venta'
  image: string | null
  badge: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  service: string
  rating: number
}

export interface Service {
  id: string
  number: string
  name: string
  description: string
  tag: string
}

export type ProjectCategory = Project['category'] | 'all'
