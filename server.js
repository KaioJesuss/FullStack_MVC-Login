const express =  require('express');
const routerHome = require("./routes/homeRoute");
const server = express();

server.set("view engine", 'ejs')

server.use(express.urlencoded({extended: true}));

server.use("/", routerHome);

server.listen(4000, function(){
    console.log("Servidor web em funcionamento");
})