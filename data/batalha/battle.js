const canvas = document.querySelector("#canvas");
const context = canvas.getContext('2d');

canvas.width = 1020
canvas.height = 550
//background da batalha:
const backgroundBattleIMG = new Image();
backgroundBattleIMG.src = "/imagens/battleBackground.png";
const battleBackground = new Sprite({
    posicao: {
        x: 0,
        y: 0
    },
    image: backgroundBattleIMG})

const draggle = new monstros(inimigos.mosquito);
const emby = new monstros(frutas.maca);
var renderizarSprites = [draggle,emby];

const batalhaUI = new interfaceBatalha(ataque.Fireball.nome,ataque.Waterfall.nome,
    ataque.Fireball.dano,ataque.Waterfall.dano,emby.getVida());



function battleLoop() {
    window.requestAnimationFrame(battleLoop);
    battleBackground.draw();
    batalhaUI.drawBarraDeAtaques();
    emby.draw();
    draggle.draw();
    
      
    
    
}
window.addEventListener('click',(e)=>{
    const x = e.clientX;
    const y = e.clientY;
    if(x>450&&x<705&&y>450&&y<550){//primeiro ataque
        console.log("Primeiro Ataque")
        emby.ataque(ataque.Fireball,draggle,4);
      
    }
    if(x>705&&x<1000&&y>450&&y<550) { //segundo ataque
        console.log("Segundo ataque")
    }})
function limparMapa(){
    
}
battleLoop();