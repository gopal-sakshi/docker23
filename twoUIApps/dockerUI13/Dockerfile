#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run start
EXPOSE 4200

ENTRYPOINT ["npm", "run", "start"]
# #stage 2
# FROM nginx:alpine
# COPY --from=node /app/dist/demo-app /usr/share/nginx/html