import User from "../models/User.js";

export const registerUser=async(req,res)=>{
    try{
        const {name,email,mobile,password}=req.body;
        if(!name || !email || !mobile || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const user=new User({name,email,mobile,password});
        await user.save();
        return res.status(201).json({message:"User registered successfully"});
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }
}