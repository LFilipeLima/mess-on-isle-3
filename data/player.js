class Player{
   constructor() {
   this.x = 0
   this.y = 0
   this.playerImage = new Image() 
   this.playerImage.src= "imagens/spr_tom.png"
   }
   renderPlayer(){
       
       this.playerImage.onload = () =>{
        context.drawImage(this.playerImage,
            0,
            0,
           this.playerImage.width/4,
           this.playerImage.height/4,
            canvas.width/2 -this.playerImage.width/2,
            canvas.height/2-this.playerImage.height/2,
           this.playerImage.width/4,
           this.playerImage.height/4,) // Renderiza o player
    }
}
   
   movePlayer(){
    window.addEventListener('keydown',(e) =>{ //função que identifica o teclado e passa a tecla 
        switch(e.key){
            case "w":
               keys.w.pressed = true
                break
            case "s":
                keys.s.pressed = true
                break
            case "a":
                keys.a.pressed = true
                break
            case "d":
                keys.d.pressed = true
                break
        }})
        window.addEventListener('keyup',(e) =>{ //função que identifica o teclado e passa a tecla 
            switch(e.key){
                case "w":
                   keys.w.pressed = false
                    break
                case "s":
                    keys.s.pressed = false
                    break
                case "a":
                    keys.a.pressed = false
                    break
                case "d":
                    keys.d.pressed = false
                    break

        }                      // pelo parametro "e" 
    })
   }

}
