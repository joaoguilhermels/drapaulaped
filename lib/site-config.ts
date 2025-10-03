import { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  name: 'Dra. Paula Ped',
  description: 'Pediatria com cuidado e atenção para seu filho',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  links: {
    // instagram: 'https://instagram.com/username',
    // facebook: 'https://facebook.com/username',
    // whatsapp: 'https://wa.me/5511999999999',
  },
}
