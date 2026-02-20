import express, { json } from 'express'


const app = express()
app.use(express.json())


const users=[]

app.post('/usuarios', (req,res) =>{

        users.push(req.body)
        res.status(201).json(req.body)
})



app.get('/usuarios' , (req,res) =>{
        res.status(200).json(users)
})

app.listen(3332)




// borsattivinicius1 , Senha: v1s9hqLyQ91J4UnV