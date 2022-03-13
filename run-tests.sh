#!/bin/bash
rm -rf dist/
npx webpack
npx nyc npx ts-mocha -p ./tsconfig.json source-backend/**/*.spec.ts
