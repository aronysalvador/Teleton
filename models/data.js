var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var schema2 = new Schema({
    name: {type:String, require: true},
    addres: {type:String, require: true},
    city: {type:String, require: true},
    region: {type:String, require: true},
    country: {type:String, require: true},
    phone: {type:String, require: true}
});


module.exports = mongoose.model('Data',schema2);
