let scroll = document.getElementById('html')
const player = document.getElementById("player");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background");
const buttonPlayStop = document.getElementById("buttonPlayStop");
let check= 0;
let x=0,y=0;
let scoreintervalId
let score= 0; 
function inicio()
{
    console.log('esto entra n');
    
     window.scrollTo(0,0);
}
inicio();


document.addEventListener("click",function () {
    player.classList.add("playerJump");
})  


player.addEventListener('animationend',() => {
    player.classList.remove("playerJump");
});

function stopanimation()
{
    cactus.style.animationPlayState = 'paused'
    player.style.animationPlayState = 'paused'
    background.style.animationPlayState ='paused'
     

}
function stopscore()
{
    clearInterval(scoreintervalId)
    clearInterval(scoreintervalId)

}
function resumencore()
{
    scoreintervalId = setInterval(()=>
    {
        score++
        document.getElementById("score").innerText = score

    },1000)


}
function pausegame()
{
    stopscore();
    stopanimation();
    stopscore();
    
    
     
     
}
function resumengame()
{
    resumencore();
     cactus.style.animationPlayState = 'running'
     player.style.animationPlayState = 'running'
     background.style.animationPlayState ='running'
    //  resumencore();
     
}


// buttonPlayStop.addEventListener('click', () => {
//     if (buttonPlayStop.classList.contains("play")) {
//         resumengame();
//     } 
//     else {
        
//         pausegame();
//     }
//     buttonPlayStop.classList.toggle("play");
// })

//---- score ---------------------------------------------------------------------------------------- 

// scoreintervalId = setInterval(()=>
// {
//     score++
//     document.getElementById("score").innerText = score

// },1000)
//---- colisiones  ---------------------------------------------------------------------------------------- 
//  limtplayer = $player.getBoundingClientRect();
//  limtcactus = cactaus.getBoundingClientRect();
// console.log(limtcactus,limtplayer)

//------movimiento de personaje -------------------------------------------------------------------------------------------------
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
//keydown
//keyup 
//keyprest
//--------Movimiento de pantalla ---------------------------------------------------------------------------------------------------------
function Movepantalla(e,player)
{
    
   
    
      let $player=document.getElementById('player')
    
     
    // $back=document.getElementById('background')
        
        
    //const play=document.getElementById('player')
    limplayer=$player.getBoundingClientRect();
    // limback=$back.getBoundingClientRect();
    // console.log(limback.x);
    console.log("player",parseInt(limplayer.x) );
    if (parseInt(limplayer.x)%500==0)
    {
        console.log("esto se esta moviendo");
        document.getElementById('html').scrollLeft += 20;
        limplayer.x += 15
        console.log("nuevo limite ",limplayer.x);
    }
}
document.addEventListener("keydown",e =>{
    
    MoveBall(e,".player")
    Movepantalla(e,"#player")
})


