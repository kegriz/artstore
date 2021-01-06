import { getRepository } from "typeorm";
import { Type } from "../entity/Type";

export class TypeController {
  private typeRepository = getRepository(Type);

  async all(): Promise<Type[]> {
    return this.typeRepository.find();
  }
}
