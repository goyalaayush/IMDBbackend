
const mongoose=require('mongoose')


const movieshema=new mongoose.Schema({
name:{type:String,required:true},
img:{type:String,required:true},
year:{type:String,required:true},
genre:{type:String,required:true},
rating:{type:String,required:true}
});

module.exports=mongoose.model("movie",movieshema)