#!/bin/bash
set -e

for path in $(ls services); do
    if [[ -d "services/$path" ]]
    then
        echo "deploying $path"

        cd "services/$path"

        # npm ci
        npm run deploy:uat

        cd $OLDPWD
    else 
        continue
    fi
done