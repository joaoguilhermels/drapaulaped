export default function LimitedAvailability() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-accent-50 to-warning-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-4">
              <div className="flex items-center justify-center gap-3">
                <svg
                  className="w-6 h-6 text-white animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                  Agenda Limitada
                </h3>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="text-center mb-6">
                <p className="text-2xl md:text-3xl font-display font-bold text-neutral-900 mb-3">
                  Apenas 8 vagas por semana para novos pacientes
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Para garantir atendimento sem pressa e acompanhamento próximo, limitamos o número de novos pacientes.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="font-semibold text-neutral-900 mb-1">Consultas sem pressa</p>
                  <p className="text-sm text-neutral-600">40-60 minutos dedicados a você</p>
                </div>

                <div className="text-center p-4 bg-secondary-50 rounded-lg">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                  </div>
                  <p className="font-semibold text-neutral-900 mb-1">Acompanhamento próximo</p>
                  <p className="text-sm text-neutral-600">Suporte via WhatsApp</p>
                </div>

                <div className="text-center p-4 bg-success-50 rounded-lg">
                  <div className="w-12 h-12 bg-success-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="font-semibold text-neutral-900 mb-1">Agendamento rápido</p>
                  <p className="text-sm text-neutral-600">Vagas em 24-48h</p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-neutral-600 mb-4">
                  📅 <span className="font-semibold">Próximas vagas:</span> Esta semana e próxima semana
                </p>
                <a
                  href="https://wa.me/5511954548113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 active:scale-95"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Garantir Minha Vaga Agora
                </a>
                <p className="text-sm text-neutral-500 mt-3">
                  ⚡ Resposta em minutos • Agendamento confirmado em até 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
