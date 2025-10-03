# Quick Start Guide

## Setup em 3 Passos

### 1. Instalar Dependências via Docker

```bash
docker-compose run --rm nextjs npm install
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
docker-compose up
```

Acesse: http://localhost:3000

### 3. Build para Produção

```bash
docker-compose run --rm nextjs npm run build
```

## Comandos Úteis

### Desenvolvimento
```bash
# Iniciar dev server
docker-compose up

# Parar containers
docker-compose down

# Rebuild containers
docker-compose up --build
```

### Gerenciamento de Pacotes
```bash
# Instalar pacote
docker-compose run --rm nextjs npm install <package-name>

# Instalar pacote dev
docker-compose run --rm nextjs npm install -D <package-name>

# Atualizar dependências
docker-compose run --rm nextjs npm update
```

### Build e Deploy
```bash
# Build local
docker-compose run --rm nextjs npm run build

# Lint
docker-compose run --rm nextjs npm run lint

# Type check
docker-compose run --rm nextjs npx tsc --noEmit
```

### Helper Script
```bash
# Tornar executável (primeira vez)
chmod +x docker-run.sh

# Usar
./docker-run.sh dev          # npm run dev
./docker-run.sh build        # npm run build
./docker-run.sh lint         # npm run lint
./docker-run.sh "npm test"   # comando customizado
```

## Estrutura de Pastas

```
/app              → Páginas e layouts (App Router)
/components       → Componentes React reutilizáveis
/lib             → Utilities, helpers, tipos
/public          → Assets estáticos (imagens, fonts)
/.github/workflows → CI/CD pipelines
```

## Configuração GitHub Pages

### Se for username.github.io (root domain)
Nenhuma configuração necessária!

### Se for username.github.io/repository-name
Edite `next.config.js`:
```javascript
basePath: '/drapaulaped',
assetPrefix: '/drapaulaped/',
```

## Deploy

### Automático
Push para `main` → Deploy automático via GitHub Actions

### Manual
1. GitHub → Actions tab
2. Deploy to GitHub Pages
3. Run workflow

## Próximos Passos

1. Personalize `app/layout.tsx` (metadata SEO)
2. Edite `app/page.tsx` (homepage)
3. Crie componentes em `/components`
4. Configure variáveis em `.env.local`
5. Ative GitHub Pages nas configurações do repo

## Troubleshooting

**Container não inicia:**
```bash
docker-compose down -v
docker-compose up --build
```

**Porta 3000 ocupada:**
Edite `docker-compose.yml`, mude `3000:3000` para `3001:3000`

**Mudanças não aparecem:**
Verifique se os volumes estão montados corretamente no docker-compose.yml

## Documentação Adicional

- [README.md](README.md) - Documentação completa
- [DEPLOY.md](DEPLOY.md) - Guia de deploy detalhado
