import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    //array coz a single user can have multiple blogs
    blogs:[{type: mongoose.Types.ObjectId, ref:"Blog",required: true}],
});

export default mongoose.model("User", userSchema);
//In mongoDb the collection will stored as 'users' (prural form)