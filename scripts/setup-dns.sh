#!/bin/bash
# Setup DNS para Cloudflare Pages
# Configura www, apex (@) e staging para apontar para Pages

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}🌐 Configurando DNS para Cloudflare Pages${NC}"
echo ""

# Verificar variáveis necessárias
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "❌ CLOUDFLARE_API_TOKEN não definido"
    echo "Configure: export CLOUDFLARE_API_TOKEN='seu_token'"
    exit 1
fi

# Domain e projeto Pages
DOMAIN="drapaulaped.com.br"
PAGES_PROJECT="drapaulaped"
PAGES_URL="${PAGES_PROJECT}.pages.dev"

echo "Domain: $DOMAIN"
echo "Cloudflare Pages: $PAGES_URL"
echo ""

# Carregar funções
source "$(dirname "$0")/cloudflare-functions.sh"

# Verificar token
if ! check_api_token; then
    print_error "API Token inválido"
    exit 1
fi

print_success "API Token válido"

# Obter Zone ID
echo "Obtendo Zone ID..."
ZONE_ID=$(get_zone_id "$DOMAIN")

if [ -z "$ZONE_ID" ]; then
    print_error "Zone não encontrada. DNS já está no Cloudflare?"
    print_warning "Acesse: https://dash.cloudflare.com/ e adicione o domínio primeiro"
    exit 1
fi

print_success "Zone ID: $ZONE_ID"
echo ""

# Configurar DNS Records

echo "📝 Configurando DNS Records..."
echo ""

# 1. Apex (@) - Production (principal)
echo "1️⃣  Configurando ${DOMAIN} (apex - production)..."

APEX_RECORD_ID=$(get_dns_record_id "$ZONE_ID" "${DOMAIN}")

if [ -z "$APEX_RECORD_ID" ]; then
    # Criar com CNAME (Cloudflare faz flattening automático)
    create_dns_record "$ZONE_ID" "CNAME" "@" "$PAGES_URL" "true"
    print_success "@ CNAME criado → ${PAGES_URL} (Proxied)"
else
    # Atualizar
    update_dns_record "$ZONE_ID" "$APEX_RECORD_ID" "CNAME" "@" "$PAGES_URL" "true"
    print_success "@ CNAME atualizado → ${PAGES_URL} (Proxied)"
fi

# 2. WWW (redirect para apex)
echo "2️⃣  Configurando www.${DOMAIN} (redirect)..."

WWW_RECORD_ID=$(get_dns_record_id "$ZONE_ID" "www.${DOMAIN}")

if [ -z "$WWW_RECORD_ID" ]; then
    # Criar novo record
    create_dns_record "$ZONE_ID" "CNAME" "www" "$PAGES_URL" "true"
    print_success "www CNAME criado → ${PAGES_URL} (Proxied)"
    print_warning "Criar Page Rule para redirect www → apex"
else
    # Atualizar existing
    update_dns_record "$ZONE_ID" "$WWW_RECORD_ID" "CNAME" "www" "$PAGES_URL" "true"
    print_success "www CNAME atualizado → ${PAGES_URL} (Proxied)"
    print_warning "Criar Page Rule para redirect www → apex"
fi

# 3. Staging
echo "3️⃣  Configurando staging.${DOMAIN}..."

STAGING_RECORD_ID=$(get_dns_record_id "$ZONE_ID" "staging.${DOMAIN}")

if [ -z "$STAGING_RECORD_ID" ]; then
    create_dns_record "$ZONE_ID" "CNAME" "staging" "$PAGES_URL" "true"
    print_success "staging CNAME criado → ${PAGES_URL} (Proxied)"
else
    update_dns_record "$ZONE_ID" "$STAGING_RECORD_ID" "CNAME" "staging" "$PAGES_URL" "true"
    print_success "staging CNAME atualizado → ${PAGES_URL} (Proxied)"
fi

echo ""
print_success "DNS configurado com sucesso!"
echo ""

# Próximos passos
echo "📋 Próximos passos:"
echo ""
echo "1. No Cloudflare Pages projeto '${PAGES_PROJECT}':"
echo "   Settings → Custom domains"
echo "   Add custom domain: ${DOMAIN} (production - branch main)"
echo "   Add custom domain: staging.${DOMAIN} (staging)"
echo ""
echo "2. Criar Page Rule para redirect www → apex:"
echo "   URL: www.${DOMAIN}/*"
echo "   Setting: Forwarding URL (301 Permanent Redirect)"
echo "   Destination: https://${DOMAIN}/\$1"
echo ""
echo "3. Aguardar propagação DNS (5min - 24h, geralmente < 1h)"
echo ""
echo "4. Aguardar provisionamento SSL (automático, ~15-30min)"
echo ""
echo "5. Testar:"
echo "   https://${DOMAIN} (principal)"
echo "   https://www.${DOMAIN} (deve redirecionar para apex)"
echo "   https://staging.${DOMAIN}"
echo ""
echo "6. Verificar SSL:"
echo "   https://www.ssllabs.com/ssltest/analyze.html?d=${DOMAIN}"
echo ""

print_success "Setup DNS completo! 🎉"
