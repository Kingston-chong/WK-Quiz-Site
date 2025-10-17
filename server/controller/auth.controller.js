import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import User from '../model/user.model.js';

export async function register(req,res) {
    try {
        const user = req.body;

        if(!user.email||!user.username||!user.password){
            return res.status(400).json({success:false,message:"Field Missing"})
        }

        const email = user.email;
        const username = user.username; 
        
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({success:false, message: "User already exists" });
        }

        const existingUsername = await User.findOne({username});
        if(existingUsername){
            return res.status(400).json({ success:false,message: "Username has been taken" });
        }

        const hashedPassword = await bcrypt.hash(user.password,15); 

        user.password = hashedPassword; 
        const newUser = User(user);
        newUser.save();
        res.status(201).json({success:true,message:"User Registered Successfully",userData:user});
    } catch (error) {
        res.status(500).json({success:false,message:"Server Error\nError : "+error})
    }
};

export async function login(req, res) {
  try {
    const credentials = req.body;
    
    const user = await User.findOne({ username: credentials.username }); 
    if (!user) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const isMatch = bcrypt.compare(credentials.password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid Password" });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "2h" }
    );

    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error\nError : " + error });
  }
};