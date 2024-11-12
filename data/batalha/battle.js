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
//gera inimigo e player randoms
const draggle = new monstros(vetorInimigos[Math.floor(Math.random()*vetorInimigos.length)]);
const emby = new monstros(vetorFrutas[Math.floor(Math.random()*vetorFrutas.length)]);
var renderizarSprites = [draggle,emby];
const batalhaUI = new interfaceBatalha(emby.ataques[0].nome,emby.ataques[1].nome,
    emby.ataques[0].dano,emby.ataques[1].dano,emby.getVida(),draggle.getVida());

var vezAtaqueInimigo = false;
var ataquePlayer = true

function battleLoop() {
    window.requestAnimationFrame(battleLoop);
    battleBackground.draw();
    batalhaUI.drawBarraDeAtaques();
    batalhaUI.drawBarraDeVida();
    batalhaUI.drawBarraDeVidaInimiga()
    emby.draw();
    draggle.draw();

    verifacaVitoraDerrota();

}
function verifacaVitoraDerrota(){
    if(draggle.getVida()<=0){
        batalhaUI.inimigoDerrotado();
   

    }
    if(emby.getVida()<=0){
        batalhaUI.personagemDerrotado();
   
}}
window.addEventListener('click',(e)=>{
    const x = e.clientX;
    const y = e.clientY;
    if(x>225 && x<500 && y>450 && y<550 && ataquePlayer==true){//primeiro ataque
        emby.ataque(emby.ataques[0],draggle,4);
        draggle.setVida(draggle.getVida()-emby.ataques[0].dano);
        batalhaUI.vidaInimiga -= emby.ataques[0].dano
        vezAtaqueInimigo = true;
        ataquePlayer = false; 
        setTimeout(ataqueInimigo(),500);
        }
    if(x>484&&x<738&&y>450&&y<550 && ataquePlayer==true){//segundo  ataque
            emby.ataque(emby.ataques[1],draggle,4);
            draggle.setVida(draggle.getVida()-emby.ataques[1].dano);
            batalhaUI.vidaInimiga -= emby.ataques[1].dano
            vezAtaqueInimigo = true;
            ataquePlayer = false;
            ataqueInimigo();
            }
    })
window.addEventListener('mousemove',(e)=>{
    const x = e.clientX;
    const y = e.clientY;

    if(x>225 && x<478 && y>450 && y<550  ){//primeiro ataque
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
    let ataque = Math.floor(Math.random()*draggle.ataques.length);
   draggle.ataque(draggle.ataques[ataque],emby,4)
   emby.setVida(emby.getVida()-draggle.ataques[ataque].dano)
   batalhaUI.vida -=draggle.ataques[ataque].dano
    ataquePlayer = true;
    vezAtaqueInimigo = false;
}



battleLoop();