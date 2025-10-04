# Configuração Cloudflare Pages - Produção

**Data:** 04/10/2025
**URL Produção:** https://drapaulaped.com.br (apex domain)
**URL www:** https://www.drapaulaped.com.br (redirect 301 → apex)

---

## 📊 Arquitetura Cloudflare Pages

Este projeto usa Cloudflare Pages como plataforma principal:

```
┌─────────────────────────────────────────────────┐
│  git push origin main                           │
└──────────────┬──────────────────────────────────┘
               │
       ┌───────▼────────┐
       │ GitHub Actions │
       └───────┬────────┘
               │
       ┌───────▼────────┐
       │ cloudflare-    │
       │ production.yml │
       └───────┬────────┘
               │
       ┌───────▼────────┐
       │ Build (root)   │
       │ sem basePath   │
       └───────┬────────┘
               │
       ┌───────▼────────┐
       │  Cloudflare    │
       │    Pages       │
       └───────┬────────┘
               │
       ┌───────▼────────────────────────┐
       │ drapaulaped.com.br (apex)      │
       │ www → 301 redirect to apex     │
       └────────────────────────────────┘
```

---

## ✅ O Que Já Está Configurado

### 1. Next.js Config Simplificado
```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}
// Sem basePath - Cloudflare serve da raiz
```

### 2. GitHub Actions Workflow
- **`.github/workflows/cloudflare-production.yml`** → Deploy automático para Cloudflare Pages

### 3. DNS Configuration
- **Apex domain (drapaulaped.com.br)** → CNAME drapaulaped.pages.dev
- **www subdomain** → CNAME drapaulaped.pages.dev + Page Rule 301 redirect
- **staging subdomain** → CNAME drapaulaped.pages.dev

### 4. Cloudflare Automation Scripts
- **`scripts/cloudflare-functions.sh`** → Funções helper para API
- **`scripts/setup-dns.sh`** → Configuração DNS automatizada
- **`scripts/create-redirect-rule.sh`** → Page Rule www → apex
- **`scripts/cloudflare-setup.sh`** → Setup completo (SSL, Performance, Security, Cache)

### 5. Environment Variables
- `.env.example` configurado com apex domain

---

## 🚀 Setup Cloudflare Pages (Passo a Passo)

### Passo 1: Criar Conta Cloudflare (Se Ainda Não Tem)

1. Acesse: https://dash.cloudflare.com/sign-up
2. Crie conta gratuita
3. Verifique email

---

### Passo 2: Obter Account ID

1. Acesse: https://dash.cloudflare.com/
2. No menu lateral, clique em qualquer site (ou Workers & Pages)
3. Na URL, copie o **Account ID**:
   ```
   https://dash.cloudflare.com/[ACCOUNT_ID]/...
                                 ^^^^^^^^^^^^
                                 Copie isso
   ```
4. **Guarde o Account ID** - você vai precisar!

---

### Passo 3: Criar Projeto Cloudflare Pages

#### Opção A: Via Dashboard (Manual)

1. Acesse: https://dash.cloudflare.com/ → **Workers & Pages**
2. Clique em **Create application** → **Pages** → **Connect to Git**
3. Conectar ao GitHub:
   - Autorize Cloudflare a acessar seu GitHub
   - Selecione repositório: `joaoguilhermels/drapaulaped`
4. Configure o build:
   ```
   Project name: drapaulaped
   Production branch: main
   Build command: npm run build
   Build output directory: out
   Root directory: /
   ```
5. **Clique em "Save and Deploy"**

#### Opção B: Via MCP Cloudflare (Recomendado)

Se já configurou o MCP do Cloudflare:

```
"Use cloudflare-bindings para criar um projeto Pages chamado 'drapaulaped'
conectado ao repositório joaoguilhermels/drapaulaped na branch main.

Build settings:
- Command: npm run build
- Output: out
- Root: /
"
```

---

### Passo 4: Configurar Environment Variables no Cloudflare

1. No projeto Cloudflare Pages → **Settings** → **Environment variables**
2. Adicionar para **Production**:

