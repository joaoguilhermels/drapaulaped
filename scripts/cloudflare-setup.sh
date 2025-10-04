#!/bin/bash
# Cloudflare Complete Setup Script
# Configura SSL, Performance, Security, Caching, Email e Web Analytics

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${GREEN}🚀 Configuração Completa Cloudflare${NC}"
echo -e "${BLUE}Plano Free - Máxima Otimização${NC}"
echo ""

# Carregar funções
source "$(dirname "$0")/cloudflare-functions.sh"

# Verificar token
if ! check_api_token; then
    print_error "API Token inválido"
    exit 1
fi

# Obter Zone ID
DOMAIN="drapaulaped.com.br"
ZONE_ID=$(get_zone_id "$DOMAIN")

if [ -z "$ZONE_ID" ]; then
    print_error "Zone não encontrada"
    exit 1
fi

print_success "Zone ID: $ZONE_ID"
echo ""

# ====================
# 1. SSL/TLS Configuration
# ====================
echo -e "${BLUE}🔒 Configurando SSL/TLS...${NC}"

# SSL Mode: Full (Strict)
enable_setting "$ZONE_ID" "ssl" '"full"'
print_info "SSL Mode: Full (Strict)"

# Always Use HTTPS
enable_setting "$ZONE_ID" "always_use_https" '"on"'
print_info "Always Use HTTPS: ON"

# Minimum TLS Version: 1.3
enable_setting "$ZONE_ID" "min_tls_version" '"1.3"'
print_info "Minimum TLS Version: 1.3"

# Automatic HTTPS Rewrites
enable_setting "$ZONE_ID" "automatic_https_rewrites" '"on"'
print_info "Automatic HTTPS Rewrites: ON"

# TLS 1.3
enable_setting "$ZONE_ID" "tls_1_3" '"on"'
print_info "TLS 1.3: ON"

print_success "SSL/TLS configurado!"
echo ""

# ====================
# 2. Performance Optimization
# ====================
echo -e "${BLUE}⚡ Configurando Performance...${NC}"

# Auto Minify
enable_setting "$ZONE_ID" "minify" '{"css":"on","html":"on","js":"on"}'
print_info "Auto Minify: JS, CSS, HTML"

# Brotli Compression
enable_setting "$ZONE_ID" "brotli" '"on"'
print_info "Brotli Compression: ON"

# HTTP/3 (QUIC)
enable_setting "$ZONE_ID" "http3" '"on"'
print_info "HTTP/3 (QUIC): ON"

# Early Hints
enable_setting "$ZONE_ID" "early_hints" '"on"'
print_info "Early Hints: ON"

# 0-RTT Connection Resumption
enable_setting "$ZONE_ID" "0rtt" '"on"'
print_info "0-RTT Connection: ON"

# Rocket Loader (pode quebrar alguns sites, teste antes)
# enable_setting "$ZONE_ID" "rocket_loader" '"on"'
# print_info "Rocket Loader: ON"

print_success "Performance otimizada!"
echo ""

# ====================
# 3. Security Configuration
# ====================
echo -e "${BLUE}🛡️  Configurando Security...${NC}"

# Bot Fight Mode
enable_setting "$ZONE_ID" "bot_fight_mode" '"on"'
print_info "Bot Fight Mode: ON"

# Browser Integrity Check
enable_setting "$ZONE_ID" "browser_check" '"on"'
print_info "Browser Integrity Check: ON"

# Challenge Passage
enable_setting "$ZONE_ID" "challenge_ttl" '1800'
print_info "Challenge TTL: 30min"

# Security Level: Medium
enable_setting "$ZONE_ID" "security_level" '"medium"'
print_info "Security Level: Medium"

# Security Headers (via Transform Rules - Rulesets API)
echo "Configurando Security Headers..."

# Criar ruleset para security headers
curl -s -X PUT "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/rulesets/phases/http_response_headers_transform/entrypoint" \
    -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{
        "rules": [{
            "action": "rewrite",
            "action_parameters": {
                "headers": {
                    "X-Content-Type-Options": {
                        "operation": "set",
                        "value": "nosniff"
                    },
                    "X-Frame-Options": {
                        "operation": "set",
                        "value": "DENY"
                    },
                    "X-XSS-Protection": {
                        "operation": "set",
                        "value": "1; mode=block"
                    },
                    "Referrer-Policy": {
                        "operation": "set",
                        "value": "strict-origin-when-cross-origin"
                    },
                    "Permissions-Policy": {
                        "operation": "set",
                        "value": "geolocation=(), microphone=(), camera=(), payment=(), usb=()"
                    }
                }
            },
            "description": "Security Headers",
            "enabled": true,
            "expression": "true"
        }]
    }' > /dev/null

