const notasFinais = 6;
const faltas = 2;
const advertencias = 0;


if(notasFinais < 7 && faltas > 4){
    console.log('Reprovado, boas festas!');
}else{
    console.log('Não foi reprovado por faltas')
}


if(faltas >= 2 && !advertencias){
    console.log('Recebeu bônus');
}else{
    console.log('Não recebeu bônus')
}