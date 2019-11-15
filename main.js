
var restore = new Object();

var buscarMarca = function (marca) {
    restore.marca = Autos.hasOwnProperty(marca) ? marca : null;

    return (Autos.hasOwnProperty(marca));

    // let resultado = marcas.filter(valor => valor === marca)
    // return (resultado.length === 0 ? false : true);
    
    //     if (!(resultado.length === 0)){
    //     console.log(resultado[0])
    //     return true;
    // }
    // console.log("no existe la marca");
    // return false;
    // for(let i=0;i<marcas.length; i++){
    //     if(marca === marcas[i]){
    //         console.log(marcas[i]);
    //         return true;
    //     }
    // }
    // console.log("no existe la marca")
    // return false;
}

var buscarModelo = function(modelo) {
    console.log(restore)
    let resultado = Autos[`${restore.marca}`].filter(valor => valor === modelo);
    restore.modelo = (resultado.length === 0) ? null : modelo;
    return (resultado.length === 0) ? false : true;
}

