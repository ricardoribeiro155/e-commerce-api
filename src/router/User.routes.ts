import Express from "express";
import { UserController } from "../controllers/users.controller";
import AsyncHandler from "express-async-handler";

export const userRoutes = Express.Router();

userRoutes.get('/users', AsyncHandler(UserController.getAll));
userRoutes.get('/users/:id', AsyncHandler(UserController.getById)); 
userRoutes.post('/users', AsyncHandler(UserController.save));
userRoutes.put('/users/:id', AsyncHandler(UserController.update));
userRoutes.delete('/users/:id', AsyncHandler(UserController.delete));