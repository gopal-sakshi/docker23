FROM node

ADD package.json /tmp/package.json
RUN cd /tmp && npm install

WORKDIR /app
RUN cp -a /tmp/node_modules /app/

ADD . /app

# EXPOSE 54321
# ENTRYPOINT ["npm", "start"]

EXPOSE 54355
ENTRYPOINT ["npm", "run", "start_docker_build2"]


################ STEPS to run dockerUI12 Angular REPO ###############################
######### PORTS = 54355 on docker Container; 4333 on host machine ###################
######### access ===> localhost:4333 (or) 127.0.0.1:4333 (or) 10.0.54.240:4333 ######

# docker build -t ui12a .
# docker run -dp 4333:4200 ui12a                            # DOESNT WORK
                                                                # coz dockerUI12 angularRepo listening on port 54355
                                                                # it has nothing on port 4200
# docker run --name dockerUI12 -dp 4333:54355 ui12a         # WORKED
# docker run -dp 4333:54355 ui12a --name dockerUI12         # DOESNT WORK; why order of "--name" matters ?????????

# .dockerignore
    # 


#### FINALLLLLLLLLLLLLLLLLll
    # docker build -t docker_ui12_image .
    # docker run -dp 4333:54355 docker_ui12_image --name dockerUI12
######################################################################################