| Variable Name | Value | Encrypt? |
|---------------|-------|----------|
| `NEXT_PUBLIC_SITE_URL` | `https://drapaulaped.com.br` | No |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-63WNLD61E3` | No |

3. Clique em **Save**

---

### Passo 5: Configurar GitHub Secrets

Para que o GitHub Actions possa fazer deploy no Cloudflare:

1. Acesse: https://github.com/joaoguilhermels/drapaulaped/settings/secrets/actions
2. Clique em **New repository secret**

**Secrets necessários:**

| Name | Value | Onde conseguir |
|------|-------|----------------|
| `CLOUDFLARE_API_TOKEN` | Seu token | Já tem (mesmo do MCP) |
| `CLOUDFLARE_ACCOUNT_ID` | Account ID | Passo 2 acima |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-63WNLD61E3` | Já configurado |

**Exemplo:**
```
Name: CLOUDFLARE_API_TOKEN
Secret: 3EHdZ_Sns6Rh2zpj4pKoEdTBrlOy0pBj_herejI6
```

⚠️ **ATENÇÃO:** Use o mesmo token do arquivo `.mcp.local.json`

---

### Passo 6: Configurar Custom Domain

#### Opção A: Configuração Manual via Dashboard

1. No Cloudflare Pages projeto → **Custom domains**
2. Clique em **Set up a custom domain**
3. Digite: `drapaulaped.com.br` (apex domain)
4. Cloudflare irá:
   - Detectar se domínio está no Cloudflare
   - Criar registro DNS automaticamente
   - Configurar SSL/TLS

#### Opção B: Configuração Automatizada via Scripts (Recomendado)

Se o domínio já está no Cloudflare:

```bash
# 1. Configurar DNS (apex, www, staging)
CLOUDFLARE_API_TOKEN="seu_token" ./scripts/setup-dns.sh

# 2. Criar redirect www → apex
CLOUDFLARE_API_TOKEN="seu_token" ./scripts/create-redirect-rule.sh

# 3. Setup completo (SSL, Performance, Security, Cache)
CLOUDFLARE_API_TOKEN="seu_token" ./scripts/cloudflare-setup.sh

# (Opcional) Configurar email routing
DESTINATION_EMAIL="seu@email.com" CLOUDFLARE_API_TOKEN="seu_token" ./scripts/cloudflare-setup.sh
```

#### Se o Domínio Ainda Não Está no Cloudflare:

1. Acesse: https://dash.cloudflare.com/ → **Add a site**
2. Digite: `drapaulaped.com.br`
3. Selecione plano **Free**
4. Cloudflare mostrará nameservers:
   ```
   cora.ns.cloudflare.com
   huck.ns.cloudflare.com
   ```
5. **Ir ao registrador do domínio** (ex: Registro.br, GoDaddy, etc.)
6. **Alterar nameservers** para os fornecidos pelo Cloudflare
7. Aguardar propagação DNS (5min - 48h, geralmente < 1h)

#### DNS Records Configurados:

```
Type: CNAME
Name: @ (apex)
Target: drapaulaped.pages.dev
Proxy: ✅ Proxied

Type: CNAME
Name: www
Target: drapaulaped.pages.dev
Proxy: ✅ Proxied

Type: CNAME
Name: staging
Target: drapaulaped.pages.dev
Proxy: ✅ Proxied
```

#### Page Rule - www Redirect:

```
URL: www.drapaulaped.com.br/*
Action: Forwarding URL (301 Permanent)
Destination: https://drapaulaped.com.br/$1
Priority: 1
```

---

### Passo 7: Configurar Web Analytics (Manual)

**IMPORTANTE:** Web Analytics não pode ser criado via API Token. Configure manualmente:

1. Acesse: https://dash.cloudflare.com/ → **Analytics & Logs** → **Web Analytics**
2. Clique em **Add a site**
3. Configure:
   ```
   Hostname: drapaulaped.com.br
   Automatic setup: OFF (usaremos script manual)
   ```
4. Copie o **Web Analytics Token** gerado
5. Adicione ao `app/layout.tsx` dentro do `<head>`:
   ```tsx
   <script
     defer
     src='https://static.cloudflareinsights.com/beacon.min.js'
     data-cf-beacon='{"token": "SEU_TOKEN_AQUI"}'
   />
   ```

