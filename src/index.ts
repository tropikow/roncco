import express from "express";
import "dotenv/config";

import { router } from "./routes/router";
import { loadEnvironments } from "./config/loadEnvironment";

const app = express()
const port = process.env.PORT || 8001
const environment = process.env.ENVIRONMENT || 'DEVELOPMENT'

app.use('/', router)

app.listen(port, () => {
  loadEnvironments()
  console.log('======================')
  console.log(`LOAD ${environment} ENVIRONMENT ${environment === 'PRODUCTION' ? '🔥': '🛠️'} ON PORT ${port}`)
  console.log('======================')
})