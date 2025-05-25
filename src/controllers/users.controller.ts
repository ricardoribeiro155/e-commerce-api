import { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";

type User = {
    id?: number;
    nome: string;
    email: string;
}
export class UserController {

    static async getAll(req: Request, res: Response) {
        const snapshot = await getFirestore().collection("users").get();
        const users = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });
        res.status(200).send(users)
    }

    static async getById(req: Request, res: Response) {
        let userId  = req.params.id
        const doc = await getFirestore().collection("users").doc(userId).get();
        let user = {
            id : doc.id,
            ...doc.data()
        };
        res.status(200).send(user);
    }

    static async save(req: Request, res: Response) {
        let user : User = req.body;
        const userSave = await getFirestore().collection('users').add(user)
        res.status(201).send({
            message: `Usuario id:${userSave.id} salvo com SUCESSO!!`
        });
    }

    static update(req: Request, res: Response) {
        let userId = req.params.id;
        let  user: User  = req.body;
       
        getFirestore().collection('users').doc(userId).set({
            nome : user.nome,
            email : user.email      
        })
      
        res.status(200).send({
            message :'usuario alterado com sucesso!'});
    }

    static async delete(req: Request, res: Response) {
        let userId = req.params.id;
       await getFirestore().collection("users").doc(userId).delete();
        res.status(204).end();
    }




}