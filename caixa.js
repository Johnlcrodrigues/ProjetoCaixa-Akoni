const arrayCedula = []

function efetuar() {
    let elementoEfetuar = document.getElementById("saqueValor");
        let saldo = elementoEfetuar.value;

    if (saldo %5 == 0 ){
                
        if (saldo >= 100 ){               
            qtdeCedulas = Math.floor(saldo/100);
            saldo = saldo % 100;
            arrayCedula.push({qtdeCedulas: qtdeCedulas, valorNota: 100});
        }

        if (saldo >= 50 ){               
            qtdeCedulas = Math.floor(saldo/50);
            saldo = saldo % 50;
            arrayCedula.push({qtdeCedulas: qtdeCedulas, valorNota: 50});
        }       
        
        if (saldo >= 20 ){               
            qtdeCedulas = Math.floor(saldo/20);
            saldo = saldo % 20;
            arrayCedula.push({qtdeCedulas: qtdeCedulas, valorNota: 20});
        }       

        if (saldo >= 10 ){               
            qtdeCedulas = Math.floor(saldo/10);
            saldo = saldo % 10;
            arrayCedula.push({qtdeCedulas: qtdeCedulas, valorNota: 10});
        }     

        if (saldo >= 5 ){               
            qtdeCedulas = Math.floor(saldo/5);
            saldo = saldo % 5;
            arrayCedula.push({qtdeCedulas: qtdeCedulas, valorNota: 5});
        } 
        
        for (let i = 0; i < arrayCedula.length; i++) {
            window.alert(`Número de notas: ${arrayCedula[i].qtdeCedulas} e valor da nota: ${arrayCedula[i].valorNota}`);
        }
                    
    } else{
        window.alert('Só são possiveis saques de valores multiplos de 5 reais');
    }
};

