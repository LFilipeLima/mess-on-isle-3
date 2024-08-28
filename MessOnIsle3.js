const canvas = document.querySelector("#canvas");
const context = canvas.getContext('2d');
const collisonMap = []
for (let i = 0;i<collison.length;i+=50){
 collisonMap.push(collison.slice(i,70+i))
}
console.log(collisonMap)
canvas.width = 800
canvas.height = 480



context.fillStyle='white';
context.fillRect(0,0,canvas.width,canvas.height);

const image= new Image()
image.src = 'imagens/MAP.png'

const playerImage = new Image();
playerImage.src = 'imagens/spr_tom.png'

image.onload =  () => 
{
    context.drawImage(image,0,0) //Renderiza a imagem do mapa
    context.drawImage(playerImage,
        0,
        0,
        playerImage.width/4,
        playerImage.height/4,
        canvas.width/2 - playerImage.width/2,
        canvas.height/2-playerImage.height/2,
        playerImage.width/4,
        playerImage.height/4,) // Renderiza o player
}

    


function loop(){
    requestAnimationFrame(loop);
    image.onload();
    
}
loop()
