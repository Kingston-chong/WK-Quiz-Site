import express from "express"; 
import { createQuiz, deleteQuiz, getQuiz, updateQuiz, viewQuiz } from "../controller/quiz.controller.js";

const router = express.Router();

router.post("/",createQuiz);
router.get("/",getQuiz);
router.get("/:id",viewQuiz);
router.put("/:id",updateQuiz);
router.delete("/:id",deleteQuiz);

export default router;