import Express from "express";
import { UserController } from "../controllers/users.controller";

export const userRoutes= Express.Router();


userRoutes.get('/users', UserController.getAll)

userRoutes.get('/users/:id', UserController.getById)

userRoutes.post('/users', UserController.save)

userRoutes.put('/users/:id', UserController.update)

userRoutes.delete('/users/:id', UserController.delete)