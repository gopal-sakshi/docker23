FROM node:16
WORKDIR /app
COPY ./node12/package.json .
RUN npm cache clean --force
RUN npm install
COPY ./node12 .

# stackoverflow.com/questions/22111060/what-is-the-difference-between-expose-and-publish-in-docker
    # see tgogos answer
    # EXPOSE    = simply documenting... not much use
    # PUBLISH   = actually opens ports on dockerContainer... so, that host can use
    # docker run -P         // publishes "all exposed ports" to random ports on host
# EXPOSE 42060

# CMD npm start
CMD [ "node", "index.js" ]