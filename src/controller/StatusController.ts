import { getRepository } from "typeorm";
import { Status } from "../entity/Status";

export class StatusController {
  private statusRepository = getRepository(Status);

  async all(): Promise<Status[]> {
    return this.statusRepository.find();
  }
}
