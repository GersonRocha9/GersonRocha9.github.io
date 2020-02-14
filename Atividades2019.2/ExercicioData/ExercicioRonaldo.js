var ano;
var dia;
var mes;
var dataAtual = new Date();

var total;
var aniversario;

dia = prompt("Digite o dia:");
mes = prompt("Digite o mes:");
ano = prompt("Digite o ano:");


alert("Data atual:"+ dataAtual);
var dataNascimento = new Date(ano,mes,dia);
alert("Data de nascimento:"+ dataNascimento);
total = dataAtual - dataNascimento;
aniversario = new Date(total);
alert("Idade: "+ parseInt(aniversario/31557600000));
