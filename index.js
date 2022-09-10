

hola = () => {
    console.log('Hola mundo!!!');
    return 1;
}

holaPersonalizado = (nombre) =>  {
    console.log(`Hola ${nombre}`);
    return 1;
}

holaAlCursoNPM = () => {
    console.log('Hola al curso de NPM!!');
    return 1;
}

module.exports = {
    hola: hola,
    holaPersonalizado: holaPersonalizado,
    holaAlCursoNPM: holaAlCursoNPM
}




// module.export = {
//     hola: hola,
//     holaPersonalizado: holaPersonalizado,
//     holaAlCUrsoNPM: holaPersonalizado
// }