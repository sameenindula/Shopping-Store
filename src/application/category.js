import category from '../infrastructure/entity/category.js';

// GET all categories
const getAllCategories = async(req, res) => {
    try {
        const categories = await category.find();
        if (!categories || categories.length === 0) {
            return res.status(404).json({ error: 'No categories found' });
        }
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// GET a category by ID
const findCategoryById = async(req, res) => {
    try {
        const foundCategory = await category.findById(req.params.id);
        if (!foundCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(foundCategory);
    } catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// POST create a new category
const saveCategory = async(req, res) => {
    try {
        const createCategory = req.body;
        if (!createCategory.name || !createCategory.slug) {
            return res.status(400).json({ error: 'Missing required field' });
        }
        const newCategory = await category.create(createCategory);
        res.status(201).json(newCategory);
    } catch (error) {
        console.error('Error saving category:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// PUT update a category by ID
const updateCategory = async(req, res) => {
    try {
        const updatedCategory = await category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(updatedCategory);
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// DELETE a category by ID
const deleteCategory = async(req, res) => {
    try {
        const deletedCategory = await category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export {
    getAllCategories,
    findCategoryById,
    saveCategory,
    updateCategory,
    deleteCategory
};