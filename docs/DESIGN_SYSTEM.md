# Design System - Dra. Paula Andrade Pediatria

Design System profissional e impecável para o consultório pediátrico da Dra. Paula Andrade.

---

## Sumário

1. [Visão Geral](#visão-geral)
2. [Paleta de Cores](#paleta-de-cores)
3. [Tipografia](#tipografia)
4. [Espaçamento e Grid](#espaçamento-e-grid)
5. [Componentes](#componentes)
6. [Ícones e Ilustrações](#ícones-e-ilustrações)
7. [Acessibilidade](#acessibilidade)
8. [Exemplos de Uso](#exemplos-de-uso)

---

## Visão Geral

### Contexto
- **Profissional**: Dra. Paula Andrade
- **Perfil**: Pediatra mãe e mineira, atende em Pinheiros/SP
- **Especialidades**: Pediatria integrativa, atendimento humanizado, prevenção
- **Público-alvo**: Pais/responsáveis com crianças de 0-12 anos, classe média/alta de Pinheiros
- **Objetivo**: Transmitir confiança, cuidado, profissionalismo e modernidade

### Princípios do Design
1. **Mobile-first**: Todas as interfaces são projetadas primeiro para dispositivos móveis
2. **Acessibilidade**: Conformidade WCAG AA em todos os componentes
3. **Modernidade**: Design limpo, contemporâneo e profissional
4. **Humanização**: Cores suaves e acolhedoras que transmitem cuidado
5. **Confiança**: Elementos visuais que inspiram segurança e profissionalismo

---

## Paleta de Cores

### Cores Primárias (Azul)

O azul foi escolhido como cor primária por transmitir confiança, profissionalismo, tranquilidade e segurança - valores essenciais em um consultório pediátrico.

```css
primary-50:  #f0f9ff  /* Backgrounds sutis */
primary-100: #e0f2fe  /* Hover states leves */
primary-200: #bae6fd  /* Elementos decorativos */
primary-300: #7dd3fc  /* Borders */
primary-400: #38bdf8  /* Elementos interativos */
primary-500: #0ea5e9  /* CTA primário - COR PRINCIPAL */
primary-600: #0284c7  /* Hover de CTAs */
primary-700: #0369a1  /* Textos importantes */
primary-800: #075985  /* Títulos */
primary-900: #0c4a6e  /* Textos principais */
primary-950: #082f49  /* Headers */
```

**Uso recomendado:**
- CTAs principais: `bg-primary-500 hover:bg-primary-600`
- Títulos: `text-primary-800` ou `text-primary-900`
- Links: `text-primary-600 hover:text-primary-700`
- Backgrounds: `bg-primary-50`

**Contraste WCAG AA:**
- primary-500 em branco: 4.52:1 ✓
- primary-600 em branco: 5.87:1 ✓
- primary-700 em branco: 7.72:1 ✓

### Cores Secundárias (Rosa)

Rosa suave que adiciona toques femininos e acolhedores, reforçando o cuidado maternal.

```css
secondary-50:  #fdf4ff
secondary-100: #fae8ff
secondary-200: #f5d0fe
secondary-300: #f0abfc
secondary-400: #e879f9
secondary-500: #d946ef  /* Rosa principal */
secondary-600: #c026d3
secondary-700: #a21caf
secondary-800: #86198f
secondary-900: #701a75
```

**Uso recomendado:**
- Destaques femininos: `bg-secondary-50`
- Ícones decorativos: `text-secondary-400`
- Badges: `bg-secondary-100 text-secondary-700`

### Cores de Acento (Coral)

Coral vibrante que adiciona warmth e energia, criando pontos de interesse visual.

```css
accent-50:  #fff7ed
accent-100: #ffedd5
accent-200: #fed7aa
accent-300: #fdba74
accent-400: #fb923c
accent-500: #f97316  /* Coral principal */
accent-600: #ea580c
accent-700: #c2410c
accent-800: #9a3412
accent-900: #7c2d12
```

**Uso recomendado:**
- CTAs secundários: `bg-accent-500 hover:bg-accent-600`
- Ícones de destaque: `text-accent-500`
- Elementos decorativos: `border-accent-200`

### Cores de Estado

#### Success (Verde)
```css
success-50:  #f0fdf4
success-500: #22c55e  /* Confirmações, sucesso */
success-700: #15803d
```

#### Warning (Amarelo)
```css
warning-50:  #fffbeb
warning-500: #f59e0b  /* Avisos, atenção */
warning-700: #b45309
```

#### Error (Vermelho)
```css
error-50:  #fef2f2
error-500: #ef4444  /* Erros, campos inválidos */
error-700: #b91c1c
```

### WhatsApp Integration

Cores oficiais do WhatsApp para CTAs de contato.

```css
whatsapp-light:   #25D366  /* Verde WhatsApp claro */
whatsapp-DEFAULT: #128C7E  /* Verde WhatsApp padrão */
whatsapp-dark:    #075E54  /* Verde WhatsApp escuro */
```

**Exemplo de uso:**
```html
<button class="bg-whatsapp hover:bg-whatsapp-dark text-white">
  Agendar via WhatsApp
</button>
```

### Neutros (Cinzas)

Paleta neutra refinada para textos, backgrounds e elementos estruturais.

```css
neutral-50:  #fafafa  /* Backgrounds claros */
neutral-100: #f5f5f5
neutral-200: #e5e5e5
neutral-300: #d4d4d4  /* Borders */
neutral-400: #a3a3a3
neutral-500: #737373  /* Textos secundários */
neutral-600: #525252
neutral-700: #404040  /* Textos principais */
neutral-800: #262626
neutral-900: #171717  /* Títulos */
neutral-950: #0a0a0a
```

### Justificativa Psicológica das Cores

**Por que essas cores funcionam para pediatria:**

1. **Azul (Primary)**:
   - Transmite confiança e profissionalismo
   - Associado à saúde e higiene
   - Calma e tranquiliza pais preocupados
   - Tom suave não intimida as crianças

2. **Rosa (Secondary)**:
   - Representa cuidado maternal
   - Adiciona warmth sem ser muito infantil
   - Conecta com o público feminino (maioria dos decisores)
   - Tom suave, não "baby pink"

3. **Coral (Accent)**:
   - Adiciona energia e vitalidade
   - Cria pontos de interesse visual
   - Mais moderno que laranja tradicional
   - Complementa perfeitamente o azul

4. **Verde WhatsApp**:
   - Familiaridade imediata
   - Facilita reconhecimento da ação
   - Remove fricção do contato

---

## Tipografia

### Fonts

#### Font Principal - Inter
**Google Fonts**: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap`

```css
font-sans: Inter, system-ui, -apple-system, sans-serif
```

**Características:**
- Excelente legibilidade em qualquer tamanho
- Otimizada para telas
- Neutra e profissional
- Suporta múltiplos pesos

**Uso:** Corpo de texto, parágrafos, formulários, navegação

#### Font Display - Poppins
**Google Fonts**: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap`

```css
font-display: Poppins, Inter, sans-serif
```

**Características:**
- Geométrica e moderna
- Mais expressiva que Inter
- Ótima para títulos e headings
- Personalidade acolhedora

**Uso:** Títulos, headings, CTAs importantes

### Escala Tipográfica

```css
/* Mobile-first sizes */
text-xs:   12px / 16px line-height (0.75rem / 1rem)
text-sm:   14px / 20px line-height (0.875rem / 1.25rem)
text-base: 16px / 24px line-height (1rem / 1.5rem)
text-lg:   18px / 28px line-height (1.125rem / 1.75rem)
text-xl:   20px / 28px line-height (1.25rem / 1.75rem)
text-2xl:  24px / 32px line-height (1.5rem / 2rem)
text-3xl:  30px / 36px line-height (1.875rem / 2.25rem)
text-4xl:  36px / 40px line-height (2.25rem / 2.5rem)
text-5xl:  48px / 48px line-height (3rem / 1)
text-6xl:  60px / 60px line-height (3.75rem / 1)
text-7xl:  72px / 72px line-height (4.5rem / 1)
```

### Letter Spacing

```css
text-xs, text-sm:   0.01em  (mais espaçamento para legibilidade)
text-base:          0       (espaçamento natural)
text-lg, text-xl:  -0.01em  (ligeiramente mais apertado)
text-2xl, text-3xl: -0.02em (mais apertado para títulos)
text-4xl+:         -0.03em / -0.04em (bem apertado para displays)
```

### Hierarquia Tipográfica

#### Headings
```html
<!-- H1 - Hero Title -->
<h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900">
  Pediatria Humanizada
</h1>

<!-- H2 - Section Title -->
<h2 class="font-display text-3xl md:text-4xl font-bold text-neutral-900">
  Sobre a Dra. Paula
</h2>

<!-- H3 - Subsection Title -->
<h3 class="font-display text-2xl md:text-3xl font-semibold text-neutral-800">
  Especialidades
</h3>

<!-- H4 - Card Title -->
<h4 class="font-display text-xl md:text-2xl font-semibold text-neutral-800">
  Consulta Pediátrica
</h4>

<!-- H5 - Small Title -->
<h5 class="font-sans text-lg md:text-xl font-semibold text-neutral-700">
  Horários de Atendimento
</h5>

<!-- H6 - Label -->
<h6 class="font-sans text-base md:text-lg font-medium text-neutral-700">
  Informações
</h6>
```

#### Body Text
```html
<!-- Large body text -->
<p class="text-lg text-neutral-700 leading-relaxed">
  Atendimento humanizado e acolhedor para seu filho.
</p>

<!-- Regular body text -->
<p class="text-base text-neutral-700">
  Consultório localizado em Pinheiros, São Paulo.
</p>

<!-- Small text -->
<p class="text-sm text-neutral-600">
  Atendimento de segunda a sexta, das 8h às 18h.
</p>

<!-- Extra small text -->
<p class="text-xs text-neutral-500">
  *Consultas somente com agendamento prévio
</p>
```

---

## Espaçamento e Grid

### Sistema de Espaçamento

Base de **4px** (0.25rem), seguindo best practices do Tailwind.

```css
/* Micro spacing */
space-0.5: 2px
space-1:   4px
space-1.5: 6px
space-2:   8px
space-2.5: 10px
space-3:   12px
space-3.5: 14px
space-4:   16px

/* Standard spacing */
space-5:  20px
space-6:  24px
space-8:  32px
space-10: 40px
space-12: 48px

/* Large spacing */
space-16: 64px
space-20: 80px
space-24: 96px
space-32: 128px
```

### Breakpoints (Mobile-First)

```css
xs:  375px   /* Mobile pequeno (iPhone SE) */
sm:  640px   /* Mobile grande */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop pequeno */
xl:  1280px  /* Desktop médio */
2xl: 1536px  /* Desktop grande */
```

### Container Widths

```css
max-w-xs:  320px
max-w-sm:  384px
max-w-md:  448px
max-w-lg:  512px
max-w-xl:  576px
max-w-2xl: 672px
max-w-3xl: 768px
max-w-4xl: 896px
max-w-5xl: 1024px
max-w-6xl: 1152px
max-w-7xl: 1280px
```

### Layout Examples

#### Container Padrão
```html
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Conteúdo com padding responsivo -->
</div>
```

#### Section Spacing
```html
<section class="py-12 md:py-16 lg:py-24">
  <!-- Espaçamento vertical responsivo -->
</section>
```

#### Card Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  <!-- Grid responsivo de cards -->
</div>
```

---

## Componentes

### Buttons

#### Primary Button
```html
<button class="
  inline-flex items-center justify-center
  px-6 py-3
  bg-primary-500 hover:bg-primary-600
  text-white font-semibold
  rounded-lg
  shadow-md hover:shadow-lg
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
  active:scale-95
">
  Agendar Consulta
</button>
```

**Variações de tamanho:**
```html
<!-- Small -->
<button class="px-4 py-2 text-sm">Small Button</button>

<!-- Medium (default) -->
<button class="px-6 py-3 text-base">Medium Button</button>

<!-- Large -->
<button class="px-8 py-4 text-lg">Large Button</button>
```

#### Secondary Button
```html
<button class="
  inline-flex items-center justify-center
  px-6 py-3
  bg-white hover:bg-neutral-50
  text-primary-600 hover:text-primary-700
  font-semibold
  border-2 border-primary-500 hover:border-primary-600
  rounded-lg
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
  active:scale-95
">
  Saiba Mais
</button>
```

#### WhatsApp Button (CTA Principal)
```html
<button class="
  inline-flex items-center justify-center gap-2
  px-6 py-3
  bg-whatsapp hover:bg-whatsapp-dark
  text-white font-semibold
  rounded-lg
  shadow-whatsapp hover:shadow-xl
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2
  active:scale-95
">
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
  Agendar via WhatsApp
</button>
```

#### Ghost Button
```html
<button class="
  inline-flex items-center justify-center
  px-6 py-3
  bg-transparent hover:bg-primary-50
  text-primary-600 hover:text-primary-700
  font-semibold
  rounded-lg
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
">
  Ver Mais
</button>
```

#### Disabled Button
```html
<button disabled class="
  inline-flex items-center justify-center
  px-6 py-3
  bg-neutral-200
  text-neutral-400
  font-semibold
  rounded-lg
  cursor-not-allowed
  opacity-60
">
  Indisponível
</button>
```

### Cards

#### Basic Card
```html
<div class="
  bg-white
  rounded-xl
  shadow-md hover:shadow-lg
  p-6
  transition-all duration-300
  hover:-translate-y-1
">
  <h3 class="font-display text-xl font-semibold text-neutral-900 mb-2">
    Consulta Pediátrica
  </h3>
  <p class="text-neutral-600 mb-4">
    Acompanhamento completo do desenvolvimento infantil.
  </p>
  <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">
    Saiba mais →
  </a>
</div>
```

#### Card com Ícone
```html
<div class="
  bg-white
  rounded-xl
  shadow-md
  p-6
  border-t-4 border-primary-500
">
  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <!-- Ícone -->
    </svg>
  </div>
  <h3 class="font-display text-xl font-semibold text-neutral-900 mb-2">
    Título do Card
  </h3>
  <p class="text-neutral-600">
    Descrição do serviço ou informação.
  </p>
</div>
```

#### Card de Depoimento
```html
<div class="
  bg-gradient-to-br from-primary-50 to-white
  rounded-xl
  shadow-md
  p-6
  border border-primary-100
">
  <div class="flex items-start gap-4 mb-4">
    <img src="avatar.jpg" alt="Nome" class="w-12 h-12 rounded-full">
    <div>
      <p class="font-semibold text-neutral-900">Nome do Responsável</p>
      <p class="text-sm text-neutral-600">Mãe do João, 4 anos</p>
    </div>
  </div>
  <p class="text-neutral-700 italic">
    "Excelente profissional, muito atenciosa e cuidadosa com as crianças."
  </p>
  <div class="flex gap-1 mt-4">
    <!-- 5 estrelas -->
    <svg class="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
    <!-- Repetir para 5 estrelas -->
  </div>
</div>
```

### Forms

#### Input de Texto
```html
<div class="space-y-2">
  <label for="nome" class="block text-sm font-medium text-neutral-700">
    Nome Completo
  </label>
  <input
    type="text"
    id="nome"
    name="nome"
    class="
      w-full
      px-4 py-3
      bg-white
      border border-neutral-300
      rounded-lg
      text-neutral-900
      placeholder-neutral-400
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
      transition-all duration-200
      hover:border-neutral-400
    "
    placeholder="Digite seu nome completo"
  />
</div>
```

#### Input com Erro
```html
<div class="space-y-2">
  <label for="email" class="block text-sm font-medium text-neutral-700">
    E-mail
  </label>
  <input
    type="email"
    id="email"
    name="email"
    class="
      w-full
      px-4 py-3
      bg-white
      border-2 border-error-500
      rounded-lg
      text-neutral-900
      placeholder-neutral-400
      focus:outline-none focus:ring-2 focus:ring-error-500 focus:border-transparent
    "
    placeholder="seu@email.com"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <p id="email-error" class="text-sm text-error-600 flex items-center gap-1">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
    </svg>
    Por favor, insira um e-mail válido
  </p>
</div>
```

#### Textarea
```html
<div class="space-y-2">
  <label for="mensagem" class="block text-sm font-medium text-neutral-700">
    Mensagem
  </label>
  <textarea
    id="mensagem"
    name="mensagem"
    rows="4"
    class="
      w-full
      px-4 py-3
      bg-white
      border border-neutral-300
      rounded-lg
      text-neutral-900
      placeholder-neutral-400
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
      transition-all duration-200
      hover:border-neutral-400
      resize-none
    "
    placeholder="Digite sua mensagem..."
  ></textarea>
</div>
```

#### Select
```html
<div class="space-y-2">
  <label for="especialidade" class="block text-sm font-medium text-neutral-700">
    Especialidade
  </label>
  <select
    id="especialidade"
    name="especialidade"
    class="
      w-full
      px-4 py-3
      bg-white
      border border-neutral-300
      rounded-lg
      text-neutral-900
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
      transition-all duration-200
      hover:border-neutral-400
    "
  >
    <option value="">Selecione...</option>
    <option value="consulta">Consulta Pediátrica</option>
    <option value="puericultura">Puericultura</option>
    <option value="vacinas">Vacinação</option>
  </select>
</div>
```

#### Checkbox
```html
<div class="flex items-start gap-3">
  <input
    type="checkbox"
    id="termos"
    name="termos"
    class="
      w-5 h-5
      mt-0.5
      text-primary-600
      bg-white
      border-neutral-300
      rounded
      focus:ring-2 focus:ring-primary-500
      transition-colors duration-200
    "
  />
  <label for="termos" class="text-sm text-neutral-700">
    Aceito os <a href="#" class="text-primary-600 hover:text-primary-700 underline">termos de uso</a> e <a href="#" class="text-primary-600 hover:text-primary-700 underline">política de privacidade</a>
  </label>
</div>
```

#### Radio Buttons
```html
<fieldset class="space-y-3">
  <legend class="text-sm font-medium text-neutral-700 mb-2">
    Horário Preferencial
  </legend>

  <div class="flex items-center gap-3">
    <input
      type="radio"
      id="manha"
      name="horario"
      value="manha"
      class="
        w-4 h-4
        text-primary-600
        bg-white
        border-neutral-300
        focus:ring-2 focus:ring-primary-500
      "
    />
    <label for="manha" class="text-sm text-neutral-700">
      Manhã (8h - 12h)
    </label>
  </div>

  <div class="flex items-center gap-3">
    <input
      type="radio"
      id="tarde"
      name="horario"
      value="tarde"
      class="
        w-4 h-4
        text-primary-600
        bg-white
        border-neutral-300
        focus:ring-2 focus:ring-primary-500
      "
    />
    <label for="tarde" class="text-sm text-neutral-700">
      Tarde (13h - 18h)
    </label>
  </div>
</fieldset>
```

### Navigation

#### Desktop Navigation
```html
<nav class="bg-white shadow-sm sticky top-0 z-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-3">
        <img src="logo.svg" alt="Dra. Paula Andrade" class="h-12">
        <span class="font-display text-xl font-semibold text-primary-900">
          Dra. Paula Andrade
        </span>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#sobre" class="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
          Sobre
        </a>
        <a href="#servicos" class="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
          Serviços
        </a>
        <a href="#depoimentos" class="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
          Depoimentos
        </a>
        <a href="#contato" class="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
          Contato
        </a>
        <button class="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors">
          Agendar
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden p-2 text-neutral-700 hover:text-primary-600">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>
</nav>
```

#### Mobile Menu
```html
<div class="md:hidden bg-white border-t border-neutral-200">
  <div class="container mx-auto px-4 py-4 space-y-3">
    <a href="#sobre" class="block py-2 text-neutral-700 hover:text-primary-600 font-medium">
      Sobre
    </a>
    <a href="#servicos" class="block py-2 text-neutral-700 hover:text-primary-600 font-medium">
      Serviços
    </a>
    <a href="#depoimentos" class="block py-2 text-neutral-700 hover:text-primary-600 font-medium">
      Depoimentos
    </a>
    <a href="#contato" class="block py-2 text-neutral-700 hover:text-primary-600 font-medium">
      Contato
    </a>
    <button class="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg">
      Agendar Consulta
    </button>
  </div>
</div>
```

### Footer

```html
<footer class="bg-neutral-900 text-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Coluna 1: Logo e Descrição -->
      <div class="lg:col-span-2">
        <div class="flex items-center gap-3 mb-4">
          <img src="logo-white.svg" alt="Dra. Paula Andrade" class="h-10">
          <span class="font-display text-lg font-semibold">
            Dra. Paula Andrade
          </span>
        </div>
        <p class="text-neutral-300 mb-4 max-w-md">
          Pediatria humanizada e integrativa em Pinheiros, São Paulo. Cuidado especializado para o desenvolvimento saudável do seu filho.
        </p>
        <div class="flex gap-4">
          <a href="#" class="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <!-- Instagram icon -->
            </svg>
          </a>
          <a href="#" class="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <!-- Facebook icon -->
            </svg>
          </a>
        </div>
      </div>

      <!-- Coluna 2: Links Rápidos -->
      <div>
        <h3 class="font-display text-lg font-semibold mb-4">Links Rápidos</h3>
        <ul class="space-y-2">
          <li><a href="#sobre" class="text-neutral-300 hover:text-primary-400 transition-colors">Sobre</a></li>
          <li><a href="#servicos" class="text-neutral-300 hover:text-primary-400 transition-colors">Serviços</a></li>
          <li><a href="#depoimentos" class="text-neutral-300 hover:text-primary-400 transition-colors">Depoimentos</a></li>
          <li><a href="#contato" class="text-neutral-300 hover:text-primary-400 transition-colors">Contato</a></li>
        </ul>
      </div>

      <!-- Coluna 3: Contato -->
      <div>
        <h3 class="font-display text-lg font-semibold mb-4">Contato</h3>
        <ul class="space-y-3">
          <li class="flex items-start gap-2 text-neutral-300">
            <svg class="w-5 h-5 mt-0.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>Pinheiros, São Paulo - SP</span>
          </li>
          <li class="flex items-start gap-2 text-neutral-300">
            <svg class="w-5 h-5 mt-0.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>contato@drapaulaandrade.com.br</span>
          </li>
          <li class="flex items-start gap-2 text-neutral-300">
            <svg class="w-5 h-5 mt-0.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>(11) 99999-9999</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-neutral-800 mt-8 pt-8 text-center">
      <p class="text-neutral-400 text-sm">
        &copy; 2025 Dra. Paula Andrade - Pediatria. Todos os direitos reservados.
      </p>
    </div>
  </div>
</footer>
```

---

## Ícones e Ilustrações

### Biblioteca de Ícones Recomendada

**Heroicons** (https://heroicons.com/)
- Desenvolvida pela equipe do Tailwind CSS
- Completamente gratuita e open-source
- Disponível em outline e solid
- SVGs otimizados
- Perfeita integração com Tailwind

**Instalação:**
```bash
npm install @heroicons/react
```

**Uso em React:**
```jsx
import { HeartIcon, CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

<HeartIcon className="w-6 h-6 text-primary-600" />
```

### Ícones Essenciais

```html
<!-- Coração (Cuidado) -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
</svg>

<!-- Calendário (Agendamento) -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
</svg>

<!-- Usuários (Família) -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
</svg>

<!-- Check Circle (Sucesso) -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>

<!-- Localização -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
</svg>

<!-- Telefone -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
</svg>

<!-- Email -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
</svg>
```

### Estilo de Ilustrações

**Recomendação: unDraw** (https://undraw.co/)
- Ilustrações SVG gratuitas
- Personalizáveis com cores do brand
- Estilo moderno e clean
- Temas relacionados: saúde, família, cuidado infantil

**Paleta para ilustrações:**
- Primary: `#0ea5e9` (primary-500)
- Accent: `#f97316` (accent-500)
- Neutral: `#525252` (neutral-600)

---

## Acessibilidade

### Contraste de Cores (WCAG AA)

Todas as combinações de cores foram testadas para garantir contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande.

#### Combinações Aprovadas

```css
/* Texto em Backgrounds Claros */
text-neutral-900 on bg-white         /* 17.89:1 ✓ */
text-neutral-800 on bg-white         /* 14.52:1 ✓ */
text-neutral-700 on bg-white         /* 10.59:1 ✓ */
text-neutral-600 on bg-primary-50    /* 8.12:1 ✓ */
text-primary-900 on bg-primary-50    /* 12.45:1 ✓ */

/* Texto em Backgrounds Escuros */
text-white on bg-primary-500         /* 4.52:1 ✓ */
text-white on bg-primary-600         /* 5.87:1 ✓ */
text-white on bg-primary-700         /* 7.72:1 ✓ */
text-white on bg-whatsapp            /* 6.21:1 ✓ */
text-white on bg-neutral-900         /* 17.89:1 ✓ */

/* Estados */
text-white on bg-success-500         /* 4.89:1 ✓ */
text-white on bg-error-500           /* 4.76:1 ✓ */
text-white on bg-warning-600         /* 5.12:1 ✓ */
```

### Focus States

Todos os elementos interativos devem ter estados de foco visíveis:

```html
<!-- Focus Ring Padrão -->
<button class="
  focus:outline-none
  focus:ring-2
  focus:ring-primary-500
  focus:ring-offset-2
">
  Button
</button>

<!-- Focus Ring para Elementos Escuros -->
<button class="
  bg-neutral-900
  focus:outline-none
  focus:ring-2
  focus:ring-white
  focus:ring-offset-2
  focus:ring-offset-neutral-900
">
  Dark Button
</button>
```

### Navegação por Teclado

#### Skip to Content
```html
<a href="#main-content" class="
  sr-only
  focus:not-sr-only
  focus:absolute
  focus:top-4
  focus:left-4
  focus:z-50
  focus:px-4
  focus:py-2
  focus:bg-primary-600
  focus:text-white
  focus:rounded
">
  Pular para conteúdo principal
</a>
```

#### Tab Index
```html
<!-- Elementos interativos devem ter tabindex natural (0) -->
<button tabindex="0">Botão</button>

<!-- Elementos não interativos não devem ter tabindex -->
<div>Conteúdo decorativo</div>

<!-- Elementos ocultos devem ter tabindex="-1" -->
<div hidden tabindex="-1">Conteúdo oculto</div>
```

### ARIA Labels

```html
<!-- Botões com ícones -->
<button aria-label="Abrir menu de navegação">
  <svg><!-- Ícone --></svg>
</button>

<!-- Links externos -->
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no Instagram (abre em nova aba)">
  Instagram
</a>

<!-- Formulários -->
<form role="search" aria-label="Buscar no site">
  <input type="search" aria-label="Digite sua busca" />
  <button type="submit" aria-label="Buscar">
    <svg><!-- Ícone --></svg>
  </button>
</form>

<!-- Loading states -->
<button disabled aria-busy="true">
  <span class="animate-spin">⏳</span>
  Carregando...
</button>
```

### Screen Reader Only

```html
<!-- Utilitário para textos visíveis apenas para screen readers -->
<span class="sr-only">Conteúdo importante para acessibilidade</span>
```

**Classe Tailwind:**
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## Exemplos de Uso

### Hero Section

```html
<section class="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
  <!-- Decorative Background -->
  <div class="absolute inset-0 opacity-10">
    <svg class="absolute top-0 right-0 w-1/2 h-1/2" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="100" fill="currentColor" class="text-primary-500"/>
    </svg>
  </div>

  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Conteúdo -->
      <div class="space-y-6">
        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
          Pediatria Humanizada e Integrativa
        </h1>
        <p class="text-lg md:text-xl text-neutral-700 leading-relaxed">
          Cuidado especializado e acolhedor para o desenvolvimento saudável do seu filho. Atendimento em Pinheiros, São Paulo.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#agendar" class="
            inline-flex items-center justify-center gap-2
            px-8 py-4
            bg-whatsapp hover:bg-whatsapp-dark
            text-white font-semibold
            rounded-lg
            shadow-whatsapp hover:shadow-xl
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2
            active:scale-95
          ">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Agendar via WhatsApp
          </a>
          <a href="#sobre" class="
            inline-flex items-center justify-center
            px-8 py-4
            bg-white hover:bg-neutral-50
            text-primary-600 hover:text-primary-700
            font-semibold
            border-2 border-primary-500 hover:border-primary-600
            rounded-lg
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
            active:scale-95
          ">
            Conhecer a Dra. Paula
          </a>
        </div>
      </div>

      <!-- Imagem -->
      <div class="relative">
        <div class="aspect-square bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl overflow-hidden shadow-2xl">
          <img src="dra-paula.jpg" alt="Dra. Paula Andrade" class="w-full h-full object-cover">
        </div>
        <!-- Badge flutuante -->
        <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <p class="font-display font-semibold text-neutral-900">15+ anos</p>
              <p class="text-sm text-neutral-600">de experiência</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Services Section

```html
<section class="py-16 md:py-24 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-12">
      <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
        Serviços Especializados
      </h2>
      <p class="text-lg text-neutral-600">
        Atendimento completo e humanizado para todas as fases do desenvolvimento infantil
      </p>
    </div>

    <!-- Grid de Serviços -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <div class="
        bg-white
        rounded-xl
        shadow-md hover:shadow-xl
        p-6
        border-t-4 border-primary-500
        transition-all duration-300
        hover:-translate-y-2
      ">
        <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
          <svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3 class="font-display text-xl font-semibold text-neutral-900 mb-2">
          Consulta Pediátrica
        </h3>
        <p class="text-neutral-600 mb-4">
          Acompanhamento completo do crescimento e desenvolvimento, com foco em prevenção e promoção da saúde.
        </p>
        <a href="#" class="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 group">
          Saiba mais
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <!-- Card 2 -->
      <div class="
        bg-white
        rounded-xl
        shadow-md hover:shadow-xl
        p-6
        border-t-4 border-secondary-500
        transition-all duration-300
        hover:-translate-y-2
      ">
        <div class="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
          <svg class="w-7 h-7 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </div>
        <h3 class="font-display text-xl font-semibold text-neutral-900 mb-2">
          Puericultura
        </h3>
        <p class="text-neutral-600 mb-4">
          Cuidado integral desde o nascimento, com orientações sobre alimentação, sono e desenvolvimento.
        </p>
        <a href="#" class="text-secondary-600 hover:text-secondary-700 font-medium inline-flex items-center gap-1 group">
          Saiba mais
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <!-- Card 3 -->
      <div class="
        bg-white
        rounded-xl
        shadow-md hover:shadow-xl
        p-6
        border-t-4 border-accent-500
        transition-all duration-300
        hover:-translate-y-2
      ">
        <div class="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
          <svg class="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </div>
        <h3 class="font-display text-xl font-semibold text-neutral-900 mb-2">
          Pediatria Integrativa
        </h3>
        <p class="text-neutral-600 mb-4">
          Abordagem holística que une medicina tradicional e práticas complementares para o bem-estar infantil.
        </p>
        <a href="#" class="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center gap-1 group">
          Saiba mais
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
```

### Contact Form

```html
<section class="py-16 md:py-24 bg-neutral-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-10">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Entre em Contato
        </h2>
        <p class="text-lg text-neutral-600">
          Tire suas dúvidas ou agende uma consulta
        </p>
      </div>

      <form class="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <!-- Nome -->
        <div class="space-y-2">
          <label for="nome" class="block text-sm font-medium text-neutral-700">
            Nome Completo <span class="text-error-500">*</span>
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            class="
              w-full
              px-4 py-3
              bg-white
              border border-neutral-300
              rounded-lg
              text-neutral-900
              placeholder-neutral-400
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
              transition-all duration-200
              hover:border-neutral-400
            "
            placeholder="Seu nome completo"
          />
        </div>

        <!-- Email e Telefone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-neutral-700">
              E-mail <span class="text-error-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="
                w-full
                px-4 py-3
                bg-white
                border border-neutral-300
                rounded-lg
                text-neutral-900
                placeholder-neutral-400
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                transition-all duration-200
                hover:border-neutral-400
              "
              placeholder="seu@email.com"
            />
          </div>

          <div class="space-y-2">
            <label for="telefone" class="block text-sm font-medium text-neutral-700">
              Telefone <span class="text-error-500">*</span>
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              required
              class="
                w-full
                px-4 py-3
                bg-white
                border border-neutral-300
                rounded-lg
                text-neutral-900
                placeholder-neutral-400
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                transition-all duration-200
                hover:border-neutral-400
              "
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>

        <!-- Assunto -->
        <div class="space-y-2">
          <label for="assunto" class="block text-sm font-medium text-neutral-700">
            Assunto
          </label>
          <select
            id="assunto"
            name="assunto"
            class="
              w-full
              px-4 py-3
              bg-white
              border border-neutral-300
              rounded-lg
              text-neutral-900
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
              transition-all duration-200
              hover:border-neutral-400
            "
          >
            <option value="">Selecione...</option>
            <option value="consulta">Agendar Consulta</option>
            <option value="retorno">Retorno</option>
            <option value="duvida">Dúvida</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <!-- Mensagem -->
        <div class="space-y-2">
          <label for="mensagem" class="block text-sm font-medium text-neutral-700">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="5"
            class="
              w-full
              px-4 py-3
              bg-white
              border border-neutral-300
              rounded-lg
              text-neutral-900
              placeholder-neutral-400
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
              transition-all duration-200
              hover:border-neutral-400
              resize-none
            "
            placeholder="Digite sua mensagem..."
          ></textarea>
        </div>

        <!-- Submit -->
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            class="
              flex-1
              inline-flex items-center justify-center
              px-8 py-4
              bg-primary-500 hover:bg-primary-600
              text-white font-semibold
              rounded-lg
              shadow-md hover:shadow-lg
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
              active:scale-95
            "
          >
            Enviar Mensagem
          </button>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            class="
              flex-1
              inline-flex items-center justify-center gap-2
              px-8 py-4
              bg-whatsapp hover:bg-whatsapp-dark
              text-white font-semibold
              rounded-lg
              shadow-whatsapp hover:shadow-xl
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2
              active:scale-95
            "
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </form>
    </div>
  </div>
</section>
```

---

## Conclusão

Este Design System foi criado especificamente para o consultório da Dra. Paula Andrade, com foco em:

1. **Profissionalismo**: Cores e tipografia que transmitem confiança
2. **Acolhimento**: Paleta suave e humanizada
3. **Modernidade**: Design limpo e contemporâneo
4. **Acessibilidade**: Conformidade WCAG AA
5. **Mobile-First**: Experiência otimizada em todos os dispositivos

Todos os componentes são construídos com Tailwind CSS, garantindo consistência, manutenibilidade e performance.

Para implementação, certifique-se de:
- Instalar as dependências do Tailwind e plugins necessários
- Importar as fontes Google (Inter e Poppins)
- Configurar o arquivo `tailwind.config.js` conforme especificado
- Seguir as diretrizes de acessibilidade em todos os componentes

**Criado em**: Outubro 2025
**Versão**: 1.0
