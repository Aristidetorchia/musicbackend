const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//CRUD: CREAE-READ-UPDATE-DELETE
//READ: OBTENER DATOS
router.get("/", productController.getProducts);
router.get("/buscar", productController.getProductByName);
router.get("/:id", productController.getProductById);

//CREATE: CREAR REGISTRO/DOCUMENTO
router.post("/registrar", productController.postProduct);

//UPDATE: ACTUALIZAR REGISTRO/DOCUMENTO
router.put("/actualizar/:id", productController.updateProduct);

//DELETE: BORRAR REGISTRO/DOCUMENTO
router.delete("/borrar/:id", productController.deleteProduct);

module.exports = router;
