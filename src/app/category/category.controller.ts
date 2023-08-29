import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const categoryService = new CategoryService();

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.create(req.body);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
