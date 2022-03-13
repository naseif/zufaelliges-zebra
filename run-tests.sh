#!/bin/bash
npx tsup source-backend/main.ts --dts-resolve
npx nyc npx ts-mocha -p ./tsconfig.json source-backend/**/*.spec.ts
