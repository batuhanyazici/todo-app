import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/note-app').then(() => {
    console.log("Connected to MongoDB");
}).catch((err) =>{
    console.log("Error connectin", err);
})
