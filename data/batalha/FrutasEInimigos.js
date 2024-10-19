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
        switch(ataque.nome){
            case 'teste':
                const testeImage=new image();
                testeImage.src='ataques/testeSprite.png';
                const teste = new Sprite({
                    position: {
                    x:this.posicao.x,
                    y:this.posicao.y,
                    },
                    image : testeImage,
                    frames:{
                        max:4,
                        hold:10
                    },
                    animate:true,
                    rotation
                })
                numeroDeSprites.splice(1,0,teste)
                gsap.to(alvo.posicao,{
                    x:alvo.posicao.x+10,
                    yoyo: true, //quando toma dano o alvo gira
                    repetir:5,
                    duracao:0.08
                })
                numeroDeSprites.splice(1,1); break
        }
    }
    desenhar(){
        context.fillRect(this.posicao.x,this.posicao.y,this.width,this.width);
        c.fiiStyle='rga(255,0,0,';
        
    }
  getVida(){
    return this.vida;
  }
}
