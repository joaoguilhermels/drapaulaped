import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amamentação nos Primeiros Dias: 7 Dicas Essenciais | Dra. Paula Andrade',
  description: 'Guia prático para os primeiros dias de amamentação: pega correta, posições, cólicas, fissuras e como saber se o bebê está mamando suficiente. Dicas de pediatra especializada.',
  keywords: [
    'amamentação',
    'primeiros dias amamentação',
    'pega correta',
    'fissuras mamilo',
    'leite materno',
    'posições amamentação',
    'como amamentar',
    'dicas amamentação',
  ],
  openGraph: {
    title: 'Amamentação nos Primeiros Dias: 7 Dicas Essenciais',
    description: 'Guia prático com dicas de pediatra para amamentar com sucesso nos primeiros dias.',
    type: 'article',
    publishedTime: '2025-09-15',
    authors: ['Dra. Paula Andrade'],
  },
}

export default function AmamentacaoPost() {
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
              <span className="text-neutral-900">Amamentação</span>
            </nav>

            {/* Category & Date */}
            <div className="flex items-center gap-4 text-sm text-neutral-600 mb-6">
              <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full font-medium">
                Amamentação
              </span>
              <time>15 de Setembro, 2025</time>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                7 min de leitura
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Amamentação nos Primeiros Dias: 7 Dicas Essenciais
            </h1>

            {/* Intro */}
            <p className="text-xl text-neutral-700 leading-relaxed mb-12">
              Os primeiros dias de amamentação podem ser desafiadores, mas com as orientações certas, você e seu bebê vão se adaptar rapidamente. Neste guia, compartilho 7 dicas práticas que fazem toda a diferença.
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-secondary-50 border-l-4 border-secondary-600 p-6 my-8 rounded-r-lg">
                <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
                  💜 Palavra de Mãe e Pediatra
                </h3>
                <p className="text-secondary-800">
                  Como mãe, sei que os primeiros dias não são fáceis. Há momentos de dúvida, dor, e até vontade de desistir. Mas também sei que, com suporte adequado, a amamentação se torna mais leve e natural. Você não está sozinha nessa jornada!
                </p>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                1. Pega Correta é Fundamental
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                A <strong>pega incorreta</strong> é a principal causa de dor, fissuras e baixa produção de leite. Uma pega correta deve ser assim:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-neutral-700">O bebê deve abocanhar não só o mamilo, mas toda a <strong>aréola</strong> (parte escura ao redor)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-neutral-700">O lábio inferior deve estar virado para fora (como um "peixinho")</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-neutral-700">O queixo do bebê deve tocar o seio</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-neutral-700">Você deve ouvir o bebê engolindo (não só chupando)</span>
                </li>
              </ul>

              <div className="bg-red-50 p-6 rounded-lg my-6">
                <h4 className="font-display text-lg font-bold text-red-900 mb-3">
                  🚨 Se Dói, Algo Está Errado
                </h4>
                <p className="text-red-800">
                  Amamentar <strong>não deve doer</strong>. Um desconforto leve nos primeiros dias é normal, mas dor intensa indica pega incorreta. Retire o bebê delicadamente (inserindo o dedo no canto da boca para quebrar a sucção) e tente novamente.
                </p>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                2. Posições que Facilitam a Amamentação
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Existem várias posições para amamentar. Teste até encontrar a mais confortável para você:
              </p>

              <div className="space-y-6 my-8">
                <div className="border-l-4 border-secondary-600 pl-6 py-3 bg-neutral-50 rounded-r-lg">
                  <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    🤱 Tradicional (Cradle Hold)
                  </h4>
                  <p className="text-neutral-700">
                    O bebê fica deitado de lado, barriga com barriga com você. Sua mão sustenta a cabeça dele. É a mais comum, mas nem sempre a melhor para recém-nascidos.
                  </p>
                </div>

                <div className="border-l-4 border-secondary-600 pl-6 py-3 bg-neutral-50 rounded-r-lg">
                  <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    🏈 Bola de Futebol Americano (Football Hold)
                  </h4>
                  <p className="text-neutral-700">
                    O bebê fica ao seu lado, embaixo do seu braço, com o corpo dele na lateral. <strong>Ótima para cesárea</strong> (não pressiona a barriga) e para mães de gêmeos.
                  </p>
                </div>

                <div className="border-l-4 border-secondary-600 pl-6 py-3 bg-neutral-50 rounded-r-lg">
                  <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    🛏️ Deitada de Lado (Side-Lying)
                  </h4>
                  <p className="text-neutral-700">
                    Mãe e bebê deitados de lado, frente a frente. <strong>Perfeita para madrugada</strong> e pós-parto (você descansa enquanto amamenta).
                  </p>
                </div>

                <div className="border-l-4 border-secondary-600 pl-6 py-3 bg-neutral-50 rounded-r-lg">
                  <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    👶 Cavalinho (Laid-Back)
                  </h4>
                  <p className="text-neutral-700">
                    Você semi-reclinada, bebê de bruços sobre você. Deixa os <strong>reflexos naturais</strong> do bebê agirem. Ótima para bebês que engolem muito ar.
                  </p>
                </div>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                3. Frequência: Livre Demanda é a Regra
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Nos primeiros dias, esqueça relógios e horários rígidos. O bebê deve mamar <strong>sempre que quiser</strong>, geralmente a cada 2-3 horas (ou mais frequente).
              </p>

              <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-lg my-6">
                <h4 className="font-display text-lg font-bold text-primary-900 mb-3">
                  ⏰ Sinais de Fome (antes do choro!)
                </h4>
                <ul className="space-y-2 text-primary-800">
                  <li>• Leva a mãozinha à boca</li>
                  <li>• Vira a cabeça procurando (reflexo de busca)</li>
                  <li>• Faz movimentos de sucção</li>
                  <li>• Fica inquieto e agitado</li>
                  <li>• <strong>Choro é sinal tardio!</strong> Ofereça antes</li>
                </ul>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                4. Produção de Leite: Como Saber se Está Suficiente?
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Muitas mães se preocupam se o bebê está mamando o suficiente. Fique tranquila se:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700"><strong>6 ou mais fraldas molhadas</strong> por dia (após o 5º dia de vida)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700"><strong>Xixi clarinho</strong> (xixi escuro concentrado pode indicar desidratação)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700"><strong>Ganho de peso adequado</strong> (acompanhe com pediatra)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-neutral-700">Bebê <strong>ativo e alerta</strong> quando acordado</span>
                </li>
              </ul>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                5. Fissuras: Como Prevenir e Tratar
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Fissuras são rachaduras dolorosas no mamilo, geralmente causadas por pega incorreta.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-display text-lg font-bold text-green-900 mb-3">
                    ✅ Prevenção
                  </h4>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Garanta pega correta</li>
                    <li>• Varie as posições</li>
                    <li>• Não use sabonetes no mamilo</li>
                    <li>• Deixe o mamilo secar ao ar livre</li>
                    <li>• Use o próprio leite como cicatrizante</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-display text-lg font-bold text-orange-900 mb-3">
                    🩹 Tratamento
                  </h4>
                  <ul className="space-y-2 text-orange-800 text-sm">
                    <li>• Lanolina pura após cada mamada</li>
                    <li>• Conchas de silicone para proteger</li>
                    <li>• Compressas de leite materno</li>
                    <li>• Se muito doloroso: ordenhamento temporário</li>
                    <li>• <strong>Consulte pediatra se piorar</strong></li>
                  </ul>
                </div>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                6. Descida do Leite (Apojadura)
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                A "descida do leite" geralmente acontece entre o <strong>2º e 5º dia</strong> após o parto. Antes disso, o bebê mama o <strong>colostro</strong> – um líquido amarelado, rico em anticorpos e perfeito para os primeiros dias.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
                <h4 className="font-display text-lg font-bold text-yellow-900 mb-3">
                  ⚠️ Quando a Descida Acontece
                </h4>
                <p className="text-yellow-800 mb-3">
                  Seus seios ficarão mais cheios, quentes e sensíveis. Isso é <strong>normal e temporário</strong>. Para aliviar:
                </p>
                <ul className="space-y-2 text-yellow-800">
                  <li>• Amamente com frequência</li>
                  <li>• Compressas mornas antes da mamada (ajuda o leite fluir)</li>
                  <li>• Compressas frias depois (reduz inchaço)</li>
                  <li>• Massagem suave</li>
                  <li>• Se necessário, ordenhe um pouco para aliviar</li>
                </ul>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                7. Peça Ajuda Quando Precisar
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Amamentar é natural, mas <strong>não é instintivo</strong>. Muitas mães precisam de apoio, e isso é completamente normal.
              </p>

              <div className="bg-secondary-50 p-6 rounded-lg my-6">
                <h4 className="font-display text-lg font-bold text-secondary-900 mb-3">
                  🆘 Quando Procurar Ajuda Profissional:
                </h4>
                <ul className="space-y-2 text-secondary-800">
                  <li>• Dor intensa que não melhora</li>
                  <li>• Fissuras sangrentas ou infectadas</li>
                  <li>• Bebê não ganha peso adequadamente</li>
                  <li>• Menos de 6 fraldas molhadas por dia (após 5º dia)</li>
                  <li>• Febre, calafrios ou sintomas de mastite</li>
                  <li>• Sentimento de incapacidade ou tristeza profunda</li>
                </ul>
              </div>

              <h2 className="font-display text-3xl font-bold text-neutral-900 mt-12 mb-6">
                Palavras Finais de Encorajamento
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Se você está lendo isso grávida ou com um recém-nascido, saiba: <strong>os primeiros dias são os mais desafiadores</strong>. Mas eles passam. Na maioria dos casos, após 2-3 semanas, mãe e bebê já estão sincronizados e a amamentação flui naturalmente.
              </p>

              <p className="text-neutral-700 leading-relaxed mb-6">
                Não compare sua jornada com a de outras mães. Cada dupla mãe-bebê é única. Seja gentil consigo mesma. Você está fazendo um trabalho incrível! 💜
              </p>

              <div className="bg-primary-600 text-white p-8 rounded-xl my-12">
                <h3 className="font-display text-2xl font-bold mb-4">
                  💜 Suporte Personalizado para Amamentação
                </h3>
                <p className="mb-6">
                  Nas consultas de puericultura, avalio a amamentação, corrijo a pega se necessário, e te dou orientações personalizadas. E você sempre pode tirar dúvidas comigo via WhatsApp entre as consultas!
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-neutral-100 text-primary-600 font-semibold rounded-lg shadow-xl transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Falar com a Dra. Paula
                </Link>
              </div>

              {/* Author Bio */}
              <div className="border-t-2 border-neutral-200 pt-8 mt-12">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-secondary-600">PA</span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-neutral-900">
                      Dra. Paula Andrade
                    </h4>
                    <p className="text-sm text-neutral-600 mb-2">
                      Pediatra • RQE 131771 • Mãe que Entende Mães
                    </p>
                    <p className="text-neutral-700 text-sm">
                      Como mãe e pediatra, sei o quanto os primeiros dias de amamentação podem ser desafiadores. Estou aqui para te apoiar nessa jornada linda (e às vezes difícil).
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-16">
                <h3 className="font-display text-2xl font-bold text-neutral-900 mb-6">
                  Continue lendo
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
                    href="/blog/pediatria-integrativa-o-que-e"
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
