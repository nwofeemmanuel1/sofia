const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/newlisting",{ useNewUrlParser: true,useUnifiedTopology: true  })
.then(()=>console.log("connected to database"))
.catch(err=>console.log(err.message))

const listingSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    url:{
type:String,
required:true
    },
    imagesource:{
type:String,
required:true
    }
})

const Listing=mongoose.model("listing",listingSchema)
module.exports=Listing