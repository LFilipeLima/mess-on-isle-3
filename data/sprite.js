class Sprite{
    constructor({position,velocity},image){
        this.position = position
        this.image = image

        this.canvas = document.querySelector("#canvas");
        this.context = canvas.getContext('2d');
    }
    draw(){
          this.context.drawImage(image,0,0);
          
        
    }
   
}