**Alternativa via MCP Cloudflare:**

Se preferir usar o MCP server do Cloudflare (recomendado):

```
"Use cloudflare-observability para criar um Web Analytics site para drapaulaped.com.br
e me retorne o token para adicionar ao HTML"
```

---

### Passo 8: Trigger First Deploy

#### Via GitHub (Automático)

```bash
git push origin main
```

Vai acionar ambos workflows:
- `deploy.yml` → GitHub Pages (staging)
- `cloudflare-production.yml` → Cloudflare Pages (production)

#### Via Cloudflare Dashboard (Manual)

1. Projeto Cloudflare Pages → **Deployments**
2. Clique em **Create deployment**
3. Selecione branch: `main`
4. Clique em **Save and Deploy**

---

## 🧪 Verificar Se Está Funcionando

### 1. Checar Builds

**GitHub Actions:**
```bash
gh run list --limit 2
```

Deve mostrar:
```
✓ Deploy to GitHub Pages - main
✓ Deploy to Cloudflare Pages (Production) - main
```

**Cloudflare Dashboard:**
- Projeto → Deployments
- Status deve ser: ✅ **Success**

### 2. Testar URLs

**Production (Apex Domain):**
```
https://drapaulaped.com.br
```
- Deve carregar da raiz `/`
- Links: `/blog/`, `/sobre/`, etc.
- SSL/TLS ativo
- Performance otimizada

**www Redirect:**
```bash
curl -I https://www.drapaulaped.com.br
# Deve retornar:
# HTTP/2 301
# location: https://drapaulaped.com.br/
```

**Staging (Preview):**
```
https://staging.drapaulaped.com.br
```
- Branch staging ou preview deployments

### 3. Verificar Google Analytics

1. Acesse: https://analytics.google.com/
2. **Relatórios** → **Tempo real**
3. Abra ambos sites (staging e production)
4. Deve ver 2 usuários ativos

---

## 📊 Cloudflare Pages - Configurações Aplicadas

### SSL/TLS
- ✅ SSL Mode: Full (Strict)
- ✅ Always Use HTTPS
- ✅ TLS 1.3 enabled
- ✅ Automatic HTTPS Rewrites
- ✅ Universal SSL Certificate (grátis)

### Performance
- ✅ Auto Minify (JS, CSS, HTML)
- ✅ Brotli Compression
- ✅ HTTP/3 (QUIC)
- ✅ Early Hints
- ✅ 0-RTT Connection Resumption
- ✅ Tiered Cache

### Security
- ✅ Bot Fight Mode
- ✅ Browser Integrity Check
- ✅ Security Headers (X-Content-Type-Options, X-Frame-Options, etc.)
- ✅ Security Level: Medium
- ✅ DDoS Protection (sempre ativo)

### Caching
- ✅ Browser Cache TTL: 4 hours
- ✅ Cache Level: Aggressive
- ✅ Smart Tiered Cache topology

### Analytics & Monitoring
- ✅ Cloudflare Web Analytics (configurar token manualmente)
- ✅ Google Analytics 4: G-63WNLD61E3
- ✅ Real User Monitoring (RUM)

---

## 🔧 Troubleshooting

### Problema 1: "Build failed on Cloudflare"

**Diagnóstico:**
```bash
# Ver logs
gh run view [run-id] --log
```

**Soluções comuns:**
1. Verificar environment variables no Cloudflare
2. Confirmar `CLOUDFLARE_ENV=production` está setado
3. Checar se secrets do GitHub estão corretos

---

### Problema 2: "Custom domain not working"

**Causas:**
- DNS não propagou
- Nameservers não apontam para Cloudflare
- SSL ainda provisionando

**Soluções:**
```bash
# Verificar DNS
nslookup www.drapaulaped.com.br

# Deve retornar IP do Cloudflare:
# 104.21.x.x ou 172.67.x.x
```

Aguardar até 24h para SSL provisionar.

---

### Problema 3: "Links quebrados em produção"

**Causa:** basePath sendo aplicado incorretamente

