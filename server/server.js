import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import QuizRoutes from "./route/question.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

//routes
app.use("/api/quiz",QuizRoutes);

//running server on localhost
const port = process.env.PORT || 5000; 
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
});
