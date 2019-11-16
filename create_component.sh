#!/bin/sh

if [ "$1" == "" ]; then
    echo "You forgot to include a component name!"
    exit 1
fi

# Create the component module
yarn ng g module components/"$1" --project hammerhead-ui

# Create the component and register with the component module
yarn ng g c components/"$1" --project hammerhead-ui --export true --style scss --module components/"$1"

exit
