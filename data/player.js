class Player{
   constructor() {
   this.playerImage = new Image();
   
   }
    renderPlayer(){
    this.playerImage.src = 'imagens/spr_tom.png'
    this.playerImage.onload = () =>{
        context.drawImage(playerImage,
            0,
            0,
            playerImage.width/4,
            playerImage.height/4,
            canvas.width/2 - playerImage.width/2,
            canvas.height/2-playerImage.height/2,
            playerImage.width/4,
            playerImage.height/4,) // Renderiza o player
    }
   }
}
