FROM node:20
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY src/package.json src/package-lock.json /opt/app/
RUN npm ci
COPY src/ .
CMD [ "npm", "start"]