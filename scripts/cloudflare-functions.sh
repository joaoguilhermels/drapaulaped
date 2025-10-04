#!/bin/bash
# Cloudflare Helper Functions
# Funções reutilizáveis para configuração via API

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# API Base
CF_API="https://api.cloudflare.com/client/v4"

# Print functions
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Get Zone ID from domain
get_zone_id() {
    local domain=$1
    local response=$(curl -s -X GET "${CF_API}/zones?name=${domain}" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json")

    local zone_id=$(echo $response | grep -o '"id":"[^"]*' | head -1 | cut -d'"' -f4)
    echo $zone_id
}

# Enable/Update zone setting
enable_setting() {
    local zone_id=$1
    local setting=$2
    local value=$3

    curl -s -X PATCH "${CF_API}/zones/${zone_id}/settings/${setting}" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        -d "{\"value\":${value}}" > /dev/null
}

# Create Page Rule
create_page_rule() {
    local zone_id=$1
    local url_pattern=$2
    local actions=$3
    local priority=$4

    curl -s -X POST "${CF_API}/zones/${zone_id}/pagerules" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        -d "{
            \"targets\": [{
                \"target\": \"url\",
                \"constraint\": {
                    \"operator\": \"matches\",
                    \"value\": \"${url_pattern}\"
                }
            }],
            \"actions\": ${actions},
            \"priority\": ${priority},
            \"status\": \"active\"
        }" > /dev/null
}

# Delete all existing page rules
delete_all_page_rules() {
    local zone_id=$1

    local rules=$(curl -s -X GET "${CF_API}/zones/${zone_id}/pagerules" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json")

    local rule_ids=$(echo $rules | grep -o '"id":"[^"]*' | cut -d'"' -f4)

    for rule_id in $rule_ids; do
        curl -s -X DELETE "${CF_API}/zones/${zone_id}/pagerules/${rule_id}" \
            -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" > /dev/null
    done
}

# Create Firewall Rule
create_firewall_rule() {
    local zone_id=$1
    local description=$2
    local expression=$3
    local action=$4

    curl -s -X POST "${CF_API}/zones/${zone_id}/firewall/rules" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        -d "[{
            \"description\": \"${description}\",
            \"expression\": \"${expression}\",
            \"action\": \"${action}\"
        }]" > /dev/null
}

# Create Transform Rule (Modify Response Header)
create_transform_rule() {
    local zone_id=$1
    local description=$2
    local expression=$3
    local headers=$4

    curl -s -X POST "${CF_API}/zones/${zone_id}/rulesets" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        -d "{
            \"description\": \"${description}\",
            \"kind\": \"zone\",
            \"name\": \"${description}\",
            \"phase\": \"http_response_headers_transform\",
            \"rules\": [{
                \"action\": \"rewrite\",
                \"action_parameters\": {
                    \"headers\": ${headers}
                },
                \"description\": \"${description}\",
                \"enabled\": true,
                \"expression\": \"${expression}\"
            }]
        }" > /dev/null
}

# Setup Email Routing
setup_email_routing() {
    local zone_id=$1
    local destination_email=$2

    # Enable email routing
    curl -s -X POST "${CF_API}/zones/${zone_id}/email/routing/enable" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" > /dev/null

    # Create destination address
    local dest_response=$(curl -s -X POST "${CF_API}/accounts/${CLOUDFLARE_ACCOUNT_ID}/email/routing/addresses" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        -d "{\"email\":\"${destination_email}\"}")

    local dest_tag=$(echo $dest_response | grep -o '"tag":"[^"]*' | cut -d'"' -f4)

    # Create routing rules
    local aliases=("contato" "noreply" "oi")

    for alias in "${aliases[@]}"; do
        curl -s -X POST "${CF_API}/zones/${zone_id}/email/routing/rules" \
            -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
            -H "Content-Type: application/json" \
            -d "{
                \"actions\": [{
                    \"type\": \"forward\",
                    \"value\": [\"${dest_tag}\"]
                }],
                \"matchers\": [{
                    \"field\": \"to\",
                    \"type\": \"literal\",
                    \"value\": \"${alias}@drapaulaped.com.br\"
                }],
                \"enabled\": true,
                \"name\": \"Forward ${alias}@\"
            }" > /dev/null
    done

    echo $dest_tag
}

# Create Web Analytics Site
create_web_analytics() {
    local zone_id=$1
    local site_name=$2
    local site_url=$3

    local response=$(curl -s -X POST "${CF_API}/zones/${zone_id}/rum/site_info" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        -d "{
            \"host\": \"${site_url}\",
            \"zone_tag\": \"${zone_id}\",
            \"auto_install\": false
        }")

    local site_token=$(echo $response | grep -o '"site_token":"[^"]*' | cut -d'"' -f4)
    echo $site_token
}

# Create DNS Record
create_dns_record() {
    local zone_id=$1
    local type=$2
    local name=$3
    local content=$4
    local proxied=$5

    curl -s -X POST "${CF_API}/zones/${zone_id}/dns_records" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        -d "{
            \"type\": \"${type}\",
            \"name\": \"${name}\",
            \"content\": \"${content}\",
            \"proxied\": ${proxied},
            \"ttl\": 1
        }" > /dev/null
}

# Update DNS Record
update_dns_record() {
    local zone_id=$1
    local record_id=$2
    local type=$3
    local name=$4
    local content=$5
    local proxied=$6

    curl -s -X PUT "${CF_API}/zones/${zone_id}/dns_records/${record_id}" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        -d "{
            \"type\": \"${type}\",
            \"name\": \"${name}\",
            \"content\": \"${content}\",
            \"proxied\": ${proxied},
            \"ttl\": 1
        }" > /dev/null
}

# Get DNS Record ID
get_dns_record_id() {
    local zone_id=$1
    local name=$2

    local response=$(curl -s -X GET "${CF_API}/zones/${zone_id}/dns_records?name=${name}" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json")

    local record_id=$(echo $response | grep -o '"id":"[^"]*' | head -1 | cut -d'"' -f4)
    echo $record_id
}

# Check if API token is valid
check_api_token() {
    local response=$(curl -s -X GET "${CF_API}/user/tokens/verify" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}")

    local status=$(echo $response | grep -o '"status":"[^"]*' | cut -d'"' -f4)

    if [ "$status" = "active" ]; then
        return 0
    else
        return 1
    fi
}

# Purge cache
purge_cache() {
    local zone_id=$1

    curl -s -X POST "${CF_API}/zones/${zone_id}/purge_cache" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"purge_everything":true}' > /dev/null
}

# Export functions
export -f get_zone_id
export -f enable_setting
export -f create_page_rule
export -f delete_all_page_rules
export -f create_firewall_rule
export -f create_transform_rule
export -f setup_email_routing
export -f create_web_analytics
export -f create_dns_record
export -f update_dns_record
export -f get_dns_record_id
export -f check_api_token
export -f purge_cache
export -f print_success
export -f print_error
export -f print_warning
export -f print_info
