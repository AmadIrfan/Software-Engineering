const express = require("express");
const Product = require("../models/product");

async function createProduct(req, res) {
	try {
		const product = await Product.create(req.body);
		res.status(200).json({ status: "ok", message: "Created", result: product });
	} catch (error) {
		res.status(505).json({
			status: "error",
			message: "here is error",
			error: error.message,
		});
	}
}
async function updateProduct(req, res) {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndUpdate(id, req.body);
		res.status(200).json({ status: "ok", message: "updated", result: product });
	} catch (error) {
		res.status(505).json({
			status: "error",
			message: "here is error",
			error: error.message,
		});
	}
}
async function getProduct(req, res) {
	try {
		const product = await Product.find();
		res
			.status(200)
			.json({ status: "ok", message: "successful", result: product });
	} catch (error) {
		res.status(505).json({
			status: "error",
			message: "here is error",
			error: error.message,
		});
	}
}
async function deleteProduct(req, res) {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndDelete(id);
		res.status(200).json({ status: "ok", message: "deleted", result: product });
	} catch (error) {
		res.status(505).json({
			status: "error",
			message: "here is error",
			error: error.message,
		});
	}
}

module.exports = { getProduct, createProduct, updateProduct, deleteProduct };
