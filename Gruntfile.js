module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-forever');
    grunt.initConfig({
        // cargar el plugin de forever
        
        forever:{
            servicio:{
                options:{
                    index: 'express/basico_express.js'
                }
                
            }
        }
    
        

       
    });

    

    //Tarea por omisión: generar la documentación
    
};