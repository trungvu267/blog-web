FROM node:alpine

WORKDIR /app

# Setup a path for using local npm packages

COPY ./package.json /app
COPY ./package-lock.json /app

RUN npm install --force

COPY . .

# RUN npm run client:build
# server build needs to run after client build because the client build using Vite
# removes the dist/ folder before compiling its code
# RUN npm run server:build

EXPOSE 8000

CMD ["npm", "run","dev"]