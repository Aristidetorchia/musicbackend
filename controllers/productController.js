const { validationResult } = require("express-validator");
const Product = require("../models/Product");

//Lista de productos (READ)
const getProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ products, msg: "Ok" });
};

//Obtener un producto por ID
const getProductById = async (req, res) => {
  // console.log(req.params.id);
  // const product = db.find((usuario) => usuario.id == req.params.id);

  const product = await Product.findById(req.params.id);

  if (product !== undefined && product !== null) {
    res.status(200).json({ product: product, msg: "ok" });
  } else {
    res
      .status(404)
      .json({ product: null, msg: "El producto no ha sido encontrado" });
  }
};

//Obtener un producto por nombre producto
const getProductByName = (req, res) => {
  console.log(req.params.id);
  const product = db.find((usuario) => usuario.productname == req.query.productname);

  if (product !== undefined && product !== null) {
    res.status(200).json({ product: product, msg: "ok" });
  } else {
    res
      .status(404)
      .json({ product: null, msg: "El nombre de producto no ha sido encontrado" });
  }
};

//Crear un nuevo producto (CREATE)
const postProduct = async (req, res) => {
  try {
    const validationError = validationResult(req.body);
    if (validationError.isEmpty()) {
      const product = new Product(req.body);
      await product.save();

      res.status(201).json({
        product: product.productname,
        msg: "El producto ha sido creado exitosamente",
      });
    } else {
      res.json(400).json({ msg: " Error en el registro del producto" });
    }
  } catch (error) {
    res.status(500).json({
      product: null,
      msg: "Hubo un error al crear el producto- " + error.message,
    });
  }
};

//actualizar producto (UPDATE)
const updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ msg: "Producto actualizado" });
  } catch (error) {
    req.status(500).json({ msg: "Error al actualizar - " + error.message });
  }
};

//eliminar producto (DELETE)
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar -" + error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  getProductByName,
  postProduct,
  updateProduct,
  deleteProduct,
};
