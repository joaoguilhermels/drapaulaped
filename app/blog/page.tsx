import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Dra. Paula Andrade | Dicas de Pediatria e Maternidade',
  description: 'Artigos sobre pediatria, desenvolvimento infantil, amamentação, introdução alimentar e maternidade. Dicas práticas e baseadas em evidências da Dra. Paula Andrade.',
  keywords: [
    'blog pediatria',
    'dicas pediatria',
    'desenvolvimento infantil',
    'introdução alimentar',
    'amamentação',
    'sono do bebê',
    'dicas para mães',
  ],
}

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'introducao-alimentar-guia-completo',
    title: 'Introdução Alimentar: Guia Completo para Pais de Primeira Viagem',
    description: 'Tudo que você precisa saber sobre introdução alimentar: quando começar, quais alimentos oferecer primeiro, BLW vs papinhas, e como lidar com recusas.',
    date: '2025-10-01',
    category: 'Alimentação',
    readTime: '8 min',
  },
  {
    slug: 'pediatria-integrativa-o-que-e',
    title: 'O que é Pediatria Integrativa e Como Pode Ajudar Seu Filho',
    description: 'Entenda a abordagem integrativa na pediatria, que combina o melhor da medicina convencional com práticas complementares para o cuidado integral da criança.',
    date: '2025-09-28',
    category: 'Pediatria',
    readTime: '6 min',
  },
  {
    slug: 'amamentacao-primeiros-dias',
    title: 'Amamentação nos Primeiros Dias: 7 Dicas Essenciais',
    description: 'Guia prático para os primeiros dias de amamentação: pega correta, posições, cólicas, fissuras e como saber se o bebê está mamando suficiente.',
    date: '2025-09-15',
    category: 'Amamentação',
    readTime: '7 min',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Voltar para o site
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Blog da Dra. Paula
            </h1>
            <p className="text-xl text-primary-100">
              Dicas práticas, baseadas em evidências, para a saúde e bem-estar do seu filho
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden"
                >
                  <div className="p-8">
                    {/* Category & Read Time */}
                    <div className="flex items-center gap-4 text-sm text-neutral-600 mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {post.readTime}
                      </span>
                      <time className="text-neutral-500">{new Date(post.date).toLocaleDateString('pt-BR')}</time>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Description */}
                    <p className="text-neutral-700 leading-relaxed mb-6">
                      {post.description}
                    </p>

                    {/* Read More */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group"
                    >
                      Ler artigo completo
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-12 text-center p-8 bg-white rounded-xl shadow-md">
              <svg className="w-16 h-16 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                Mais conteúdo em breve!
              </h3>
              <p className="text-neutral-600">
                Novos artigos semanalmente sobre pediatria, desenvolvimento infantil e maternidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
