const mongoose=require("mongoose")

const menuSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    isDrink:{
        type:Boolean,
        require:true,
        default:false,
    },
    ind:{
        type:[String],
        default:[]
    }
})

const menuItems=mongoose.model("modelItem",menuSchema)

module.exports=menuItems
