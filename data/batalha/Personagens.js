 class Personagens{
    constructor(nome,ataque1,ataque2,dano1,dano2,vida)
    {
        this.nome=nome;
        this.ataque1=ataque1;
        this.ataque2=ataque2;
        this.dano1=dano1;
        this.dano2=dano2;
        this.vida=vida;
    }
criarPersonagem(){ 
       var persona=[{nome:this.nome,ataque1:this.ataque1,ataque2:this.ataque2,dano1:this.dano1,dano2:this.dano2,vida:this.vida}];
       return persona
    }
}
