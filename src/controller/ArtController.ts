import { getRepository } from "typeorm";
import { Request } from "express";
import { Product } from "../entity/Product";

export class ArtController {
  private productRepository = getRepository(Product);

  async all(): Promise<Product[]> {
    return this.productRepository.find({ relations: ["type", "status", "art", "art.categories"] });
  }

  async one(request: Request): Promise<Product | undefined> {
    return this.productRepository.findOne(request.params.id, {relations: ["type", "status", "art", "art.categories"]});
  }
}
