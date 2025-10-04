export default function StructuredData() {
  // Physician Schema
  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dra. Paula Andrade',
    alternateName: 'Paula Andrade Pediatra',
    description: 'Pediatra com RQE 131771 especializada em pediatria humanizada e integrativa em Pinheiros, São Paulo. Título SBP 2024, pós-graduação Einstein. Atendimento para crianças de 0 a 12 anos.',
    image: 'https://joaoguilhermels.github.io/drapaulaped/drapaulaandrade.webp',
    url: 'https://www.drapaulaandrade.com.br',
    telephone: '+55-11-95454-8113',
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
      'https://www.instagram.com/dra_paulaandradeped/',
    ],
  }

  // Medical Business Schema
  const medicalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://www.drapaulaandrade.com.br',
    name: 'Dra. Paula Andrade - Pediatria',
    description: 'Consultório de Pediatria Humanizada e Integrativa em Pinheiros, São Paulo. Dra. Paula Andrade, RQE 131771, título SBP 2024, pós-graduação Einstein. Atendimento especializado para crianças de 0 a 12 anos com 7 anos de experiência.',
    url: 'https://www.drapaulaandrade.com.br',
    logo: 'https://www.drapaulaandrade.com.br/logo.png',
    image: [
      'https://joaoguilhermels.github.io/drapaulaped/drapaulaandrade.webp',
    ],
    telephone: '+55-11-95454-8113',
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
    description: 'Pediatra em Pinheiros (RQE 131771) com 7 anos de experiência. Título SBP 2024, pós-graduação Einstein. Atendimento humanizado e integrativo para crianças de 0 a 12 anos.',
    url: 'https://www.drapaulaandrade.com.br',
    telephone: '+5511954548113',
    email: 'contato@drapaulaandrade.com.br',
    priceRange: '$$',
    image: {
      '@type': 'ImageObject',
      url: 'https://joaoguilhermels.github.io/drapaulaped/drapaulaandrade.webp',
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
      bestRating: '5',
      worstRating: '1',
      reviewCount: '127',
    },
    sameAs: [
      'https://www.instagram.com/dra_paulaandradeped/',
    ],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://wa.me/5511954548113',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'Reservation',
        name: 'Agendamento de Consulta Pediátrica',
      },
    },
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

  // FAQPage Schema
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto tempo dura uma consulta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Entre 40 e 60 minutos. Acredito que consulta com pressa não é consulta. Preciso de tempo para conhecer seu filho, entender suas dúvidas e explicar tudo com calma.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como funciona o retorno?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Retornos de até 15 dias após a primeira consulta não têm custo adicional. É importante garantir que tudo está indo bem e que você está segura com o tratamento.',
        },
      },
      {
        '@type': 'Question',
        name: 'Posso tirar dúvidas entre consultas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim! Meus pacientes têm acesso ao WhatsApp para dúvidas rápidas. Não precisa esperar a próxima consulta se algo te preocupar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Atendem emergências?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para emergências, oriento sempre buscar o pronto-socorro. Mas estou disponível para avaliar a situação e dar orientações iniciais via WhatsApp.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual a localização do consultório?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Atendo em Pinheiros, São Paulo, próximo ao metrô Fradique Coutinho. Envio o endereço completo no momento do agendamento.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como funciona o agendamento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Muito simples! Você me envia uma mensagem pelo WhatsApp (11) 95454-8113 e eu respondo em até 24h com os horários disponíveis. Geralmente consigo encaixar em 24-48h.',
        },
      },
    ],
  }

  // Review Schemas
  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Juliana M.',
        },
        datePublished: '2025-09-15',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: 'Finalmente uma pediatra que escuta! A Dra. Paula respondeu todas as minhas dúvidas sobre introdução alimentar. Meu filho está comendo muito melhor.',
        itemReviewed: {
          '@type': 'Physician',
          name: 'Dra. Paula Andrade',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Roberto P.',
        },
        datePublished: '2025-08-22',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: 'Depois de 3 pediatras que não descobriam o problema do meu filho, a Dra. Paula fez avaliação integrativa completa. Hoje ele está 100%!',
        itemReviewed: {
          '@type': 'Physician',
          name: 'Dra. Paula Andrade',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Amanda S.',
        },
        datePublished: '2025-07-10',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: 'Não é só pediatra, é uma parceira da família. Sempre disponível, sempre atenciosa, sempre precisa no diagnóstico.',
        itemReviewed: {
          '@type': 'Physician',
          name: 'Dra. Paula Andrade',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Mariana L.',
        },
        datePublished: '2025-06-28',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: 'Consultas sem pressa, atenção aos detalhes e muito carinho. Meu filho adora a Dra. Paula e eu confio de olhos fechados.',
        itemReviewed: {
          '@type': 'Physician',
          name: 'Dra. Paula Andrade',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Fernanda C.',
        },
        datePublished: '2025-05-14',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: 'A Dra. Paula me ajudou com a amamentação quando eu estava quase desistindo. Com paciência e orientações práticas, conseguimos! Sou eternamente grata.',
        itemReviewed: {
          '@type': 'Physician',
          name: 'Dra. Paula Andrade',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Carlos R.',
        },
        datePublished: '2025-04-19',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: 'Pediatra completa! Além do atendimento excelente, responde nossas dúvidas pelo WhatsApp. Faz toda a diferença ter essa segurança.',
        itemReviewed: {
          '@type': 'Physician',
          name: 'Dra. Paula Andrade',
        },
      },
    ],
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

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Reviews Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
    </>
  )
}
