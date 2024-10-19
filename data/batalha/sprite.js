class Sprite {
    constructor ({
      position,
      imagem,
      frames = { max: 1, hold: 10 },
      sprites,
      animate = false, //Se a this.imagem possui frames
      rotation = 0,
      scale = 1
    }) {
      this.posicao = position
      //carrega a this.imagem e calcula os frames dela (recomendado:4 frames)
      this.imagem = new Image();
      this.frames = { ...frames, val: 0, elapsed: 0 } 
      this.imagem.onload = () => {
        this.width = (this.imagem.width / this.frames.max) * scale
        this.height = this.imagem.height * scale
      }
      this.imagem.src = imagem
  
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
      context.rotate(this.rotation) //rotaciona a this.imagem
      context.translate(
        -this.posicao.x - this.width / 2,
        -this.posicao.y - this.height / 2
      )
      context.globalAlpha = this.opacity
  
      const crop = {
        position: {
          x: this.frames.val * (this.width / this.scale), //pega o frame da this.imagem( numero do frame * 
                                                          //largura da this.imagem / escala)
          y: 0
        },
        width: this.imagem.width / this.frames.max,
        height: this.imagem.height
      }
  
      const image = {
        position: {
          x: this.posicao.x,
          y: this.posicao.y
        },
        width: this.imagem.width / this.frames.max,
        height: this.imagem.height
      }
  
      context.drawImage(
        this.imagem,
        crop.position.x,
        crop.position.y,
        crop.width,
        crop.height,
        image.position.x,
        image.position.y,
        image.width * this.scale,
        image.height * this.scale
      )
  
      context.restore()
  
      if (!this.animate) return
  
      if (this.frames.max > 1) {
        this.frames.elapsed++
      }
  
      if (this.frames.elapsed % this.frames.hold === 0) {
        if (this.frames.val < this.frames.max - 1) this.frames.val++
        else this.frames.val = 0
      }
    }
  }