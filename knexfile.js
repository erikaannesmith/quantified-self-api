module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/quantified_self',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/quantified_self_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: 'postgres://hnwthcnmckefra:ea0c95f9e3c615f1ed951efd2b98945929c6460a7fe5c97a79c0cb5c749b17e9@ec2-54-243-59-122.compute-1.amazonaws.com:5432/df9fco2d5tm16p',
    migrations: {
      directory: './db/migrations'
    },
    ssl: true
    // seeds: {
    //   directory: './db/seeds/production'
    // },
    useNullAsDefault: true
  }
}
