const express = require("express");
const routes =express.Router();

//primeira rota

const productsController = require("./controllers/productsController");


routes.get("/products", productsController.index);
routes.post("/products",productsController.store);
routes.get("/products/:id",productsController.show);
routes.put("/products/:id",productsController.update);
routes.delete("/products/:id",productsController.destroy);

module.exports = routes;
//routes.get("/products",(req, res));
//products.create({
 //title :'API-Rest PAiwy',
 //description:'Api versao 1.0'
//});
//return res.send("hello Rocketseat");
//});
