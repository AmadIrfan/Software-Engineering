const express = require("express");
const router = express.Router();
const {
	createProduct,
	getProduct,
	deleteProduct,
	updateProduct,
} = require("../controllers/productController");
const { updateMany } = require("../models/product");

router.post("/product", createProduct);
router.get("/product", getProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateProduct);

module.exports = router;
