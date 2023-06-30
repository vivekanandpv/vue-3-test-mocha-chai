FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY dist /usr/share/nginx/html

#   commands
#   npm run build
#   docker image build --tag vue-app .
#   docker container run --detach --name vue-container --publish 8080:80 vue-app

#   Open localhost:8080 in the browser