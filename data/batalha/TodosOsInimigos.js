/*
posição padrão dos inimigos:x=800,y=100
Dividir o inimigo em 3 niveis cada nivel mais forte
*/ 


    const  inimigos={
        mosquito:{
           posicao:{x:800,y:100},
            image:{src:'/monstros/draggleSprite.png'} , //trocar para um mosquito  
            frames:{max:4,hold:30}, //hold é o tempo que fica o frame
            sprites:22, 
            animate:true,
            isEnemy:true, //todo inimigo é true!!!
            name:'mosquito',
            attacks:[ataque.Waterfall,ataque.Fireball,ataque.purple] ,
            nivel:2,
        },
        //inserir a partir da daqui:
        vegano:{
            posicao:{x:700,y:-40},
            image:{src:'/monstros/veganas1.png'},
            frames:{max:1,hold:1},
            sprites:1,
            animate:false,
            isEnemy:true,
            name:'Veganos Unidos',
            attacks:[ataque.Waterfall,ataque.purple],
            nivel:2
        },
        /*draglleYe:{
            posicao:{x:800,y:100},
            image:{src:'/monstros/dragonYellow.png'},
            frames:{max:4,hold:30},
            sprites:16,
            animate:true,
            isEnemy:true,
            name:'Amarelo',
            attacks:[ataque.purple,ataque.Waterfall],
            nivel:2,
        }*/
     }
    const vetorInimigos=[inimigos.mosquito,inimigos.vegano]

