#!/bin/sh

LIBRARY_PROJECT_NAME="hammerhead-ui"
DEMO_APP_PROJECT_NAME="hammerhead-ui-app"

### File/directory relative paths ###

ROOT_README="./README.md"
DEMO_APP_DIST_DIR="./dist/hammerhead-ui-app"
DEMO_APP_ASSETS_DIR="./projects/hammerhead-ui-app/src/assets"
DIST_LIB_ROOT="./dist/hammerhead-ui"
DIST_LIB_TARBALL=$DIST_LIB_ROOT"/"$LIBRARY_PROJECT_NAME"-*.tgz"
DOCS_ROOT_DIR="./docs"

#####################################

### Build library routine ###

# Build the library
npm run build --project=$LIBRARY_PROJECT_NAME

# Copy root README to root of library package directory
cp $ROOT_README $DIST_LIB_ROOT

#############################

### Build demo app routine ###

# Copy root README to demo app assets
cp $ROOT_README $DEMO_APP_ASSETS_DIR

# Build the demo app
npm run build --project=$DEMO_APP_PROJECT_NAME --base-href '.' --configuration production --aot

##############################

### Github pages stuff ###

# Nuke the docs directory
rm -rf $DOCS_ROOT_DIR

# Copy contents of dist/hammerhead-ui-app to docs directory
cp -a $DEMO_APP_DIST_DIR $DOCS_ROOT_DIR

##########################
