const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const EmployeeModel=require('./models/Employee')
const PostModel=require('./models/posts')
const multer=require('multer')
const path=require('path')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee").then(()=>console.log('mongodb connected'))

app.post('/register',(req,res)=>{
    const {email,name,password,confirmPassword}=req.body
    EmployeeModel.create(req.body)
    .then((employees)=>res.json(employees))
    .catch((err)=>res.json(err))
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            res.json('user already exists')
        }

    })
    

})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../ui/src/images')
    },
    filename: function (req, file, cb) {
 
      cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })

  app.post('/create', upload.single('thumbnail'), async (req, res) => {
    const {title,category,content}=req.body
    const thumbnail=req.file.filename
    await PostModel.create({title,category,content,thumbnail}).then(result=>res.json(result)).catch(err=>console.log(err))
  });
  app.get('/post', async (req,res)=>{
    PostModel.find().then(data=>res.json(data)).catch(err=>console.log(err))
  })


app.post('/login',(req,res)=>{
    const {email,password}=req.body
    EmployeeModel.findOne({email: email}).then(user=>{
        if(user){
            if(user.password==password){
                res.json('success')
            }
            else{
                res.json('incorrect password')
            }

        }
        else{
            res.json('not registered')
        }
    }
    )


})
app.listen(3001,()=>{
console.log("server is running")
})