**Verificar:**
```bash
# Build local com env production
CLOUDFLARE_ENV=production npm run build

# Verificar out/index.html
# Links devem ser: href="/blog/" (não /drapaulaped/blog/)
```

**Solução:**
Garantir que workflow Cloudflare seta `CLOUDFLARE_ENV=production`

---

### Problema 4: "GitHub Actions sem permissão"

**Erro:**
```
Error: Unable to deploy to Cloudflare Pages
Authentication failed
```

**Solução:**
1. Verificar secrets:
   - `CLOUDFLARE_API_TOKEN` está correto?
   - `CLOUDFLARE_ACCOUNT_ID` está correto?
2. Verificar permissões do token:
   - Account: Workers Scripts (Edit)
   - Account: Pages (Edit)

---

## 📈 Monitoramento e Métricas

### Cloudflare Analytics

1. Projeto Cloudflare Pages → **Analytics**
2. Métricas disponíveis:
   - Requests por dia
   - Bandwidth
   - Status codes
   - Top pages
   - Países

### Google Analytics 4

Filtrar por ambiente:

**Production:**
```
Hostname = www.drapaulaped.com.br
```

**Staging:**
```
Hostname = joaoguilhermels.github.io
```

### Alertas Recomendados

**Cloudflare:**
- Email quando build falha
- Email quando 50+ erros 5xx

**GitHub Actions:**
- Notificação quando workflow falha

---

## 🚀 Fluxo de Deploy Completo

```bash
# 1. Desenvolvimento local
npm run dev

# 2. Testar build
npm run build

# 3. Commit e push
git add .
git commit -m "feat: nova funcionalidade"
git push origin main

# 4. GitHub Actions roda automaticamente
# → cloudflare-production.yml (Cloudflare Pages)

# 5. Verificar status
gh run list --limit 1
gh run watch  # Acompanhar em tempo real

# 6. Testar produção
# https://drapaulaped.com.br

# 7. Verificar analytics
# - GA4 Tempo Real
# - Cloudflare Web Analytics

# 8. Monitorar via MCP (Recomendado)
# Use o MCP server ao invés de scripts bash quando possível
```

---

## 🤖 Usando MCP Cloudflare (Recomendado)

**IMPORTANTE:** Sempre prefira usar o MCP server do Cloudflare ao invés da API direta.

### MCP Servers Disponíveis:

1. **cloudflare-docs** → Documentação e guias
2. **cloudflare-bindings** → Criar/gerenciar projetos
3. **cloudflare-builds** → Monitorar deploys
4. **cloudflare-observability** → Analytics e logs
5. **cloudflare-browser** → Testes automatizados

### Exemplos de Uso:

#### Monitorar Deploys
```
"Use cloudflare-builds para mostrar os últimos 5 deploys do projeto drapaulaped"
```

#### Ver Analytics
```
"Use cloudflare-observability para mostrar métricas das últimas 24h de drapaulaped.com.br"
```

#### Criar Web Analytics
```
"Use cloudflare-observability para criar um Web Analytics site para drapaulaped.com.br
e me retorne o token"
```

#### Monitorar Erros
```
"Use cloudflare-observability para mostrar erros das últimas 2h no projeto drapaulaped"
```

#### Testar Performance
```
"Use cloudflare-browser para testar a performance de https://drapaulaped.com.br"
```

### Scripts Bash (Alternativa)

Use apenas quando MCP não estiver disponível:

```bash
# Setup completo
CLOUDFLARE_API_TOKEN="token" ./scripts/cloudflare-setup.sh

# DNS
CLOUDFLARE_API_TOKEN="token" ./scripts/setup-dns.sh

# Redirect www → apex
CLOUDFLARE_API_TOKEN="token" ./scripts/create-redirect-rule.sh
```

---

## 💰 Custos e Limites

### Cloudflare Pages (Free Plan)

**Incluído:**
- 500 builds/mês
- Unlimited requests
- Unlimited bandwidth
- Unlimited sites
- 100GB file storage

**Se exceder:**
- Builds adicionais: $0.50 cada
- Ou upgrade para Workers Paid ($5/mês):
  - 5.000 builds/mês
  - Logs completos
  - Observability

