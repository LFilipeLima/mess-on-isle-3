const canvas = document.querySelector("#canvas");
const context = canvas.getContext('2d');

const collisonMap = []
const player = new Player();

const image = new Image();
image.src = "imagens/MAP.png";

const background = new Sprite({
    position: {
    x:-1300,
    y:-350,
    },
    image : image
})


//for (let i = 0;i<collison.length;i+=50){
 //collisonMap.push(collison.slice(i,70+i))
//}


canvas.width = 800
canvas.height = 480



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
playerImage = new Image() 
playerImage.src= "imagens/spr_tom.png"

       
       playerImage.onload = () =>{
        context.drawImage(playerImage,
            0,
            0,
           playerImage.width/4,
           playerImage.height/4,
            canvas.width/2 -playerImage.width/2,
            canvas.height/2-playerImage.height/2,
           playerImage.width/1.5,
           playerImage.height/1.5 ,) // Renderiza o player
    }



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
    playerImage.onload();

    
}
loop();




