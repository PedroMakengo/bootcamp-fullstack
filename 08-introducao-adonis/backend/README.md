# backend

## Build Setup

Install [Docker Compose](https://docs.docker.com/compose/install).

```bash

# Create container with MySQL
$ docker-compose up -d

# Create database structure
$ node ace migration:run

# install dependencies
$ npm install
$ yarn

#server with changes watcher
$ npm run dev
$ yarn dev

# build for production and launch server
$ npm run build
$ yarn build

$ npm run start
```
