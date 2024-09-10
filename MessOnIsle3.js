import Player from 'data\player.js'
const canvas = document.querySelector("#canvas");
const context = canvas.getContext('2d');
const collisonMap = []
const player = new Player();
for (let i = 0;i<collison.length;i+=50){
 collisonMap.push(collison.slice(i,70+i))
}
console.log(collisonMap)

canvas.width = 800
canvas.height = 480



context.fillStyle='white';
context.fillRect(0,0,canvas.width,canvas.height);
function renderizaMapa(){
const image= new Image()
image.src = 'imagens/MAP.png'

image.onload =  () => 
{
    context.drawImage(image,0,0) //Renderiza a imagem do mapa
}
}




function loop(){
    requestAnimationFrame(loop);
    renderizaMapa();
    player.renderPlayer();

    
    
}
loop();

