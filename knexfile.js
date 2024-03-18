// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {

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
  },

  staging: {
    client: 'mysql2',
    connection: {
      host: 'localhost',  // Replace with your MySQL host
      user: 'admin',
      password: 'admin',
      database: 'library',
      charset: 'utf8'
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
    client: 'mysql2',
    connection: {
      host: 'localhost',  // Replace with your MySQL host
      user: 'admin',
      password: 'admin',
      database: 'library',
      charset: 'utf8'
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

