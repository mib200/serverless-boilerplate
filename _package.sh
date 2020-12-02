
#!/bin/bash
set -e

for path in $(ls services); do
    if [[ -d "services/$path" ]]
    then
        echo "packaging $path..."

        cd "services/$path"

        # npm ci
        # ensure symlink to libraries were not pruned by npm
				ls -la
        # rm -f node_modules/libraries
				# mkdir node_modules
        # ln -s ../../../libraries node_modules/
        # ./node_modules/.bin/sls package
				sls package

        cd $OLDPWD
    else
        continue
    fi
done