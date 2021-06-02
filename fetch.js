const fetch=require("isomorphic-fetch")

const fetchlisting=async()=>{
const response=await fetch("http://localhost:8080/api/listing",{
  method:"POST",
  headers:{"content-type":"application/json"},
  body:JSON.stringify({
      name:"hjs",
      imagesource:"http://djkdjkdj",
      url:"https://slkskjs"
  })
    
})
const result=await response.json()
console.log(result)
}
fetchlisting()