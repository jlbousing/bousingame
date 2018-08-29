

class bousingame{

  constructor(canvas,width,height,dimension){
    this.canvas = canvas;
    this.canvas.width = width;
    this.canvas.height = height;
    this.gameObjectsArray = [];
    this.scenes = [];
    //dimension ATTRIBUTE IS TO CREATE 3D VIDEO GAMES IN THE FUTURE
    //dimension == null ? this.ctx = this.canvas.getContext("2d"): this.ctx = this.canvas.getContext("3d")
    if(dimension == null){
      this.ctx = this.canvas.getContext("2d");
    }
  }

  createScene(name){
    let scene = {
      name: name,
      gameObjectsArray: []
      
    };

    this.scenes.push(scene);
  }

  createGameObject(name, positionX, positionY,sprite,spritesheet,scene){
    
    if(sprite == null && spritesheet == null){
      var gameObject = {
        name: name,
        positionX: positionX,
        positionY: positionY,
        sprite: null,
        spritesheet: null
      };
    }
    else if(sprite == null){
      let newSpritesheet = new Image();
      newSpritesheet.src = spritesheet;
      var gameObject = {
        name: name,
        positionX: positionX,
        positionY: positionY,
        sprite: null,
        spritesheet: newSpritesheet,
        currentFrame: 0
      };
    }else if(spritesheet == null){
      let newSprite = new Image();
      newSprite.src = sprite;
      var gameObject = {
        name: name,
        positionX: positionX,
        positionY: positionY,
        sprite: newSprite,
        spritesheet: null
      };
    }

    //this.gameObjectsArray.push(gameObject);
    this.scenes.forEach(item => {
      if(item.name == scene){
        item.gameObjectsArray.push(gameObject);
      }
    });
    //this.scenes[indexScene].gameObjectsArray.push(gameObject); //ADD GAME OBJECT IN THE SCENES
    console.log(this.scenes);

    return gameObject;
  }

  animateGameObject(gameObject,totalFrames,x,y,velocityAnimation){
    var context = this.ctx;
    var shift = 0;

    gameObject.spritesheet.addEventListener("load",()=>{

      console.log("total frames ",totalFrames);
      console.log("velocity animation ",velocityAnimation);
      
      console.log("ahora sí");
      console.log(gameObject.spritesheet.width);
      var frameWidth = Math.round(gameObject.spritesheet/totalFrames);
      var frameHeight = gameObject.spritesheet.height;
      
      setInterval(()=> {
        this.ctx.clearRect(120,25,frameWidth,frameHeight);
        this.ctx.drawImage(gameObject.spritesheet,shift,0,frameWidth,frameHeight,x,y,frameWidth,frameHeight,
        totalFrames);

        shift += frameWidth + 1;
        if(gameObject.currentFrame == totalFrames){
          shift = 0;
          gameObject.currentFrame = 0;
        }

        gameObject.currentFrame++;
      },velocityAnimation);
    });

  }

  clickEnableGameObject(gameObject){
    gameObject.inputEnabled = true;
    console.log(gameObject);
  }



  

  


}
