// const dos status dos personagens:
const fogo = new Personagens('fogo','Bola de fogo','Furia',1,4,100);
fogo.criarPersonagem(); // cria o personagem
const dragao = new Personagens('Draglle','Bola de fogo','Voar',10,20,1010)


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
    if(batalhaUI.vida<0){
        window.requestAnimationFrame(battleLoop)
        let teste = new Image();
        teste.src = "imagens/teste.jpg"
        let TESTE = new Sprite({    position: {
            x:0,
            y:0,
            },
            image : teste,})
        TESTE.draw();
    }
    else{
    window.requestAnimationFrame(battleLoop);
    battleBackground.draw(); //desenha o cenario de batalha
    emby.draw(); //desenha o sprite do ebmy    
    draglle.draw(); //desenha o sprite do draglle
    batalha();}
}

   


function batalha(){
    batalhaUI.drawBarraDeAtaques();
    batalhaUI.drawBarraDeVidaInimiga();
    batalhaUI.drawBarraDeVida();
};

function ataqueInimigo(){
    let ataque=Math.floor(Math.random()*2)
    if (ataque == 1){
       batalhaUI.vida -=dragao.dano1
    }
    else if(ataque==2){
        batalhaUI.vida-= dragao.dano2
}}

window.addEventListener('click', function(e){
    const x = e.clientX;
    const y = e.clientY;

    if(x>450&&x<705&&y>450&&y<550){//primeiro ataque
        batalhaUI.dano =fogo.dano1;
        batalhaUI.vidaInimiga-=fogo.dano1;
        ataqueInimigo();
      
    }
    if(x>705&&x<1000&&y>450&&y<550) { //segundo ataque
        batalhaUI.dano = fogo.dano1;
        batalhaUI.vidaInimiga-=fogo.dano2;
        ataqueInimigo();
        
}
})

window.addEventListener('mousemove', function(e){ //fica amarelo se passar o mouse em
    const x = e.clientX;
    const y = e.clientY;
    if(x>450&&x<705 &&y>450&&y<550) {
        batalhaUI.ataque1 = context.fillStyle='yellow';
        batalhaUI.ataque2 = context.fillStyle='blue';
        batalhaUI.nomeDano=""+fogo.dano1;
        
        

       
    }
    else if(x>705&&x<1000&&y>450&&y<550) {
        batalhaUI.ataque2 = context.fillStyle='yellow';
        batalhaUI.ataque1 = context.fillStyle='red';
        batalhaUI.nomeDano = ""+fogo.dano2;
    }
    else{
        batalhaUI.ataque1 = context.fillStyle='red';
        batalhaUI.ataque2 = context.fillStyle='blue';
        batalhaUI.dano=0
    }
    
})

//modifica o tamanho do canvas
