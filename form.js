var expr=require("express")
var app=expr()
const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/form")
.then(()=>{console.log("Successful")})
.catch((err)=>{console.error(err)})
mg.pluralize(null)
const myschema=new mg.Schema({
 uname:{type:String, required:true},
 password: {type:String, required:true}})
const person =new mg.model("data1", myschema)
app.use(expr.static(__dirname,{index:"form.html"}))
//Or app.get("/",(req,res)=>{ res.sendFile(__dirname+"/form.html") })
app.get("/process_get",(req,res)=>{
 const personData=new person({
 uname:req.query.uname,
 password:req.query.pwd
})
personData.save()
res.send("Record inserted")
})
app.listen(3000);
