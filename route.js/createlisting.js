const express=require("express")
const router=express.Router()
const multer=require("multer")
const Listing=require("../model")
const Joi=require("joi")

const schema={
    name:Joi.string().min(3).required(),
    url:Joi.string().required()
}

const storage=multer.diskStorage({
     destination:function(req,file,cb){
        cb(null, "./uploads")
    },
    filename:function(req,file,cb){
        cb(null,`${Math.random(23*2)} ${file.originalname}` )
    },
   
})


const uploads=multer({ storage:storage})

router.post("/", uploads.any("photo",1),async(req,res)=>{
    console.log(req.body.name)
const result=Joi.validate({name:req.body.name,url:req.body.url},schema)
if(result.error){
    res.json({errMessage:result.error.details[0].message,error:true})
}else{
    // http://localhost:8080/${req.files[0].path}` 
    try{
const listing=await new Listing({
    name:req.body.name,
    url:req.body.url,
    imagesource:`http://localhost:8080/${req.files[0].path}` 
   })
const result=await listing.save()
res.json({message:result, error:false})
}
catch(err){
        res.json({errMessage:err.message,error:true})
    }


    }
})

module.exports=router