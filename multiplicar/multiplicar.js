// requireds 
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=============================='.green);
    console.log(`====Tabla de ${base} =========`.green);
    console.log('=============================='.green);

    for (var i = 1; i <= limite; i++) {
        console.log(`${base}X${i}: ${ i*base}\n`.green);
    }
}



let crearArchivo = (base, limite = 10) => {

    console.log('=============================='.green);
    console.log(`====Tabla de ${base} =========`.green);
    console.log('=============================='.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';

        for (var i = 1; i <= limite; i++) {
            data += `${base}X${i}: ${ i*base}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}