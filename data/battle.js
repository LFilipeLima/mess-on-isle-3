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



//loop da batalha
function battleLoop(){
    
    
    window.requestAnimationFrame(battleLoop);
    battleBackground.draw(); //desenha o cenario de batalha
    emby.draw(); //desenha o sprite do mike wazowski    
    draglle.draw(); //desenha o sprite do draglle
    interfaceDaBatalha(); //desenha a interface de batalha

}

//modifica o tamanho do canvas
