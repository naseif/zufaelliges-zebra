#!/bin/bash
rm -rf dist/
npx tsup source-backend/zufaelliges-zebra.bl.ts --dts-resolve
npx nyc npx ts-mocha -p ./tsconfig.json source-backend/**/*.spec.ts
