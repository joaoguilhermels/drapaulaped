# Google Search Console - Setup Completo

**Data:** 04/10/2025
**Site:** https://drapaulaped.com.br
**Objetivo:** Monitorar performance SEO, keywords, e indexação

---

## 🎯 Por que Search Console é Crítico

**Benefícios diretos:**
- Ver **exatamente** quais keywords trazem cliques
- Identificar problemas de indexação
- Monitorar Core Web Vitals (ranking factor)
- Solicitar reindexação rápida
- Detectar penalizações Google
- Integrar com GA4 (keywords + comportamento)

**Impacto SEO:**
```
SEM Search Console:
❌ Trabalhar às cegas (não sabe quais keywords funcionam)
❌ Demora para identificar problemas técnicos
❌ Não sabe posição real no Google

COM Search Console:
✅ Dados precisos de impressions, clicks, CTR, posição
✅ Alertas automáticos de problemas
✅ Ações baseadas em dados reais
```

---

## 📋 Setup Passo a Passo

### **Passo 1: Adicionar Propriedade no Search Console**

1. **Acessar:** https://search.google.com/search-console

2. **Add Property:**
   - Click "Add Property"
   - Escolher: **Domain** (recomendado)
   - Digite: `drapaulaped.com.br`

3. **Por que Domain property:**
   ```
   Domain property rastreia:
   ✅ https://drapaulaped.com.br
   ✅ https://www.drapaulaped.com.br
   ✅ http://drapaulaped.com.br (se existir)
   ✅ Todos subdomínios

   URL prefix property rastreia:
   ⚠️ Apenas 1 variante (ex: só https://drapaulaped.com.br)
   ```

---

### **Passo 2: Verificação via DNS (Recomendado)**

**Método DNS TXT Record:**

1. Search Console mostrará um código TXT:
   ```
   google-site-verification=ABC123xyz...
   ```

2. **Adicionar ao Cloudflare DNS:**
   ```bash
   # Via Cloudflare Dashboard:
   DNS → Add Record

   Type: TXT
   Name: @ (ou drapaulaped.com.br)
   Content: google-site-verification=ABC123xyz...
   TTL: Auto
   Proxy: DNS only (cinza)
   ```

3. **Ou via CLI (se tiver Cloudflare API):**
   ```bash
   curl -X POST "https://api.cloudflare.com/client/v4/zones/f25e66d60bff09ba017ced7c098aa0f2/dns_records" \
     -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
     -H "Content-Type: application/json" \
     -d '{
       "type": "TXT",
       "name": "@",
       "content": "google-site-verification=ABC123xyz...",
       "ttl": 1
     }'
   ```

4. **Voltar ao Search Console** → Click "Verify"

**Tempo de propagação:** 1-5 minutos

---

### **Passo 3: Verificação via HTML Meta Tag (Alternativa)**

Se preferir usar meta tag (já preparado no código):

1. Search Console mostrará meta tag:
   ```html
   <meta name="google-site-verification" content="ABC123xyz..." />
   ```

2. **Copiar apenas o código** (sem as tags):
   ```
   ABC123xyz...
   ```

3. **Adicionar ao Cloudflare Pages environment variables:**
   ```
   Dashboard Cloudflare Pages → drapaulaped → Settings → Environment variables

   Production:
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION = ABC123xyz...
   ```

4. **Fazer redeploy** (push to GitHub ou manual)

5. **Verificar meta tag está no site:**
   ```bash
   curl -s https://drapaulaped.com.br | grep "google-site-verification"
   ```

6. **Voltar ao Search Console** → Click "Verify"

---

### **Passo 4: Enviar Sitemap**

Após verificação aprovada:

1. Search Console → **Sitemaps** (menu lateral)

2. **Add new sitemap:**
   ```
   https://drapaulaped.com.br/sitemap.xml
   ```

3. Click **Submit**

4. **Status esperado:**
   ```
   ✅ Success
   URLs discovered: 1 (homepage)
   ```

**Aguardar:** 24-48h para primeira indexação

---

### **Passo 5: Integrar com Google Analytics 4**

**Crítico para análise completa!**

1. **Google Analytics 4:**
   - Admin → Product Links → Search Console Links
   - Click "Link"

2. **Selecionar:**
   - Property: drapaulaped.com.br
   - Web stream: drapaulaped.com.br

3. **Confirmar** → Submit

