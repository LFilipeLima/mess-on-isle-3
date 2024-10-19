const frutas={
  
        maca:{
            posicao:{x:800,y:100},
            image:{src:'monstros/embySprite.png'} , //trocar paraa maça  
            frames:{max:4,hold:30}, //hold igual a tempo de cada frame]
            sprites:22,
            animate:true,
            isEnemy:false, //toda fruta é false!!!
            name:'maça',
            attacks:[ataque.Fireball,ataque.Waterfall] ,
            nivel:1
        }
        //inserir a partir da daqui:
    }
