'use client'

interface ObfuscatedEmailProps {
  user: string
  domain: string
  className?: string
}

export default function ObfuscatedEmail({ user, domain, className = '' }: ObfuscatedEmailProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const email = `${user}@${domain}`
    window.location.href = `mailto:${email}`
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      className={className}
      aria-label="Enviar email"
    >
      {user}@{domain}
    </a>
  )
}
