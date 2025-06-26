import express from "express";
import { getAllCategories, saveCategory } from "../application/category.js";

const categoryRouter = express.Router();
categoryRouter.use(express.json());

// GET all categories
categoryRouter
    .route('/')
    .get(getAllCategories)
    .post(saveCategory);

categoryRouter
    .route('/:id')
    .get(findCategoryById)
    .put(updateCategory)
    .delete(deleteCategory);

export default categoryRouter;