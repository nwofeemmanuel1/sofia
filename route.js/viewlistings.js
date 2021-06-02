const express=require("express")
const Listing =require("../model")
const router=express.Router()

router.get("/", async(req,res)=>{
const response=await Listing.find()
.sort()

res.json({listings:response})
})

module.exports=router

