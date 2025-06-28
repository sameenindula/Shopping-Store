import express from 'express';
import productRouter from './api/product.js';
import categoryRouter from './api/category.js';
import { connectDB } from './infrastructure/db/index.js';

const app = express();
app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);


connectDB();

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});