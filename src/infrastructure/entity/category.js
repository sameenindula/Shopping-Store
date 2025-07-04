import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    __v: {
        type: Number,
        default: 0
    }
});

const category = mongoose.model('category', categorySchema);
export default category;