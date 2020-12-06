const request  = require('supertest');
const app = require("../express/basico_express.js");


describe("GET /dia",function(){
    it("Deberia devolvernos el dia actual",function(done){
        //esperamos que la respuesta sea json
        request(app).get('/dia').expect('Content-Type',/json/).expect(200,done);

    });
});



describe("GET /anio",function(){
    it("Deberia devolvernos el año en formato json",function(done){
        //esperamos que la respuesta sea json
        request(app).get('/anio').expect('Content-Type',/json/).expect(200,done);

    });
});
