

import Mobile from './Mobile';
export default class Soucer extends Mobile{

    constructor(x,y,src="./assets/images/flyingSaucer-petit.png"){
        super(x,y,-3,0,src);
        this.moving =null;
    }

    move(){
         super.move();
    }

}
