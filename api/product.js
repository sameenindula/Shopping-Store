import express from "express";
import { getAllProducts, saveProduct, updatedProduct, deleteProduct, findById } from "../application/product.js";

const productRouter = express.Router();
productRouter.use(express.json());

// Get all products
productRouter
    .route('/')
    .get(getAllProducts)
    .post(saveProduct);

// Update a product
productRouter
    .route('/:id')
    .put(updatedProduct)
    .delete(deleteProduct)
    .get(findById);


export default productRouter;