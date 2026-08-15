import { Request, Response } from "express";
import { MenuService } from "src/services/menu.service";

export class MenuController {
  private readonly service: MenuService
  constructor(service?: MenuService) {
    this.service = service ?? new MenuService()
  }
  public getMenu = async(req: Request, res: Response) => {
    const result = await this.service.listMenu()
    res.send(result)
  }
  public getMenuById = async(req: Request, res: Response) => {
    
  }
  public updateMenu = async(req: Request, res: Response) => {

  }
  public createMenu = async(req: Request, res: Response) => {

  }
}