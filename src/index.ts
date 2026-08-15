import express from "express";
import "dotenv/config";

import { router } from "@router/";
import { loadEnvironments } from "@config/";
import { expressErrorHandler } from "./middlewares/expressErrorHandler";

const app = express()
const port = process.env.PORT || 8001
const environment = process.env.ENVIRONMENT || 'DEVELOPMENT'

app.use('/', router)
app.use(expressErrorHandler)

app.listen(port, () => {
  loadEnvironments()
  console.log('======================')  
  console.log(`LOAD ${environment} ENVIRONMENT ${environment === 'PRODUCTION' ? '🔥': '🛠️'} ON PORT ${port}`)  
  console.log('======================')
})