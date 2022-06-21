module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [`${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infrastructure/repositories/postgres/entities/index.{js,ts}`],
  migrations: [`${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infrastructure/repositories/postgres/migrations/index.{js,ts}`],
  cli: {
    entitiesDir: `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infrastructure/repositories/postgres/entities`,
    migrationsDir: `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infrastructure/repositories/postgres/migrations`,
    subscribersDir: `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infrastructure/repositories/postgres/subscribers`
  }
}
