function Calcular() {

    /*
    ir buscar o valor
    criar um texto vazio que vai ser atualizar com a taboada
    add sequenciamente ao texto vazio o resultado de cada calculo
    apresentar o texto completo da taboada.
    */
   var valor = parseInt(document.getElementById('valor').value);
   var texto = '';

   for(var i = 1;  i <= 10; i++){
       texto = texto + i.toString() + 
               ' x ' + valor.toString() + 
               ' = ' + (i*valor).toString() +
               ' <br> ';
               
                
              
    }

   document.getElementById('resultado').innerHTML = texto;
}




