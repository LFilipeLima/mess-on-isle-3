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
    batalhaUI.drawBarraDeVida();batalhaUI.drawBarraDeVidaInimiga()
    emby.draw();
    draggle.draw();
    
}
window.addEventListener('click',(e)=>{
    const x = e.clientX;
    const y = e.clientY;
    if(x>225 && x<500 && y>450 && y<550){//primeiro ataque
        emby.ataque(emby.ataques[0],draggle,4);
        batalhaUI.vidaInimiga -= emby.ataques[0].dano
        ataqueInimigo();
        }
    if(x>484&&x<738&&y>450&&y<550){//primeiro ataque
            emby.ataque(emby.ataques[1],draggle,4);
            batalhaUI.vidaInimiga -= emby.ataques[1].dano
            ataqueInimigo();
            }
    })
window.addEventListener('mousemove',(e)=>{
    const x = e.clientX;
    const y = e.clientY;

    if(x>225 && x<478 && y>450 && y<550 ){//primeiro ataque
        batalhaUI.ataque2 = 'blue'
        batalhaUI.ataque1 = 'Yellow'
        batalhaUI.nomeDano=""
        batalhaUI.nomeDano=ataque.Fireball.dano;
    }
    if(x>484&&x<738&&y>450&&y<550) { //segundo ataque
        batalhaUI.ataque1 = 'red'
        batalhaUI.ataque2 = 'Yellow'
        batalhaUI.nomeDano=""
        batalhaUI.nomeDano=ataque.Waterfall.dano;
}
    if(x<210|| x>739){ //nao está nenhum selecionado
        batalhaUI.ataque1 = 'red'
        batalhaUI.ataque2 = 'blue'
        batalhaUI.nomeDano=""
    }
})

function ataqueInimigo(){
    let ataque = Math.floor(Math.random()*2)
   draggle.ataque(draggle.ataques[ataque],emby,4)
   batalhaUI.vida -=draggle.ataques[ataque].dano
}



battleLoop();