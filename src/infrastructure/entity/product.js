import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
        trim: true,
    },

    image: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    stripePriceId: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },

    featured: {
        type: Boolean,
        default: false,
    },
    review: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "review",
        default: []
    },
    __v: {
        type: Number,
        default: 0
    }
});

const product = mongoose.model("product", productSchema);
export default product;