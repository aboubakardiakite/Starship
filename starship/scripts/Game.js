
import Saucer from "./Saucer";
import Starship from "./Starship.js";
import Shoot from "./Shoot";



 class Game{

    constructor(canvas){
        this.shoots =[];
        this.canvas=canvas;
        this.context = this.canvas.getContext("2d");
        this.soccures= Array();
        this.score=0;
        this.raff=null;
        this.moveAndDraw = this.moveAndDraw.bind(this);
        this.starship = new Starship();
        this.widhth = canvas.width;
        this.height = canvas.height;
        this.timeOutId = null;
        this.debutSoccoupe = true;
        this.debutShoote = false;
        this.timeOutId=0;

    }

      /*
          @param max: the height of canvas
          @return: a random number to position the saucers
      */
      static getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }

      /*
        function that allows to add the shoot
      */

      addShoot(){
          this.debutSoccoupe = false;
          let shoot = new Shoot();
          this.shoots.push(shoot);

      }

      /*
        function that allows to add the saucers at a random height
      */
      addSaucer(){
            let alea2 = Game.getRandomInt(this.canvas.height-30);
            const soc = new Saucer(950,alea2);
            this.soccures.push(soc)
      }

      /*
        function that removes the saucers that are no longer in the canvas.
        and updates the score
      */

      deleteSaucer(){
        this.soccures.
        forEach((soccur,i) => {
              if(soccur.y>this.canvas.height || soccur.x<0){
                  if(soccur.x < 0)
                      this.updateScore();
                  this.soccures.splice(i,1);
              }
          });
        }

        /*
          function that updates the score and displays the score
        */
        updateScore(){
          if(this.score >= 0){
            score.textContent=this.score;
            this.score=this.score-1000;
          }else{
            score.textContent = 0;
            this.score=0;
          }
        }
        /* stop the game if score < 0*/
        gameOver(){
          if(this.score < 0){
            this.stop();
            const sc = document.getElementById("score");
            score.textContent = 0;
          }
        }


        /*
            function that allows to delete a shot that has already
            collided with a saucer or if they leave the canvas
        */
        deleteShoots(){
              const array = this.shoots;
              this.shoots.forEach((shoot,i)=>{
                          if(shoot.killSoccur(this.soccures) || shoot.x >= this.canvas.width)
                                  array.splice(i,1);
                  });
        }



        /*
          function that allows to draw and move saucers and shots.
          then delete them after collision
        */
        moveAndDraw(){
            const tab = [...this.soccures,...this.shoots,this.starship];
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            tab.forEach( elt => {
              elt.move(this.canvas);
              elt.draw(this.context);
            });
            this.deleteSaucer();
            this.deleteShoots();
            this.raf = window.requestAnimationFrame(this.moveAndDraw);
        }


        /*
            function that allows to start the game
        */
        start(){
            this.raf = window.requestAnimationFrame(this.moveAndDraw);
        }


        /*
          function that allows take out the saucers at each 750s
        */
        stop(){
            window.cancelAnimationFrame(this.raf);
        }

        /*
          function that allows take out the saucers at each 750s
        */
        flooteOn(){
          this.timeOutId = setInterval(this.addSaucer.bind(this),720);
        }
        /*
            function that  allows to cancel the setInterval function
        */
        flooteOff(){
              clearInterval(this.timeOutId);
        }
        /*
        fonction utilisant les touches du clavier et permettant de tirer avec la touche espace
        */
        keyDownActionHandler(event) {
            switch (event.keyCode) {
                  case 38:
                      this.starship.moveUp();
                      break;
                  case 40:
                      this.starship.moveDown();

                      break;
                  case 32:
                      this.addShoot();

                      break;

                  default: return;
              }
              event.preventDefault();
          }


          /*
          fonction utilisant les touches du clavier et permettant de tirer avec la touche espace
          */
          keyUpActionHandler(event) {
              switch (event.keyCode) {

                 case 38:
                      this.starship.stopMoving();
                      break;

                  case 40:
                      this.starship.stopMoving();
                      break;

                  default: return;
              }
              event.preventDefault();
          }



}


export default Game;
