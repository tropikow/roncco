import { Router } from "express";

import { MenuController } from "src/controllers/menu.controller";

const menuRouter = Router()
const controller = new MenuController()

menuRouter.get('/', controller.getMenu)
menuRouter.get('/', controller.getMenuById)
menuRouter.patch('/', controller.updateMenu)
menuRouter.post('/', controller.createMenu)

export { menuRouter }