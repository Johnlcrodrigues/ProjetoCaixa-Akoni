const arrayCedula = []
let exibir = "Saques:" ;
// Função para efetuar o saque
function efetuar() {
    let elementoEfetuar = document.getElementById("saqueValor");
        let saldo = elementoEfetuar.value;

//if de verificação se o valor sacado é divisivel por 5
    if (saldo %5 == 0 ){

//if de verificação de quantidade notas         
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
        
//for para passar o valor do array a variavel       
        for (let i=0;i<arrayCedula.length;i++) {
    
            exibir = exibir + `\n Número de notas: ${arrayCedula[i].qtdeCedulas} de: ${arrayCedula[i].valorNota} Reais`;
        }
        window.alert(exibir);   

//else caso não seja divisivel por 5 - tratamento dado para numeros não divisiveis   
    }else{
        window.alert('Só são possiveis saques de valores multiplos de 5 reais');
    }
};

