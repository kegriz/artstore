import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export class UserController {
  private userRepository = getRepository(User);

  // eslint-disable-next-line
  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  // eslint-disable-next-line
  async one(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne(request.params.id);
  }

  // eslint-disable-next-line
  async save(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.save(request.body);
  }

  // eslint-disable-next-line
  async remove(request: Request, response: Response, next: NextFunction) {
    const userToRemove = await this.userRepository.findOne(request.params.id);
    await this.userRepository.remove(userToRemove);
  }
}
