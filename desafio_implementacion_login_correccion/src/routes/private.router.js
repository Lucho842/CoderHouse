import { Router } from "express";
import { __dirname } from "../utils.js";
import { auth } from "./middlewares.router.js";

const router =Router()

router.get('/', auth, (req, res) => {
      res.render('private',{})// Ruta privada
    });

export default router;
