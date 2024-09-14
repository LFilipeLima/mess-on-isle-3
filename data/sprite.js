class Sprite{
    constructor({position,velocity},image){
        this.position = position
        this.image = image  
        console.log(this.image)
    }
    draw(){
       const imagem = new Image()
        imagem.src = "imagens/TESTE.png";
          context.drawImage(imagem,this.position.x,this.position.y);
          
          
        
    }
   
}