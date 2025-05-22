import { Request, Response } from "express";

let id = 0
type user = {
    id: number;
    idade: number
    nome: string;
    email: string;
}
let usuarios: user[] = [];

export class UserController {

    static getAll(req: Request, res: Response) {
        res.send(usuarios)
    }

    static getById(req: Request, res: Response) {
        let userId = Number(req.params.id)
        let user = usuarios.find(user => user.id === userId)
        res.send(user)
    }

    static save(req: Request, res: Response) {
        let user = req.body;
        user.id = ++id;
        usuarios.push(user)
        res.send("SUCESSO!!")
    }

    static update(req: Request, res: Response) {
        let user = req.body;
        let userId = Number(req.params.id)
        let indexOf = usuarios.findIndex((user) => user.id === userId)
        usuarios[indexOf].email = user.email
        usuarios[indexOf].nome = user.nome
        usuarios[indexOf].idade = user.idade
        res.send('usuario alterado com sucesso!')
    }

    static delete(req: Request, res: Response) {
        let userId = Number(req.params.id)
        let userList = usuarios.findIndex(user => user.id === userId)
        usuarios.splice(userList, 1)
        res.sendStatus(201)



    }





}