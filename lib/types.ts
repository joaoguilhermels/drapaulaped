/**
 * Shared TypeScript types and interfaces
 */

export interface SiteConfig {
  name: string
  description: string
  url: string
  links: {
    instagram?: string
    facebook?: string
    whatsapp?: string
  }
}

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export interface ContactInfo {
  phone?: string
  email?: string
  address?: string
}
