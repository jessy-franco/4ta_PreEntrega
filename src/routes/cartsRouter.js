import Router  from "express";
import cartsController from "../controllers/cartController.js";


const cartsRouter = Router();


/* Creación de un nuevo carrito*/
cartsRouter.post("/", cartsController.createCart);

/* Crear un nuevo carrito si no existe y mostrar el carrito si existe */
cartsRouter.get("/:cid", cartsController.getCartById);

/* Añadir un producto al carrito seleccionado*/
cartsRouter.post("/:cid/products/:pid", cartsController.addProductToCart)

/* Eliminamos un producto del carrito */
cartsRouter.delete("/:cid/products/:pid", cartsController.removeProductFromCart);

/* router para actualizar el carrito */
cartsRouter.put("/:cid", cartsController.updateCartProducts);

/* actualizar la cantidad de productos de un mismo producto */
cartsRouter.put("/:cid/products/:pid", cartsController.updateProductQuantity);
/* eliminar todos los items del carrito  funciona perfecto por postman*/
cartsRouter.delete("/:cid", cartsController.clearCart);

// Nueva ruta para finalizar el proceso de compra del carrito
cartsRouter.post("/:cid/purchase", cartsController.completePurchase);

export default cartsRouter;

