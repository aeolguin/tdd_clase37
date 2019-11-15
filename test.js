const expect = chai.expect;


describe ("Testeadno la Clase Buscar marca", function(){
    it("resultado positivo de una marca", function(){
        var resultado = buscarMarca("Renault");
        expect(resultado).to.equal(true)
    })
    it("resultado nwgativo de una marca", function(){
        var resultado = buscarMarca("REAULT");
        expect(resultado).to.equal(false)
    })
})

describe ("Testeadno la Clase Buscar modelo", function(){
    buscarMarca("Renault");
    it("resultado positivo de un modelo", function(){
        buscarMarca("Renault");
        var resultado = buscarModelo("KWID");
        expect(resultado).to.equal(true)
    })
    it("resultado negativo de un modelo", function(){
        buscarMarca("Renault");
        var resultado = buscarModelo("REAULT");
        expect(resultado).to.equal(false)
    })
})

