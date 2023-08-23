import { Router } from "express";
import { __dirname } from "../utils.js";
import { auth } from "./middlewares.router.js";
//import { checkRole } from "./middlewares.routes.js";


const router =Router()

router.get('/', auth, (req, res) => {
      res.render('private',{})
    });



export default router;

  