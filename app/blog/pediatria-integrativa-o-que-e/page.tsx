import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O que é Pediatria Integrativa e Como Pode Ajudar Seu Filho | Dra. Paula',
  description: 'Entenda a abordagem integrativa na pediatria, que combina o melhor da medicina convencional com práticas complementares para o cuidado integral da criança.',
  keywords: [
    'pediatria integrativa',
    'medicina integrativa infantil',
    'pediatra integrativa',
    'tratamento holístico criança',
    'medicina complementar pediatria',
    'pediatria humanizada',
  ],
  openGraph: {
    title: 'O que é Pediatria Integrativa',
    description: 'Entenda como a abordagem integrativa pode beneficiar seu filho.',
    type: 'article',
    publishedTime: '2025-09-28',
    authors: ['Dra. Paula Andrade'],
  },
}

export default function PediatriaIntegrativaPost() {
  return (
    <main className="min-h-screen bg-white">
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-neutral-600">
              <Link href="/" className="hover:text-primary-600">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary-600">
                Blog
              </Link>
              <span>/</span>
              <span className="text-neutral-900">Pediatria Integrativa</span>
            </nav>

            {/* Category & Date */}
            <div className="flex items-center gap-4 text-sm text-neutral-600 mb-6">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                Pediatria
              </span>
              <time>28 de Setembro, 2025</time>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                6 min de leitura
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              O que é Pediatria Integrativa e Como Pode Ajudar Seu Filho
            </h1>

            {/* Intro */}
            <p className="text-xl text-neutral-700 leading-relaxed mb-12">
              Você já ouviu falar em pediatria integrativa? Neste artigo, vou explicar o que é essa abordagem e por que decidi especializar-me nela para cuidar das crianças com um olhar mais completo e humanizado.
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                O que é Pediatria Integrativa?
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                A <strong>pediatria integrativa</strong> é uma abordagem que combina o melhor da <strong>medicina convencional baseada em evidências</strong> com <strong>práticas complementares comprovadas</strong>, sempre focando no cuidado integral da criança: corpo, mente e ambiente.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-8 rounded-r-lg">
                <h3 className="font-display text-xl font-bold text-primary-900 mb-3">
                  🩺 Em Outras Palavras...
                </h3>
                <p className="text-primary-800">
                  Não é "medicina alternativa" que rejeita a ciência. É medicina <strong>baseada em evidências</strong> que também valoriza aspectos como nutrição, sono, vínculo familiar, saúde emocional e prevenção – não apenas o tratamento de doenças.
                </p>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                Por Que Me Tornei Pediatra Integrativa?
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Durante minha formação e anos de prática, percebi que muitas vezes tratávamos apenas os <strong>sintomas</strong>, sem olhar para a criança como um todo. Uma criança com infecções de repetição, por exemplo, pode precisar não apenas de antibióticos, mas também de:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700">Avaliação da <strong>alimentação</strong> (nutrientes que fortalecem o sistema imune)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700">Análise da qualidade do <strong>sono</strong> (fundamental para imunidade)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700">Verificação de <strong>fatores ambientais</strong> (exposição a fumaça, estresse familiar)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700">Atenção à <strong>saúde emocional</strong> da criança e da família</span>
                </li>
              </ul>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Foi aí que decidi: <strong>meu consultório seria diferente</strong>. Eu queria tempo para ouvir, investigar causas (não só sintomas), e oferecer um cuidado verdadeiramente integral.
              </p>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                Pilares da Pediatria Integrativa
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border-2 border-primary-100">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                    1. Medicina Baseada em Evidências
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Diagnósticos precisos, exames quando necessários, medicações comprovadas pela ciência. A base é sempre a medicina convencional de qualidade.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border-2 border-secondary-100">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                    2. Nutrição como Medicina
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Alimentos não são apenas "comida", são ferramentas poderosas de saúde. Orientação nutricional individualizada faz parte de cada consulta.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-success-50 to-white p-6 rounded-xl border-2 border-success-100">
                  <div className="w-12 h-12 bg-success-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">😴</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                    3. Sono e Rotina
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Sono de qualidade é essencial para crescimento, imunidade e desenvolvimento cognitivo. Avaliamos e orientamos sempre.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-warning-50 to-white p-6 rounded-xl border-2 border-warning-100">
                  <div className="w-12 h-12 bg-warning-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                    4. Vínculo e Saúde Emocional
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    O vínculo mãe-bebê, a saúde mental dos pais e o ambiente familiar impactam diretamente a saúde da criança.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-accent-50 to-white p-6 rounded-xl border-2 border-accent-100">
                  <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                    5. Prevenção Ativa
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Não esperamos a criança ficar doente. Foco em fortalecer o sistema imune, prevenir deficiências nutricionais, criar hábitos saudáveis desde cedo.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-neutral-100 to-white p-6 rounded-xl border-2 border-neutral-200">
                  <div className="w-12 h-12 bg-neutral-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">👨‍👩‍👧</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                    6. Parceria com a Família
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Os pais são protagonistas no cuidado. Explico, educo, empodero – para que vocês tomem decisões informadas e seguras.
                  </p>
                </div>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                O que NÃO é Pediatria Integrativa
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                É importante esclarecer alguns mitos:
              </p>

              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4 bg-red-50 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  <div>
                    <h4 className="font-display font-bold text-red-900 mb-1">
                      Não é "anti-vacina"
                    </h4>
                    <p className="text-red-800 text-sm">
                      Vacinas são essenciais e baseadas em ciência sólida. Seguimos rigorosamente o calendário da SBP.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-red-50 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  <div>
                    <h4 className="font-display font-bold text-red-900 mb-1">
                      Não rejeita antibióticos ou medicações
                    </h4>
                    <p className="text-red-800 text-sm">
                      Quando uma criança precisa de antibiótico (por exemplo, numa pneumonia bacteriana), prescrevemos sem hesitar. Mas evitamos uso desnecessário.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-red-50 p-4 rounded-lg">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  <div>
                    <h4 className="font-display font-bold text-red-900 mb-1">
                      Não substitui tratamentos comprovados por "alternativos"
                    </h4>
                    <p className="text-red-800 text-sm">
                      Nunca trocamos um tratamento eficaz por algo sem comprovação científica. As práticas complementares são <strong>complementares</strong>, não substitutivas.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                Exemplos Práticos na Consulta
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Vamos a exemplos reais de como a abordagem integrativa funciona:
              </p>

              <div className="space-y-6 my-8">
                <div className="border-l-4 border-primary-600 pl-6 py-3 bg-neutral-50 rounded-r-lg">
                  <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    🤧 Caso 1: Resfriados de Repetição
                  </h4>
                  <p className="text-neutral-700 mb-3">
                    <strong>Abordagem tradicional:</strong> Prescrever sintomáticos a cada episódio.
                  </p>
                  <p className="text-neutral-700">
                    <strong>Abordagem integrativa:</strong> Além de tratar os sintomas, investigamos: Como está a alimentação? O sono? A criança está exposta à fumaça? Há deficiência de vitamina D? Orientamos mudanças preventivas.
                  </p>
                </div>

                <div className="border-l-4 border-secondary-600 pl-6 py-3 bg-neutral-50 rounded-r-lg">
                  <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    😰 Caso 2: Dor de Barriga Recorrente
                  </h4>
                  <p className="text-neutral-700 mb-3">
                    <strong>Abordagem tradicional:</strong> Exames, medicações para dor.
                  </p>
                  <p className="text-neutral-700">
                    <strong>Abordagem integrativa:</strong> Além dos exames, conversamos sobre a rotina da criança, ansiedade, alimentação, dinâmica familiar. Muitas vezes, dores abdominais têm componente emocional.
                  </p>
                </div>

                <div className="border-l-4 border-success-600 pl-6 py-3 bg-neutral-50 rounded-r-lg">
                  <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    🥗 Caso 3: Constipação (Intestino Preso)
                  </h4>
                  <p className="text-neutral-700 mb-3">
                    <strong>Abordagem tradicional:</strong> Prescrever laxantes.
                  </p>
                  <p className="text-neutral-700">
                    <strong>Abordagem integrativa:</strong> Laxantes quando necessário, MAS também orientação completa sobre fibras, hidratação, rotina intestinal, massagem abdominal, posições para evacuar.
                  </p>
                </div>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                Benefícios para Seu Filho
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Crianças acompanhadas com pediatria integrativa tendem a ter:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700"><strong>Menos uso de antibióticos desnecessários</strong> (prevenindo resistência bacteriana)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700"><strong>Melhor nutrição</strong> e hábitos alimentares desde cedo</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700"><strong>Sono de melhor qualidade</strong> (fundamental para desenvolvimento)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700"><strong>Vínculo familiar fortalecido</strong> (valorizamos muito isso)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700"><strong>Pais mais empoderados</strong> e seguros nas decisões</span>
                </li>
              </ul>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                Ciência com Coração
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Essa é a frase que resume minha abordagem: <strong>ciência com coração</strong>. Uso toda a tecnologia e conhecimento da medicina moderna, mas também escuto, acolho, olho nos olhos, e trato cada criança (e cada família) como única.
              </p>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Porque criança não é só um conjunto de sintomas a serem tratados. É um ser em desenvolvimento, inserido numa família, com emoções, ambiente, hábitos. E tudo isso importa para a saúde dela.
              </p>

              <div className="bg-primary-600 text-white p-8 rounded-xl my-12">
                <h3 className="font-display text-2xl font-bold mb-4">
                  🌟 Quer Conhecer a Pediatria Integrativa na Prática?
                </h3>
                <p className="mb-6">
                  Nas minhas consultas, você vai sentir a diferença: tempo para conversar, orientações personalizadas, e um cuidado que vai muito além de prescrições. Vamos juntos cuidar da saúde integral do seu filho!
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-neutral-100 text-primary-600 font-semibold rounded-lg shadow-xl transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Agendar Primeira Consulta
                </Link>
              </div>

              {/* Author Bio */}
              <div className="border-t-2 border-neutral-200 pt-8 mt-12">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-600">PA</span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-neutral-900">
                      Dra. Paula Andrade
                    </h4>
                    <p className="text-sm text-neutral-600 mb-2">
                      Pediatra Integrativa • RQE 131771 • Título SBP 2024
                    </p>
                    <p className="text-neutral-700 text-sm">
                      Decidi me especializar em pediatria integrativa porque acredito que cada criança merece um cuidado completo, humanizado e baseado em ciência. É essa a pediatria que pratico em Pinheiros, São Paulo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-16">
                <h3 className="font-display text-2xl font-bold text-neutral-900 mb-6">
                  Leia também
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/blog/introducao-alimentar-guia-completo"
                    className="p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                      Introdução Alimentar: Guia Completo
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      Quando começar, BLW vs papinhas, e primeiros alimentos
                    </p>
                  </Link>
                  <Link
                    href="/blog/amamentacao-primeiros-dias"
                    className="p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                      Amamentação nos Primeiros Dias
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      7 dicas essenciais para amamentar com sucesso
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
