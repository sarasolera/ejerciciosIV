var express = require('express')
var app = express();
var port = process.env.PORT || 8080

app.get('/',function(req,res){
    res.send({"Inicio":"Esta ruta suele tener la página de inicio"})
});

const fecha = new Date();
app.get('/dia',function(req,res){
    
    res.send({"Hoy es dia " : fecha.getDate()})
 
});

app.get('/anio',function(req,res){
    res.send({"Año ": fecha.getFullYear()})
})
app.listen(port);
console.log('Server running at http://127.0.0.1:'+port+'/');

module.exports = app;