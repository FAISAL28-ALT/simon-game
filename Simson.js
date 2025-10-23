let game_sq=[];
let user_sq=[];
let btn=["green", "yellow", "blue", "red"];
level=0;
start=false;
let h3=document.querySelector('h3');
document.addEventListener("keypress", function(){
   if(start==false){
    console.log("Game started")
    start=true;
    levelUp();
    buttonClick();
   }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash")
   },250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash")
   },250)
}
function levelUp(){
    user_sq=[];
    level++;
    h3.innerText=`Level ${level}`
    let random=Math.floor(Math.random()*4);
    let randomIndex=btn[random];
    let randombtn=document.querySelector(`.${randomIndex}`)
    game_sq.push(randomIndex)
    btnflash(randombtn)
}
function UserCheck(idx){
    if(user_sq[idx]===game_sq[idx]){
       if(user_sq.length==game_sq.length){
         setTimeout(levelUp, 1000);
       }
    }
    else{
        h3.innerHTML=`Game over! Your score was <b>${level}<b> <br> Press any key to restart the game..`
        reset();
    }
}
function UserClick(){
  let btn=this;
  let Id=btn.getAttribute('id')
  console.log(Id);
  user_sq.push(Id);
//   console.log(user_sq);
  userflash(btn)
  UserCheck(user_sq.length-1);
}
function buttonClick(){
let Allbtns=document.querySelectorAll(".btn");
for(btns of Allbtns){
    btns.addEventListener("click", UserClick)
}
}
function reset(){
    level=0;
    start=false;
    user_sq=[];
    game_sq=[];
}
