const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const url = "mongodb://127.0.0.1:27017/product-apis";

mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => {
	console.log(err);
});

db.once("open", (_) => {
	console.log("connected with db");
});

// module.exports = { db };
