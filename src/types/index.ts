export interface Project {
  id: string
  name: string
  category: 'residencial' | 'airbnb' | 'consultorio' | 'comercial' | 'homestaging'
  location: string
  year: number
  image: string
  description?: string
}

export interface Property {
  id: string
  name: string
  price: string
  location: string
  mode: 'venta' | 'alquiler'
  area: string
  bedrooms: number
  bathrooms: number
  image: string
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

export type PropertyMode = 'venta' | 'alquiler'
export type ProjectCategory = Project['category'] | 'all'
