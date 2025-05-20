
import express, { Request, Response } from "express";

const app = express();
app.use(express.json())

app.listen('3000', () => {
    console.log("rodando na porta 3000")
})


let id = 0
    let usuarios:{id: number, nome: string, email: string}[] = [];


app.get('/', (req: Request, res: Response) => {
    res.send('BEM VINDO AO MEU SUCESSO !!')
})

app.get('/users', (req: Request, res: Response) => {

    res.send(usuarios)
})

app.post('/users', (req: Request, res: Response) => {
    let user = req.body;
    user.id =++id;
    usuarios.push(user)
    res.send("SUCESSO!!")

    app.get('/users/:id', (req: Request, res: Response) => {
        let userId = Number(req.params.id)
        let user = usuarios.find(user => user.id === userId)
         res.send(user)
                                 
    })


})
