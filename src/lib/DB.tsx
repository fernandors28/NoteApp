import mongoose from 'mongoose';

export async function connectToDatabase() {
    try {
        const URI = process.env.MONGOOSEAUTH;
       if (!URI) {
            throw new Error('Missing MONGOOSEAUTH environment variable');
        } 
        await mongoose.connect(URI);
    } catch (error) {
        console.error('Error connecting to database:', error);
    }

}
