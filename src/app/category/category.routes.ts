import { Router } from "express";
import { createCategory, getCategories } from "./category.controller";

const categoryRouter = Router();

categoryRouter.get('/category', getCategories);
categoryRouter.post('/category', createCategory);

export default categoryRouter;