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



function loop(){
    window.requestAnimationFrame(loop);
    player.movePlayer();
    background.draw()
    if(keys.w.pressed){
       background.position.y+=33
    }
    else if(keys.s.pressed){
       background.position.y-=33
    }
    else if(keys.a.pressed){
       background.position.x+=32
    }
    else if(keys.d.pressed){
       background.position.x-=32
    }   
    player.draw();

    
}
loop();




