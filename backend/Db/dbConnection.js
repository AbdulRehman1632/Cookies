import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


export const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONOGO_URI);
        console.log('Database connected successfully')
    }
    catch (error){
        console.log(error)
        console.log('Error connecting to database')
    }
}