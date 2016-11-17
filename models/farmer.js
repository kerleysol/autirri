var mongoose = require('mongoose')

var farmerSchema = mongoose.Schema = ({
	name: {
		type : String,
		require : true
	},
	username: {
		type : String,
		require : true
	},
	password:  {
		type : String,
		require : true
	},
	email:  {
		type : String,
		require : true
	},
});

var Farmer = module.exports = mongoose.model('Farmer', farmerSchema);


module.exports.getFarmers = function (callback, limit){
	Farmer.find(callback).limit(limit);
};

module.exports.getFarmerById = function (id, callback){
	Farmer.findById(id, callback);
};

module.exports.addFarmers = function (farmer, callback){
	Farmer.create(farmer, callback);
};

module.exports.updateFarmer = function (id, farmer, options, callback){
	var query = {_id :id};
	var update = {
		name : farmer.name,
		username : farmer.username,
		password : farmer.password,
		email : farmer.email
	}
	Farmer.findOneAndUpdate(query, update, options, callback);
};
