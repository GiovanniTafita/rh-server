import { DataService } from "../../services/data.service";
import { CategoryService } from "../category/category.service";
import { UserService } from "../user/user.service";
import { Leave } from "./leave.model";

export class LeaveService extends DataService<Leave> {
  userService = new UserService();
  categoryService = new CategoryService();

  constructor() {
    super(Leave);
  }

  async createLeave(userId: number, data: any) {
    let newLeave = new Leave();
    if (!userId || !data.category) {
      throw new Error('Error')
    }
    const user = await this.userService.getOneBy({ id: userId });
    const category = await this.categoryService.getOneBy({ name: data.category });

    newLeave.start = data.start;
    newLeave.end = data.end;
    if (user) newLeave.user = user;
    if (category) newLeave.category = category

    return await this.create(newLeave);
  }
}