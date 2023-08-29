import { DataService } from "../../services/data.service";
import { Category } from "./category.model";

export class CategoryService extends DataService<Category> {
  constructor() {
    super(Category)
  }
}