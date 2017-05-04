// Dependencies
var restful 				= require('node-restful');

// Define the schema
var PessoaSchema = new restful.mongoose.Schema({
    nome        			: { type  : String, trim : true, required  : true },
    idade        			: { type  : Number, required  : true },
},
// Options
{
    timestamps: true
});

// Exports the model
module.exports = restful.model('Pessoa', PessoaSchema);
