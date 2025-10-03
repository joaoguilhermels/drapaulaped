# Instruções de Deploy para GitHub Pages

Este guia mostra como configurar o deploy automático do site no GitHub Pages.

## Pré-requisitos

- Repositório Git criado no GitHub
- Código commitado e enviado para o GitHub

## Passo 1: Push do código para o GitHub

```bash
# Se ainda não criou o repositório remoto, crie no GitHub primeiro
# Depois adicione o remote e faça push:

git remote add origin https://github.com/SEU-USUARIO/drapaulaped.git
git branch -M main
git push -u origin main
```

## Passo 2: Configurar GitHub Pages

1. Acesse o repositório no GitHub
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source** (Origem):
   - Selecione **GitHub Actions**
   - (NÃO use "Deploy from a branch")

## Passo 3: Aguardar o Deploy

1. O GitHub Actions vai detectar automaticamente o push
2. Acesse a aba **Actions** do repositório para ver o progresso
3. O deploy leva cerca de 2-5 minutos
4. Quando concluído, o site estará disponível em:
   - `https://SEU-USUARIO.github.io/drapaulaped/`

## Passo 4: Configurar Domínio Customizado (Opcional)

### Opção 1: Domínio Raiz (drapaulaandrade.com.br)

1. No seu provedor de domínio (Registro.br, GoDaddy, etc):
   - Adicione 4 registros **A** apontando para:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Adicione um registro **AAAA** (opcional, para IPv6):
     ```
     2606:50c0:8000::153
     2606:50c0:8001::153
     2606:50c0:8002::153
     2606:50c0:8003::153
     ```

2. No GitHub Pages (Settings > Pages):
   - Em **Custom domain**, adicione: `drapaulaandrade.com.br`
   - Aguarde a verificação DNS (pode levar até 24h)
   - Marque **Enforce HTTPS** após a verificação

### Opção 2: Subdomínio (www.drapaulaandrade.com.br)

1. No seu provedor de domínio:
   - Adicione um registro **CNAME**:
     ```
     www CNAME SEU-USUARIO.github.io.
     ```

2. No GitHub Pages (Settings > Pages):
   - Em **Custom domain**, adicione: `www.drapaulaandrade.com.br`
   - Marque **Enforce HTTPS**

## Passo 5: Atualizar next.config.js (se usar subpath)

Se o site for acessado em `github.io/drapaulaped` (não em domínio customizado):

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  basePath: '/drapaulaped',  // Nome do repositório
  assetPrefix: '/drapaulaped/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}
```

**Importante:** Se usar domínio customizado, NÃO adicione basePath!

## Verificação

### Testar Localmente

```bash
# Build de produção local
npm run build

# Servir o build estático localmente
npx serve out
```

### Verificar Deploy no GitHub

1. Acesse a aba **Actions**
2. Veja o status do workflow "Deploy to GitHub Pages"
3. Se houver erros, clique no workflow para ver os logs

## Troubleshooting

### Erro: "Page build failed"
- Verifique se `npm run build` funciona localmente
- Confira os logs na aba Actions
- Certifique-se de que `output: 'export'` está em `next.config.js`

### Site não carrega CSS/imagens
- Se usar subpath (github.io/repo), adicione basePath no next.config.js
- Se usar domínio customizado, REMOVA basePath

### DNS não propaga
- Aguarde até 24-48h para propagação DNS completa
- Use https://dnschecker.org para verificar propagação
- Verifique se os registros estão corretos no provedor

## Deploy Automático

Depois da configuração inicial, qualquer push para a branch `main` vai:
1. Triggerar o GitHub Actions automaticamente
2. Build do projeto Next.js
3. Deploy para GitHub Pages
4. Site atualizado em ~2-5 minutos

## URLs Importantes

- **Site (GitHub)**: https://SEU-USUARIO.github.io/drapaulaped/
- **Actions**: https://github.com/SEU-USUARIO/drapaulaped/actions
- **Settings**: https://github.com/SEU-USUARIO/drapaulaped/settings/pages

## Next Steps

1. ✅ Push do código para GitHub
2. ✅ Ativar GitHub Pages (Source: GitHub Actions)
3. ⏳ Aguardar primeiro deploy (~2-5 min)
4. 🌐 Configurar domínio customizado (opcional)
5. 🔒 Ativar HTTPS (automático após domínio configurado)
6. 📊 Configurar Google Analytics (próximo passo)

---

**Criado em:** Outubro 2025
**Última atualização:** Outubro 2025
