LOGIN details
- gopal; 12xxxxx8
- gopalDev1 12xxxxxxxx8
=================================================

folder23, folder22
two folders

print_node_version
- build job
- node --version                // failed, coz node not found
- apt install nodejs            // failed, coz 107Mb additional space Y/N


Manage Jenkins" -> "Global Tool Configuration" -> "Add NodeJS".
Build Environment -> Provide Node & npm to PATH
=================================================

running jenkins in docker container
with persistent volume
not using docker compose for now

docker container run -d \
    -p 18080:8080 \
    -v ./jenkinsData23:/var/jenkins_home \
    --name jenkins23 \
    jenkins/jenkins:lts

running into some problems
wrong volume permissions

using docker-compose instead
=================================================