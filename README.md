# KNEX 


> Credits to https://gist.github.com/NigelEarle/80150ff1c50031e59b872baf0e474977 (Nigel Earle's Gist on Github) for the guide on how to install `knex` and create a basic express application. <br> The gist uses PostgreSQL as the database, but i have modified it to use MySQL instead and to be my own personal guide for future reference. <br>
I high advise you to check it out first, if it's your first time using `knex`, it also talks about Migrations and Seeds.

> A node.js SQL query builder for MySQL, Postgres, SQLite and MSSQL, (and many more that i haven't listed here) designed to be flexible, portable, and more **sophisticated** than the raw method (raw-sql).

## Installation

The Installation process is kinda annoying, at least for me, but i will try to provide a simple guide to install it.

1. Create a new directory for your project, for example `knex-demo`.

```bash
$ mkdir knex-demo
$ cd knex-demo
```

2. Run `npm init` to create a new `package.json` file.

```bash
$ npm init
```

3. Install `knex` __globally__ on your local computer.

```bash
$ npm install knex -g
```

This will allow us to use `knex` as a command line tool that helps you create and manage your knex files.

In addition, you will need to also install the `knex` module __locally__ to use in your project.

```bash
$ npm install knex --save
```

For the sake of our demo, we will be using MySQL as our database, so you will need to install the `mysql` module as well.

```bash
$ npm install mysql --save
```

4. We can start by creating a `knexfile.js` in the root of your project which will act as our configuration for different environments, (e.g. – local development vs production).

```
$ knex init
```

This will create a `knexfile.js` with the different configurations for the different environments.

**Generated output `knexfile.js`**.

```javascript
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

```

5. Edit your `development` settings in `knexfile.js` to point to your MySQL database, using your db username and password. DON'T FORGET TO CREATE YOUR DATABASE LOCALLY!

**Example `development` config object**

```javascript
{
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',  // Replace with your MySQL host
      user: 'admin',
      password: 'admin',
      database: 'library',
      charset: 'utf8'
    },

    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
```

6. We want to create a `knex`  directory at the root of our project to hold our `migrations` and `seeds` scripts. Inside of the `knex` directory, we need a `knex.js` file to hold the single instance of the `knex` module with the correct environment config.


```bash
$ mkdir knex
$ mkdir knex/migrations
$ mkdir knex/seeds
$ touch knex/knex.js
```

At this point, our project structure should look like this:

```
.
├── knex
│   └── migrations
│   └── seeds
│   └── knex.js
└── knexfile.js
└── package.json
```

At this point, You should migrate your database to create the tables you need.

**Example `knex.js`**

```javascript
const environment = process.env.ENVIRONMENT || 'development'
const config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
```

7. Create your Express application

```
$ npm install express --save
```

Now let's create a `server.js` file in the root of your project. Create your express application how you normally would, for this example the server listening on port `3001`. Let's also create a super basic `GET` endpoint to query our db.

```javascript
const express = require('express');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const app = express();

app.get('/tasks', (req, res) => {
  // use the knex variable above to create dynamic queries
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

```

Start the server:

```
$ node server.js
```

Tada! You have successfully installed `knex` and created a basic express application.
