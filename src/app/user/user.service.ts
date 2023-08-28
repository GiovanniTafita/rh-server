import { User } from "./user.model";
import { DataService } from "../../services/data.service";
import bcrypt from 'bcrypt';
import { generateToken } from "../../services/token.service";

export class UserService extends DataService<User> {
  constructor() {
    super(User);
  }

  async registerUser(data: User) {
    if (data.password) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      return await this.create({
        email: data.email,
        password: hashedPassword,
        profile: data.profile
      });
    }
  }

  async loginUser(data: any) {
    const user = await this.getOneBy({ email: data.email });
    if (!user) {
      return null;
    }
    if (user.password && user.id && user.roles) {
      const isValid = await bcrypt.compare(data.password, user.password);
      if (isValid) {
        const token = generateToken(user.id, user.roles);
        return token;
      }
    }

    return null;
  }

  async getUsers() {
    const users = await this.getAll();

    return users;
  }

  async updateUser(id: number, data: any) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return this.update2({ id }, data);
  }
}