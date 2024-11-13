

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
        this.nome = name;
        this.ataques = attacks;
      }


    ataque(ataque){
        let xAtaque=0;
        let yAtaque=0;
        
        let alvo={x:0,y:0}
        if(this.isEnemy==false){
            xAtaque=300;
            yAtaque=300;
            alvo.x=800;
            alvo.y=100;
        }
        else{
            xAtaque=800;
            yAtaque=100;
            alvo.x=300;
            alvo.y=300;
        }
        let rotation =1;
        switch(ataque.nome){
            case 'Fireball':
                const testeImage=new Image();
                testeImage.src='/imagens/Fireball.png';
                const teste = new Sprite({
                    posicao: {
                    x:xAtaque,
                    y:yAtaque,
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
                        x:xAtaque,
                        y:yAtaque,
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
                venenoImage.src = '/imagens/purpleAtaque.png'
                const veneno = new Sprite({
                    posicao: {
                        x:xAtaque,
                        y:yAtaque,
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
            if (ataque.posicao.x < alvo.x || ataque.posicao.y < alvo.y) {
                if (ataque.posicao.x > alvo.x)
                    ataque.posicao.x -= 5;
                if (ataque.posicao.y > alvo.y)
                    ataque.posicao.y -= 5;
                if (ataque.posicao.x < alvo.x)
                    ataque.posicao.x += 5;
                if (ataque.posicao.y < alvo.y){
                    ataque.posicao.y += 5;}
                ataque.draw();}
            else {
                continuar = false;
            }
        
       };
        
     
     if(this.isEnemy == true){
        if (ataque.posicao.x > alvo.x || ataque.posicao.y < alvo.y) {
            if (ataque.posicao.x < alvo.x)
                ataque.posicao.x += 5;
            if (ataque.posicao.y > alvo.y)
                ataque.posicao.y -= 5;
            if (ataque.posicao.x > alvo.x)
                ataque.posicao.x -= 5;
            if (ataque.posicao.y < alvo.y){
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
