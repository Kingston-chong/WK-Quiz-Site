import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    userId:{
        type:Number,
        require:true
    },
    bio:{
        type:String,
    },
    profilePic:{
        type:String,
    }
},{
    timestamps:true
})

const Profile = mongoose.model("Profile",ProfileSchema);

export default Profile;