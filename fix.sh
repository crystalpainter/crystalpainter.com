#/bin/bash

for f in $(ls -1 images | grep -e show); do  
    mv "$f" "${f/[0-9][0-9][0-9].txt/.txt}"
done
  