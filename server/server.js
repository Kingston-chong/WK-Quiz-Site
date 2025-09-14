import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import QuizRoutes from "./route/quiz.route.js";
import QuestionRoutes from "./route/question.route.js";

dotenv.config();

const app = express();
app.use(express.json());

//cross origin restriction
app.use(cors({ 
    origin:[process.env.APP_URL], 
    methods:["GET","POST","PUT","DELETE"]
}));

connectDB();

//routes
app.use("/api/quiz",QuizRoutes);
app.use("/api/question",QuestionRoutes);

//running server
const port = process.env.PORT || 5000; 
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});