#!/bin/bash

rsync -arve "ssh $SSH_OPTIONS" --no-perms --no-owner --no-group --delete --exclude='.git' --exclude='index.html' dist/ root@$DEPLOY_HOST:/var/www/html/spacex-monitor