
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI ;

export async function connectDB() {
    
    try {
        if(mongoose.connection.readyState >= 1){
            console.log("md already connected");
            return;
        }

        await mongoose.connect(MONGODB_URI);
        console.log("mongodb connected");
        
            
    } catch (error) {
        console.log("mongodb connection error:",error);
        
    }

}

