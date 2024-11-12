class Sprite {
    constructor ({
      posicao,
      image,
      frames = { max: 1, hold: 10 },
      sprites,
      animate = false, //Se a this.image possui frames
      rotation = 0,
      scale = 1
    }) { 
      this.image = new Image(); 
      
      this.posicao = posicao
      //carrega a this.image e calcula os frames dela (recomendado:4 frames)
      
      this.frames = { ...frames, val: 0, elapsed: 0 } 
      this.image.onload = () => {
        this.width = (this.image.width / this.frames.max) * scale
        this.height = this.image.height * scale
      }
    this.image.src = image.src
  
      this.animate = animate
      this.sprites = sprites
      this.opacity = 1
  
      this.rotation = rotation
      this.scale = scale
    }
  
    draw() {
      context.save()
      context.translate(
        this.posicao.x + this.width / 2,
        this.posicao.y + this.height / 2
      )
      context.rotate(this.rotation) //rotaciona a this.image
      context.translate(
        -this.posicao.x - this.width / 2,
        -this.posicao.y - this.height / 2
      )
      context.globalAlpha = this.opacity
  
      const crop = {
        posicao: {
          x: this.frames.val * (this.width / this.scale), //pega o frame da this.image( numero do frame * 
                                                          //largura da this.image / escala)
          y: 0
        },
        width: this.image.width / this.frames.max,
        height: this.image.height
      }
  
      const image = {
        posicao: {
          x: this.posicao.x,
          y: this.posicao.y
        },
        width: this.image.width / this.frames.max,
        height: this.image.height
      }
  
      context.drawImage(
        this.image,
        crop.posicao.x,
        crop.posicao.y,
        crop.width,
        crop.height,
        image.posicao.x,
        image.posicao.y,
        image.width * this.scale,
        image.height * this.scale
      )
  
      context.restore()
  
      if (!this.animate) return //se for frame unico não anima
  
      if (this.frames.max > 1) {
        this.frames.elapsed++
      }
  
      if (this.frames.elapsed % this.frames.hold === 0) {
        if (this.frames.val < this.frames.max - 1) this.frames.val++
        else this.frames.val = 0
      }
    }
  }