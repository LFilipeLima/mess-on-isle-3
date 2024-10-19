
const canvas = document.querySelector("#canvas");
const context = canvas.getContext('2d');
const collisonMap = []
const player = new Player();

const image = new Image();
image.src = "imagens/TESTE.png";

const background = new Sprite({
    position: {
      x: -1150,
      y:-350,
    },
    imagem: "imagens/TESTE.png"
  })


//for (let i = 0;i<collison.length;i+=50){
 //collisonMap.push(collison.slice(i,70+i))
//}





context.fillStyle='white';
context.fillRect(0,0,canvas.width,canvas.height);

function renderizaMapa(){
image.onload =  () => 
{
    context.drawImage(image,144,144) //Renderiza a imagem do mapa
}
}

const keys={
    w:{
        pressed:false
    },
    s:{
        pressed:false
    },
    d:{
        pressed:false
    },
    a:{
        pressed:false
    }
}

canvas.width = 1020
canvas.height = 550
const batalhao = true // ativa a batalha

function loop(){
    window.requestAnimationFrame(loop);
    player.movePlayer();
    background.draw()
    if(keys.w.pressed){
       background.position.y+=3
    }
    else if(keys.s.pressed){
       background.position.y-=3
    }
    else if(keys.a.pressed){
       background.position.x+=3
    }
    else if(keys.d.pressed){
       background.position.x-=3
    }   
    player.draw();
    if (batalhao){
        battleLoop();

    }

    
}
loop();




