export default function StructuredData() {
  // Physician Schema
  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dra. Paula Andrade',
    alternateName: 'Paula Andrade Pediatra',
    description: 'Pediatra especializada em pediatria humanizada e integrativa em Pinheiros, São Paulo. Atendimento para crianças de 0 a 12 anos.',
    image: 'https://www.drapaulaandrade.com.br/dra-paula-andrade.jpg',
    url: 'https://www.drapaulaandrade.com.br',
    telephone: '+55-11-99999-9999',
    email: 'contato@drapaulaandrade.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua dos Pinheiros',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '05422-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.5631',
      longitude: '-46.6914',
    },
    medicalSpecialty: ['Pediatrics', 'Integrative Medicine'],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '-23.5631',
        longitude: '-46.6914',
      },
      geoRadius: '10000', // 10km radius
    },
    availableLanguage: ['pt-BR'],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/drapaulaandrade',
      'https://www.facebook.com/drapaulaandrade',
    ],
  }

  // Medical Business Schema
  const medicalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://www.drapaulaandrade.com.br',
    name: 'Dra. Paula Andrade - Pediatria',
    description: 'Consultório de Pediatria Humanizada e Integrativa em Pinheiros, São Paulo. Atendimento especializado para crianças de 0 a 12 anos com mais de 15 anos de experiência.',
    url: 'https://www.drapaulaandrade.com.br',
    logo: 'https://www.drapaulaandrade.com.br/logo.png',
    image: [
      'https://www.drapaulaandrade.com.br/consultorio-1.jpg',
      'https://www.drapaulaandrade.com.br/consultorio-2.jpg',
    ],
    telephone: '+55-11-99999-9999',
    email: 'contato@drapaulaandrade.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua dos Pinheiros',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '05422-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.5631',
      longitude: '-46.6914',
    },
    hasMap: 'https://maps.google.com/?q=Pinheiros+São+Paulo',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    paymentAccepted: 'Cash, Credit Card, Debit Card, PIX',
    priceRange: '$$',
    currenciesAccepted: 'BRL',
  }

  // Medical Service Schemas
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalProcedure',
        name: 'Consulta Pediátrica',
        description: 'Acompanhamento completo do crescimento e desenvolvimento infantil, com foco em prevenção e promoção da saúde.',
        procedureType: 'Pediatric Consultation',
        medicineSystem: 'Integrative Medicine',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Puericultura',
        description: 'Cuidado integral desde o nascimento, com orientações sobre alimentação, sono e desenvolvimento.',
        procedureType: 'Childcare',
        medicineSystem: 'Preventive Medicine',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Pediatria Integrativa',
        description: 'Abordagem holística que une medicina tradicional e práticas complementares para o bem-estar infantil.',
        procedureType: 'Integrative Pediatrics',
        medicineSystem: 'Integrative Medicine',
      },
    ],
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.drapaulaandrade.com.br/',
      },
    ],
  }

  // Local Business Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.drapaulaandrade.com.br#localbusiness',
    name: 'Dra. Paula Andrade - Pediatria Humanizada',
    description: 'Pediatra em Pinheiros com mais de 15 anos de experiência. Atendimento humanizado e integrativo para crianças de 0 a 12 anos.',
    url: 'https://www.drapaulaandrade.com.br',
    telephone: '+5511999999999',
    email: 'contato@drapaulaandrade.com.br',
    priceRange: '$$',
    image: {
      '@type': 'ImageObject',
      url: 'https://www.drapaulaandrade.com.br/og-image.jpg',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua dos Pinheiros',
      addressLocality: 'Pinheiros',
      addressRegion: 'SP',
      postalCode: '05422-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.5631',
      longitude: '-46.6914',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '127',
    },
    sameAs: [
      'https://www.instagram.com/drapaulaandrade',
      'https://www.facebook.com/drapaulaandrade',
    ],
  }

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.drapaulaandrade.com.br#website',
    url: 'https://www.drapaulaandrade.com.br',
    name: 'Dra. Paula Andrade - Pediatra em Pinheiros',
    description: 'Pediatra em Pinheiros especializada em pediatria humanizada e integrativa. Consultas e acompanhamento para crianças de 0 a 12 anos.',
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.drapaulaandrade.com.br#organization',
      name: 'Dra. Paula Andrade - Pediatria',
      url: 'https://www.drapaulaandrade.com.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.drapaulaandrade.com.br/logo.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.drapaulaandrade.com.br/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      {/* Physician Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />

      {/* Medical Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />

      {/* Services Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
