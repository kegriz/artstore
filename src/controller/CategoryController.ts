import { getRepository } from "typeorm";
import { Category } from "../entity/Category";

export class CategoryController {
  private categoryRepository = getRepository(Category);

  async all(): Promise<Category[]> {
    return this.categoryRepository.find();
  }
}
