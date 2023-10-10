const express = require("express");
const product = require("./routes/product");
const bodyParser = require("body-parser");

const db = require("./utils/db");

const app = express();

require("dotenv").config();

app.use(bodyParser.json());
const port = 3000;

app.get("/", (req, res) => {
	res.send("welcome to my app ");
});

app.use("/store", product);

app.get("/welcome", (req, res) => {
	res.send("welcome Amad Irfan ");
});

app.listen(port, () => {
	console.log(process.env.PORT);
	console.log(`server is running on port ${port}`);
});
