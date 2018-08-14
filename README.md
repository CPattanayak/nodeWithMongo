Building docker image
docker build -t <your username>/node-web-app .
Running docker image
docker run -p 49160:8080 -d <your username>/node-web-app
command to go inside the image
docker exec -it <container id> /bin/bash
pushing image to docker hub
docker login --username=yourhubusername --email=youremail@company.com
tagging image
docker tag bb38976d03cf yourhubusername/verse_gapminder:firsttry
pushing image to docker hub
docker push yourhubusername/verse_gapminder

deploing node app to cloud foundary
cf push
