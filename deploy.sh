#!/bin/bash

DIRECTORY="public"
USER="banners"
DOMAIN="banners.jellyfishhosting.net"
ROOT_FOLDER="cdp"
PROJECT="global-gallery"

if [[ -z "$ROOT_FOLDER" ]]
then
  echo "No root folder set"
  exit 1
fi

if [ -d "$DIRECTORY" ];
then
  echo "Uploading to server"
  cd $DIRECTORY
  ssh $USER@$DOMAIN "mkdir -p public_html/$ROOT_FOLDER/$PROJECT" && rsync --stats -azhe ssh . $USER@$DOMAIN:public_html/$ROOT_FOLDER/$PROJECT/
  # open http://$DOMAIN/$ROOT_FOLDER/$PROJECT/
else
  echo -e "\033[0;31merror: \033[0m$DIRECTORY directory does not exist!"
fi
