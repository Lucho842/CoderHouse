import { Router } from "express";

import {  passportCall } from "../utils.js";
import CartModel from "../dao/models/cart.model.js";
//Instanciamos router
const router = Router();

// Ruta para cerrar la sesión pero ahora con jwt
router.get("", passportCall('jwt'), async (req, res) => {

  try {
    // Destruir la sesión 
    req.session.destroy(err => {
      if (err) {
        console.error("Error al cerrar sesión:", err);
        return res.status(500).json({ respuesta: "Error en el servidor" });
      } else {
        // Limpiar el token y cerrar sesión
        res.clearCookie("CoderKeyQueNadieDebeSaber");
        console.log("sesión cerrada");
        res.redirect("/");
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Error al cerrar sesión" });
  }
});


  
export default router;