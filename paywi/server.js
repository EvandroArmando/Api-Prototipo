const express= require('express');
const mongoose= require('mongoose');
const cors = require('cors');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o Db
mongoose.connect('mongodb://localhost:27017/meubanco', {useNewUrlParser: true, useUnifiedTopology: true});
require("./src/models/products");

//const  products= mongoose.model('products');


//na criaçao
//app.get("/", (req, res) => {
//products.create({
 //title :'API-Rest PAiwy',
 //description:'Api versao 1.0'
//})
 //return res.send("ola mundo")
//});
//rotas
app.use("/api", require("./src/routes"));

app.listen(3001);