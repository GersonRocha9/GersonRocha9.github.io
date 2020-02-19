window.addEventListener("load", function () {
	var lampada = document.getElementById('lamp').addEventListener("click", Lampada);
	var botao = document.getElementById('add').addEventListener("click", adicionarItem);
});

function Lampada() {
	var lampada = document.getElementById('lamp');
	if (lampada.src.match("lampada_on.gif")) {
		lampada.src = "lampada_off.gif";
	} else {
		lampada.src = "lampada_on.gif";
	}
}
