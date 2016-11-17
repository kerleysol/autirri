var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/autirri')

Farmer = require('./models/farmer')


app.get('/', function (req, res) {
	res.send("Autirri - Kerley Dantas");
});

app.get('/farmer', function (req, res) {
	Farmer.getFarmers(function(err, farmers){
		if(err){
			throw err;
		}
		res.json(farmers);
	});
})

app.get('/farmer/:_id', function (req, res) {
	Farmer.getFarmerById(req.params._id, function(err, farmer){
		if(err){
			throw err;
		}
		res.json(farmer);
	});
})

app.post('/farmer', function (req, res) {
	var farmer = req.body;
	Farmer.addFarmers(farmer, function(err, farmer){
		if(err){
			throw err;
		}
		res.json(farmer);
	});
})

app.put('/farmer/:id', function (req, res) {
	var id = req.params.id;
	var farmer = req.body;
	console.log(id)
	Farmer.updateFarmer(id, farmer, {}, function(err, farmer){
		if(err){
			throw err;
		}
		res.json(farmer);
	});
})


app.listen(3000);
console.log("Running on port 3000...")