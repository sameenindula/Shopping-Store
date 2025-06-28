import mongoose from 'mongoose';

const connectDB = async() => {
    try {
        const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://saminindula:12345@cluster0.oc7totj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        if (!MONGO_URI) {
            throw new Error('MongoDB URI is not defined');
        }
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

export { connectDB };