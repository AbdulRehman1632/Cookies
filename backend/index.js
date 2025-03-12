import express from "express";
import cors from "cors";
import { dbConnection } from "./Db/dbConnection.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { routes } from "./AllRoutes/routes.js";

dotenv.config();
const app=express();

app.use(express.json());
// app.use(cors());

app.use(cookieParser(process.env.COOKIE_SECRET)); // Secure cookies

app.use(
  cors({
    // origin: process.env.FRONTEND_URL, // React ka URL
    credentials: true, // Cookies allow karne ke liye
  })
);


app.get("/",(req,res)=>{
    res.send("API is running")
})

app.use("/auth",routes)

dbConnection();

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});