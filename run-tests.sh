#!/bin/bash
npx nyc npx ts-mocha -p ./tsconfig.json source/**/*.spec.ts
