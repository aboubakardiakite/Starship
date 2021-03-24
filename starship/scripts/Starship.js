import Mobile from "./Mobile";
import MoveState from "./MoveState";

export default class Starship extends Mobile{


    constructor(x=40,y=200,deltax=0,deltay=8){
        super(x,y,deltax,deltay,"./assets/images/vaisseau-ballon-petit.png");
        this.moving =null;
    }

    get up(){
        return this.moving=== MoveState.UP;

    }

    get down(){
        return this.moving === MoveState.DOWN;
    }

    stopMoving(){
        this.moving=MoveState.NONE;
    }

    moveUp(){
        this.deltay=-8;
        this.moving = MoveState.UP;
    }
    moveDown(){
        this.deltay= 8;
        this.moving =MoveState.DOWN;
    }


    move(canvas) {

        let deplacement_y = this.y + this.deltay;
        if(deplacement_y>0 && deplacement_y < canvas.height -30){
            if(this.up || this.down){
                super.move();
            }

    }}






}
