import mongoose from 'mongoose';
const url="mongodb://127.0.0.1:27017/teacherstaff";
mongoose.connect(url);
console.log("Successfully connected to mongodb database...");