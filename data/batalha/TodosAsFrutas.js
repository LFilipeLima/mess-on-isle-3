const frutas=[
    {
        maca:{
            posicao:{x:300,y:300},
            image:{src:'/personagens/embySprite.png'} , //trocar paraa maça  
            frames:{max:4,hold:30}, //hold igual a tempo de cada frame]
            sprites:22,
            animate:true,
            isEnemy:false, //toda fruta é false!!!
            name:'maça',
            attacks:[ataque.Fireball,ataque.Waterfall] ,
            nivel:1
        },
        //inserir a partir da daqui:
        banana:{
            posicao:{x:300,y:300},
            image:{src:'/personagens/embySprite.png'} , //trocar para uma banana  
            frames:{max:4,hold:30}, //hold igual a tempo de cada frame]
            sprites:22,
            animate:true,
            isEnemy:false, //toda fruta é false!!!
            name:'banana',
            attacks:[ataque.Fireball,ataque.Waterfall] ,
            nivel:1
        },
    }]
