import { Router } from "express"

import { menuRouter } from "./menu"

const router = Router()

router.use('/menu', menuRouter)

export { router }