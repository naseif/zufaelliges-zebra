#!/bin/bash

## we want to start clean
rm -rf dist/
## create the backend library for usage in the browser
npx webpack
## run all unit-tests to ensure full coverage of the backend library
npx nyc npx ts-mocha -p ./tsconfig.json source-backend/**/*.spec.ts
