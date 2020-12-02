#!/bin/bash
set -e

for path in $(ls services); do
    if [[ -d "services/$path" ]]
    then
        echo "removing $path"

        cd "services/$path"

        # npm ci
        sls remove --stage uat

        cd $OLDPWD
    else 
        continue
    fi
done