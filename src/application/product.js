import product from '../infrastructure/entity/product.js';

const getAllProducts = async(req, res) => {
    const products = await product.find();
    if (!products || products.length === 0) {
        return res.status(404).json({ error: 'No products found' });
    }
    res.json(products);

};

const saveProduct = async(req, res) => {
    try {
        const createProduct = req.body;
        await product.create(createProduct);
        res.status(201).json(product);
        if (!createProduct.name || !createProduct.categoryId || !createProduct.colorId || !createProduct.image || !createProduct.price || !createProduct.stripePriceId || !createProduct.description) {
            return res.status(400).json({ error: 'Missing required field' });
        }
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

};

const updatedProduct = async(req, res) => {
    const productIndex = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.json(updatedProduct);
};

const deleteProduct = async(req, res) => {
    const productIndex = await product.findByIdAndDelete(req.params.id);
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.status(204).send();
};

const findById = (req, res) => {
    const products = product.findById(req.params.id);

    if (!products) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.json(products);
};

export { getAllProducts, saveProduct, updatedProduct, deleteProduct, findById };