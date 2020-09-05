
//usar el file system
const fs = require('fs'); //libreria nativa de node org
const colors = require('colors');


let listarTabla = (base, limite)=>{

    for(let i = 1; i<=limite; i++){
        console.log(`${i}*${base}=${i*base}`.green);
    }
}


let crearArchivo  = (base,limite= 10)=> {
    return new Promise((resolve, reject) => {

        if(!Number(base)) {
            reject('No es un numero =>'+base);
            return;
        } 

            let data = '';

            for (let i = 1; i<=limite; i++){
                //console.log(`${i} * ${base} = ${i*base}`);
                data +=`${i} * ${base} = ${i*base} \n`;
            }

            //asi se crea un 
            fs.writeFile(`tablas/tablaDel${base}Hasta${limite}.txt`, data, (err) => {
                if (err) reject(err);
                resolve(`The file has been saved! tabla del ${base} hasta ${limite}` );
            });
        
    } );
}


//elementos que yo deseo usar de forma global

module.exports = {
    crearArchivo,
    listarTabla
}

