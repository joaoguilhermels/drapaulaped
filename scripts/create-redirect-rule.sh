#!/bin/bash
# Create Page Rule para redirect www → apex

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}🔄 Criando Page Rule: www → apex redirect${NC}"
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

# Criar Page Rule para redirect www → apex
echo "Criando Page Rule..."

URL_PATTERN="www.${DOMAIN}/*"
DESTINATION="https://${DOMAIN}/\$1"

curl -s -X POST "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/pagerules" \
    -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{
        "targets": [{
            "target": "url",
            "constraint": {
                "operator": "matches",
                "value": "'"${URL_PATTERN}"'"
            }
        }],
        "actions": [{
            "id": "forwarding_url",
            "value": {
                "url": "'"${DESTINATION}"'",
                "status_code": 301
            }
        }],
        "priority": 1,
        "status": "active"
    }' > /dev/null

print_success "Page Rule criada!"
echo ""
echo "URL Pattern: ${URL_PATTERN}"
echo "Redirect para: ${DESTINATION}"
echo "Status Code: 301 (Permanent)"
echo ""

# Testar redirect
echo "Aguardando 5 segundos para aplicar..."
sleep 5

echo "Testando redirect..."
REDIRECT_TEST=$(curl -sI https://www.${DOMAIN} | grep -i "location:")

if [ -z "$REDIRECT_TEST" ]; then
    print_warning "Redirect ainda não ativo. Aguarde mais alguns segundos e teste:"
    echo "curl -I https://www.${DOMAIN}"
else
    print_success "Redirect ativo!"
    echo "$REDIRECT_TEST"
fi

echo ""
print_success "Page Rule configurada! 🎉"
