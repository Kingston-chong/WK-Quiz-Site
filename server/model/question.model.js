import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    
    questionData:{
        type:[],
        required:true,
        title:{
            type:String,
            required:true
        },
        nonSelectOpts:{
            type:[String],
            required:false
        },
        opts:{
            type:[String],
            required:true
        },
        correct:{
            type:Number,
            required:true
        },
        pts:{
            type:Number,
            required:true
        }
    }
},{
    timestamps:true
})

const Question = mongoose.model('Question',questionSchema);

export default Question;