import express from "express";
import { getAllCategories, saveCategory, findCategoryById, updateCategory, deleteCategory } from "../application/category.js";
import isAuthorized from "./middleware/authentication-middleware.js";

const categoryRouter = express.Router();
categoryRouter.use(express.json());

// GET all categories
categoryRouter
    .route('/')
    .get(getAllCategories)
    .post(isAuthorized, saveCategory);

categoryRouter
    .route('/:id')
    .get(findCategoryById)
    .put(updateCategory)
    .delete(deleteCategory);

export default categoryRouter;