const arrayCedula = []

function efetuar() {
    let elementoEfetuar = document.getElementById("saqueValor");
   
   
   
     let resto = elementoEfetuar.value % 5;
    /*
    console.log(resto);
    if (resto == 0 ){
        console.log("teste passed")
        
    } else{

        window.alert('Só são possiveis saques  de valores multiplos de 5 reais');
*/

while (saldo > 0) {

switch (saldo) {
    case (saldo >100):
        qtdeCedulas = int(saldo/100);
        saldo = saldo % 100
        arrayCedula.push[qtdeCedulas,100]
        
    case (saldo >50):
        qtdeCedulas = int(saldo/50);
        saldo = saldo % 50;
        arrayCedula.push[qtdeCedulas,50];
            
    case (saldo >20):
        qtdeCedulas = int(saldo/20);
        saldo = saldo % 20;
        arrayCedula.push[qtdeCedulas,20];
            
    case (saldo >10):
        qtdeCedulas = int(saldo/10);
        saldo = saldo % 10
        arrayCedula.push[qtdeCedulas,10]

    case (saldo >5):
        qtdeCedulas = int(saldo/5);
        saldo = saldo % 5;
        arrayCedula.push[qtdeCedulas,5];
                
            
    default:





}

console.log(arrayCedula[1.1]);
   
};

