import { ObjectType, Repository } from "typeorm";
import { AppDataSource } from "../database/data-source";

export class DataService<T> {
  //@ts-ignore
  private repository!: Repository<T>;

  constructor(model: ObjectType<T>) {
    //@ts-ignore
    this.repository = AppDataSource.getRepository(model);
  }

  public async create(data: any) {
    const newData = this.repository.create(data);
    await this.repository.save(newData);

    return newData;
  }

  public async update(id: number, data: any) {
    const updatedData = await this.repository.update(id, data);
    return updatedData;
  }

  public async update2(condition: any, data: any) {
    const current = await this.repository.findOneByOrFail(condition);
    if (current) {
      await this.repository.merge(current, data);
      return await this.repository.save(current);
    }
  }

  public async getAll(option: boolean = false) {
    return await this.repository.find({ withDeleted: option });
  }

  public async getAllBy(condition: any) {
    return await this.repository.findBy(condition);
  }

  public async getWithOption(option: any = null) {
    return await this.repository.find(option);
  }

  public async getOneBy(condition: any) {
    return await this.repository.findOneBy(condition);
  }

  public async delete(condition: any) {
    return await this.repository.delete(condition);
  }

  public async deleteSoft(condition: any) {
    return await this.repository.softDelete(condition);
  }
}