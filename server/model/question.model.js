import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    
    quizID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Quiz',
        required:true,
    },
    data:{
        title:{
            type:String,
            required:true
        },
        options:{
            type:[String],
            required:true
        },
        answer:{
            type:Number,
            required:true
        }
    }
},{
    timestamps:true
})

const Question = new mongoose.model('Question',questionSchema);

export default Question;