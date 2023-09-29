// La configuracion esta en el index que esta en el dao
import { PRODUCTDAO } from "../dao/index.js";
//Guardamos producto dependiendo si es en memoria o si es en mongo
async function saveProduct (req,res){
    const product= req.body;
    await PRODUCTDAO.save(product);
    res.send(product)
}
//obtenemos productos dependiendo si es en memoria o si es en mongo
async function getAllProducts(req,res){
    const products = await PRODUCTDAO.getAll();
    res.send (products)
}
//Generamos funcion para visualizar todos los productos por el adm, problema!! revisar
async function getAllProductsForAdmin(req,res){
    const products = await PRODUCTDAO.getAll();
    res.render ('updateproducts',{products:products })
}

// Obtenemos producto por ID dependiendo si es en memoria o si es en mongo
async function getProductById(req,res){
    const pid= req.params.pid;
    const productById = await PRODUCTDAO.getById(pid);
    console.log("prueba producto",productById)
    res.render ('productdetail',{products:productById})
}

// Eliminamos producto por ID dependiendo si es en memoria o si es en mongo
async function deletedProduct(req,res){
    const {pid}= req.params;
    const productId = await PRODUCTDAO.delete(pid);
    res.send (productId)
}

// Actualizamos producto por ID dependiendo si es en memoria o si es en mongo
async function updatedProduct(req,res){
    const pid = req.params;
    const productToUpdated= req.body;
    const productUpdated = await PRODUCTDAO.update(pid,productToUpdated);
    res.send (productUpdated)
}
//Exportamos funciones
export {saveProduct,getAllProducts,getProductById, deletedProduct,updatedProduct,getAllProductsForAdmin}


