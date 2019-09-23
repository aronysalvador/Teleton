var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var schema3 = new Schema({
    nameCard: {type:String, require: true},
    cardNumber: {type:String, require: true},
    segurityNumber: {type:String, require: true},
    expDate: {type:String, require: true},
    card: {type:String, require: true}
});


module.exports = mongoose.model('DataCart',schema3);