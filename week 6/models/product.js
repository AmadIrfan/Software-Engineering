const mongo = require("mongoose");

const productModels = new mongo.Schema(
	{
		name: {
			type: String,
		},
		description: {
			type: String,
			// required: true,
		},
		price: {
			type: Number,
			// required: true,
		},
	},
	{ timestamps: true }
);
module.exports = mongo.model("product", productModels);
