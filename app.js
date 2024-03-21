//importando paquetes 
import express  from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();


//importando rutas
import userRoute from "./routes/user.js";



//Usando las rutas
app.use(userRoute,"/usuario");

const port = parseInt(process.env.PORT); 

app.listen(port, () => {
    console.log(`Servidor rodando por el puerto ${port}`);
});