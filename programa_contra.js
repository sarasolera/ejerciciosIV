const { Etcd3 } = require('etcd3');
const cliente = new Etcd3();
//vamos a captar la contraseña desde la terminar


(async () =>{
    
    //captamos valor contraseña con cliente.get
    const valorCon = await cliente.get('nuevaCon').string();
     //mostramos esa costaseña
    console.log("La contraseña captada es:",valorCon);
    
     await cliente.delete().all();
        

})();



