const express=require("express")
const app=express()
const cors=require("cors")
const bodyparser=require("body-parser")
const port=3000

app.use(bodyparser.urlencoded({
	extended:true
}))

app.use(bodyparser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("server is started")
})

app.post("/newData",(req,res)=>{
	//const name=req.body.name,age=req.body.age
	const{name,password,group,gender}=req.body
	console.log(name,password,group,gender)
	res.send("Added Data")
})

app.listen(port,()=>console.log("server is running on port 3000"))