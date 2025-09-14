import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
    },
    duration:{
        type:String,
        require:true,
    },
    passing:{
      type:Number,
      require:true,
    },
    imgUrl:{
        type:String
    },
    questions:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question",
    }
},{
    timestamps:true
})

const Quiz = mongoose.model('Quiz',quizSchema);

export default Quiz;