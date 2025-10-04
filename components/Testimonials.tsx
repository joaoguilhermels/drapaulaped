interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  child: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Juliana M.',
    location: 'Pinheiros',
    rating: 5,
    text: 'Finalmente uma pediatra que escuta! A Dra. Paula respondeu todas as minhas dúvidas sobre introdução alimentar. Meu filho está comendo muito melhor.',
    child: 'Miguel (8 meses)',
  },
  {
    id: 2,
    name: 'Roberto P.',
    location: 'Vila Madalena',
    rating: 5,
    text: 'Depois de 3 pediatras que não descobriam o problema do meu filho, a Dra. Paula fez avaliação integrativa completa. Hoje ele está 100%!',
    child: 'Sofia (4 anos)',
  },
  {
    id: 3,
    name: 'Amanda S.',
    location: 'Jardins',
    rating: 5,
    text: 'Não é só pediatra, é uma parceira da família. Sempre disponível, sempre atenciosa, sempre precisa no diagnóstico.',
    child: 'Lucas e Laura (2 anos)',
  },
  {
    id: 4,
    name: 'Mariana L.',
    location: 'Alto de Pinheiros',
    rating: 5,
    text: 'Consultas sem pressa, atenção aos detalhes e muito carinho. Meu filho adora a Dra. Paula e eu confio de olhos fechados.',
    child: 'Pedro (3 anos)',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            O que as famílias dizem
          </h2>
          <p className="text-lg text-neutral-600">
            Depoimentos de pais e mães que confiam no nosso cuidado
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <svg
                  className="w-12 h-12 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-warning-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-neutral-700 leading-relaxed mb-6 relative z-10">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="border-t border-primary-100 pt-4">
                <p className="font-display font-semibold text-neutral-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-neutral-600">{testimonial.location}</p>
                <p className="text-sm text-primary-600 mt-1">{testimonial.child}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-6">
            Junte-se a centenas de famílias que confiam em nosso cuidado
          </p>
          <a
            href="https://wa.me/5511954548113"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-primary hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Agendar Primeira Consulta
          </a>
        </div>
      </div>
    </section>
  )
}
