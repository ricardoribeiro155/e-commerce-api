import express from "express";
import { routes } from "./router/index";
import { initializeApp} from "firebase-admin/app";

initializeApp();

const app = express();


routes(app);

app.listen('3000', () => {
    console.log("rodando na porta 3000");
});





