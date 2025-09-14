import Question from "../model/question.model.js";

export async function createQuestion(req,res) {
    const question = req.body;

    if(!question.questionData){
        return res.status(400).json({success:false,message:"Field Missing"});
    }

    const newQuestions = new Question(question);

    try {
        await newQuestions.save();
        res.status(201).json({success:true,data:newQuestions});
    } catch (error) {
        res.status(500).json({success:false,message:"Server Error"})
    }
};

export async function viewAllQuestion(req,res){
    
    try {
        const questions = await Question.find({});
        res.status(200).json({success:true,questionData:{questions}})
    } catch (error) {
        console.log("Server Error");
        res.status(500).json({success:true,message:"Server Error"});
    }
}

export async function viewQuestion(req,res) {

    const {id} = req.params;

    try {
        const retrieveQuestion = await Question.findById(id);
        res.status(200).json({success:true,questions:retrieveQuestion})
    } catch (error) {
        console.log("Server Error");
        res.status(500).json({success:false,message:"Server Error"});
    }
};

export async function updateQuestion(req,res){
    const {id} = req.params;
    const quesBody = req.body;
    
    try {
        const newQuestion = await Question.findByIdAndUpdate(id,quesBody,{new:true});
        res.status(200).json({success:true,message:"Question Updated"})
    } catch (error) {
        console.log("Server Error");
        res.status(500).json({success:false,message:"Server Error"});
    }
};

export async function deleteQuestion(req,res){
    const {id} = req.params;
    
    try {
        await Question.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Question Deleted"})
    } catch (error) {
        console.log("Server Error");
        res.status(500).json({success:false,message:"Server Error"});
    }
};