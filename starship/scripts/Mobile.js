export default class Mobile{



    constructor(x,y,deltax=0,deltay=0,src="./assets/images/flyingSaucer-petit.png"){
        this.x=x;
        this.y=y;
        this.deltax=deltax;
        this.deltay=deltay;
        this.image = new Image();
        this.image.src=src;

    }

    draw(context){
              context.drawImage(this.image,this.x, this.y);

    }

    

    get width(){
       return this.image.width;
    }

    get height(){
       return this.image.height;
    }

    move(){
         this.x= this.x + this.deltax;
         this.y=this.y + this.deltay;

    }




}
