#!/bin/bash

# Helper script to run npm commands via Docker
# Usage: ./docker-run.sh <command>
# Example: ./docker-run.sh dev
#          ./docker-run.sh "npm install package-name"

set -e

COMMAND=${1:-dev}

if [[ $COMMAND == "dev" ]] || [[ $COMMAND == "build" ]] || [[ $COMMAND == "lint" ]]; then
    docker-compose run --rm nextjs npm run $COMMAND
else
    docker-compose run --rm nextjs $COMMAND
fi
