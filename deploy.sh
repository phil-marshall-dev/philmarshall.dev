#!/bin/sh

npm install

npm run build

gcloud app deploy `
    --version=123 `
    --project 'philmarshalldevcom' 
#     --quiet
