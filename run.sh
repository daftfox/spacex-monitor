#!/bin/bash
PATH=$PATH:$(npm bin)
set -x
# Production build
npm run build
# Serve
cd dist
http-server