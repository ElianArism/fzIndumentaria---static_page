//====================== 
//        PUERTO 
//====================== 
process.env.PORT = process.env.PORT || 3000; 
//====================== 
//       ENTORNO 
//====================== 

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; 

//====================== 
//        DB URL  
//====================== 

let urlDB = (process.env.NODE_ENV === 'dev') ? 'mongodb://localhost:27017/fz_indumentaria' : process.env.MONGO_URLDB; 

process.env.URLDB = urlDB; 