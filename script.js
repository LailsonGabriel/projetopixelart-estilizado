
const colorpalette = document.querySelectorAll('#color-palette .color');
const black = document.querySelector('.black');
const tomato = document.querySelector('.tomato');
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const pixelboard = document.querySelectorAll("#pixel-board .pixel");
const pixelpai = document.querySelector("#pixel-board")
const pixel = document.querySelectorAll(".pixel");
const botao = document.querySelector('#clear-board');
let input = document.querySelector('#board-size');
let vqv = document.querySelector('#generate-board');

function addClasse() {
for (let i = 0; i < colorpalette.length; i += 1) {
    colorpalette[i].addEventListener('click', function () {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    })
  }
}

addClasse();

function removeClass () {
  for(let i = 0; i < colorpalette.length; i += 1) {
    colorpalette[i].addEventListener('dblclick', function (){
      event.target.classList.remove('selected')
    })
  }
  }


function pintar() {
  for (let i = 0; i < pixelboard.length; i += 1) {
    pixelboard[i].addEventListener('click', function() {
      let stilo = getComputedStyle(document.querySelector('.selected'));
      pixelboard[i].style.backgroundColor = stilo.backgroundColor;
    })
  }
}

pintar()

function resetar () {
  for (let i = 0; i < pixelboard.length; i += 1) {
    pixelboard[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

botao.addEventListener('click', resetar)

function criarPixel(){
  let criarPixel = document.createElement('div');
  pixelpai.appendChild(criarPixel).className = "pixel";
}

function linha (){
  pixelpai.innerText = '';
  let numberrow = document.getElementById('board-size').value;
  parseInt.numberrow;
  let novoNumber = numberrow * numberrow;
  console.log(numberrow);
  let inputline;
  if(numberrow === '') {
    alert('Board Inválido!');
  }
  else if(numberrow > 50) {
    novoNumber = 50 * 50;
  }
  else if(numberrow < 5) {
    novoNumber = 5 * 5;
  }
  for(let i = 0; i < novoNumber; i += 1) {
    inputline += criarPixel();
  }; 
  for(let index = 0; index < novoNumber; index += 1) {
    inputline;
  }
  pintar()
}

vqv.addEventListener('click', linha, pintar());

pintar()


function gerar_cor(opacidade = 1) {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  
  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

function atribuirCor() {
  let random = document.querySelectorAll('.random');
  for(let i = 0; i < random.length; i += 1) {
    random[i].style.backgroundColor = gerar_cor(1);
  }
}

atribuirCor()