import express from "express";
import { getAllProducts, saveProduct, updatedProduct, deleteProduct, findById } from "../application/product.js";
import isAuthorized from "./middleware/authentication-middleware.js";

const productRouter = express.Router();
productRouter.use(express.json());

// Get all products
productRouter
    .route('/')
    .get(getAllProducts)
    .post(isAuthorized, saveProduct);

// Update a product
productRouter
    .route('/:id')
    .put(isAuthorized, updatedProduct)
    .delete(isAuthorized, deleteProduct)
    .get(findById);


export default productRouter;