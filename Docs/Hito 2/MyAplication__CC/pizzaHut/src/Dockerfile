### stage 1 : build ###

FROM node.12.7-alpine As Build 
WORKDIR  /app
COPY package.json ./
RUN npm install 
COPY . .
RUN npm run build --prod 

### stage 2 : run  ###

FROM nginx:1.17.1-alpine As prod-stage
COPY --from=build /app/dist/angular-docker  /usr/share/nginx/html
EXPOSE 80
CMD ['nginx',"-g", "daemon off;"]