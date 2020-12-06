class Screen {

    constructor() {
      //this.input = createInput("Name");
      this.button = createButton('Task1');
      //this.greeting = createElement('h2');
      this.title = createElement('h2');
      //this.reset = createButton('Reset');
      console.log("new screen");
      this.hide();
    }
    hide(){
      //this.greeting.hide();
      this.button.hide();
      //this.input.hide();
      this.title.hide();
    }

    show() {
      this.button.show();
      this.title.show();
    }
  
    display(){
      this.title.html("Congrats");
      this.title.position(200,20);
  
      //this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(250,200);
      //this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        //this.input.hide();
        this.title.hide();
        this.button.hide();
        gameState += 1;
        console.log(gameState);
        //window.open("https://whitehatjr.github.io/T-Rex-Runner-Color/");
        
      });
  
    
  
    }
  }
  