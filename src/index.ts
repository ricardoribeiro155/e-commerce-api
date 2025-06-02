import express from "express";
import { routes } from "./router/index";
import { initializeApp } from "firebase-admin/app";
import { errorHandler } from "./middlewares/error-handler.mideldeware";

initializeApp();
const app = express();

routes(app);
errorHandler(app);


app.listen('3000', () => {
    console.log("rodando na porta 3000");
});





