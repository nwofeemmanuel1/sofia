const express=require("express")
const cors=require('cors')
const CreateNewListing=require("./route.js/createlisting")
const viewlisting=require("./route.js/viewlistings")
const app=express()
app.use(express.json())
app.use(cors())
app.use("/api/listing",CreateNewListing)
app.use("/api/viewlistings",viewlisting)
app.use("/uploads",express.static("./uploads"))
app.use("/",express.static("affiliate"))

app.get("/control",(req,res)=>{
res.sendFile("./listing/index.html",{root:__dirname})

})



const port=process.env.PORT||8080
app.listen(port,()=>console.log(`running on ${port}`))