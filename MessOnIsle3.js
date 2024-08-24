const canvas = document.querySelector("#canvas");
const context = canvas.getContext('2d');

canvas.width = 800
canvas.height = 480


context.fillStyle='white';
context.fillRect(0,0,canvas.width,canvas.height);

const image= new Image()
image.src = 'imagens/MAP.png'
console.log(image)

image.onload =  () => {
    context.drawImage(image,0,0);
    
}


            

    
    
    


function loop(){
    requestAnimationFrame(loop)
    
}

loop()
