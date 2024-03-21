import express from 'express';
const router = express.Router();

router.get("/usuarios",(req,res)=>{
    return res.status(200);
})

router.get("/usuario/:id",(req,res)=>{
    return res.status(200);
})

router.post("/insertarusuario",(req,res)=>{
    return res.status(200);
})

router.patch("/editarusuario",(req,res)=>{
    return res.status(200);
})

router.delete("/eliminarusuario",(req,res)=>{
    return res.status(200);
})

export default router;