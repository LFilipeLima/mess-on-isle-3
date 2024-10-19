//background da batalha:
const backgroundBattleIMG = new Image();
backgroundBattleIMG.src = "imagens/imagens/battleBackground.png";
const battleBackground = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imagem: "imagens/battleBackground.png"
})

let draggle;
const emby = new monstros(frutas.maca);
var renderizarSprites = [draggle,emby];

const batalhaUI = new interfaceBatalha(ataque.Fireball.nome,ataque.Waterfall.nome,
    ataque.Fireball.dano,ataque.Waterfall.dano,emby.getVida());

function battleLoop() {
    window.requestAnimationFrame(battleLoop);
    battleBackground.draw();
    batalhaUI.drawBarraDeAtaques();
    
      
    
    
}