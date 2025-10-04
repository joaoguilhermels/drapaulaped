import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Introdução Alimentar: Guia Completo para Pais | Dra. Paula Andrade',
  description: 'Guia completo sobre introdução alimentar: quando começar, quais alimentos oferecer primeiro, BLW vs papinhas, sinais de prontidão e como lidar com recusas alimentares.',
  keywords: [
    'introdução alimentar',
    'BLW',
    'baby led weaning',
    'papinha bebê',
    'primeiros alimentos bebê',
    'quando começar introdução alimentar',
    'recusa alimentar',
  ],
  openGraph: {
    title: 'Introdução Alimentar: Guia Completo para Pais',
    description: 'Tudo que você precisa saber sobre introdução alimentar baseado em evidências.',
    type: 'article',
    publishedTime: '2025-10-01',
    authors: ['Dra. Paula Andrade'],
  },
}

export default function IntroducaoAlimentarPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
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
              <span className="text-neutral-900">Introdução Alimentar</span>
            </nav>

            {/* Category & Date */}
            <div className="flex items-center gap-4 text-sm text-neutral-600 mb-6">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                Alimentação
              </span>
              <time>01 de Outubro, 2025</time>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                8 min de leitura
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Introdução Alimentar: Guia Completo para Pais de Primeira Viagem
            </h1>

            {/* Intro */}
            <p className="text-xl text-neutral-700 leading-relaxed mb-12">
              A introdução alimentar é um dos momentos mais esperados (e temidos!) na vida dos pais. Neste guia completo, vou te explicar tudo que você precisa saber para começar essa jornada com segurança e tranquilidade.
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                Quando Começar?
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                A recomendação da Sociedade Brasileira de Pediatria (SBP) e da Organização Mundial da Saúde (OMS) é clara: <strong>inicie a introdução alimentar aos 6 meses de idade</strong>, mantendo o aleitamento materno.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-8 rounded-r-lg">
                <h3 className="font-display text-xl font-bold text-primary-900 mb-3">
                  ⚠️ Importante
                </h3>
                <p className="text-primary-800">
                  Antes dos 6 meses, o sistema digestivo do bebê ainda não está maduro para receber outros alimentos além do leite materno ou fórmula. Aguarde os sinais de prontidão!
                </p>
              </div>

              <h3 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
                Sinais de Prontidão
              </h3>

              <p className="text-neutral-700 leading-relaxed mb-4">
                Além da idade, observe se seu bebê apresenta estes sinais:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-neutral-700"><strong>Sustenta a cabeça:</strong> Consegue ficar sentado com apoio e manter a cabeça firme</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-neutral-700"><strong>Demonstra interesse:</strong> Acompanha com os olhos quando você come, tenta pegar sua comida</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-neutral-700"><strong>Perdeu o reflexo de protrusão:</strong> Não empurra mais automaticamente tudo que encosta na língua para fora</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-neutral-700"><strong>Leva objetos à boca:</strong> Demonstra coordenação mão-boca</span>
                </li>
              </ul>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                BLW vs Papinhas: Qual Escolher?
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Essa é a dúvida mais comum no consultório! A boa notícia é: <strong>não existe apenas uma forma correta</strong>. Você pode escolher o que fizer mais sentido para sua família, ou até combinar as duas abordagens.
              </p>

              <h3 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
                Baby-Led Weaning (BLW)
              </h3>

              <p className="text-neutral-700 leading-relaxed mb-4">
                No BLW, o bebê se alimenta sozinho desde o início, com alimentos em pedaços que ele consiga segurar.
              </p>

              <div className="bg-green-50 p-6 rounded-lg my-6">
                <h4 className="font-display text-lg font-bold text-green-900 mb-3">
                  ✅ Vantagens do BLW:
                </h4>
                <ul className="space-y-2 text-green-800">
                  <li>• Desenvolve autonomia e coordenação motora</li>
                  <li>• Família come junta, sem preparos separados</li>
                  <li>• Bebê aprende a regular saciedade</li>
                  <li>• Exposição a diferentes texturas desde cedo</li>
                </ul>
              </div>

              <h3 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
                Método Tradicional (Papinhas)
              </h3>

              <p className="text-neutral-700 leading-relaxed mb-4">
                Alimentos amassados com garfo, oferecidos na colher, progredindo gradualmente para texturas mais sólidas.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h4 className="font-display text-lg font-bold text-blue-900 mb-3">
                  ✅ Vantagens das Papinhas:
                </h4>
                <ul className="space-y-2 text-blue-800">
                  <li>• Mais familiar para os pais</li>
                  <li>• Maior controle sobre quantidade</li>
                  <li>• Menos bagunça inicialmente</li>
                  <li>• Pode ser mais prático em algumas situações</li>
                </ul>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                Primeiros Alimentos: Por Onde Começar?
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                A ordem não importa tanto quanto a <strong>variedade e a qualidade</strong>. Ofereça:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-display text-lg font-bold text-orange-900 mb-3">
                    🥕 Legumes e Verduras
                  </h4>
                  <p className="text-orange-800 text-sm">
                    Cenoura, abóbora, batata-doce, brócolis, couve-flor, abobrinha, beterraba
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-display text-lg font-bold text-red-900 mb-3">
                    🍎 Frutas
                  </h4>
                  <p className="text-red-800 text-sm">
                    Banana, mamão, manga, pera, maçã cozida, melancia, abacate
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-display text-lg font-bold text-yellow-900 mb-3">
                    🍚 Carboidratos
                  </h4>
                  <p className="text-yellow-800 text-sm">
                    Arroz, batata, mandioca, inhame, macarrão, pão integral
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-display text-lg font-bold text-purple-900 mb-3">
                    🍗 Proteínas
                  </h4>
                  <p className="text-purple-800 text-sm">
                    Frango, carne bovina, peixe, ovo, feijão, lentilha, grão-de-bico
                  </p>
                </div>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                Dúvidas Frequentes
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-6 py-2">
                  <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    Posso oferecer sal e açúcar?
                  </h4>
                  <p className="text-neutral-700">
                    <strong>Não.</strong> Até os 2 anos de idade, não adicione sal, açúcar, mel ou outros adoçantes. Os alimentos já têm sabor próprio e o paladar do bebê está se formando.
                  </p>
                </div>

                <div className="border-l-4 border-primary-600 pl-6 py-2">
                  <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    E se o bebê recusar?
                  </h4>
                  <p className="text-neutral-700">
                    É normal! Pode levar até <strong>8-15 exposições</strong> para um bebê aceitar um novo alimento. Continue oferecendo sem forçar. A rejeição inicial não significa que ele não vai gostar no futuro.
                  </p>
                </div>

                <div className="border-l-4 border-primary-600 pl-6 py-2">
                  <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    E se ele engasgar?
                  </h4>
                  <p className="text-neutral-700">
                    Engasgos (náusea/reflexo de proteção) são diferentes de asfixia. É normal o bebê fazer caretas, tossir e até vomitar no início. Sempre supervisione, ofereça alimentos seguros e nunca force.
                  </p>
                </div>
              </div>

              <div className="bg-secondary-50 border-2 border-secondary-200 p-8 rounded-xl my-12">
                <h3 className="font-display text-2xl font-bold text-secondary-900 mb-4">
                  💜 Precisa de Ajuda com a Introdução Alimentar?
                </h3>
                <p className="text-secondary-800 mb-6">
                  Nas consultas de puericultura, criamos um plano personalizado de introdução alimentar para seu bebê, respeitando a rotina da família e as características individuais da criança.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-lg shadow-whatsapp hover:shadow-xl transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Agendar Consulta
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
                      Pediatra • RQE 131771 • Título SBP 2024
                    </p>
                    <p className="text-neutral-700 text-sm">
                      Pediatra especializada em pediatria humanizada e integrativa. Mãe que entende mães. Atendimento em Pinheiros, São Paulo.
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
                    href="/blog"
                    className="p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                      Amamentação nos Primeiros Dias: 7 Dicas Essenciais
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      Guia prático para os primeiros dias de amamentação
                    </p>
                  </Link>
                  <Link
                    href="/blog"
                    className="p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                      O que é Pediatria Integrativa
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      Entenda a abordagem integrativa na pediatria
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
