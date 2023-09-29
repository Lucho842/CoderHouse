// La configuracion esta en el index que esta en el dao
import { CARTDAO } from "../dao/index.js";
// Guardamos carrito
async function saveCart(req,res){
    const cart= req.body;
    await CARTDAO.save(cart);
    res.send(cart)
}

//Todos los carritos
async function getAllCarts(req,res){
    const carts = await CARTDAO.getAll();
    res.render ('cart',{carts:carts})//render
}
//Carrito por id
async function getCartById(req,res){
    const cid = req.params.cid;
    const cartId = await CARTDAO.getCartId(cid);
    res.render ('cart',{carts : cartId})

}
//Actualizamos carrito
async function updateCart(req,res){
    const cid = req.user.user.user.cart;
    const pid = req.params.pid;
    const updateCart = await CARTDAO.addProductToCart(cid, pid);
    //console.log(updateCart);
    res.send(updateCart)
   
}
// //hasta ahora no la use 
// async function purchaseCart(req,res){
//     const cid=req.params.cid;
//     const cartId = await CARTDAO.getCartId(cid);
    
//     res.render ('purchaseCart',{carts:cartId})
// }

//Exportamos
export {saveCart, getAllCarts, getCartById, updateCart}//,purchaseCart}