import review from "../infrastructure/entity/review.js";
import product from "../infrastructure/entity/product.js";


const getAllReviews = async(req, res) => {
    try {
        const productId = req.params.productId; // get from URL param
        const foundProduct = await product.findById(productId).populate('review');
        if (!foundProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(foundProduct.review); // send only the reviews array
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const saveReview = async(req, res) => {
    try {
        const productId = req.params.productId;
        const { review: reviewText, rating } = req.body;

        // Create the review
        const newReview = await review.create({
            review: reviewText,
            rating: rating,
        });

        // Find the product and push the new review's _id
        const foundProduct = await product.findById(productId);
        if (!foundProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        foundProduct.review.push(newReview._id);
        await foundProduct.save();

        res.status(201).json(newReview);
    } catch (error) {
        console.error("Error saving review:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export { getAllReviews, saveReview };