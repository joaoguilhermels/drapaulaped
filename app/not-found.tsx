import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
          Página não encontrada
        </h2>
        <p className="text-neutral-600 mb-8">
          A página que você está procurando não existe.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  )
}
