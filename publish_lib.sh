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

### Build/publish library routine ###

# Build the library
sudo yarn build --project=$LIBRARY_PROJECT_NAME

# Copy root README to root of library package directory
sudo cp $ROOT_README $DIST_LIB_ROOT

# Generate tarball of library package directory
sudo npm pack $DIST_LIB_ROOT

# Move the library tarball to root of the library package directory
sudo mv ./hammerhead-ui-*.tgz $DIST_LIB_ROOT

# Publish the library to npm
sudo npm publish $DIST_LIB_TARBALL

#####################################

### Build demo app routine ###

# Copy root README to demo app assets
sudo cp $ROOT_README $DEMO_APP_ASSETS_DIR

# Build the demo app
sudo yarn build --project=$DEMO_APP_PROJECT_NAME --base-href .

##############################

### Github pages stuff ###

# Nuke the docs directory
sudo rimraf $DOCS_ROOT_DIR

# Copy contents of dist/hammerhead-ui-app to docs directory
sudo cp -a $DEMO_APP_DIST_DIR $DOCS_ROOT_DIR

##########################
