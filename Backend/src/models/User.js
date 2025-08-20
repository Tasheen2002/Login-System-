import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:string,
        required:true,
        minLength:3,
    },
    email:{
        type:string,
        required:true,
        unique:true,
        lowercase:true,
        minLength:5,
        match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    mobile:{
        type:string,
        required:true,
        minLength:10,
        match:/^[0-9]{10}$/,
    },
    password:{
        type:string,
        required:true,
        minLength:8,
        match:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    }

})