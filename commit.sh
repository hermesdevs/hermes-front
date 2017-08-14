#!/bin/sh
# git init
# git config user.name "Alexander"
# git config user.email "alexandersf94@gmail.com"
# git config github.user mephistovzla
# git remote add origin git@alex-github:hermesdevs/hermes-front.git
git add .
echo '¿Como se llamara esta actualización?'
read var1
git commit -m "$var1"
