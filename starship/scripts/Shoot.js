import Mobile from "./Mobile";
import theGame from "./main";
import Starship from "./Starship.js";
import Saucer from "./Saucer.js";


export default class Shoot extends Mobile{


    constructor(x,y,deltax=8,deltay=0){
        super(x,y,deltax,deltay,"assets/images/tir.png");
        this.starship= theGame.starship;
        this.x = this.starship.x ;
        this.y = this.starship.y + 20 ;

    }



     killSoccur(soccurs){
       let val = false;
       let array = soccurs;
       soccurs.filter(soc => this.collisionWith(soc)).
        forEach((soc,i) => {
            this.killSoccurNoCible(soccurs);
            val= true;
            this.updateScore();
        });
        return val;
    }

    killSoccurNoCible(array){
      array.filter(soc => this.collisionWith(soc)).
       forEach((soc,i) => {
           soc.deltax=0;
           soc.deltay=3;
       });
    }



    updateScore(){
          const sc = document.getElementById("score");
          theGame.score = theGame.score+300;
          sc.textContent = theGame.score;
     }





    collisionWith(obstacle){
      let P1 = {
              x: Math.max(obstacle.x, this.x),
              y: Math.max(obstacle.y, this.y),
            };
      let P2 = {
              x: Math.min(obstacle.x + obstacle.width, this.x + this.image.width),
              y: Math.min(obstacle.y + obstacle.height, this.y + this.image.height),
            };
      return P1.x < P2.x && P1.y < P2.y && obstacle.deltax != 0;
    }

}
