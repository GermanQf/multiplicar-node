
//asi se importa un archivo que se esté usando
/*Se usará el yargs para usar la CM
*/

const argv = require('./config/yargs').argv;
const colors = require('colors');


const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar'); //destructuracion
//const multiplicar  = require('./multiplicar/multiplicar'); //importar directamente

//let base = '5l';
//console.log(process)  informacion del sistma operativo
//console.log(process.argv);
//se llama la promensa

let argv2 = process.argv;

//console.log(argv);

let comando = argv._[0];


switch (comando){

      case 'listar':
            listarTabla(argv.base,argv.limite)
      break;

      case 'crear':
            crearArchivo(argv.base,argv.limite)
                  .then (resp => {console.log(resp)})
                  .catch (err => {console.log(err)});
      break;

      default:
            console.log('ninguno')
}




//console.log('limite',argv.limite);
//console.log(argv2);

/*let param = argv[2]; //se toma de la segunda posición porque ahi empieza el valor del parámetro.
//console.log(param);
let base = param.split('=');
base = base[1];
console.log(base);*/


//otra forma de llamarlo es multiplicar.crearArchivo()

/*crearArchivo(base)
      .then (resp => {console.log(resp)})
      .catch (err => {console.log(err)});*/







//requerir paquetes