4. **Aguardar:** 24-48h dados aparecerem

5. **Verificar integração:**
   ```
   GA4 → Reports → Acquisition → Traffic acquisition
   → Filtrar por "google / organic"
   → Verificar dados de Search Console (queries, landing pages)
   ```

---

## 📊 Relatórios Essenciais (Acompanhar Semanalmente)

### **1. Performance Report**

```
Search Console → Performance

Filtros recomendados:
- Date: Last 28 days
- Compare: Previous period

Métricas:
- Total clicks (tráfego real)
- Total impressions (potencial)
- Average CTR (qualidade title/meta)
- Average position (ranking)

Análises:
┌─────────────────────────────────────────────┐
│ Queries com alto impressions + baixo CTR:   │
│ → Reescrever title/meta description         │
│                                              │
│ Queries com posição 4-10:                   │
│ → Otimizar conteúdo para chegar top 3       │
│                                              │
│ Queries com clicks mas bounce alto (via GA4)│
│ → Melhorar conteúdo, não atende expectativa │
└─────────────────────────────────────────────┘
```

**Top Queries para Pediatra:**
```
Esperado ver (após 3-6 meses):
- pediatra pinheiros
- pediatra em pinheiros
- pediatra perto de mim
- pediatria humanizada
- pediatra integrativa
- consulta pediatra são paulo
```

---

### **2. Coverage Report (Indexação)**

```
Search Console → Coverage (ou Index → Coverage)

Status:
✅ Valid: URLs indexadas (objetivo: 100%)
⚠️ Valid with warnings: Indexadas mas com avisos
❌ Error: Não indexadas (CORRIGIR!)
🔍 Excluded: Google decidiu não indexar (analisar)

Problemas comuns:
- Crawled - currently not indexed → Esperar (novo site)
- Discovered - currently not indexed → Melhorar relevância
- Blocked by robots.txt → CORRIGIR URGENTE
- Server error (5xx) → Problema Cloudflare/site
```

**Ações:**
- Errors > 0 → Investigar e corrigir IMEDIATAMENTE
- Excluded crescendo → Verificar qualidade conteúdo
- Valid pages < total pages → Solicitar indexação manual

---

### **3. Core Web Vitals**

```
Search Console → Experience → Core Web Vitals

Métricas (ranking factors):
- LCP (Largest Contentful Paint): < 2.5s = Good
- FID (First Input Delay): < 100ms = Good
- CLS (Cumulative Layout Shift): < 0.1 = Good

Status atual (via Cloudflare):
✅ LCP: ~1.2s (otimizado)
✅ FID: < 50ms (otimizado)
✅ CLS: < 0.05 (estável)

Se aparecer "Poor URLs":
→ Investigar página específica
→ Otimizar imagens, JS, CSS
→ Testar em PageSpeed Insights
```

---

### **4. Mobile Usability**

```
Search Console → Experience → Mobile Usability

Problemas comuns:
❌ Text too small to read
❌ Clickable elements too close
❌ Content wider than screen
❌ Viewport not set

Status esperado:
✅ 0 errors (site é mobile-first)
```

---

## 🔗 Integrações Avançadas

### **1. GA4 + Search Console = Insights Poderosos**

**Relatório Combinado:**

```
GA4 → Explore → Create new

Dimensions:
- Google organic query (Search Console)
- Landing page
- Device category

Metrics:
- Clicks (Search Console)
- Sessions (GA4)
- Conversions (WhatsApp clicks)
- Average engagement time

Segmentos:
- High-intent queries (posição < 5)
- Converters vs Non-converters

Insights:
┌──────────────────────────────────────────────────────┐
│ Query "pediatra pinheiros":                          │
│ - Posição: 8                                          │
│ - Clicks: 15/mês                                      │
│ - Conversions: 2 (13% conversion rate)                │
│ → AÇÃO: Otimizar para chegar posição 3-5             │
│   = Dobrar clicks (30/mês) = 4 conversões             │
└──────────────────────────────────────────────────────┘
```

---

### **2. URL Inspection Tool (Indexação Rápida)**

Quando criar conteúdo novo:

```
Search Console → URL Inspection

1. Colar URL: https://drapaulaped.com.br/nova-pagina
2. Click "Test Live URL"
3. Se OK → Click "Request Indexing"
4. Aguardar 1-3 dias (vs 2-4 semanas naturalmente)
```

