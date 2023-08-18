let block=document.getElementById("block")
let passage=document.getElementById("passage")
let character=document.getElementById("character")
let jumping=0;
let counter=0;


passage.addEventListener("animationiteration",()=>{
   let random = Math.random()*3;
   let top = (random*100)+150;
   passage.style.top= -(top) + "px";
   counter++;
});
setInterval(() => {
    let charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping==0){
    character.style.top=(charactertop+3)+"px"; 
}
//     let blockleft= parseInt(window.getComputedStyle(block)).getPropertyValue("left");
//     let passagetop= parseInt(window.getComputedStyle(passage)).getPropertyValue("top");
 //     let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

//     let cTop = - (500-charactertop);
//     if((charactertop>480)||((blockleft<20)&& (blockleft>-50)&& ( (cTop<holeTop) ||
// (cTop>passagetop+130)))) 

    if (charactertop>818) {
        alert("game over. Your Score is: "+ counter);
        character.style.top=100+"px";
        counter=0;
    }
},10);



function jump(){
    jumping=1;
    let jumpcount=0;
    let jumpinterval = setInterval(() => {
        let charactertop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if ((charactertop>6) && (jumpcount<15)) {
    character.style.top=(charactertop-5)+"px"; }
    if (jumpcount>20) {
        clearInterval(jumpinterval)
        jumping=0;
        jumpcount=0;
    }
    jumpcount++;
    }, 10);

}

