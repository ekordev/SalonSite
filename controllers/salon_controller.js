var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", (req, res) => {
  res.render("index", { data: "hello" });
});

router.get("/products", (req, res) => {
	db.Product.findAll({
		where: {
			brand: req.body.brand
		},
		attributes: ['name', 'size', 'price']
	}).then(function(data) {
		console.log(data);
		res.render("index", { data: "hello" });
	});  	
});




router.get("/services", (req, res) => {
  res.render("services", { data: "hello" });
});

router.get("/contactus", (req, res) => {
  res.render("contactus", {data: "hello"}); 
});

module.exports = router;