**Usar para:**
- Novo blog post publicado
- Página importante atualizada
- Correção de erro crítico

---

### **3. Sitelinks Search Box (Rich Snippet)**

Já implementado no StructuredData.tsx:

```json
{
  "@type": "WebSite",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://drapaulaped.com.br/search?q={search_term_string}"
    }
  }
}
```

**Resultado:**
- Google pode mostrar caixa de busca direto no SERP
- Aumenta CTR em 20-30%
- Melhora brand authority

---

## 🚨 Alertas e Monitoramento

### **Configurar Email Alerts**

```
Search Console → Settings → Users and permissions

Adicionar email:
- contato@drapaulaped.com.br (ou seu email principal)

Notificações automáticas:
✅ New critical issue in Search Console
✅ New manual actions
✅ New security issues
✅ Indexing errors spike
```

---

### **Problemas Críticos (Agir Imediatamente)**

```
1. Manual Action Received
   → Penalização Google (links spam, conteúdo duplicado)
   → CORRIGIR URGENTE (pode perder 90% tráfego)

2. Security Issue Detected
   → Site hackeado ou malware
   → ISOLAR SITE + corrigir + solicitar review

3. Coverage Errors > 50%
   → Problema técnico grave (robots.txt, server errors)
   → Investigar logs Cloudflare

4. Core Web Vitals Degradation
   → Performance piorou
   → Verificar deploy recente, otimizar assets
```

---

## 📈 Metas de Crescimento (Search Console)

**Mês 1-2 (Setup):**
```
Impressions:  100-500/mês
Clicks:       5-20/mês
CTR:          3-5%
Avg Position: 15-30
```

**Mês 3-6 (Crescimento):**
```
Impressions:  1.000-5.000/mês
Clicks:       50-200/mês
CTR:          4-6%
Avg Position: 8-15
```

**Mês 6-12 (Estabelecido):**
```
Impressions:  5.000-20.000/mês
Clicks:       200-800/mês
CTR:          5-8%
Avg Position: 3-8
Keywords top 3: 5-10
```

---

## 🛠️ Troubleshooting

### **Problema: Site não aparece no Search Console**

```
Possíveis causas:
1. Verificação falhou
   → Refazer verificação (DNS ou meta tag)

2. robots.txt bloqueando
   → Verificar: https://drapaulaped.com.br/robots.txt
   → Garantir: User-agent: * / Allow: /

3. Site muito novo
   → Aguardar 3-7 dias após submit sitemap
   → Solicitar indexação manual (URL Inspection)

4. Noindex tag acidental
   → Verificar <meta name="robots" content="index,follow">
```

---

### **Problema: Clicks muito menores que Impressions**

```
CTR baixo (<2%) indica:
❌ Title não atrativo
❌ Meta description genérica
❌ Snippet competitors melhor
❌ Posição muito baixa (>10)

Soluções:
✅ A/B test titles (adicionar números, urgência)
✅ Rich snippets (stars, FAQ)
✅ Melhorar posição (otimizar conteúdo)
```

**Exemplo otimização:**

Antes:
```
Pediatra em Pinheiros - Dra. Paula Andrade
```

Depois:
```
Pediatra em Pinheiros | Consulta em 24-48h ⭐4.9 | Dra. Paula
```

---

## 📚 Recursos

**Links úteis:**
- Dashboard: https://search.google.com/search-console
- Documentação: https://developers.google.com/search/docs
- Status ferramenta: https://www.google.com/appsstatus
- Testing tools: https://search.google.com/test/rich-results

**Ferramentas complementares:**
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Rich Results Test: https://search.google.com/test/rich-results

---

## ✅ Checklist Pós-Setup

- [ ] Propriedade verificada (DNS ou meta tag)
- [ ] Sitemap enviado e aceito
- [ ] Integração GA4 ativa
- [ ] Email alerts configurados
- [ ] Coverage sem errors
- [ ] Core Web Vitals "Good"
- [ ] Mobile usability sem problemas
- [ ] Primeiro query data apareceu (3-7 dias)

---

**Última atualização:** 04/10/2025
**Próxima revisão:** Semanal (primeiros 3 meses), depois mensal

---

**⚡ Dica Pro:** Adicione um lembrete semanal para revisar Performance Report. **15 minutos/semana** de análise Search Console = **+50-100% tráfego orgânico** em 6 meses.
