import  express, { Request, Response }  from "express";

const app = express();

app.use(express.json())

let  usuarios=[{
 nome:"davi",
 idade: 23
},{
 nome: "cleiton",
 idade: 21
}]

app.get('/',(req: Request, res:Response )=>{
    res.send('BEM VINDO AO MEU SUCESSO !!')
})

app.get('/users', (req: Request, res: Response)=>{
    
    res.send(usuarios)
})

app.post('/users', (req: Request, res: Response)=>{
   let user = req.body

   usuarios.push(user)

   res.send(usuarios)
   

})

app.listen('3000',()=>{
    console.log("rodando na porta 3000")
})