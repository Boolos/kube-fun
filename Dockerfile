FROM node:8.4.0-alpine
EXPOSE 8080
ADD server.js .
CMD node server.js