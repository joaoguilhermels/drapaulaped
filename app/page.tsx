import Link from 'next/link'
import Image from 'next/image'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import ObfuscatedEmail from '@/components/ObfuscatedEmail'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import LimitedAvailability from '@/components/LimitedAvailability'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat
        phoneNumber="5511954548113"
        message="Olá! Gostaria de agendar uma consulta pediátrica."
        position="right"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                Pediatria Humanizada e Integrativa em Pinheiros
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Cuidado especializado e acolhedor para o desenvolvimento saudável do seu filho. Atendimento em Pinheiros, São Paulo.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Título SBP 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Pós-graduação Einstein</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                  <span>Mãe que entende mães</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/5511954548113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-lg shadow-whatsapp hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2 active:scale-95"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Agendar Consulta
                </a>
                <a
                  href="#sobre"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-primary-50 text-primary-600 hover:text-primary-700 font-semibold border-2 border-primary-600 hover:border-primary-700 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:scale-95"
                >
                  Conhecer a Dra.
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/drapaulaandrade.webp"
                  alt="Dra. Paula Andrade - Pediatra em Pinheiros"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-neutral-900">Consulta em 24-48h</p>
                    <p className="text-sm text-neutral-600">Agendamento rápido</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Badge - Mobile Only */}
      <div className="block lg:hidden -mt-8 px-4 relative z-10">
        <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <p className="font-display font-semibold text-neutral-900">Consulta em 24-48h</p>
              <p className="text-sm text-neutral-600">Agendamento rápido via WhatsApp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Serviços Especializados
            </h2>
            <p className="text-lg text-neutral-600">
              Atendimento completo e humanizado para todas as fases do desenvolvimento infantil
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 border-t-4 border-primary-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                Consultas completas onde tiramos todas as suas dúvidas
              </h3>
              <p className="text-neutral-600 mb-4">
                Não tenha medo de perguntar demais. Aqui, cada consulta tem tempo para avaliar crescimento, desenvolvimento, tirar dúvidas sobre alimentação, sono e comportamento. Você sai com orientações claras e um plano de cuidados personalizado.
              </p>
              <a href="#contato" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 group">
                Saiba mais
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 border-t-4 border-secondary-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                Do recém-nascido ao escolar: acompanhamento em cada fase
              </h3>
              <p className="text-neutral-600 mb-4">
                Os primeiros anos são cheios de dúvidas (e isso é normal!). Oferecemos puericultura completa com foco em: amamentação, introdução alimentar, marcos de desenvolvimento, vacinação e prevenção. Pais seguros criam filhos saudáveis.
              </p>
              <a href="#contato" className="text-secondary-600 hover:text-secondary-700 font-medium inline-flex items-center gap-1 group">
                Saiba mais
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 border-t-4 border-accent-500 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                O melhor da medicina + práticas integrativas
              </h3>
              <p className="text-neutral-600 mb-4">
                Combinamos diagnóstico preciso com olhar integrativo: fitoterapia, suplementação baseada em evidências, orientação nutricional e práticas que fortalecem a saúde como um todo. Menos remédios quando possível, mais saúde sempre.
              </p>
              <a href="#contato" className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center gap-1 group">
                Saiba mais
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className="space-y-6 lg:order-1">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900">
                Por que me tornei pediatra integrativa
              </h2>
              <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
                <p>
                  Sou Paula, mineira de coração, paulistana de escolha, e mãe da Manuela.
                </p>
                <p>
                  Quando me formei em Medicina em 2016, achava que ser boa pediatra era sobre diagnósticos rápidos e prescrições certeiras. Sete anos de consultório e pronto-socorro me ensinaram diferente.
                </p>
                <p>
                  Vi mães sendo dispensadas em 5 minutos com uma receita na mão, mas sem suas dúvidas respondidas. Vi crianças tratadas como &ldquo;casos&rdquo;, não como pessoas únicas. E quando me tornei mãe, vivi na pele a angústia de não ser ouvida.
                </p>
                <p className="font-semibold text-primary-700">
                  Foi aí que decidi: meu consultório seria diferente.
                </p>
                <p>
                  Busquei o título de especialista pela SBP, fiz pós-graduação no Einstein, mergulhei em pediatria integrativa. Mas o mais importante? Aprendi a ESCUTAR.
                </p>
                <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg">
                  <p className="font-semibold text-neutral-900 mb-3">Hoje, cada consulta aqui é um espaço seguro onde:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">→</span>
                      <span>Suas perguntas nunca são &ldquo;bobas&rdquo;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">→</span>
                      <span>Tratamos a criança inteira, não só os sintomas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">→</span>
                      <span>Unimos o melhor da medicina com práticas integrativas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">→</span>
                      <span>Você sai com um plano claro e a tranquilidade de estar fazendo o melhor pelo seu filho</span>
                    </li>
                  </ul>
                </div>
                <p className="text-xl font-display font-semibold text-primary-800 italic">
                  Porque pediatria humanizada não é sobre ser &ldquo;boazinha&rdquo;. É sobre competência com empatia. Ciência com coração.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Pediatria RQE 131771</p>
                    <p className="text-sm text-neutral-600">Registro de Qualificação de Especialista</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Título SBP 2024</p>
                    <p className="text-sm text-neutral-600">Sociedade Brasileira de Pediatria</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Pós-graduação Einstein</p>
                    <p className="text-sm text-neutral-600">Instituto Israelita Albert Einstein</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">7 anos de experiência</p>
                    <p className="text-sm text-neutral-600">Consultório e Pronto-Socorro</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative lg:order-2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/drapaulaandrade-consultorio.jpg"
                  alt="Consultório Dra. Paula Andrade - Pediatria Humanizada em Pinheiros"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Limited Availability Section */}
      <LimitedAvailability />

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Artigos e Conteúdos
            </h2>
            <p className="text-lg text-neutral-600">
              Informações baseadas em evidências sobre desenvolvimento infantil, amamentação, alimentação e muito mais
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1: Introdução Alimentar */}
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-neutral-100">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                    Alimentação
                  </span>
                  <span className="text-sm text-neutral-500">8 min</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 line-clamp-2">
                  Introdução Alimentar: Guia Completo para Começar com Segurança
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  Tudo que você precisa saber sobre introdução alimentar: quando começar, sinais de prontidão, BLW vs tradicional, alergias e muito mais.
                </p>
                <Link
                  href="/blog/introducao-alimentar-guia-completo"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
                >
                  Ler artigo completo
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </article>

            {/* Article 2: Amamentação */}
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-neutral-100">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-semibold rounded-full">
                    Amamentação
                  </span>
                  <span className="text-sm text-neutral-500">7 min</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 line-clamp-2">
                  Amamentação nos Primeiros Dias: 7 Dicas Essenciais
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  Pega correta, produção de leite, mitos e verdades. Tudo que você precisa saber para começar a amamentar com confiança.
                </p>
                <Link
                  href="/blog/amamentacao-primeiros-dias"
                  className="inline-flex items-center gap-2 text-secondary-600 hover:text-secondary-700 font-medium group"
                >
                  Ler artigo completo
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </article>

            {/* Article 3: Pediatria Integrativa */}
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-neutral-100">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full">
                    Pediatria
                  </span>
                  <span className="text-sm text-neutral-500">6 min</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3 line-clamp-2">
                  Pediatria Integrativa: O Que É e Como Funciona
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  Entenda como a pediatria integrativa combina medicina baseada em evidências com práticas complementares para cuidar da criança como um todo.
                </p>
                <Link
                  href="/blog/pediatria-integrativa-o-que-e"
                  className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium group"
                >
                  Ler artigo completo
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </article>
          </div>

          {/* CTA to Blog */}
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:scale-95"
            >
              Ver Todos os Artigos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
              Agende sua Consulta
            </h2>
            <p className="text-lg md:text-xl text-primary-50 max-w-2xl mx-auto">
              Entre em contato via WhatsApp e garanta o melhor cuidado para seu filho. Atendimento em 24-48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511954548113"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Agendar via WhatsApp
              </a>
              <a
                href="tel:+5511954548113"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-neutral-50 text-primary-600 hover:text-primary-700 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-neutral-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-lg font-semibold">
                  Dra. Paula Andrade
                </span>
              </div>
              <p className="text-neutral-300 mb-4 max-w-md">
                Pediatria humanizada e integrativa em Pinheiros, São Paulo. Cuidado especializado para o desenvolvimento saudável do seu filho.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#sobre" className="text-neutral-300 hover:text-primary-400 transition-colors">Sobre</a></li>
                <li><a href="#servicos" className="text-neutral-300 hover:text-primary-400 transition-colors">Serviços</a></li>
                <li><Link href="/blog" className="text-neutral-300 hover:text-primary-400 transition-colors">Blog</Link></li>
                <li><a href="#contato" className="text-neutral-300 hover:text-primary-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-neutral-300">
                  <svg className="w-5 h-5 mt-0.5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>Pinheiros, São Paulo - SP</span>
                </li>
                <li className="flex items-start gap-2 text-neutral-300">
                  <svg className="w-5 h-5 mt-0.5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <ObfuscatedEmail
                    user="contato"
                    domain="drapaulaandrade.com.br"
                    className="hover:text-primary-400 transition-colors"
                  />
                </li>
                <li className="flex items-start gap-2 text-neutral-300">
                  <svg className="w-5 h-5 mt-0.5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>(11) 95454-8113</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
            <p className="text-neutral-400 text-sm">
              &copy; 2025 Dra. Paula Andrade - Pediatria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
