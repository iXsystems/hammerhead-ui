#!/bin/sh

if [ "$1" == "" ]; then
    echo "You forgot to include a component name!"
    exit 1
fi

# Create the component module
yarn ng g module components/"$1" --project hammerhead-ui

# Create the component and register with the component module
yarn ng g c components/"$1" --project hammerhead-ui --export true --style scss --module components/"$1"

# Automatically expose the new component in the library's public API
echo "export * from './lib/components/$1/$1.module';" >> ./projects/hammerhead-ui/src/public-api.ts

exit
