import { ObjectType, Repository } from "typeorm";
import { AppDataSource } from "../database/data-source";

export class DataService<T> {
  private repository: Repository<T>;

  constructor(model: ObjectType<T>) {
    this.repository = AppDataSource.getRepository(model);
  }

  public async create(data: any) {
    const newData = this.repository.create(data);
    await this.repository.save(newData);

    return newData;
  }

  public async getAll() {
    return await this.repository.find();
  }

  public async getOneBy(condition: any) {
    return await this.repository.findOneBy(condition);
  }

  public async delete(condition: any) {
    return await this.repository.delete(condition);
  }
}