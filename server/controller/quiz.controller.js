import Quiz from '../model/quiz.model.js';
import mongoose from "mongoose"; 

export const createQuiz = async(req,res) =>{
    
    const quiz = req.body; //quiz data request

    if(!quiz.title||!quiz.duration||!quiz.passing){
        return res.status(400).json({success:false,message:"Field Missing"});
    }

    //create new quiz object
    const newQuiz = new Quiz(quiz);

    //Attempt to upload data to DB
    try {
        await newQuiz.save();
        res.status(201).json({success:true,data:newQuiz});
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({success:false,message:"Server Error"});
    }
};

export async function getQuiz(req,res){
    try {
        const quiz = await Quiz.find({});
        res.status(200).json({success:true,quizData:quiz});
    } catch (error) {
        console.log("Error In Fetching Quiz Data");
        res.status(500).json({success:false,message:"Server Error"});
    }
}

export async function viewQuiz(req,res){
    const {id} = req.params; 
    const quiz = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"quiz record not found"});
    }

    try {
        const retrieveQuiz = await Quiz.findById(id);
        res.status(200).json({success:true,quizData:retrieveQuiz,message:"success fetch"});
    } catch (error) {
        console.log("Error while fetching quiz data");
        return res.status(500).json({success:false,message:"Server Error"});
    }
}

export async function updateQuiz(req,res) {
    const {id} = req.params;
    const quiz = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"err"});
    }

    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(id,quiz,{new:true});
        res.status(200).json({success:true,data:updatedQuiz});
    } catch (error) {
        return res.status(500).json({success:false,message:"Server Error"});
    }
}

export async function deleteQuiz(req,res) {
    const {id} = req.params;

    try {
        await Quiz.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Quiz Deleted"});
    } catch (error) {
        console.log("Entry Not Deleted, Error");
        res.status(500).json({success:false,message:"Server Error"});
    }
}