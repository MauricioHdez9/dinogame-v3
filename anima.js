let x=0,y=0;
let animacion = document.getElementsByClassName("player");
function MoveBall(e, player) {
  const $player = document.querySelector(player);
  // console.log(e.keyCode);
  // console.log(e.key);
  limplayer = $player.getBoundingClientRect();
  //console.log(limplayer)
  // const move = (direction) => { };
  switch (e.keyCode) {
    case 37:
      //move("letf")
      volver();
      x--;

      break;
    case 38:
      //move("up")

      y--;

      break;
    case 39:
      cambiar();
      x++;

      break;
    case 40:
      //move("down")
      y++;

      break;

    default:
      break;
  }
  $player.style.transform = `translate(${x * 5}px,${y * 5}px)`;
}
function cambiar() {
  document.getElementById("player").src = "./dino.png";
  let element = document.getElementById("player");
    element.style.background = "url('./dino.png')"
}

function volver() {
    console.log('esta entrado y tiene que voltearse');
    let element = document.getElementById("player");
    element.style.background = "url('./dino2.png')"
}
document.addEventListener("keydown",e =>{
    
    MoveBall(e,".player")
    // Movepantalla(e,"#player")
})