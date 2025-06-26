import { products } from '../data.js';

const getAllProducts = (req, res) => {
    res.json(products);
};

const saveProduct = (req, res) => {
    const product = {
        _id: `${Date.now()}`,
        categoryId: req.body.categoryId,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        stripePriceId: req.body.stripePriceId,
        featured: req.body.featured || false,
        __v: 0
    };

    if (!product.name || !product.price || !product.image || !product.description) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    products.push(product);
    res.status(201).json(product);
};

const updatedProduct = (req, res) => {
    const productId = req.params.id;
    const productIndex = products.findIndex(prod => prod._id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    const updatedProduct = {
        ...products[productIndex],
        categoryId: req.body.categoryId,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        stripePriceId: req.body.stripePriceId,
        featured: req.body.featured || false,
        __v: 0
    };

    if (!updatedProduct.name || !updatedProduct.price || !updatedProduct.image || !updatedProduct.description) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
};

const deleteProduct = (req, res) => {
    const productId = req.params.id;
    const productIndex = products.findIndex(prod => prod._id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    products.splice(productIndex, 1);
    res.status(204).send();
};

const findById = (req, res) => {
    const productId = req.params.id;
    const product = products.find(prod => prod._id === productId);

    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
};

export { getAllProducts, saveProduct, updatedProduct, deleteProduct, findById };