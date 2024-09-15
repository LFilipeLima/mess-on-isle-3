
//Cria o "retangulo" da interface de batalha
var ataque2="blue";
var ataque1="red";  
var vidaInimiga=100;
var vida=100
var dano=""
function interfaceDaBatalha(){
    drawBarraDeAtaques();
    drawBarraDeVidaInimiga();
    drawBarraDeVida();

}

    

function drawBarraDeAtaques(){
    context.fillStyle='white';
    context.fillRect(0,450,1020,100);

    //botao do primeiro ataque:
    context.fillStyle=ataque1 ;
    context.fillRect(0,450,255,100);
    context.fillStyle='black';
    context.font = '30px Arial';
    context.fillText('Ataque 1', 50, 500);
    //botao do segundo ataque:
    context.fillStyle=ataque2;
    context.fillRect(255,450,255,100);
    context.fillStyle='black';
    context.font = '30px Arial';
    context.fillText('Ataque 2', 305, 500);
    //botao do terceiro Tipo do ataque:
    context.fillStyle='white';
    context.fillRect(510,450,255,100);
    context.fillStyle='black';
    context.font = '30px Arial';
    context.fillText('Dano:'+dano, 560, 500);
    
    
}
window.addEventListener('click', function(e){
    const x = e.clientX;
    const y = e.clientY;
    //0,450,255,100
    if(x>300&&x<555&&y>450&&y<550) {
        console.log('Ataque 1')
    }
    if(x>555&&x<810&&y>450&&y<550) {
        console.log('Ataque 2')
    }
    if(x>810&&x<1020&&y>450&&y<550) {
        console.log('Dano')
        ;
    }
window.addEventListener('mousemove', function(e){
    const x = e.clientX;
    const y = e.clientY;
    if(x>300&&x<585&&y>450&&y<550) {
        ataque1 = context.fillStyle='yellow';
        ataque2 = context.fillStyle='blue';
        dano='fogo'
       
    }
    else if(x>585&&x<810&&y>450&&y<550) {
        ataque2 = context.fillStyle='yellow';
        ataque1 = context.fillStyle='red';
        dano="agua"
    }
    else{
        ataque1 = context.fillStyle='red';
        ataque2 = context.fillStyle='blue';
        dano=""
    }
    
})})
function drawBarraDeVidaInimiga(){
    context.fillStyle='white';
    context.fillRect(0,0,200,50);
    context.fillStyle='black';
    context.font = '30px Arial';
    context.fillText('Vida: 100', 50, 40);
}
function drawBarraDeVida(){
    context.fillStyle='white';
    context.fillRect(800,400,300,40);
    context.fillStyle='black';
    context.font = '30px Arial';
    context.fillText('Vida: 1000', 850,430);
}
