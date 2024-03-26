FROM nginx:stable-alpine3.17-slim

# Copy the static website files to the nginx html directory
COPY ./index.html /usr/share/nginx/html
COPY ./dist /usr/share/nginx/html/dist
COPY ./images /usr/share/nginx/html/images
