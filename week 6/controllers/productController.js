const express = require("express");
const Product = require("../models/product");

async function createProduct(req, res) {
	try {
		console.log(req.body);
		const product = await Product.create(req.body);
		res.status(200).json({ status: "ok", product: product });
	} catch (error) {
		res.status(505).json({ status: "error", error: error });
	}
}
async function getProduct(req, res) {
	try {
		// console.log(req.body);
		//
		const product = await Product.find();
		res.status(200).json({ status: "ok", "status-code": 200, result: product });
	} catch (error) {
		res.status(505).json({ status: "error", error: error });
	}
}

module.exports = { getProduct, createProduct };
