import express from 'express'

const app=express();

let users=[
    {id:1, name:"Virat", email:"virat18@gmail.com"},
    {id:2, name:"Rohit Sharma", email:"rohit45@gmail.com"},
    {id:3, nmae:"Siraj" , email:"Siarj89@gmail.com"}
];

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello ")
})

// app.get('/test',(req,res)=>{
//     res.send("test.....")
// })

// app.post('/testingpost',(req,res)=>{
//     res.send(req.body.name)
// })

// app.post('/login-page',(req,res)=>{
//     console.log(req.body)
//     res.send(req.body.login)
// })

app.put('/updatedata/:id',(req,res)=>{
    const userId= req.params.id;
    const email= req.body.email;
    const name=req.body.name;
    if(!userId || !email || !name){
        return res.send('userId and email and name are required')
    }
    
    const userData =users.find((userData)=>userData.id == userId)
    if(!userData){
        return res.send("UserData Not Found")
    }
    userData.email=email;
    userData.name=name;
    return res.send(userData)
})

app.delete('/delete-userdata/:id', (req, res) => {
    const userId = req.params.id;
    if (!userId) {
        return res.send("User id is required.")
    }

    const userIndex = users.findIndex((userData) => userData.id == userId)
    if (userIndex == -1) {
        return res.send("User not found.")
    }

    users.splice(userIndex, 1)

    return res.json({ message: "User deleted successfully", users })

})


app.listen('8000',()=>{console.log("Login successful")})

