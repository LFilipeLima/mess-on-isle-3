

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


    ataque(ataque,alvo,numeroDeSprites){
        let rotation =1;
        switch(ataque.nome){
            case 'Fireball':
                const testeImage=new Image();
                testeImage.src='/imagens/fireBall.jpg';
                const teste = new Sprite({
                    posicao: {
                    x:this.posicao.x,
                    y:this.posicao.y,
                    },
                    image : testeImage,
                    frames:{
                        max:6,
                        hold:10
                    },sprites:4,
                    animate:true,
                    rotation
                })
                this.animar(teste,alvo)
               
               
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
    }