### GitHub Pages (Free)

**Incluído:**
- Unlimited builds
- 100GB bandwidth/mês
- Unlimited sites públicos

---

## 📚 Recursos Úteis

**Cloudflare:**
- Dashboard: https://dash.cloudflare.com/
- Docs: https://developers.cloudflare.com/pages/
- Status: https://www.cloudflarestatus.com/

**GitHub:**
- Actions: https://github.com/joaoguilhermels/drapaulaped/actions
- Secrets: https://github.com/joaoguilhermels/drapaulaped/settings/secrets/actions

**Analytics:**
- Google Analytics: https://analytics.google.com/
- Cloudflare Analytics: No dashboard do projeto

---

## ✅ Checklist de Setup

### Configuração Inicial
- [x] Conta Cloudflare criada
- [x] Account ID obtido
- [x] Projeto Cloudflare Pages criado (`drapaulaped`)
- [x] MCP Cloudflare configurado (`.mcp.json`, `.mcp.local.json`)
- [x] Environment variables configuradas no Cloudflare
- [x] GitHub Secrets adicionados:
  - [x] `CLOUDFLARE_API_TOKEN`
  - [x] `CLOUDFLARE_ACCOUNT_ID`
  - [x] `NEXT_PUBLIC_GA_MEASUREMENT_ID`

### DNS e Domínio
- [x] Domínio `drapaulaped.com.br` adicionado ao Cloudflare
- [x] Nameservers atualizados no registrador
- [x] DNS Records criados (apex, www, staging)
- [x] Page Rule www → apex configurada
- [x] SSL/TLS ativo (Universal SSL)

### Cloudflare Otimizações
- [x] SSL/TLS: Full Strict, TLS 1.3
- [x] Performance: Minify, Brotli, HTTP/3, Early Hints
- [x] Security: Bot Fight Mode, Security Headers
- [x] Caching: Aggressive, Tiered Cache
- [ ] Web Analytics token configurado (manual)
- [ ] Email Routing configurado (opcional)

### Deploy e Testes
- [x] Primeiro deploy realizado com sucesso
- [x] Produção acessível: https://drapaulaped.com.br
- [x] Google Analytics 4 ativo
- [ ] Cloudflare Web Analytics ativo
- [ ] Lighthouse CI configurado

---

## 🎯 Próximos Passos

### Imediato
1. **Configurar Web Analytics** (manual via dashboard ou MCP)
   - Obter token do Cloudflare Web Analytics
   - Adicionar ao `app/layout.tsx`
2. **Adicionar Lighthouse CI** ao workflow
   - Performance monitoring automático
   - Alertas de regressão

### Opcional
3. **Configurar Email Routing**
   - contato@drapaulaped.com.br
   - noreply@drapaulaped.com.br
   - oi@drapaulaped.com.br
4. **Configurar Alertas** Cloudflare
   - Build failures
   - Performance degradation
   - Erros 5xx
5. **Monitorar Analytics** primeiros 7 dias
   - GA4 + Cloudflare Web Analytics
   - Ajustar estratégia SEO baseado em dados

---

**Última Atualização:** 04/10/2025
**Status:** Setup Cloudflare completo - Apex domain ativo
**Arquitetura:** Cloudflare Pages only (sem GitHub Pages)
**MCP:** Configurado e recomendado para operações

---

## 💡 Dicas Importantes

### 1. Sempre use MCP quando possível
```
"Use cloudflare-observability para criar Web Analytics para drapaulaped.com.br"
```

### 2. Teste localmente antes de deploy
```bash
npm run build
npx serve out -p 3001
# Links devem ser da raiz: /blog/, /sobre/
```

### 3. Monitore performance
```bash
# Via Lighthouse CI (após configurar)
npm run lighthouse

# Via MCP
"Use cloudflare-browser para testar https://drapaulaped.com.br"
```

### 4. Apex domain é o principal
- ✅ https://drapaulaped.com.br
- 🔄 https://www.drapaulaped.com.br → 301 redirect

---

**Setup completo! 🎉**
