e1 = document.getElementById('enlace_1');
e2 = document.getElementById('enlace_2');
e3 = document.getElementById('enlace_3');

function esconde(e){
    if(e.target.textContent == 'Ocultar Conteúdo'){
        content = document.getElementById('conteudo_' + e.target.id.substring(7));
        content.style.display = 'none';
        e.target.textContent = 'Mostrar Conteúdo';
    } else {
        content = document.getElementById('conteudo_' + e.target.id.substring(7));
        content.style.display = 'block';
        e.target.textContent = 'Ocultar Conteúdo';
    }
}

e1.addEventListener('click', esconde, false);
e2.addEventListener('click', esconde, false);
e3.addEventListener('click', esconde, false);
