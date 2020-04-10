const mongoose =require('mongoose');
const mongoosePaginate = require ('mongoose-paginate')

const productsShema = new mongoose.Schema({
   title: {
    type :String,
   require:true,
},
description: { 
  type: String,
  require:true,  
}
});
productsShema.plugin(mongoosePaginate);
mongoose.model('products', productsShema);