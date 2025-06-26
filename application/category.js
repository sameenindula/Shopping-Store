import { categories } from "../data.js";

// GET all categories
const getAllCategories = (req, res) => {
    res.json(categories);
};

// GET a category by ID
const findCategoryById = (req, res) => {
    const category = categories.find(cat => cat._id === req.params.id);
    if (!category) {
        return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
};

// POST create a new category
const saveCategory = (req, res) => {
    const category = {
        _id: `${Date.now()}`,
        name: req.body.name,
        description: req.body.description || "",
        __v: 0
    };

    if (!category.name) {
        return res.status(400).json({ error: 'Missing required field: name' });
    }

    categories.push(category);
    res.status(201).json(category);
};

// PUT update a category by ID
const updateCategory = (req, res) => {
    const categoryId = req.params.id;
    const categoryIndex = categories.findIndex(cat => cat._id === categoryId);

    if (categoryIndex === -1) {
        return res.status(404).json({ error: 'Category not found' });
    }

    const updatedCategory = {
        ...categories[categoryIndex],
        name: req.body.name,
        description: req.body.description || "",
        __v: 0
    };

    if (!updatedCategory.name) {
        return res.status(400).json({ error: 'Missing required field: name' });
    }

    categories[categoryIndex] = updatedCategory;
    res.json(updatedCategory);
};

// DELETE a category by ID
const deleteCategory = (req, res) => {
    const categoryId = req.params.id;
    const categoryIndex = categories.findIndex(cat => cat._id === categoryId);

    if (categoryIndex === -1) {
        return res.status(404).json({ error: 'Category not found' });
    }

    categories.splice(categoryIndex, 1);
    res.status(204).send();
};

export {
    getAllCategories,
    findCategoryById,
    saveCategory,
    updateCategory,
    deleteCategory
};