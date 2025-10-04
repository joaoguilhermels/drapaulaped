'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Quanto tempo dura uma consulta?',
    answer: 'Entre 40-60 minutos. Aqui, não temos pressa. Cada consulta tem tempo para exame completo, orientações e suas dúvidas.',
  },
  {
    question: 'Como funciona o retorno?',
    answer: 'Retornos em até 15 dias após consulta são por valor reduzido. Acompanhamento de quadros agudos sem custo adicional via WhatsApp.',
  },
  {
    question: 'Posso tirar dúvidas entre consultas?',
    answer: 'Sim! Questões rápidas podem ser enviadas por WhatsApp. Casos que precisam avaliação, agendamos retorno.',
  },
  {
    question: 'Atendem emergências?',
    answer: 'Para emergências, orientamos buscar pronto-socorro. Para dúvidas urgentes (não emergências), respondemos por WhatsApp em horário comercial.',
  },
  {
    question: 'Qual a localização do consultório?',
    answer: 'Atendimento em Pinheiros, São Paulo, região de fácil acesso para famílias da Zona Oeste (Vila Madalena, Perdizes, Jardins, Alto de Pinheiros).',
  },
  {
    question: 'Como funciona o agendamento?',
    answer: 'Agendamento rápido e fácil pelo WhatsApp. Consultas disponíveis em 24-48h. Entre em contato e vamos encontrar o melhor horário para você.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-neutral-600">
              Tire suas dúvidas sobre consultas, retornos e atendimento
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-display font-semibold text-neutral-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-200 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5 text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-neutral-600 mb-4">
              Ainda tem dúvidas? Mande uma mensagem no WhatsApp - respondemos rápido!
            </p>
            <a
              href="https://wa.me/5511954548113"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-lg shadow-whatsapp hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2 active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Tirar Dúvidas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
