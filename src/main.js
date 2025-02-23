import './style.css'

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const BACKGROUND_COLOR = "#dddddd";

const pointer = {
  pressed: false,
  down: false,
  position: {x: 0, y: 0},
}

const ball = {
  position: {x: 0, y: 0},
  image: null,
  setup: function() {
    this.image = new Image();
    this.image.src = "data:image/png;base64,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";
  },
  radius: 80,

}

let frameId = 0;


function onResize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function onPointerDown(e){
  pointer.pressed = true;
  pointer.position.x = e.clientX;
  pointer.position.y = e.clientY;
}

function onPointerMove(e){
  if (pointer.pressed) pointer.down = true;
  pointer.position.x = e.clientX;
  pointer.position.y = e.clientY;
}

function onPointerUp(e){
  pointer.pressed = false;
  pointer.down = false;
  pointer.position.x = e.clientX;
  pointer.position.y = e.clientY;
}

function setup(){
  window.onresize = onResize;
  window.onpointerdown = onPointerDown;
  window.onpointermove = onPointerMove;
  window.onpointerup   = onPointerUp;

  ball.setup();
}

function init(){
  frameId = requestAnimationFrame(animFrame);
}

function animFrame(){
  frameId = requestAnimationFrame(animFrame);
  update();
  render();
}

function processInput(){

}

function update(){
  if (pointer.down){
    ball.position.x = pointer.position.x;
    ball.position.y = pointer.position.y;
  }
}

function render(){
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  ctx.drawImage(ball.image, ball.position.x - ball.radius / 2, ball.position.y - ball.radius / 2);
}


window.onload = () => {
  onResize();
  setup();
  init();
  
}
