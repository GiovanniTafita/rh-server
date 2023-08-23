import { Profile } from "./profile.model";
import { DataService } from "../../services/data.service";

export class ProfileService extends DataService<Profile> {
  constructor() {
    super(Profile);
  }
}