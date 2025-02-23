import './style.css'

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const BACKGROUND_COLOR = "0xfff000";

let frameId = 0;

function setup(){
  window.onresize = handleResize;
}

function init(){
  frameId = requestAnimationFrame(animFrame);
}

function animFrame(){
  frameId = requestAnimationFrame(animFrame);
  update();
  render();
}

function update(){
  
}

function render(){
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function handleResize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.onload = () => {
  setup();
  init();
}
