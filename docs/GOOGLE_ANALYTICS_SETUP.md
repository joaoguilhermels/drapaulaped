# Configuração do Google Analytics 4

## 📊 Como Configurar o Google Analytics no Site

O site já está preparado para Google Analytics 4. Siga os passos abaixo para ativar o rastreamento.

---

## Passo 1: Criar Conta no Google Analytics

1. Acesse: https://analytics.google.com/
2. Faça login com sua conta Google
3. Clique em "Começar a medir" ou "Criar conta"

---

## Passo 2: Configurar Propriedade

### Informações da Conta:
- **Nome da conta:** Dra. Paula Andrade Pediatria
- **Nome da propriedade:** Site Dra. Paula Andrade
- **Fuso horário:** (UTC-03:00) Brasília
- **Moeda:** Real brasileiro (R$)

### Detalhes da Empresa:
- **Setor:** Saúde
- **Tamanho da empresa:** Pequena (1-10 funcionários)

### Objetivos:
- ✅ Examinar o comportamento do usuário
- ✅ Medir conversões
- ✅ Obter insights de público-alvo

---

## Passo 3: Configurar Fluxo de Dados

1. Selecione **Web** como plataforma
2. Configure o fluxo:
   - **URL do site:** https://joaoguilhermels.github.io/drapaulaped/
   - **Nome do fluxo:** Site Principal
   - ✅ **Ativar medição aprimorada:** SIM

3. Clique em "Criar fluxo"

---

## Passo 4: Obter Measurement ID

Após criar o fluxo, você verá o **Measurement ID** no formato:

```
G-XXXXXXXXXX
```

**Copie este ID!** Você vai precisar dele no próximo passo.

---

## Passo 5: Configurar no Repositório GitHub

### Método 1: Via GitHub Actions Secrets (Recomendado)

1. Vá para o repositório: https://github.com/joaoguilhermels/drapaulaped/
2. Clique em **Settings** > **Secrets and variables** > **Actions**
3. Clique em **New repository secret**
4. Configure:
   - **Name:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Secret:** Cole seu Measurement ID (G-XXXXXXXXXX)
5. Clique em **Add secret**

### Método 2: Via Arquivo .env.local (Desenvolvimento Local)

Se estiver rodando localmente, crie o arquivo `.env.local`:

```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

⚠️ **IMPORTANTE:** Nunca commite o arquivo `.env.local` no Git!

---

## Passo 6: Deploy

Após configurar a secret no GitHub:

1. Faça qualquer commit no repositório (ou force um rebuild)
2. O GitHub Actions vai fazer deploy automático
3. O Google Analytics estará ativo!

---

## ✅ Verificar se Está Funcionando

### Teste em Tempo Real:

1. Acesse: https://analytics.google.com/
2. Vá em **Relatórios** > **Tempo real**
3. Abra seu site em outra aba: https://joaoguilhermels.github.io/drapaulaped/
4. Você deve ver **1 usuário ativo** no relatório em tempo real

Se aparecer, está funcionando! 🎉

---

## 📊 Métricas Principais para Acompanhar

### Relatórios Importantes:

#### 1. Aquisição de Usuários
**Onde:** Relatórios > Ciclo de vida > Aquisição

**O que ver:**
- Quais canais trazem mais visitas (Orgânico, Direto, Redes Sociais)
- Quais palavras-chave estão funcionando

#### 2. Engajamento
**Onde:** Relatórios > Ciclo de vida > Engajamento

**O que ver:**
- Páginas mais visitadas
- Tempo médio na página
- Taxa de rejeição

#### 3. Eventos Personalizados
**Eventos automáticos que o GA4 rastreia:**
- `page_view` - Visualizações de página
- `scroll` - Scroll (50%, 90%)
- `click` - Cliques em links externos
- `file_download` - Downloads (se houver)
- `video_start` - Início de vídeos (quando implementado)

---

## 🎯 Eventos Customizados Futuros

O site está preparado para rastrear:

### WhatsApp Clicks
```javascript
// Quando implementado, vai rastrear:
gtag('event', 'whatsapp_click', {
  'event_category': 'engagement',
  'event_label': 'Agendar Consulta'
});
```

### Scroll Depth
```javascript
// Rastreia quando usuários chegam ao fim da página
gtag('event', 'scroll', {
  'percent_scrolled': 90
});
```

---

## 🔧 Configurações Recomendadas

### 1. Ativar Google Search Console

**Benefício:** Ver queries de busca que levam ao site

1. Em Google Analytics, vá em **Admin** > **Links de produtos**
2. Clique em **Vincular Search Console**
3. Selecione a propriedade do Search Console
4. Confirme a vinculação

### 2. Criar Conversões Personalizadas

**Eventos que sugerimos marcar como conversões:**

1. WhatsApp clicks → **Alta prioridade**
2. Scroll 90% → Engajamento alto
3. Tempo na página > 2min → Leitura completa
4. Visita ao /blog/ → Interesse em conteúdo

**Como criar:**
1. Vá em **Admin** > **Eventos**
2. Clique em **Criar evento**
3. Configure o evento como conversão

### 3. Configurar Públicos-Alvo

**Públicos úteis para remarketing:**

- Visitantes que viram a página de serviços
- Usuários que leram um blog post completo
- Quem clicou no WhatsApp mas não converteu

---

## 📈 Metas de Sucesso (KPIs)

### Primeiros 30 Dias:
- [ ] 100-200 visitas orgânicas
- [ ] Taxa de rejeição < 50%
- [ ] Tempo médio > 1:30 min

### Primeiros 90 Dias:
- [ ] 500+ visitas orgânicas
- [ ] 10+ cliques no WhatsApp
- [ ] Taxa de conversão > 2%

### Primeiros 6 Meses:
- [ ] 1500+ visitas orgânicas/mês
- [ ] 50+ cliques no WhatsApp
- [ ] Blog posts gerando 30% do tráfego

---

## 🛠️ Troubleshooting

### Problema: Não aparece no Tempo Real

**Soluções:**
1. Verifique se o Measurement ID está correto
2. Confirme que a secret está configurada no GitHub
3. Aguarde 5-10 minutos após o deploy
4. Limpe o cache do navegador
5. Teste em modo anônimo

### Problema: Dados não batem com expectativa

**Possíveis causas:**
- **Bot traffic:** GA4 filtra automaticamente
- **Usuários logados:** Pode bloquear alguns trackers
- **AdBlockers:** Usuários com bloqueadores não são contados

---

## 📚 Recursos Úteis

- **Google Analytics Academy:** https://analytics.google.com/analytics/academy/
- **Documentação oficial:** https://support.google.com/analytics/
- **GA4 vs Universal Analytics:** https://support.google.com/analytics/answer/11583528

---

## ✅ Checklist de Configuração

- [ ] Criar conta no Google Analytics 4
- [ ] Configurar propriedade e fluxo de dados
- [ ] Copiar Measurement ID (G-XXXXXXXXXX)
- [ ] Adicionar secret no GitHub Actions
- [ ] Fazer deploy (commit ou rebuild)
- [ ] Testar em Tempo Real
- [ ] Vincular ao Google Search Console
- [ ] Criar conversões personalizadas
- [ ] Configurar públicos-alvo

---

**Última atualização:** 04/10/2025
**Configurado por:** Sistema pronto, aguardando Measurement ID
