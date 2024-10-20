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
                testeImage.src='monstros/draggleSprite.png';
                const teste = new Sprite({
                    posicao: {
                    x:this.posicao.x,
                    y:this.posicao.y,
                    },
                    image : testeImage,
                    frames:{
                        max:4,
                        hold:30
                    },sprites:4,
                    animate:true,
                    rotation
                })
                const animate = () => {
                    if (teste.posicao.x != alvo.posicao.x || teste.posicao.y != alvo.posicao.y) {
                        if (teste.posicao.x > alvo.posicao.x)
                            teste.posicao.x -= 5;
                        if (teste.posicao.y > alvo.posicao.y)
                            teste.posicao.y -= 5;
                        if (teste.posicao.x < alvo.posicao.x)
                            teste.posicao.x += 5;
                        if (teste.posicao.y < alvo.posicao.y)
                            teste.posicao.y += 5;
                    }
                        teste.draw();

                        
                        requestAnimationFrame(animate)};animate();
                        break
        }; }
        
    
    desenhar(){
        context.fiiStyle='rgba(255, 0, 0, 0)'
        context.fillRect(this.posicao.x,this.posicao.y,this.width,this.height);
       
        
    }
  getVida(){
    return this.vida;
  }
}
