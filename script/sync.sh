#!/bin/sh

# Synchronize with remote master

git fetch
git checkout main
git pull
# rm -rf node_modules
# yarn install