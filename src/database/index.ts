import { Pool } from 'pg'

import { config } from '@config/'

export const client = new Pool({
  user: config.database.user,
  host: config.database.host,
  database: config.database.database,
  password: config.database.password,
  port: config.database.port
})