/*
posição padrão dos inimigos:800,100
Dividir o inimigo em 3 niveis cada nivel mais forte
*/ 

const nivel1={
     inimigos:[{
        mosquito:{
            position:{x:800,y:100},
            image:{src:'monstros/draggleSprite.png'} , //trocar para um mosquito  
            frames:{max:4,hold:30}, //hold igual a tempo de cada frame]
            animate:true,
            isEnemy:true, //todo inimigo é true!!!
            name:'mosquito',
            ataque:[ataque.Waterfall,ataque.Fireball]    
        }
        //inserir a partir da daqui:
     }]

}