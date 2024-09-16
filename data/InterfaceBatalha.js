

// Cria uma instância de Personagens


//Cria o "retangulo" da interface de batalha
class interfaceBatalha{
    constructor (nAt1,nAt2,danAt1,danAt2,v){
        this.nameAt1=nAt1
        this.nameAt2=nAt2
        this.danAt1=danAt1
        this.danAt2=danAt2
        this.vida=v
        this.ataque2="blue";
        this.ataque1="red";  
        this.vidaInimiga=100;
        this.dano=0;
        this.nomeDano=""
}




drawBarraDeAtaques(){
    context.fillStyle='white';
    context.fillRect(0,450,1020,100);

    //botao do primeiro ataque:
    context.fillStyle=this.ataque1 ;
    context.fillRect(0,450,255,100);
    context.fillStyle='black';
    context.font = '30px Arial';
    context.fillText(this.nameAt1, 50, 500);
   
    //botao do segundo ataque:
    context.fillStyle=this.ataque2;
    context.fillRect(255,450,255,100);
    context.fillStyle='black';
    context.font = '30px Arial';
    context.fillText(this.nameAt2, 305, 500);
    //botao do terceiro Tipo do ataque:
    context.fillStyle='white';
    context.fillRect(510,450,255,100);
    context.fillStyle='black';
    context.font = '30px Arial';
    context.fillText('Dano:'+this.nomeDano, 560, 500);
    
    
}
drawBarraDeVidaInimiga(){
    context.fillStyle='white';
    context.fillRect(0,0,200,50);
    context.fillStyle='black';
    context.font = '30px Arial';
    context.fillText('Vida:'+this.vidaInimiga, 50, 40);
}
drawBarraDeVida(){
    context.fillStyle='white';
    context.fillRect(800,400,300,40);
    context.fillStyle='black';
    context.font = '30px Arial';
    context.fillText('Vida:'+this.vida, 850,430);
}}