import { MenuRepository } from "src/repositories/menu.repository"

export class MenuService {
  private readonly repo: MenuRepository

  constructor(repo?: MenuRepository) {
    this.repo = repo ?? new MenuRepository()
  }
  public async listMenu () {
    const result = await this.repo.list()
    return result    
  }
}