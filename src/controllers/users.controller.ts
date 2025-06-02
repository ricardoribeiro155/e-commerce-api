
import { NextFunction, Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";
import { ValidationError } from "../errors/validation.error";
import { NotFoundError } from "../errors/notFaudError";

type User = {
    id?: number;
    nome: string;
    email: string;
}
export class UserController {

    static async getAll(req: Request, res: Response, next: NextFunction) {
       const snapshot = await getFirestore().collection("users").get();
            const users = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            res.status(200).send(users);
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        let userId = req.params.id
        const doc = await getFirestore().collection("users").doc(userId).get();
        if (doc.id === undefined || !doc.exists) {
            throw new NotFoundError(`Usuario id:${userId} não encontrado!`);
        } else {
            let user = {
                id: doc.id,
                ...doc.data()
            };
            res.status(200).send(user);
        }
    }

    static async save(req: Request, res: Response, next: NextFunction) {
        let user: User = req.body;
        if (!user.email || user.email?.length === 0) {
            throw new ValidationError('o email é obrigatorio')
        } else {
            const userSave = await getFirestore().collection('users').add(user)
            res.status(201).send({
                message: `Usuario id:${userSave.id} salvo com SUCESSO!!`
            });
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        let userId = req.params.id;
        let user: User = req.body;
        let docRef = getFirestore().collection('users').doc(userId);

        if (docRef.id === undefined || !(await docRef.get()).exists) {
            throw new NotFoundError('Usuario não existe!!');
        } else {
            await getFirestore().collection('users').doc(userId).set({
                nome: user.nome,
                email: user.email
            })
            res.status(200).send({
                message: 'usuario alterado com sucesso!'
            });
        }


    }
    static async delete(req: Request, res: Response, next: NextFunction) {
        let userId = req.params.id;
        
        await getFirestore().collection("users").doc(userId).delete();
        res.status(204).end();
    }




}