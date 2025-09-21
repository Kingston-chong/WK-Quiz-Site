import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
    result:{
        type:[],
        userId:{
            type:mongoose.Types.ObjectId, 
            require:true
        },
        resultData:{
            type:[],
            quizId:{
                type:mongoose.Types.ObjectId,
                require:true
            },
            details:{
                type:[],
                score:{
                    type:Number,
                    require:true
                },
                pass:{
                    type:Number,
                    require:true
                },
                correct:{
                    type:Number,
                    require:true
                },
                wrong:{
                    type:Number,
                    require:true
                },
                timeUsed:{
                    type:Number,
                    require:true
                },
                createdDate:{
                    type:Date,
                    require:true
                }
            }
        }
    }
},{
    timestamps:true
});

const Result = mongoose.model("Result",ResultSchema);

export default Result;