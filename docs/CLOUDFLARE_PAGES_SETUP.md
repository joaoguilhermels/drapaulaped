# Configuração Cloudflare Pages - Produção

**Data:** 04/10/2025
**URL Produção:** https://www.drapaulaped.com.br
**URL Staging:** https://joaoguilhermels.github.io/drapaulaped/

---

## 📊 Arquitetura Dual

Este projeto usa dois ambientes de deploy:

```
┌─────────────────────────────────────────────────┐
│  git push origin main                           │
└──────────────┬──────────────────────────────────┘
               │
       ┌───────▼────────┐
       │ GitHub Actions │
       └───────┬────────┘
               │
      ┌────────┴────────┐
      │                 │
┌─────▼──────┐    ┌────▼──────────┐
│  deploy.yml│    │ cloudflare-   │
│            │    │ production.yml│
└─────┬──────┘    └────┬──────────┘
      │                │
┌─────▼──────┐    ┌────▼──────────┐
│   Build    │    │    Build      │
│ (basePath) │    │ (sem basePath)│
└─────┬──────┘    └────┬──────────┘
      │                │
┌─────▼──────┐    ┌────▼──────────┐
│  GitHub    │    │  Cloudflare   │
│   Pages    │    │    Pages      │
└─────┬──────┘    └────┬──────────┘
      │                │
┌─────▼──────────────────▼──────────┐
│ joao...io/drapaulaped  (staging)  │
│ www.drapaulaped.com.br (prod)     │
└───────────────────────────────────┘
```

---

## ✅ O Que Já Está Configurado

### 1. Next.js Config Condicional
```javascript
// next.config.js
const isProduction = process.env.CLOUDFLARE_ENV === 'production'
// basePath só é usado quando NÃO é production
```

### 2. GitHub Actions Workflow
- **`.github/workflows/deploy.yml`** → GitHub Pages (staging)
- **`.github/workflows/cloudflare-production.yml`** → Cloudflare Pages (production)

### 3. Environment Variables
- `.env.example` atualizado com variáveis para ambos ambientes

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
| `CLOUDFLARE_ENV` | `production` | No |
| `NEXT_PUBLIC_SITE_URL` | `https://www.drapaulaped.com.br` | No |
| `NEXT_PUBLIC_ENV` | `production` | No |
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

1. No Cloudflare Pages projeto → **Custom domains**
2. Clique em **Set up a custom domain**
3. Digite: `www.drapaulaped.com.br`
4. Cloudflare irá:
   - Detectar se domínio está no Cloudflare
   - Criar registro DNS automaticamente
   - Configurar SSL/TLS

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

#### Configurar DNS Records:

Após domínio estar no Cloudflare:

1. DNS → Records
2. Cloudflare Pages cria automaticamente:
   ```
   Type: CNAME
   Name: www
   Target: drapaulaped.pages.dev
   Proxy: ✅ Proxied (laranja)
   ```

3. **(Opcional) Redirect apex domain:**
   ```
   Type: A
   Name: @
   Target: 192.0.2.1
   Proxy: ✅ Proxied

   + Page Rule redirect @ → www
   ```

---

### Passo 7: Trigger First Deploy

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

**Staging (GitHub Pages):**
```
https://joaoguilhermels.github.io/drapaulaped/
```
- Deve carregar com basePath `/drapaulaped/`
- Links: `/drapaulaped/blog/`

**Production (Cloudflare Pages):**
```
https://www.drapaulaped.com.br
```
- Deve carregar da raiz `/`
- Links: `/blog/`

### 3. Verificar Google Analytics

1. Acesse: https://analytics.google.com/
2. **Relatórios** → **Tempo real**
3. Abra ambos sites (staging e production)
4. Deve ver 2 usuários ativos

---

## 📊 Comparação: Staging vs Production

| Característica | Staging (GitHub Pages) | Production (Cloudflare) |
|----------------|------------------------|-------------------------|
| **URL** | joaoguilhermels.github.io/drapaulaped/ | www.drapaulaped.com.br |
| **basePath** | `/drapaulaped/` | `/` (raiz) |
| **Deploy** | Automático (main push) | Automático (main push) |
| **Build Time** | ~2-3 min | ~1-2 min |
| **SSL** | GitHub grátis | Cloudflare grátis |
| **CDN** | GitHub global | Cloudflare 300+ POPs |
| **Analytics** | Filtrar por hostname | Filtrar por hostname |
| **Custo** | Grátis | Grátis (500 builds/mês) |

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

# 2. Testar build (simula staging)
npm run build
# ou testar production:
CLOUDFLARE_ENV=production npm run build

# 3. Commit e push
git add .
git commit -m "feat: nova funcionalidade"
git push origin main

# 4. GitHub Actions roda automaticamente
# → deploy.yml (GitHub Pages - staging)
# → cloudflare-production.yml (Cloudflare - production)

# 5. Verificar status
gh run list --limit 2
gh run watch  # Acompanhar em tempo real

# 6. Testar ambientes
# Staging: https://joaoguilhermels.github.io/drapaulaped/
# Production: https://www.drapaulaped.com.br

# 7. Verificar analytics
# GA4 Tempo Real → Ver tráfego

# 8. Monitorar erros (via MCP)
"Mostre erros das últimas 2h no Cloudflare Pages drapaulaped"
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

- [ ] Conta Cloudflare criada
- [ ] Account ID obtido
- [ ] Projeto Cloudflare Pages criado (`drapaulaped`)
- [ ] Environment variables configuradas no Cloudflare
- [ ] GitHub Secrets adicionados:
  - [ ] `CLOUDFLARE_API_TOKEN`
  - [ ] `CLOUDFLARE_ACCOUNT_ID`
  - [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] Domínio `drapaulaped.com.br` adicionado ao Cloudflare
- [ ] Nameservers atualizados no registrador
- [ ] Custom domain `www.drapaulaped.com.br` configurado
- [ ] SSL/TLS ativo (pode levar até 24h)
- [ ] Primeiro deploy realizado com sucesso
- [ ] Staging e Production acessíveis
- [ ] Google Analytics rastreando ambos ambientes
- [ ] MCP Cloudflare testado

---

## 🎯 Próximos Passos

1. **Configurar DNS** (se ainda não fez)
2. **Primeiro deploy** via `git push`
3. **Testar custom domain**
4. **Configurar alertas** Cloudflare
5. **Monitorar analytics** primeiros dias
6. **Otimizar performance** (se necessário)

---

**Última Atualização:** 04/10/2025
**Status:** Setup completo, aguardando configuração manual do Cloudflare
**Responsável:** Infraestrutura Dual Deploy

---

## 💡 Dica Final

**Teste antes de configurar domínio:**
```bash
# Ver build de production localmente
CLOUDFLARE_ENV=production npm run build
npx serve out -p 3001

# Acessar: http://localhost:3001
# Links devem ser sem /drapaulaped/
```

Isso garante que a configuração condicional está funcionando! ✅
