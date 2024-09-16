// const dos status dos personagens:
const fogo = new Personagens('fogo','Bola de fogo','Furia',1,4,1010);
fogo.criarPersonagem(); // cria o personagem


//consts imagens:
const batteBackgroundImage = new Image();
batteBackgroundImage.src='imagens/battleBackground.png';
const embyImage = new Image();
embyImage.src='monstros/embySprite.png';
const draglleImage = new Image();
draglleImage.src='monstros/draggleSprite.png';
// consts sprites:
const draglle = new Sprite({
    position: {
    x:800,
    y:100,
    },
    image : draglleImage,
    frames:{
        max:4,
        hold:10
    },
    animate:true
})
const emby = new Sprite({
    position: {
    x:300,
    y:350,
    },
    image : embyImage,
    frames:{
        max:4,
        hold:10
    },
    animate:true
})

const battleBackground = new Sprite({ //cria o sprite da imagem do cenario de batalha
    position: {
    x:0,
    y:0,
    },
    image : batteBackgroundImage,
    
})
const batalhaUI = new interfaceBatalha( fogo.ataque1,fogo.ataque2,fogo.dano1,fogo.dano2,fogo.vida);
//loop da batalha
function battleLoop(){
    
    window.requestAnimationFrame(battleLoop);
    battleBackground.draw(); //desenha o cenario de batalha
    emby.draw(); //desenha o sprite do ebmy    
    draglle.draw(); //desenha o sprite do draglle
    batalha();
   
}
function batalha(){
    batalhaUI.drawBarraDeAtaques();
    batalhaUI.drawBarraDeVidaInimiga();
    batalhaUI.drawBarraDeVida();
};

window.addEventListener('click', function(e){
    const x = e.clientX;
    const y = e.clientY;

    if(x>300&&x<555&&y>450&&y<550){//primeiro ataque
        batalhaUI.dano = batalhaUI.danAt1;
        batalhaUI.vidaInimiga-=batalhaUI.dano
    }
    if(x>555&&x<810&&y>450&&y<550) { //segundo ataque
        batalhaUI.dano =batalhaUI.danAt2;
        batalhaUI.vidaInimiga-=batalhaUI.dano
        
}
})

window.addEventListener('mousemove', function(e){ //fica amarelo se passar o mouse em
    const x = e.clientX;
    const y = e.clientY;
    if(x>300&&x<705&&y>450&&y<550) {
        batalhaUI.ataque1 = context.fillStyle='yellow';
        batalhaUI.ataque2 = context.fillStyle='blue';
        batalhaUI.nomeDano=""+batalhaUI.danAt1;
       
    }
    else if(x>585&&x<960&&y>450&&y<550) {
        batalhaUI.ataque2 = context.fillStyle='yellow';
        batalhaUI.ataque1 = context.fillStyle='red';
        batalhaUI.nomeDano = ""+batalhaUI.danAt2;
    }
    else{
        batalhaUI.ataque1 = context.fillStyle='red';
        batalhaUI.ataque2 = context.fillStyle='blue';
        batalhaUI.dano=0
    }
    
})

//modifica o tamanho do canvas
