import Logger from "../../logger/logger";
import { DataService } from "../../services/data.service";
import { UserService } from "../user/user.service";
import { Leave } from "./leave.model";

export class LeaveService extends DataService<Leave> {
  userService = new UserService();
  constructor() {
    super(Leave);
  }

  async createLeave(userId: number, data: any) {
    let newLeave = new Leave();
    const user = await this.userService.getOneBy({ id: userId });
    if (user) {
      newLeave.user = user
    }
    Object.assign(newLeave, data);

    return await this.create(newLeave);
  }
}