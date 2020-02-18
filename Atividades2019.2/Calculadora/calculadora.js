
function digita(e){
  display = document.getElementById('calc-output');
  if(e.path[0].value == '='){
      display.textContent = eval(display.textContent);
  } else if (e.path[0].value == 'C'){
      display.textContent = '0';
  } else {
      if (display.textContent == '0'){
          display.textContent = '';
      }
      display.textContent += e.path[0].value;
  }
}

btns = document.getElementsByTagName('input')

for(i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', digita, false);
}
