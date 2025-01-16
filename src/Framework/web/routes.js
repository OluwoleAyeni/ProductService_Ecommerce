const express = require("express");
const ProductController = require("../../Interface/Controller/ProductController");
const { productRepository, Usecase } = require("../../main");

const router = express.Router();
const productController = new ProductController(Usecase);

router.post("/products", (req, res) => productController.addProduct(req, res));
router.get("/products", (req, res) =>
  productController.getAllProducts(req, res)
);
router.get("/products/:id", (req, res) =>
  productController.getProductById(req, res)
);

module.exports = router;
