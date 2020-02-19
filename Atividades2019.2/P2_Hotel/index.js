function Calculo(){

  var dc = new Date(document.getElementById("data-chegada").value);
  var ds = new Date(document.getElementById("data-saida").value);
  var aux_ds = ds.getTime();
  var aux_dc = dc.getTime();
  var aux_dc = aux_dc/ (1000 * 3600 * 24);
  var aux_ds = aux_ds/ (1000 * 3600 * 24);
  var dias = 0;
  var dias = aux_ds - aux_dc;
  var quarto = document.getElementById("Quartos").value;
  var valor_quarto = 0;
  var criancas = document.getElementById("Criancas").value;
  var aux = 0;
  var total = 0;

  if (quarto == "Single") {
      valor_quarto = 139;
    } else {
      if (quarto == "Double") {
        valor_quarto = 220;
      } else {
        if (quarto == "Triple") {
          valor_quarto = 340;
        } else {
          alert('O quarto não é válido. Verifique os nomes e preencha corretamente.')
        }
      }
    }

  if (criancas >= 0) {
    aux = criancas * 30;
  } else {
    alert('Quantidade de crianças inválidas. Verifique e preencha novamente.')
  }

  if(dias <= 0){
    alert('Informe a data de saída um dia após a data de entrada.');
  }else {
    total = (valor_quarto + aux) * dias;
    alert('Valor Total: ' + total + ',00');
  }
}
