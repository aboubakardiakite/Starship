import Game from "./Game";
/*
const starship = new Starship();
const canvas= document.getElementById("stars");
const game = new Game(canvas,starship);
const context = canvas.getContext("2d");*/
const canvas  = document.getElementById("stars");
const theGame = new Game(canvas);;
let bton = true

export default theGame;




// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {
                let bton = true;
                let context = canvas.getContext("2d");
                window.addEventListener('keydown', theGame.keyDownActionHandler.bind(theGame));
                window.addEventListener('keyup', theGame.keyUpActionHandler.bind(theGame));

                const buttonAddSoucoupe = document.getElementById("nouvelleSoucoupe");
                buttonAddSoucoupe.addEventListener('click',()=>{
                    theGame.addSaucer();

                    getBlur();
                })



                function getBlur() {
                  document.getElementById("nouvelleSoucoupe").blur();
                }
                const flotteSoucoupes = document.getElementById('flotteSoucoupes');

                flotteSoucoupes.addEventListener('click',()=>{

                    if(bton){
                      theGame.flooteOn();
                      bton=false
                    }else{
                      theGame.flooteOff();
                      bton=true;
                    }
                    get1Blur();


                })

                function get1Blur() {
                  document.getElementById("flotteSoucoupes").blur();
                }



                theGame.start();
                theGame.gameOver();








}


window.addEventListener("load",init);

//
console.log('le bundle a été généré');
