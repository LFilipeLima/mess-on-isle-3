class Sprite {
    constructor ({
      position,
      image,
      frames = { max: 1, hold: 10 },
      sprites,
      animate = false,
      rotation = 0,
      scale = 1
    }) {
      this.position = position
      //carrega a imagem e calcula os frames dela (recomendado:4 frames)
      this.image = new Image()
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
        this.position.x + this.width / 2,
        this.position.y + this.height / 2
      )
      context.rotate(this.rotation) //rotaciona a imagem
      context.translate(
        -this.position.x - this.width / 2,
        -this.position.y - this.height / 2
      )
      context.globalAlpha = this.opacity
  
      const crop = {
        position: {
          x: this.frames.val * (this.width / this.scale), //divida a imagem por pel
          y: 0
        },
        width: this.image.width / this.frames.max,
        height: this.image.height
      }
  
      const image = {
        position: {
          x: this.position.x,
          y: this.position.y
        },
        width: this.image.width / this.frames.max,
        height: this.image.height
      }
  
      context.drawImage(
        this.image,
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