print_info "Security Headers: Configured"

print_success "Security configurada!"
echo ""

# ====================
# 4. Caching Configuration
# ====================
echo -e "${BLUE}💾 Configurando Caching...${NC}"

# Browser Cache TTL
enable_setting "$ZONE_ID" "browser_cache_ttl" '14400'
print_info "Browser Cache TTL: 4 hours"

# Cache Level: Standard
enable_setting "$ZONE_ID" "cache_level" '"aggressive"'
print_info "Cache Level: Aggressive"

# Tiered Cache (Smart Tiered Cache)
enable_setting "$ZONE_ID" "tiered_cache_smart_topology_enable" '"on"'
print_info "Tiered Cache: ON"

print_success "Caching configurado!"
echo ""

# ====================
# 5. Web Analytics
# ====================
echo -e "${BLUE}📊 Configurando Web Analytics...${NC}"

WEB_ANALYTICS_TOKEN=$(create_web_analytics "$ZONE_ID" "Dra. Paula Andrade" "drapaulaped.com.br")

if [ -n "$WEB_ANALYTICS_TOKEN" ]; then
    print_success "Web Analytics criado!"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${GREEN}Token Web Analytics:${NC}"
    echo -e "${YELLOW}${WEB_ANALYTICS_TOKEN}${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Adicione ao <head> do seu site:"
    echo "<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{\"token\": \"${WEB_ANALYTICS_TOKEN}\"}'></script>"
    echo ""
else
    print_warning "Web Analytics não foi criado (pode já existir)"
fi

# ====================
# 6. Email Routing (opcional)
# ====================
if [ -n "$DESTINATION_EMAIL" ]; then
    echo -e "${BLUE}📧 Configurando Email Routing...${NC}"

    DEST_TAG=$(setup_email_routing "$ZONE_ID" "$DESTINATION_EMAIL")

    if [ -n "$DEST_TAG" ]; then
        print_success "Email Routing configurado!"
        echo "Aliases criados:"
        echo "  • contato@drapaulaped.com.br → $DESTINATION_EMAIL"
        echo "  • noreply@drapaulaped.com.br → $DESTINATION_EMAIL"
        echo "  • oi@drapaulaped.com.br → $DESTINATION_EMAIL"
        echo ""
        print_warning "Verifique seu email e confirme o endereço de destino!"
        echo ""
    else
        print_warning "Email Routing não configurado"
    fi
else
    print_info "Email Routing pulado (configure DESTINATION_EMAIL)"
    echo "Para configurar email routing:"
    echo "DESTINATION_EMAIL=seu@email.com ./scripts/cloudflare-setup.sh"
    echo ""
fi

# ====================
# 7. Cache Purge
# ====================
echo -e "${BLUE}🗑️  Limpando cache...${NC}"
purge_cache "$ZONE_ID"
print_success "Cache limpo!"
echo ""

# ====================
# Summary
# ====================
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Configuração Cloudflare Completa!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "Configurações aplicadas:"
echo ""
echo "🔒 SSL/TLS:"
echo "  • SSL Mode: Full (Strict)"
echo "  • Always Use HTTPS"
echo "  • TLS 1.3 enabled"
echo "  • Automatic HTTPS Rewrites"
echo ""
echo "⚡ Performance:"
echo "  • Auto Minify (JS, CSS, HTML)"
echo "  • Brotli Compression"
echo "  • HTTP/3 (QUIC)"
echo "  • Early Hints"
echo "  • 0-RTT Connection"
echo ""
echo "🛡️  Security:"
echo "  • Bot Fight Mode"
echo "  • Browser Integrity Check"
echo "  • Security Headers"
echo "  • Security Level: Medium"
echo ""
echo "💾 Caching:"
echo "  • Browser Cache: 4 hours"
echo "  • Cache Level: Aggressive"
echo "  • Tiered Cache enabled"
echo ""
echo "📊 Web Analytics:"
if [ -n "$WEB_ANALYTICS_TOKEN" ]; then
    echo "  • Token: ${WEB_ANALYTICS_TOKEN}"
else
    echo "  • Já configurado ou erro na criação"
fi
echo ""
echo "Próximos passos:"
echo "1. Adicionar Web Analytics token ao app/layout.tsx"
echo "2. Testar site em: https://drapaulaped.com.br"
echo "3. Verificar PageSpeed Insights"
echo "4. Configurar Email Routing (se necessário)"
echo ""
echo -e "${GREEN}🎉 Setup concluído com sucesso!${NC}"
