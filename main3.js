
var marcaFiltrada = []
var modeloFiltrado = ""
var buscarMarca = function (valor){

    marcaFiltrada = marcas.filter(resto => 
        valor === resto
    )
    console.log(marcaFiltrada)
    if(marcaFiltrada.length == 0){
        console.log("no existe marca");
        return false
    }

    return true;

    /*for(let i=0;i<marcas.length; i++){
        if(valor == marcas[i]){
            console.log(marcas[i]);
            marcaFiltrada = marcas[i];
            return true;
        }else {
            console.log("no existe marca");
        }
    }
    return false;*/
}

var buscarModelo = function (marcaFiltrada, valor){

    if(!(marcaFiltrada == "FORD")){
        console.log("no es Ford");
    }else{
        for(let i=0;i<modelosFord.length; i++){
            if(valor == modelosFord[i]){
                console.log(modelosFord[i]);
                modeloFiltrado = modelosFord[i];
                return true;
            }else {
                console.log("no existe ese modelo");
                return false;
            }
        }
    }
}