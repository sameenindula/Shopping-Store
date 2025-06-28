import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    categoryId: {
        type: String,
        required: true,
        trim: true,
    },
    colorId: {
        type: String,
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
    __v: {
        type: Number,
        default: 0
    }
});

const product = mongoose.model("product", productSchema);
export default product;