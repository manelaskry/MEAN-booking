import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            require:true,
            unique:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        country:{
            type:String,
            require:false,
        },
        password:{
            type:String,
            require:true,
            unique:true
        },
        phone:{
            type:String,
            require:false,
        },
        isAdmin:{
            type: Boolean,
            default:false,
        }
    },
    {
        timestamps : true 
    }
);

const User = mongoose.model("User", UserSchema);

export default User;