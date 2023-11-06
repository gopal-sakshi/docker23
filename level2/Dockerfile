FROM node:alpine
# FROM node:16
WORKDIR /app
COPY ./package.json .
RUN npm cache clean --force
RUN npm install
COPY . .

# stackoverflow.com/questions/22111060/what-is-the-difference-between-expose-and-publish-in-docker
    # see tgogos answer
    # EXPOSE    = simply documenting... not much use
    # PUBLISH   = actually opens ports on dockerContainer... so, that host can use
    # docker run -P         // publishes "all exposed ports" to random ports on host
# EXPOSE 42060

# CMD npm start
CMD [ "node", "index.js" ]


# docker build -t level2a . 
    # using FROM node:16 =========> docker image is around 916Mb size (image name = level2a)
    # using FROM node:alpine =========> docker image is around 195Mb size (image name = level2b)

# docker run -dp 18090:18090 level2a        // check that container is created & the app is running


# since the image is named, level2b ===> we cant push it
# so, thats why tag the image
    # docker image tag level2b gopal612/level2b:v1
    # docker login
    # docker image push gopal612/level2b            // FAILS; because there is no 'latest' tag image
    # docker image push gopal612/level2b:v1         // WORKS