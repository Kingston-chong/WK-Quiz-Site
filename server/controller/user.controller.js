import User from "../model/user.model.js";

export async function createUser(req,res) {
    const user = req.body;

    if(!user.email||!user.password){
        return res.status(400).json({success:false,message:"Field Missing"});
    }

    const newUser = new User(user);
    
    try{
        await newUser.save();
        res.status(201).json({success:true,data:newUser});
    }catch(error){
        res.status(500).json({success:false,message:"Server Error"});
    }
};

export async function viewAllUser(req,res){
    try {
        const users = await User.find({});
        res.status(200).json({success:true,users:{users}});
    } catch (error) {
        console.log("Server Error");
        res.status(500).json({success:true,message:"Server Error"});
    }
};

export async function viewUser(req,res){
    const {id} = req.params; 

    try {
        const retrieveUser = await User.findById(id);
        res.status(200).json({success:true,users:retrieveUser})
    } catch (error) {
        console.log("Server Error");
        res.status(500).json({success:true,message:"Server Error"});
    }
};

export async function updateUser(req,res) {
    const {id} = req.params;
    const userBody = req.body;

    try {
        const newUser = await User.findByIdAndUpdate(id,userBody,{new:true});
        res.status(200).json({success:true,message:"User Updated",userData:newUser});
    } catch (error) {
        console.log("Server Error");
        res.status(500).json({success:false,message:"Server Error"});
    }
};

export async function deleteUser(req,res) {
    const {id} = req.params;

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"User Deleted"})
    } catch (error) {
        console.log("Server Error");
        res.status(500).json({success:false,message:"Server Error"});
    }
};