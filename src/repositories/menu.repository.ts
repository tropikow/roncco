import { client } from '@db/'
import type { Menu } from '@tp/'

export class MenuRepository {
  async list() {
    const result = await client.query<Menu>('SELECT * FROM menu')
    return result.rows
  }
}