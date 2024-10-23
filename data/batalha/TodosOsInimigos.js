/*
posição padrão dos inimigos:800,100
Dividir o inimigo em 3 niveis cada nivel mais forte
*/ 


    const  inimigos={
        mosquito:{
           posicao:{x:800,y:100},
            image:{src:'monstros/draggleSprite.png'} , //trocar para um mosquito  
            frames:{max:4,hold:30}, //hold é o tempo que fica o frame
            sprites:22, 
            animate:true,
            isEnemy:true, //todo inimigo é true!!!
            name:'mosquito',
            attacks:[ataque.Waterfall,ataque.Fireball] ,
            nivel:1  
        }
        //inserir a partir da daqui:
     }

