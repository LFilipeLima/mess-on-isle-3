

class monstros extends Sprite{
    constructor({
        posicao,
        image,
        frames = { max: 1, hold: 10 },
        sprites,
        animate = false,
        rotation = 0,
        isEnemy = false,
        name,
        attacks,
        nivel,
      }){
        super({
            posicao,
            image,
            frames,
            sprites,
            animate,
            rotation
        })
        this.isEnemy = isEnemy
       if(nivel == 1 )
            this.vida=100;
        else if(nivel == 2)
            this.vida=300;
        else
            this.vida=800;
        //ehInimigo = isEnemy; //checar se é realmente um inimigo;
        this.nome = name;
        this.ataques = attacks;
      }
     Derrotado() {
        if(vida<=0){
           gsap.to(this.posicao,{y:this.posicao.y+20})  
           gsap.to(this,{opacity:0}) //inimigo 'some'         
            return true;}//quando for true usar a classe de interface da batalha
        else
            return false;
}


    ataque(ataque,alvo,){
        let rotation =1;
        switch(ataque.nome){
            case 'Fireball':
                const testeImage=new Image();
                testeImage.src='/imagens/Fireball.png';
                const teste = new Sprite({
                    posicao: {
                    x:this.posicao.x,
                    y:this.posicao.y,
                    },
                    image : testeImage,
                    frames:{
                        max:12,
                        hold:10
                    },sprites:10,
                    animate:true,
                    rotation
                })
                this.animar(teste,alvo);break
            case 'Waterfall':
                const aguaImage= new Image();
                aguaImage.src ='/imagens/WaterFall.png'
                const agua = new Sprite({
                    posicao: {
                        x:this.posicao.x,
                        y:this.posicao.y,
                        },
                        image : aguaImage,
                        frames:{
                            max:7,
                            hold:20
                        },sprites: 1,
                        animate:true,
                        rotation                   
                })
                this.animar(agua,alvo);break
            case 'purple':
                const venenoImage = new Image();
                venenoImage.src = 'imagens/purpleAtaque.png'
                const veneno = new Sprite({
                    posicao: {
                        x:this.posicao.x,
                        y:this.posicao.y,
                        },
                        image : venenoImage,
                        frames:{
                            max:4,
                            hold:40
                        },sprites: 1,
                        animate:true,
                        rotation                   
                }) 
                this.animar(veneno,alvo);break
                
               
    }
}
    animar(ataque,alvo){
        let continuar = true;
        
        const animacao = () => {
        window.requestAnimationFrame(animacao);
        if(this.isEnemy==false){
            if (ataque.posicao.x < alvo.posicao.x || alvo.posicao.y < alvo.posicao.y) {
                if (ataque.posicao.x > alvo.posicao.x)
                    ataque.posicao.x -= 5;
                if (ataque.posicao.y > alvo.posicao.y)
                    ataque.posicao.y -= 5;
                if (ataque.posicao.x < alvo.posicao.x)
                    ataque.posicao.x += 5;
                if (ataque.posicao.y < alvo.posicao.y){
                    ataque.posicao.y += 5;}
                ataque.draw();}
            else {
                continuar = false;
            }
        
       };
        
     
     if(this.isEnemy == true){
        if (ataque.posicao.x > alvo.posicao.x || ataque.posicao.y < alvo.posicao.y) {
            if (ataque.posicao.x < alvo.posicao.x)
                ataque.posicao.x += 5;
            if (ataque.posicao.y > alvo.posicao.y)
                ataque.posicao.y -= 5;
            if (ataque.posicao.x > alvo.posicao.x)
                ataque.posicao.x -= 5;
            if (ataque.posicao.y < alvo.posicao.y){
                ataque.posicao.y += 5;}
            ataque.draw();}
        else {
            continuar = false;
        }
     }
    }
    
    if(continuar){
        animacao()
}
}
       
    
    desenhar(){
        context.fiiStyle='rgba(255, 0, 0, 0)'
        context.fillRect(this.posicao.x,this.posicao.y,this.width,this.height);
       
        
    }
  getVida(){
    return this.vida;
  }
setVida(vida){
        this.vida=vida;
    }
    }
